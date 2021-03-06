from flask import render_template, redirect, request, url_for, flash, json, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from . import api
from ..models import User,UsedBy,WalletType, Person,Account, ExchangeTypeUrl,Ticker,ExchangeMarket, OrderPaymentDetail,CurrencyType,Order,WalletPaymentDetail,TransactionTypeEnum,StatusEnum, ExchangeTypeEnum
from app.Util.utility import Utility as util
from app import db
import datetime, time,calendar
import hashlib
import base64,requests, hmac
import hmac

@api.route('/get_deposit_modal',methods=['GET', 'POST'])
@login_required
def deposit_modal():
    if request.method == "POST":
        currencyTypeList = util.currency_type_by_method_dropdown_list()
        marketTypeList = util.market_type_dropdown_list()
        exchangeTypeList = util.exchange_type_dropdown_list()
        return render_template('partial/admin/getdeposit.html',marketTypeList=marketTypeList,currencyTypeList=currencyTypeList, exchangeTypeList=exchangeTypeList)


@api.route('/depo_with_history', methods=['GET', 'POST'])
@login_required
def depo_with_history():
    if request.method == "POST":
        nonce = request.form['nonce']
        currency = request.form['currency']
        exchange = int(request.form['exchange'])
        if exchange == ExchangeTypeEnum.BITFINEX:
            exchangetype = 'Bitfinex'
        else:
            exchangetype = 'Bitrex'
        account = Account.query.filter_by(user_id=current_user.id).first()
        apiKey = account.api_key
        apiSecret = bytes(account.api_secret_key)
        baseUrl = 'https://api.bitfinex.com'
        url = '/v1/history/movements'
        completeURL = baseUrl + url
        bodybalance = {
            'request': url,
            'nonce': nonce,
            'currency': currency
        }
        jsonifideBody = json.dumps(bodybalance)
        payLoad = base64.b64encode(bytes(jsonifideBody))
        signaturebalance = hmac.new(key=apiSecret, msg=payLoad, digestmod=hashlib.sha384).hexdigest()
        headers = {'X-BFX-APIKEY': apiKey,
                   'X-BFX-PAYLOAD': payLoad,
                   'X-BFX-SIGNATURE': signaturebalance}
        histories = requests.post(completeURL, headers=headers)
        if histories:
            try:
                histories = json.loads(histories.content)
                withdrawalList = []
                for history in histories:
                    id = str(history['id'])
                    walletPaymentDetail = WalletPaymentDetail.query.filter_by(withdrawal_id=id).first()
                    if walletPaymentDetail is not None:
                        history['flag'] = str(UsedBy.Internal)
                        history['date'] = str(datetime.datetime.fromtimestamp(float(history['timestamp_created'])).date())
                        history['time'] = str(datetime.datetime.fromtimestamp(float(history['timestamp_created'])).time())
                        withdrawalList.append(history)
                    else:
                        history['flag'] = str(UsedBy.External)
                        history['date'] = str(datetime.datetime.fromtimestamp(float(history['timestamp_created'])).date())
                        history['time'] = str(datetime.datetime.fromtimestamp(float(history['timestamp_created'])).time())
                        withdrawalList.append(history)
                withdrawalList=sorted(withdrawalList, key=lambda item: item['type'])
                return render_template('partial/admin/getWithdralHistory.html',withdrawalList=withdrawalList,currency= currency,exchangetype=exchangetype)
            except Exception as e:
                return e
        else:
            return 'False'
    currencyTypeList = util.currency_type_by_method_dropdown_list()
    marketTypeList = util.market_type_dropdown_list()
    exchangeTypeList = util.exchange_type_dropdown_list()
    return render_template('auth/admin/history.html', marketTypeList=marketTypeList,
                           currencyTypeList=currencyTypeList, exchangeTypeList=exchangeTypeList, ExchangeTypeEnum=ExchangeTypeEnum)




@api.route('/get_withdrawal_modal',methods=['GET', 'POST'])
@login_required
def withdraw_modal():
    if request.method == "POST":
        currencyTypeList = util.currency_type_by_method_dropdown_list()
        marketTypeList = util.market_type_dropdown_list()
        exchangeTypeList = util.exchange_type_dropdown_list()
        walletTypeList = util.wallet_type_dropdown_list()
        return render_template('partial/admin/getwithdrawal.html',marketTypeList=marketTypeList,currencyTypeList=currencyTypeList, exchangeTypeList=exchangeTypeList,walletTypeList=walletTypeList)

@api.route('/bitfinex_deposit', methods=['GET', 'POST'])
@login_required
def deposit():
    if request.method == "POST":
        exchangetype = request.form['exchangetype']
        currencytype = request.form['currencytype']
        renew = int(request.form['renew'])
        nonce = request.form['nonce']
        account = Account.query.filter_by(user_id=current_user.id).first()
        current_method = CurrencyType.query.filter_by(id=currencytype).first()
        if account is not None:
            try:
                apiKey = account.api_key
                apiSecret = bytes(account.api_secret_key)
                baseUrl = 'https://api.bitfinex.com'
                url = '/v1/deposit/new'
                completeURL = baseUrl + url
                body ={
                    "request": url,
                    "nonce": nonce,
                    "method": current_method.method,
                    "wallet_name": "exchange",
                    "renew": renew
                }
                jsonifideBody = json.dumps(body)
                payload = base64.b64encode(bytes(jsonifideBody))

                #payload = json.dumps(body).encode('base64')
                signature = hmac.new(key=apiSecret, msg=payload, digestmod=hashlib.sha384).hexdigest()

                # signature = hashlib.sha384(account.api_key).update(payload).digest('hex')
                header = {
                    'X-BFX-APIKEY': apiKey,
                    'X-BFX-PAYLOAD': payload,
                    'X-BFX-SIGNATURE': signature
                }
                data = requests.post(completeURL, headers=header)
                if data:
                    return data.content
                else:
                    return "False"
            except Exception as e:
                return "Error occured! "+e.message
            return check
        else:
             return "True"

    return "false"

# @api.route('/get_withdrawal_history',methods=['GET', 'POST'])
# @login_required
# def withdraw_history():
#     if request.method == "POST":
#         nonce = request.form['nonce']
#         dithexchangetype = request.form['dithexchangetype']


@api.route('/bitfinex_withdrawal', methods=['GET', 'POST'])
@login_required
def withdraw():
    if request.method == "POST":
        dithexchangetype = request.form['dithexchangetype']
        withcurrencytype = request.form['withcurrencytype']
        amount = request.form['amount']
        walletaddress = request.form['walletaddress']
        nonce = request.form['nonce']
        nonce2 = request.form['nonce2']
        withwallettype = request.form['withwallettype']
        account = Account.query.filter_by(user_id=current_user.id).first()
        current_method = CurrencyType.query.filter_by(id=withcurrencytype).first()
        if account is not None:
            try:
                walletType = WalletType.query.filter_by(id=withwallettype).first()
                apiKey = account.api_key
                apiSecret = bytes(account.api_secret_key)
                baseUrl = 'https://api.bitfinex.com'
                url = '/v1/withdraw'
                completeURL = baseUrl + url
                body ={
                    "request": url,
                    "withdraw_type": current_method.method,
                    "walletselected": walletType.wallet_type_name,
                    "amount":amount,
                    "address": walletaddress,
                    "nonce": nonce
                }
                jsonifideBody = json.dumps(body)
                payload = base64.b64encode(bytes(jsonifideBody))
                # payload = json.dumps(body).encode('base64')
                signature = hmac.new(key=apiSecret, msg=payload, digestmod=hashlib.sha384).hexdigest()
                header = {
                    'X-BFX-APIKEY': apiKey,
                    'X-BFX-PAYLOAD': payload,
                    'X-BFX-SIGNATURE': signature
                }
                reponse = requests.post(completeURL, headers=header)
                if reponse:
                    try:
                        data = json.loads(reponse.content)
                        if data[0]['status'] == 'success':

                            newurl = '/v1/history/movements'
                            completUrl = baseUrl + newurl

                            bodybalance = {
                                    'request': newurl,
                                    'nonce': nonce2,
                                    'currency': current_method.description
                                    }
                            jsonifideBody = json.dumps(bodybalance)
                            payLoad = base64.b64encode(bytes(jsonifideBody))
                            signaturebalance = hmac.new(key=apiSecret, msg=payLoad, digestmod=hashlib.sha384).hexdigest()
                            headers = {'X-BFX-APIKEY': apiKey,
                                    'X-BFX-PAYLOAD': payLoad,
                                    'X-BFX-SIGNATURE': signaturebalance}
                            histories = requests.post(completUrl, headers=headers)
                            if histories:
                                histories= json.loads(histories.content)
                                for history in histories:
                                    if history['id'] == data[0]['withdrawal_id']:
                                        historydata = history

                                withdrawalDetail = WalletPaymentDetail()
                                withdrawalDetail.date_time = datetime.datetime.now()
                                withdrawalDetail.amount = amount
                                withdrawalDetail.exchange_type_id = dithexchangetype
                                withdrawalDetail.payment_status = data[0]['status']
                                withdrawalDetail.transaction_type = TransactionTypeEnum.WITHDRAW
                                withdrawalDetail.withdrawal_id = data[0]['withdrawal_id']
                                withdrawalDetail.transaction_fee = historydata['fee']
                                withdrawalDetail.method = historydata['method']
                                withdrawalDetail.currency = historydata['currency']
                                withdrawalDetail.address = historydata['address']
                                withdrawalDetail.description = historydata['description']
                                withdrawalDetail.transactionId = historydata['txid']
                                db.session.add(withdrawalDetail)
                                db.session.commit()
                            return reponse.content
                        else:
                            return reponse.content
                    except Exception as e:
                        db.session.rollback()
                        return e
                else:
                    return "False"
            except Exception as e:
                return "Error occured! "+e.message

        else:
             return "True"

    return "False"
@api.route('/place-new-order', methods=['POST'])
def placeNewOrder():
    if request.method == 'POST':

        orderId =request.form['orderId']
        nonce = request.form['nonce']


        order=Order.query.filter_by(id=orderId).first()
        api_key=order.account.api_key
        api_secret_key=bytes(order.account.api_secret_key)
        url='/v1/order/new'
        nonce=nonce
        completeUrl='https://api.bitfinex.com'+url
        symbol=order.currencytype.symbol.upper()
        marketType=order.markettype.description.upper()


        body={'request':url,
              'nonce':nonce,
              'symbol': symbol+marketType,
              'amount': str(order.currency_amount),
              'price': str(order.price),
              'exchange':order.exchange_type.description.lower(),
              'side': order.transactionstatus.description.lower(),
              'type': order.market_exchange.lower()
              }
        jsonifideBody=json.dumps(body)
        payLoad=base64.b64encode(bytes(jsonifideBody))

        signature = hmac.new(key=api_secret_key,msg=payLoad, digestmod=hashlib.sha384).hexdigest()

        headers = {'X-BFX-APIKEY': api_key,
                   'X-BFX-PAYLOAD':payLoad,
                   'X-BFX-SIGNATURE':signature}
        data = requests.post(completeUrl,headers=headers)
        if data:
            try:

                json_object = json.loads(data.content)
                order.status=StatusEnum.RUNNING.value
                db.session.add(order)
                db.session.flush()

                orderPaymentDetail= OrderPaymentDetail.query.filter_by(order_id=order.id).first()
                orderPaymentDetail.original_amount=json_object['original_amount']
                orderPaymentDetail.remaining_amount=json_object['remaining_amount']
                orderPaymentDetail.executed_amount=json_object['executed_amount']
                orderPaymentDetail.date_time=datetime.datetime.now()
                orderPaymentDetail.is_cancelled=json_object['is_cancelled']
                orderPaymentDetail.is_live=json_object['is_live']
                orderPaymentDetail.uuid=json_object['order_id']
                db.session.add(orderPaymentDetail)
                db.session.commit()
                return "true"
            except Exception as e:
                db.session.rollback()
        else:
            json_object = json.loads(data.content)
            return json_object['message']


