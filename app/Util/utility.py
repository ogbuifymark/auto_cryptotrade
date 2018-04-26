__author__ = 'ugochukwu'

from app.models import ExchangeType,MarketType,CurrencyType,TransactionStatus, WalletType
from datetime import datetime
from ..models import Ticker,Order,ExchangeMarket
from flask_login import login_user, logout_user, login_required, current_user
import app
import numpy as np
import string, sendgrid,os
from sendgrid.helpers.mail import *



class SelectListItem:
    def __init__(self):
        pass
    value = ''
    text = ''


class Utility:

    def __init__(self):
        self.lastPrice=''
        pass

    @staticmethod
    def sendgrid(email_to, email_subject, email_html):
        sg = sendgrid.SendGridAPIClient(
            apikey="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")
        data = {
            "personalizations": [
                {
                    "to": [
                        {
                            "email": email_to
                        }
                    ],
                    "subject": email_subject
                }
            ],
            "from": {
                "email": "ogbuifymark@gmail.com"
            },
            "content": [
                {
                    "type": "text/html",
                    "value": email_html
                }
            ]
        }
        response = sg.client.mail.send.post(request_body=data)
        if response.status_code == 401:
            return 'An error occurred: {}'.format(response.body), 500
        return response
    @staticmethod
    @login_required
    def exchange_type_dropdown_list():
        exchangeTypes = ExchangeType.query.order_by(ExchangeType.id).all()
        selectListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = 'Select ExchangeType'
        selectListItemList.append(selectItem)
        for exchangeType in exchangeTypes:
            selectListItem = SelectListItem()
            selectListItem.text = exchangeType.description
            selectListItem.value = exchangeType.id
            selectListItemList.append(selectListItem)
        return selectListItemList

    @staticmethod
    @login_required
    def wallet_type_dropdown_list():
        wallettypes = WalletType.query.order_by(WalletType.id).all()
        selectListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = '-- Select WalletType --'
        selectListItemList.append(selectItem)
        for wallettype in wallettypes:
            selectListItem = SelectListItem()
            selectListItem.text = wallettype.wallet_type_name
            selectListItem.value = wallettype.id
            selectListItemList.append(selectListItem)
        return selectListItemList



    @staticmethod
    @login_required
    def market_type_dropdown_list():
        marketTypes = MarketType.query.all()
        selectListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = '-- Select MarketType --'
        selectListItemList.append(selectItem)
        for marketType in marketTypes:
            selectListItem = SelectListItem()
            selectListItem.text = marketType.description
            selectListItem.value = marketType.id
            selectListItemList.append(selectListItem)
        return selectListItemList


    @staticmethod
    @login_required
    def currency_type_dropdown_list():
        currencyTypes = CurrencyType.query.all()
        selectListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = '-- Select CurrencyType --'
        selectListItemList.append(selectItem)
        for currencyType in currencyTypes:
            selectListItem = SelectListItem()
            selectListItem.text = currencyType.description
            selectListItem.value = currencyType.id
            selectListItemList.append(selectListItem)
        return selectListItemList

    @staticmethod
    @login_required
    def exchange_market_enum():
        selectListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = '-- Select Exchange Market --'
        selectListItemList.append(selectItem)
        selectItem = SelectListItem()
        selectItem.value = ExchangeMarket.EXCHANGELIMIT.value
        selectItem.text = ExchangeMarket.EXCHANGELIMIT.value
        selectListItemList.append(selectItem)
        selectItem = SelectListItem()
        selectItem.value = ExchangeMarket.EXCHANGEMARKET.value
        selectItem.text = ExchangeMarket.EXCHANGEMARKET.value
        selectListItemList.append(selectItem)
        return selectListItemList

    @staticmethod
    @login_required
    def currency_type_by_method_dropdown_list():
        currencyTypes = CurrencyType.query.filter(CurrencyType.method != None).all()
        selectListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = '-- Select CurrencyType --'
        selectListItemList.append(selectItem)
        for currencyType in currencyTypes:
            selectListItem = SelectListItem()
            selectListItem.text = currencyType.description
            selectListItem.value = currencyType.id
            selectListItemList.append(selectListItem)
        return selectListItemList

    @staticmethod
    @login_required
    def get_market_type_from_ticker():
        tickers = Ticker.query.filter_by(user_id=current_user.id).order_by(Ticker.id).all()
        tickersListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = '-- Select MarketType --'
        tickersListItemList.append(selectItem)
        for ticker in tickers:
            selectListItem = SelectListItem()
            selectListItem.text = ticker.markettype.description
            selectListItem.value = ticker.markettype.id
            tickersListItemList.append(selectListItem)
        return tickersListItemList

    @staticmethod
    @login_required
    def get_transaction_status():
        transaction_status = TransactionStatus.query.order_by(TransactionStatus.id).all()
        transactionStatusListItemList = []
        selectItem = SelectListItem()
        selectItem.value = ''
        selectItem.text = '-- Select Status --'
        transactionStatusListItemList.append(selectItem)
        for status in transaction_status:
            selectListItem = SelectListItem()
            selectListItem.text = status.description
            selectListItem.value = status.id
            transactionStatusListItemList.append(selectListItem)
        return transactionStatusListItemList

    @staticmethod
    @login_required
    def generate_order_refrence():
        check=True
        while check:
            length = 10
            orderRef = np.random.choice(list(string.ascii_uppercase + string.digits + string.ascii_lowercase), length)
            joinedRef=''.join(orderRef)
            order =Order.query.filter_by(order_ref=joinedRef).first()
            if order is  None:
                check=False
            else:
                check=True
        return  joinedRef






    @staticmethod
    def allowed_file(filename):
        return '.' in filename and str.lower(str(filename.rsplit('.', 1)[1])) in app.config['ALLOWED_EXTENSIONS']

    @staticmethod
    def build_filename(filename, person_schema_biodata):
        file_content = str.split(filename, '.')
        file_name = file_content[0]+'_'+person_schema_biodata['Surname']+'_'+person_schema_biodata['Firstname']+'.'+file_content[1]
        return file_name

    @staticmethod
    def build_passport_filename(filename, person_schema_biodata):
        file_content = str.split(filename, '.')
        file_name = 'passport'+'_'+person_schema_biodata['Surname']+'_'+person_schema_biodata['Firstname']+'.'+file_content[1]
        return file_name

    @staticmethod
    def get_datetime_from_calendar(calendar_date):
        if calendar_date:
            date_array = calendar_date.split('-')
            return datetime(int(date_array[2]), int(date_array[1]), int(date_array[0]))
        return None

    @staticmethod
    def build_date(date):
        if date:
            date_value = str(date.day) +"-"+str(date.month)+"-"+str(date.year)
            return date_value
        return None

    @staticmethod
    def getLastPrice(self):
        return  self.lastPrice

    @staticmethod
    def setLastPrice(self,lastPrice):
        return self.lastPrice



