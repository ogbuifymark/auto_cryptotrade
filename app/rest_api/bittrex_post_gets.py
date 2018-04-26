from flask import render_template, redirect, request, url_for, flash, json, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from . import api
from ..models import User, Person,Account, Ticker, CurrencyType,Order,WalletPaymentDetail,TransactionTypeEnum, WalletType,UsedBy,ExchangeTypeEnum
from app.Util.utility import Utility as util
from app import db
import datetime, time,calendar
import hashlib
import base64,requests, hmac
import hmac

@api.route('/get_bitrex_depo_withdrawal',methods=['GET', 'POST'])
@login_required
def bitrex_depo_withdrawal():
    if request.method == "POST":
        currencyTypeList = util.currency_type_by_method_dropdown_list()
        marketTypeList = util.market_type_dropdown_list()
        exchangeTypeList = util.exchange_type_dropdown_list()
        return render_template('partial/admin/getdeposit.html',marketTypeList=marketTypeList,currencyTypeList=currencyTypeList, exchangeTypeList=exchangeTypeList)


@api.route('/bitrex_geeneral_api', methods=['GET', 'POST'])
@login_required
def bitrex():
    try:
        baseUrl = 'https://bittrex.com/api/v1.1/public/getcurrencies'
        data = requests.get(baseUrl)
        if data:
            return data.content
        else:
            return "False"
    except Exception as e:
        return "Error occured! "+e.message
    return check



