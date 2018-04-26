
from flask import render_template, redirect, request, url_for, flash, json, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from ..models import User, Person,Account, Ticker, CurrencyType,Order,ExchangeTypeUrl,Wallet
from app.Util.utility import Utility as util
from app import db
import datetime
import hashlib
import base64,requests
import hmac

class Accountlogic:
    #singleton
    def __init__(self):
        pass



    def getAccountDetailForBitfinex(self,apiKey,secreteKey,dateValue,exchangeType):
        nonce = dateValue
        api_key=apiKey
        api_secret_key=bytes(secreteKey)
        url='/v1/balances'

        completeUrl=ExchangeTypeUrl.BITFINEX.value+url

        body={'request':url,
              'nonce':nonce
              # 'symbol': 'BTCUSD',
              # 'amount': order.currency_amount,
              # 'price': order.price,
              # 'exchange':order.exchange_type.description.lower(),
              # 'side': order.transaction_status,
              # 'type': 'exchange market'
              }
        jsonifideBody=json.dumps(body)
        payLoad=base64.b64encode(bytes(jsonifideBody))

        signature = hmac.new(key=api_secret_key,msg=payLoad, digestmod=hashlib.sha384).hexdigest()

        headers = {'X-BFX-APIKEY': api_key,
                   'X-BFX-PAYLOAD':payLoad,
                   'X-BFX-SIGNATURE':signature}
        data = requests.post(completeUrl,headers=headers)
        if data:
            print(data.content)
            json_object = json.loads(data.content)
            try:
                account = Account()
                account.api_key = apiKey
                account.user_id = current_user.id
                account.api_secret_key = secreteKey
                account.exchange_type_id = exchangeType
                db.session.add(account)
                db.session.flush()
                for walletObject in json_object:
                    wallet = Wallet()
                    currency = walletObject['currency']
                    wallet.total_amount = walletObject['amount']
                    wallet.available_amount = walletObject['available']
                    wallet.exchange_type_id = exchangeType
                    wallet.account_id = account.id
                    currencyType = CurrencyType.query.filter_by(symbol=currency.upper()).first()
                    wallet.currency_type = currencyType.id
                    db.session.add(wallet)
                    db.session.commit()
            except Exception as e:
                raise e.message
            return True
        else:

            return False

    def updateAccountDetailForBitfinex(self,apiKey,secreteKey,dateValue,exchangeType,accountUser=Account()):
        nonce = dateValue
        api_key=apiKey
        api_secret_key=bytes(secreteKey)
        url='/v1/balances'

        completeUrl=ExchangeTypeUrl.BITFINEX.value+url

        body={'request':url,
              'nonce':nonce
              # 'symbol': 'BTCUSD',
              # 'amount': order.currency_amount,
              # 'price': order.price,
              # 'exchange':order.exchange_type.description.lower(),
              # 'side': order.transaction_status,
              # 'type': 'exchange market'
              }
        jsonifideBody=json.dumps(body)
        payLoad=base64.b64encode(bytes(jsonifideBody))

        signature = hmac.new(key=api_secret_key,msg=payLoad, digestmod=hashlib.sha384).hexdigest()

        headers = {'X-BFX-APIKEY': api_key,
                   'X-BFX-PAYLOAD':payLoad,
                   'X-BFX-SIGNATURE':signature}
        data = requests.post(completeUrl,headers=headers)
        if data:
            print(data.content)
            json_object = json.loads(data.content)
            try:
                walletList=Wallet.query.filter_by(account_id=accountUser.id).all()
                if(len(walletList)!=len(json_object)):
                    for wallet in walletList:
                        db.session.delete(wallet)
                    for walletObject in json_object:
                        wallet = Wallet()
                        currency = walletObject['currency']
                        wallet.total_amount = walletObject['amount']
                        wallet.available_amount = walletObject['available']
                        wallet.exchange_type_id = exchangeType
                        wallet.account_id = accountUser.id
                        currencyType = CurrencyType.query.filter_by(symbol=currency.upper()).first()
                        wallet.currency_type = currencyType.id
                        db.session.add(wallet)
                        db.session.commit()
                else:
                    for i in range(len(walletList)):
                        wallet=walletList[i]
                        currency = json_object[i]['currency']
                        wallet.total_amount = json_object[i]['amount']
                        wallet.available_amount = json_object[i]['available']
                        wallet.exchange_type_id = exchangeType
                        wallet.account_id = accountUser.id
                        currencyType = CurrencyType.query.filter_by(symbol=currency.upper()).first()
                        wallet.currency_type = currencyType.id
                        db.session.add(wallet)
                        db.session.commit()
            except Exception as e:
                db.session.rollback()
                raise e.message
            return True
        else:

            return False
