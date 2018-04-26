__author__ = 'ugochukwu'

from marshmallow import Schema, fields



class AccountSchema(Schema):
    id = fields.Integer()
    api_key = fields.Str()
    user_id = fields.Integer()


class CurrencyTypeSchema(Schema):
    id = fields.Integer()
    description = fields.Str()
    symbol=fields.Str()


class MarketTypeSchema(Schema):
    id = fields.Integer()
    description = fields.Str()

class WalletSchema(Schema):
    id = fields.Integer()
    total_amount = fields.Float()
    available_amount = fields.Float()
    transaction_amount = fields.Float()
    currencytype = fields.Nested(CurrencyTypeSchema())
    account = fields.Nested(AccountSchema())
    exchange_type_id = fields.Integer()

class TickerSchema(Schema):
    id = fields.Integer()
    min_amount = fields.Float()
    max_amount = fields.Float()

class ExchangeTypeSchema(Schema):
    id = fields.Integer()
    description = fields.Str()

class CurrencyMarketSchema(Schema):
    id = fields.Integer()
    currencytype =fields.Nested(CurrencyTypeSchema())
    markettype = fields.Nested(MarketTypeSchema())

    # =====================Value type  ====================================================

class OrderValueType():
    id = ''
    currency_amount = ''
    date_time = ''
    order_ref = ''
    transaction_status = ''
    status = ''
    price_to_pay = ''
    markettype = ''
    currencytype = ''
    exchangetype=''



