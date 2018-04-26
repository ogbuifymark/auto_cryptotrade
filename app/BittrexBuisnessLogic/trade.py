from ..models import  Order

class BittrexTradeLogic():

    def __init__(self):
        pass

    def tradeEngine(self,order=Order()):
        print("====",order.currency_amount)
        return  True

