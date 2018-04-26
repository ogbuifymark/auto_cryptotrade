from ..models import  Order,OrderPaymentDetail,ExchangeType,StatusEnum,OrderTypeEnum,TransactionStatusEnum,\
    ExchangeTypeEnum,BackgroundSchedule


from apscheduler.schedulers.background import BackgroundScheduler
from app import db

import  apscheduler
import  sys
import  time
import datetime
import hashlib
import base64,requests, hmac
import hmac
from flask import render_template, redirect, request, url_for, flash, json, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from ..Util.utility import  Utility

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://venus:venus@localhost/Autopilot'
sql = SQLAlchemy()

def performBitfinexTask():
    with app.app_context():
        sql.init_app(app)
        orderPaymentList=OrderPaymentDetail.query.filter_by(status="Pending",order_type=OrderTypeEnum.MULTIPLE.value,
                                                            exchange_type=ExchangeTypeEnum.BITFINEX.value).all()
    if orderPaymentList:
        for orderPayment in orderPaymentList:
           msg =placeOrderBitfinex(orderPayment)
           if msg:
                continue
    print("====Bitfinex Task Done======")
    return True


def performBittrexTask():
    # with app.app_context():
    #     sql.init_app(app)
    #     orderPaymentList=OrderPaymentDetail.query.filter_by(status="Pending",order_type=OrderTypeEnum.MULTIPLE.value,
    #                                                         exchange_type=ExchangeTypeEnum.BITTREX.value).all()
    # if orderPaymentList:
    #
    #     bittrexcount=0
    #     bittrexList=[]
    #     for order in orderPaymentList:
    #         if order.exchangetype.id==ExchangeTypeEnum.BITTREX.value:
    #             bittrexcount+=1
    #             if(bittrexcount==1):
    #                 msg=chekTickerBittrex(True,order)
    #                 if msg:
    #                     bittrexList.append(order)
    #             else:
    #                 msg =chekTickerBittrex(False,order)
    #                 if msg:
    #                     bittrexList.append(order)

    print("====Bittrex Task Done======")
    #process the buy and sell
    return True






def updateTask():
    print("======Update task activated successfully=====")
    with app.app_context():
        sql.init_app(app)
        orderPaymentListBitfinex=OrderPaymentDetail.query.filter_by(status=StatusEnum.ACTIVATED.value,order_type=OrderTypeEnum.MULTIPLE.value,
                                                            exchange_type=ExchangeTypeEnum.BITFINEX.value).all()
        orderPaymentListBittrex = OrderPaymentDetail.query.filter_by(status=StatusEnum.ACTIVATED.value,
                                                              order_type=OrderTypeEnum.MULTIPLE.value,
                                                              exchange_type=ExchangeTypeEnum.BITTREX.value).all()
    if orderPaymentListBitfinex:

        for orderPayment in orderPaymentListBitfinex:
           msg =updateOrderBitfinex(orderPayment)
           if msg:
                continue
    # if orderPaymentListBittrex:
    #     for orderPayment in orderPaymentListBittrex:
    #         msg=updateOrderBittrex(orderPayment)
    #         if msg:
    #             continue


    return True

def updateOrderBitfinex(orderPaymentDetail=OrderPaymentDetail()):
    date_now = time.mktime(datetime.datetime.now().timetuple())
    date = str(date_now).index('.')
    sub_string_date = str(date_now)[0:date]
    nonce = sub_string_date + "000"
    order = orderPaymentDetail.orders
    api_key = order.account.api_key
    api_secret_key = bytes(order.account.api_secret_key)
    url = '/v1/order/status'
    nonce = nonce
    completeUrl = 'https://api.bitfinex.com' + url


    body = {'request': url,
            'nonce': nonce,
            'order_id': long(orderPaymentDetail.uuid)
            }
    jsonifideBody = json.dumps(body)
    payLoad = base64.b64encode(bytes(jsonifideBody))

    signature = hmac.new(key=api_secret_key, msg=payLoad, digestmod=hashlib.sha384).hexdigest()

    headers = {'X-BFX-APIKEY': api_key,
               'X-BFX-PAYLOAD': payLoad,
               'X-BFX-SIGNATURE': signature}
    data = requests.post(completeUrl, headers=headers)
    if data:
        try:
            print(data.content)
            json_object = json.loads(data.content)
            if float(json_object['original_amount'])==float(json_object['executed_amount']):
                orderPaymentDetail.original_amount = json_object['original_amount']
                orderPaymentDetail.remaining_amount = json_object['remaining_amount']
                orderPaymentDetail.executed_amount = json_object['executed_amount']
                orderPaymentDetail.is_cancelled = json_object['is_cancelled']
                orderPaymentDetail.is_live = json_object['is_live']
                orderPaymentDetail.uuid = json_object['id']
                orderPaymentDetail.status = StatusEnum.COMPLETED.value
                createNewOrder(orderPaymentDetail)
                db.session.add(orderPaymentDetail)
                db.session.commit()


            if  json_object['is_cancelled']:
                orderPaymentDetail.is_cancelled = True
                orderPaymentDetail.is_live = False
                orderPaymentDetail.status=StatusEnum.CANCELLED.value
                db.session.add(orderPaymentDetail)
                db.session.commit()
                #send email that order has been cancelled

            return True
        except Exception as e:
            db.session.rollback()
    return False




def updateOrderBittrex(orderPaymentDetail=OrderPaymentDetail()):
    nonce = request.form['nonce']
    order = orderPaymentDetail.orders
    api_key = order.account.api_key
    api_secret_key = bytes(order.account.api_secret_key)
    url = '/v1/order/new'
    nonce = nonce
    completeUrl = 'https://api.bitfinex.com' + url
    symbol = order.currencytype.symbol.upper()
    marketType = order.markettype.description.upper()
    if orderPaymentDetail.transaction_status == TransactionStatusEnum.BUY.value:
        price = order.tickers_min
    else:
        price = order.tickers_max

    body = {'request': url,
            'nonce': nonce,
            'symbol': symbol + marketType,
            'amount': str(order.currency_amount),
            'price': str(price),
            'exchange': order.exchange_type.description.lower(),
            'side': order.transactionstatus.description.lower(),
            'type': order.market_exchange.lower()
            }
    jsonifideBody = json.dumps(body)
    payLoad = base64.b64encode(bytes(jsonifideBody))

    signature = hmac.new(key=api_secret_key, msg=payLoad, digestmod=hashlib.sha384).hexdigest()

    headers = {'X-BFX-APIKEY': api_key,
               'X-BFX-PAYLOAD': payLoad,
               'X-BFX-SIGNATURE': signature}
    data = requests.post(completeUrl, headers=headers)
    if data:
        try:
            json_object = json.loads(data.content)
            if float(json_object['original_amount'])==float(json_object['executed_amount']):
                orderPaymentDetail.original_amount = json_object['original_amount']
                orderPaymentDetail.remaining_amount = json_object['remaining_amount']
                orderPaymentDetail.executed_amount = json_object['executed_amount']
                orderPaymentDetail.is_cancelled = json_object['is_cancelled']
                orderPaymentDetail.is_live = json_object['is_live']
                orderPaymentDetail.uuid = json_object['order_id']
                orderPaymentDetail.status = StatusEnum.COMPLETED.value
                db.session.add(orderPaymentDetail)
                db.session.commit()
                createNewOrder(orderPaymentDetail)

            if  json_object['is_cancelled']:
                orderPaymentDetail.is_cancelled = True
                orderPaymentDetail.is_live = False
                orderPaymentDetail.status=StatusEnum.CANCELLED.value
                db.session.add(orderPaymentDetail)
                db.session.flush()
                order=orderPaymentDetail.orders
                order.status=StatusEnum.CANCELLED.value
                db.session.add(order)
                db.session.commit()
                #send email that order has been cancelled

            return True
        except Exception as e:
            db.session.rollback()
    return False


def createNewOrder(orderPayment=OrderPaymentDetail()):

    orderPaymentDetail=OrderPaymentDetail()
    if orderPayment.transaction_status==TransactionStatusEnum.BUY.value:
        transaction_status=TransactionStatusEnum.SELL.value
    else:
        transaction_status=TransactionStatusEnum.BUY.value

    try:
        orderPaymentDetail.original_amount = orderPayment.original_amount
        orderPaymentDetail.is_cancelled = False
        orderPaymentDetail.is_live = False
        orderPaymentDetail.status = "Pending"
        orderPaymentDetail.account_id=orderPayment.account_id
        orderPaymentDetail.order_ref=orderPayment.order_ref
        orderPaymentDetail.order_id=orderPayment.order_id
        orderPaymentDetail.exchange_type=orderPayment.exchange_type
        orderPaymentDetail.date_time=datetime.datetime.now()
        orderPaymentDetail.order_type=OrderTypeEnum.MULTIPLE.value
        orderPaymentDetail.transaction_status=transaction_status
        db.session.add(orderPaymentDetail)
        db.session.commit()

    except Exception as e:
        db.session.rollback()

    return True




def placeOrderBitfinex( orderPaymentDetail = OrderPaymentDetail()):
    date_now = time.mktime(datetime.datetime.now().timetuple())
    date = str(date_now).index('.')
    sub_string_date = str(date_now)[0:date]
    nonce = sub_string_date + "000"
    order=orderPaymentDetail.orders
    api_key = order.account.api_key
    api_secret_key = bytes(order.account.api_secret_key)
    url = '/v1/order/new'
    completeUrl = 'https://api.bitfinex.com' + url
    symbol = order.currencytype.symbol.upper()
    marketType = order.markettype.description.upper()
    if orderPaymentDetail.transaction_status == TransactionStatusEnum.BUY.value:
        price =order.tickers_min
    else:
        price=order.tickers_max

    body = {'request': url,
            'nonce': nonce,
            'symbol': symbol + marketType,
            'amount': str(order.currency_amount),
            'price': str(price),
            'exchange': order.exchange_type.description.lower(),
            'side': orderPaymentDetail.transactionstatus.description.lower(),
            'type': order.market_exchange.lower()
            }
    jsonifideBody = json.dumps(body)
    payLoad = base64.b64encode(bytes(jsonifideBody))

    signature = hmac.new(key=api_secret_key, msg=payLoad, digestmod=hashlib.sha384).hexdigest()

    headers = {'X-BFX-APIKEY': api_key,
               'X-BFX-PAYLOAD': payLoad,
               'X-BFX-SIGNATURE': signature}
    data = requests.post(completeUrl, headers=headers)
    if data:
        try:
            json_object = json.loads(data.content)
            orderPaymentDetail.original_amount = json_object['original_amount']
            orderPaymentDetail.remaining_amount = json_object['remaining_amount']
            orderPaymentDetail.executed_amount = json_object['executed_amount']
            orderPaymentDetail.date_time = datetime.datetime.now()
            orderPaymentDetail.is_cancelled = json_object['is_cancelled']
            orderPaymentDetail.is_live = json_object['is_live']
            orderPaymentDetail.uuid = json_object['order_id']
            orderPaymentDetail.status=StatusEnum.ACTIVATED.value
            db.session.add(orderPaymentDetail)
            db.session.commit()
            return True
        except Exception as e:
            db.session.rollback()
    return  False




class BitfinexTradeLogic:

    def cancelTrade(self,order=Order()):
        try:
            orderPaymentDetail = OrderPaymentDetail.query.filter_by(order_id=order.id).all()
            if orderPaymentDetail and orderPaymentDetail is not None:
                orderPaymentObject=orderPaymentDetail[len(orderPaymentDetail)-1]
                order.status=StatusEnum.CANCELLED.value
                db.session.add(order)
                db.session.flush()
                orderPaymentObject.status=StatusEnum.CANCELLED.value
                db.session.add(orderPaymentObject)
                db.session.commit()
        except Exception as e:
            db.session.rollback()
            return "Error occured! " + e.message
        return True




    def activateOrder(self,order=Order()):
        try:
            order.status = StatusEnum.ACTIVATED.value
            db.session.add(order)
            db.session.flush()
            orderPaymentDetail = OrderPaymentDetail()
            orderPaymentDetail.order_ref = order.order_ref
            orderPaymentDetail.original_amount =order.currency_amount
            orderPaymentDetail.date_time = datetime.datetime.now()
            orderPaymentDetail.order_id = order.id
            orderPaymentDetail.transaction_status=TransactionStatusEnum.BUY.value
            orderPaymentDetail.is_cancelled = False
            orderPaymentDetail.order_type = OrderTypeEnum.MULTIPLE.value
            orderPaymentDetail.is_live = False
            orderPaymentDetail.exchange_type=order.exchange_type_id
            orderPaymentDetail.account_id = order.wallet.account_id
            orderPaymentDetail.status="Pending"
            db.session.add(orderPaymentDetail)
            db.session.commit()
        except Exception as e:
            db.session.rollback()





    def tradeEngine(self,checkJobStatus,order=Order()):


        if(checkJobStatus):

            scheduler = BackgroundScheduler()
            url = sys.argv[1] if len(sys.argv) > 1 else 'sqlite:///jobs.sqlite'
            scheduler.add_jobstore('sqlalchemy', url=url)
            scheduler.start()
            jobs = scheduler.get_jobs()
            if len(jobs)==0:
                return "Trading has been suspended till further notice"
            if order.exchange_type_id == ExchangeTypeEnum.BITFINEX.value:
                msg=False
                for jobObj in jobs:
                    if jobObj.id == ExchangeTypeEnum.BITFINEXVALUE.value:
                            msg = True
                            break
                if not msg:
                    return "Trading has been suspended till further notice"

        if order.exchange_type_id == ExchangeTypeEnum.BITTREX.value:
            msg = False
            for jobObj in jobs:
                if jobObj.id == ExchangeTypeEnum.BITTREXVALUE.value:
                    msg = True
                    break
            if not msg:
                return "Trading has been suspended till further notice"

        self.activateOrder(order)
        return True




    def removeJob(self, jobScheduler=BackgroundSchedule()):
        scheduler = BackgroundScheduler()
        url = sys.argv[1] if len(sys.argv) > 1 else 'sqlite:///jobs.sqlite'
        scheduler.add_jobstore('sqlalchemy', url=url)
        scheduler.start()
        jobs=scheduler.get_jobs()
        msg=False
        if len(jobs)!=0:
            for jobObj in jobs:
                if jobObj.id==jobScheduler.job:
                    try:
                        scheduler.remove_job(job_id=jobScheduler.job)
                        jobScheduler.status=StatusEnum.STOPPED.value
                        db.session.add(jobScheduler)
                        db.session.commit()
                        msg=True
                        break
                    except Exception as e:
                        db.session.rollback()
        if len(scheduler.get_jobs()) ==0:
            print("=========Backgroundtask closed==============")
            scheduler.shutdown
        return msg




    def addJob(self, jobScheduler=BackgroundSchedule()):
        scheduler = BackgroundScheduler()
        url = sys.argv[1] if len(sys.argv) > 1 else 'sqlite:///jobs.sqlite'
        scheduler.add_jobstore('sqlalchemy', url=url)
        if jobScheduler.job ==ExchangeTypeEnum.BITFINEXVALUE.value:
            scheduler.add_job(performBitfinexTask, 'interval', seconds=jobScheduler.interval, id=jobScheduler.job)
        elif jobScheduler.job==ExchangeTypeEnum.BITTREXVALUE.value:
            scheduler.add_job(performBittrexTask, 'interval', seconds=jobScheduler.interval, id=jobScheduler.job)
        elif jobScheduler.job=="updatetask":
            scheduler.add_job(updateTask, 'interval', seconds=jobScheduler.interval, id=jobScheduler.job)
        scheduler.start()
        jobs=scheduler.get_jobs()
        msg=False
        if len(jobs)!=0:
                try:
                    jobScheduler.status=StatusEnum.ACTIVATED.value
                    db.session.add(jobScheduler)
                    db.session.commit()
                    msg=True
                except Exception as e:
                    db.session.rollback()
        return msg






