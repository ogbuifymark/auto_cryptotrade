//===============TICKERS==================
//========================================
// BTC SOCKET
var webSocket = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket.listen(function(message) {
    });

    webSocket.send({event: 'subscribe',channel: 'ticker',symbol: 'tBTCUSD'}).listen(function(btcusData) {
        var btcusdData = btcusData[1];
        if(btcusdData instanceof Array){
                if (btcusdData[6] < 1){
                    $("#tbtcusd").text(btcusdData[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (btcusdData[6] > 100){
                        $("#tbtcusd").text((btcusdData[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#tbtcusd").text((btcusdData[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }


            if (btcusdData[5] < 0){
                $("#tbtcusd24").text(Math.abs(btcusdData[5])).css("color", "red")
            }
            else{
                $("#tbtcusd24").text(btcusdData[5]).css("color", "green")
            }
            $("#tbtcusdvol").text(btcusdData[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }

    }).fail(function(e) {
        // error sending
    });
     var webSocket2 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket2.listen(function(message) {
    });
   webSocket2.send({event: 'subscribe',channel: 'ticker',symbol: 'tBTCEUR'}).listen(function(btcdata) {
        var btceurdata = btcdata[1];
        if(btceurdata instanceof Array){

            if (btceurdata[6] < 1){
                    $("#tbtceur").text(btceurdata[6].toFixed(7).toLocaleString()+ " EUR")
                }
                else{
                    if (btceurdata[6] > 100){
                        $("#tbtceur").text((btceurdata[6]).toFixed(2).toLocaleString()+ " EUR")
                    }else{
                        $("#tbtceur").text((btceurdata[6]).toFixed(4).toLocaleString()+ " EUR")
                    }

                }

            if (btceurdata[5] < 0){
                $("#tbtceur24").text(Math.abs(btceurdata[5])).css("color", "red")
            }
            else{
                $("#tbtceur24").text(btceurdata[5]).css("color", "green")
            }
            $("#tbtceurvol").text(btceurdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


//ETH SOCKET
     var webSocket3 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket3.listen(function(message) {
    });
   webSocket3.send({event: 'subscribe',channel: 'ticker',symbol: 'tETHUSD'}).listen(function(ethdata) {
        var ethusdata = ethdata[1];
        if(ethusdata instanceof Array){
            if (ethusdata[6] < 1){
                    $("#tethusd").text(ethusdata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (ethusdata[6] > 100){
                        $("#tethusd").text((ethusdata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#tethusd").text((ethusdata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }


            if (ethusdata[5] < 0){
                $("#tethusd24").text(Math.abs(ethusdata[5])).css("color", "red")
            }
            else{
                $("#tethusd24").text(ethusdata[5]).css("color", "green")
            }
            $("#tethusdvol").text(ethusdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

    var webSocket4 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket4.listen(function(message) {
    });
   webSocket4.send({event: 'subscribe',channel: 'ticker',symbol: 'tETHBTC'}).listen(function(ethddata) {
        var ethbtcdata = ethddata[1];
        if(ethbtcdata instanceof Array){
        if (ethbtcdata[6] < 1){
                    $("#tethbtc").text(ethbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (ethbtcdata[6] > 100){
                        $("#tethbtc").text((ethbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#tethbtc").text((ethbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (ethbtcdata[5] < 0){
                $("#tethbtc24").text(Math.abs(ethbtcdata[5])).css("color", "red")
            }
            else{
                $("#tethbtc24").text(ethbtcdata[5]).css("color", "green")
            }
            $("#tethbtcvol").text(ethbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

    //EOS SOCKET
var webSocket5 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket5.listen(function(message) {
    });
   webSocket5.send({event: 'subscribe',channel: 'ticker',symbol: 'tEOSBTC'}).listen(function(eosbtdata) {
        var eosbtcdata = eosbtdata[1];
        if(eosbtcdata instanceof Array){
        if (eosbtcdata[6] < 1){
                    $("#eosbtc").text(eosbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (eosbtcdata[6] > 100){
                        $("#eosbtc").text((eosbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#eosbtc").text((eosbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (eosbtcdata[5] < 0){
                $("#eosbtc24").text(Math.abs(eosbtcdata[5])).css("color", "red")
            }
            else{
                $("#eosbtc24").text(eosbtcdata[5]).css("color", "green")
            }
            $("#eosbtcvol").text(eosbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

    var webSocket6 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket6.listen(function(message) {
    });
   webSocket6.send({event: 'subscribe',channel: 'ticker',symbol: 'tEOSUSD'}).listen(function(eosusdata) {
        var eosusddata = eosusdata[1];
        if(eosusddata instanceof Array){
        if (eosusddata[6] < 1){
                    $("#eosusd").text(eosusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (eosusddata[6] > 100){
                        $("#eosusd").text((eosusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#eosusd").text((eosusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }


            if (eosusddata[5] < 0){
                $("#eosusd24").text(Math.abs(eosusddata[5])).css("color", "red")
            }
            else{
                $("#eosusd24").text(eosusddata[5]).css("color", "green")
            }
            $("#eosusdvol").text(eosusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

    var webSocket7 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket7.listen(function(message) {
    });
   webSocket7.send({event: 'subscribe',channel: 'ticker',symbol: 'tEOSETH'}).listen(function(eosetdata) {
        var eosethdata = eosetdata[1];
        if(eosethdata instanceof Array){
        if (eosethdata[6] < 1){
                    $("#eoseth").text(eosethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (eosethdata[6] > 100){
                        $("#eoseth").text((eosethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#eoseth").text((eosethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (eosethdata[5] < 0){
                $("#eoseth24").text(Math.abs(eosethdata[5])).css("color", "red")
            }
            else{
                $("#eoseth24").text(eosethdata[5]).css("color", "green")
            }
            $("#eosethvol").text(eosethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

//Ripple
    var webSocket8 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket8.listen(function(message) {
    });
   webSocket8.send({event: 'subscribe',channel: 'ticker',symbol: 'tXRPBTC'}).listen(function(xrpbtdata) {
        var xrpbtcdata = xrpbtdata[1];
        if(xrpbtcdata instanceof Array){
        if (xrpbtcdata[6] < 1){
                    $("#xrpbtc").text(xrpbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (xrpbtcdata[6] > 100){
                        $("#xrpbtc").text((xrpbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#xrpbtc").text((xrpbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (xrpbtcdata[5] < 0){
                $("#xrpbtc24").text(Math.abs(xrpbtcdata[5])).css("color", "red")
            }
            else{
                $("#xrpbtc24").text(xrpbtcdata[5]).css("color", "green")
            }
            $("#xrpbtcvol").text(xrpbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

    var webSocket9 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket9.listen(function(message) {
    });
   webSocket9.send({event: 'subscribe',channel: 'ticker',symbol: 'tXRPUSD'}).listen(function(xrpusdata) {
        var xrpusddata = xrpusdata[1];
        if(xrpusddata instanceof Array){
        if (xrpusddata[6] < 1){
                    $("#xrpusd").text(xrpusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (xrpusddata[6] > 100){
                        $("#xrpusd").text((xrpusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#xrpusd").text((xrpusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (xrpusddata[5] < 0){
                $("#xrpusd24").text(Math.abs(xrpusddata[5])).css("color", "red")
            }
            else{
                $("#xrpusd24").text(xrpusddata[5]).css("color", "green")
            }
            $("#xrpusdvol").text(xrpusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

//===========LTCBTC==========
    var webSocket10 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket10.listen(function(message) {
    });
   webSocket10.send({event: 'subscribe',channel: 'ticker',symbol: 'tLTCUSD'}).listen(function(ltcusdata) {
        var ltcusddata = ltcusdata[1];
        if(ltcusddata instanceof Array){
        if (ltcusddata[6] < 1){
                    $("#ltcusd").text(ltcusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (ltcusddata[6] > 100){
                        $("#ltcusd").text((ltcusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#ltcusd").text((ltcusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (ltcusddata[5] < 0){
                $("#ltcusd24").text(Math.abs(ltcusddata[5])).css("color", "red")
            }
            else{
                $("#ltcusd24").text(ltcusddata[5]).css("color", "green")
            }
            $("#ltcusdvol").text(ltcusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

    //=====LTCBTC========
var webSocket11 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket11.listen(function(message) {
    });
   webSocket11.send({event: 'subscribe',channel: 'ticker',symbol: 'tLTCBTC'}).listen(function(ltcbtdata) {
        var ltcbtcdata = ltcbtdata[1];
        if(ltcbtcdata instanceof Array){
        if (ltcbtcdata[6] < 1){
                    $("#ltcbtc").text(ltcbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (ltcbtcdata[6] > 100){
                        $("#ltcbtc").text((ltcbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#ltcbtc").text((ltcbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (ltcbtcdata[5] < 0){
                $("#ltcbtc24").text(Math.abs(ltcbtcdata[5])).css("color", "red")
            }
            else{
                $("#ltcbtc24").text(ltcbtcdata[5]).css("color", "green")
            }
            $("#ltcbtcvol").text(ltcbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


     //=====ETCBTC========
var webSocket12 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket12.listen(function(message) {
    });
   webSocket12.send({event: 'subscribe',channel: 'ticker',symbol: 'tETCBTC'}).listen(function(etcbtdata) {
        var etcbtcdata = etcbtdata[1];
        if(etcbtcdata instanceof Array){
        if (etcbtcdata[6] < 1){
                    $("#etcbtc").text(etcbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (etcbtcdata[6] > 100){
                        $("#etcbtc").text((etcbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#etcbtc").text((etcbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (etcbtcdata[5] < 0){
                $("#etcbtc24").text(Math.abs(etcbtcdata[5])).css("color", "red")
            }
            else{
                $("#etcbtc24").text(etcbtcdata[5]).css("color", "green")
            }
            $("#etcbtcvol").text(etcbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


    //=====ETCUSD========
    var webSocket13 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket13.listen(function(message) {
    });
   webSocket13.send({event: 'subscribe',channel: 'ticker',symbol: 'tETCUSD'}).listen(function(etcusdata) {
        var etcusddata = etcusdata[1];
        if(etcusddata instanceof Array){
        if (etcusddata[6] < 1){
                    $("#etcusd").text(etcusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (etcusddata[6] > 100){
                        $("#etcusd").text((etcusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#etcusd").text((etcusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (etcusddata[5] < 0){
                $("#etcusd24").text(Math.abs(etcusddata[5])).css("color", "red")
            }
            else{
                $("#etcusd24").text(etcusddata[5]).css("color", "green")
            }
            $("#etcusdvol").text(etcusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });




    //=====RRTBTC========
var webSocket14 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket14.listen(function(message) {
    });
   webSocket14.send({event: 'subscribe',channel: 'ticker',symbol: 'tRRTBTC'}).listen(function(rrtbtdata) {
        var rrtbtcdata = rrtbtdata[1];
        if(rrtbtcdata instanceof Array){
        if (rrtbtcdata[6] < 1){
                    $("#rrtbtc").text(rrtbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (rrtbtcdata[6] > 100){
                        $("#rrtbtc").text((rrtbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#rrtbtc").text((rrtbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (rrtbtcdata[5] < 0){
                $("#rrtbtc24").text(Math.abs(rrtbtcdata[5])).css("color", "red")
            }
            else{
                $("#rrtbtc24").text(rrtbtcdata[5]).css("color", "green")
            }
            $("#rrtbtcvol").text(rrtbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


    //=====RRTUSD========
    var webSocket15 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket15.listen(function(message) {
    });
   webSocket15.send({event: 'subscribe',channel: 'ticker',symbol: 'tRRTUSD'}).listen(function(rrtusdata) {
        var rrtusddata = rrtusdata[1];
        if(rrtusddata instanceof Array){
        if (rrtusddata[6] < 1){
                    $("#rrtusd").text(rrtusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (rrtusddata[6] > 100){
                        $("#rrtusd").text((rrtusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#rrtusd").text((rrtusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (rrtusddata[5] < 0){
                $("#rrtusd24").text(Math.abs(rrtusddata[5])).css("color", "red")
            }
            else{
                $("#rrtusd24").text(rrtusddata[5]).css("color", "green")
            }
            $("#rrtusdvol").text(rrtusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });



     //=====ZECBTC========
var webSocket16 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket16.listen(function(message) {
    });
   webSocket16.send({event: 'subscribe',channel: 'ticker',symbol: 'tZECBTC'}).listen(function(zecbtdata) {
        var zecbtcdata = zecbtdata[1];
        if(zecbtcdata instanceof Array){
        if (zecbtcdata[6] < 1){
                    $("#zecbtc").text(zecbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (zecbtcdata[6] > 100){
                        $("#zecbtc").text((zecbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#zecbtc").text((zecbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (zecbtcdata[5] < 0){
                $("#zecbtc24").text(Math.abs(zecbtcdata[5])).css("color", "red")
            }
            else{
                $("#zecbtc24").text(zecbtcdata[5]).css("color", "green")
            }
            $("#zecbtcvol").text(zecbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


    //=====ZECUSD========
    var webSocket17 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket17.listen(function(message) {
    });
   webSocket17.send({event: 'subscribe',channel: 'ticker',symbol: 'tZECUSD'}).listen(function(zecusdata) {
        var zecusddata = zecusdata[1];
        if(zecusddata instanceof Array){
        if (zecusddata[6] < 1){
                    $("#zecusd").text(zecusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (zecusddata[6] > 100){
                        $("#zecusd").text((zecusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#zecusd").text((zecusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (zecusddata[5] < 0){
                $("#zecusd24").text(Math.abs(zecusddata[5])).css("color", "red")
            }
            else{
                $("#zecusd24").text(zecusddata[5]).css("color", "green")
            }
            $("#zecusdvol").text(zecusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


     //=====XMRBTC========
var webSocket18 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket18.listen(function(message) {
    });
   webSocket18.send({event: 'subscribe',channel: 'ticker',symbol: 'tXMRBTC'}).listen(function(xmrbtdata) {
        var xmrbtcdata = xmrbtdata[1];
        if(xmrbtcdata instanceof Array){
        if (xmrbtcdata[6] < 1){
                    $("#xmrbtc").text(xmrbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (xmrbtcdata[6] > 100){
                        $("#xmrbtc").text((xmrbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#xmrbtc").text((xmrbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (xmrbtcdata[5] < 0){
                $("#xmrbtc24").text(Math.abs(xmrbtcdata[5])).css("color", "red")
            }
            else{
                $("#xmrbtc24").text(xmrbtcdata[5]).css("color", "green")
            }
            $("#xmrbtcvol").text(xmrbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


    //=====XMRUSD========
    var webSocket19 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket19.listen(function(message) {
    });
   webSocket19.send({event: 'subscribe',channel: 'ticker',symbol: 'tXMRUSD'}).listen(function(xmrusdata) {
        var xmrusddata = xmrusdata[1];
        if(xmrusddata instanceof Array){
        if (xmrusddata[6] < 1){
                    $("#xmrusd").text(xmrusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (xmrusddata[6] > 100){
                        $("#xmrusd").text((xmrusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#xmrusd").text((xmrusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (xmrusddata[5] < 0){
                $("#xmrusd24").text(Math.abs(xmrusddata[5])).css("color", "red")
            }
            else{
                $("#xmrusd24").text(xmrusddata[5]).css("color", "green")
            }
            $("#xmrusdvol").text(xmrusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });

     //=====DSHBTC========
var webSocket20 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket20.listen(function(message) {
    });
   webSocket20.send({event: 'subscribe',channel: 'ticker',symbol: 'tDSHBTC'}).listen(function(dshbtdata) {
        var dshbtcdata = dshbtdata[1];
        if(dshbtcdata instanceof Array){
        if (dshbtcdata[6] < 1){
                    $("#dshbtc").text(dshbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (dshbtcdata[6] > 100){
                        $("#dshbtc").text((dshbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#dshbtc").text((dshbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (dshbtcdata[5] < 0){
                $("#dshbtc24").text(Math.abs(dshbtcdata[5])).css("color", "red")
            }
            else{
                $("#dshbtc24").text(dshbtcdata[5]).css("color", "green")
            }
            $("#dshbtcvol").text(dshbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


    //=====DSHUSD========
    var webSocket21 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket21.listen(function(message) {
    });
   webSocket21.send({event: 'subscribe',channel: 'ticker',symbol: 'tDSHUSD'}).listen(function(dshusdata) {
        var dshusddata = dshusdata[1];
        if(dshusddata instanceof Array){
        if (dshusddata[6] < 1){
                    $("#dshusd").text(dshusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (dshusddata[6] > 100){
                        $("#dshusd").text((dshusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#dshusd").text((dshusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (dshusddata[5] < 0){
                $("#dshusd24").text(Math.abs(dshusddata[5])).css("color", "red")
            }
            else{
                $("#dshusd24").text(dshusddata[5]).css("color", "green")
            }
            $("#dshusdvol").text(dshusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


 //=====IOTUSD========
var webSocket22 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket22.listen(function(message) {
    });
   webSocket22.send({event: 'subscribe',channel: 'ticker',symbol: 'tIOTUSD'}).listen(function(iotusdata) {
        var iotusddata = iotusdata[1];
        if(iotusddata instanceof Array){
        if (iotusddata[6] < 1){
                    $("#iotusd").text(iotusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (iotusddata[6] > 100){
                        $("#iotusd").text((iotusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#iotusd").text((iotusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (iotusddata[5] < 0){
                $("#iotusd24").text(Math.abs(iotusddata[5])).css("color", "red")
            }
            else{
                $("#iotusd24").text(iotusddata[5]).css("color", "green")
            }
            $("#iotusdvol").text(iotusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //=====IOTBTC========
var webSocket23 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket23.listen(function(message) {
    });
   webSocket23.send({event: 'subscribe',channel: 'ticker',symbol: 'tIOTBTC'}).listen(function(iotbtdata) {
        var iotbtcdata = iotbtdata[1];
        if(iotbtcdata instanceof Array){
        if (iotbtcdata[6] < 1){
                    $("#iotbtc").text(iotbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (iotbtcdata[6] > 100){
                        $("#iotbtc").text((iotbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#iotbtc").text((iotbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (iotbtcdata[5] < 0){
                $("#iotbtc24").text(Math.abs(iotbtcdata[5])).css("color", "red")
            }
            else{
                $("#iotbtc24").text(iotbtcdata[5]).css("color", "green")
            }
            $("#iotbtcvol").text(iotbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //=====IOTETH========
var webSocket24 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket24.listen(function(message) {
    });
   webSocket24.send({event: 'subscribe',channel: 'ticker',symbol: 'tIOTETH'}).listen(function(iotetdata) {
        var iotethdata = iotetdata[1];
        if(iotethdata instanceof Array){
        if (iotethdata[6] < 1){
                    $("#ioteth").text(iotethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (iotethdata[6] > 100){
                        $("#ioteth").text((iotethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#ioteth").text((iotethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (iotethdata[5] < 0){
                $("#ioteth24").text(Math.abs(iotethdata[5])).css("color", "red")
            }
            else{
                $("#ioteth24").text(iotethdata[5]).css("color", "green")
            }
            $("#iotethvol").text(iotethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



     //=====SANUSD========
var webSocket25 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket25.listen(function(message) {
    });
   webSocket25.send({event: 'subscribe',channel: 'ticker',symbol: 'tSANUSD'}).listen(function(sanusdata) {
        var sanusddata = sanusdata[1];
        if(sanusddata instanceof Array){
        if (sanusddata[6] < 1){
                    $("#sanusd").text(sanusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (sanusddata[6] > 100){
                        $("#sanusd").text((sanusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#sanusd").text((sanusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (sanusddata[5] < 0){
                $("#sanusd24").text(Math.abs(sanusddata[5])).css("color", "red")
            }
            else{
                $("#sanusd24").text(sanusddata[5]).css("color", "green")
            }
            $("#sanusdvol").text(sanusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //=====SANBTC========
var webSocket26 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket26.listen(function(message) {
    });
   webSocket26.send({event: 'subscribe',channel: 'ticker',symbol: 'tSANBTC'}).listen(function(sanbtdata) {
        var sanbtcdata = sanbtdata[1];
        if(sanbtcdata instanceof Array){
        if (sanbtcdata[6] < 1){
                    $("#sanbtc").text(sanbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (sanbtcdata[6] > 100){
                        $("#sanbtc").text((sanbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#sanbtc").text((sanbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (sanbtcdata[5] < 0){
                $("#sanbtc24").text(Math.abs(sanbtcdata[5])).css("color", "red")
            }
            else{
                $("#sanbtc24").text(sanbtcdata[5]).css("color", "green")
            }
            $("#sanbtcvol").text(sanbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //=====SANETH========
var webSocket27 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket27.listen(function(message) {
    });
   webSocket27.send({event: 'subscribe',channel: 'ticker',symbol: 'tSANETH'}).listen(function(sanetdata) {
        var sanethdata = sanetdata[1];
        if(sanethdata instanceof Array){
        if (sanethdata[6] < 1){
                    $("#saneth").text(sanethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (sanethdata[6] > 100){
                        $("#saneth").text((sanethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#saneth").text((sanethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (sanethdata[5] < 0){
                $("#saneth24").text(Math.abs(sanethdata[5])).css("color", "red")
            }
            else{
                $("#saneth24").text(sanethdata[5]).css("color", "green")
            }
            $("#sanethvol").text(sanethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



    //=====OMGUSD========
var webSocket28 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket28.listen(function(message) {
    });
   webSocket28.send({event: 'subscribe',channel: 'ticker',symbol: 'tOMGUSD'}).listen(function(omgusdata) {
        var omgusddata = omgusdata[1];
        if(omgusddata instanceof Array){
        if (omgusddata[6] < 1){
                    $("#omgusd").text(omgusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (omgusddata[6] > 100){
                        $("#omgusd").text((omgusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#omgusd").text((omgusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (omgusddata[5] < 0){
                $("#omgusd24").text(Math.abs(omgusddata[5])).css("color", "red")
            }
            else{
                $("#omgusd24").text(omgusddata[5]).css("color", "green")
            }
            $("#omgusdvol").text(omgusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //=====OMGBTC========
var webSocket29 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket29.listen(function(message) {
    });
   webSocket29.send({event: 'subscribe',channel: 'ticker',symbol: 'tOMGBTC'}).listen(function(omgbtdata) {
        var omgbtcdata = omgbtdata[1];
        if(omgbtcdata instanceof Array){
        if (omgbtcdata[6] < 1){
                    $("#omgbtc").text(omgbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (omgbtcdata[6] > 100){
                        $("#omgbtc").text((omgbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#omgbtc").text((omgbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (omgbtcdata[5] < 0){
                $("#omgbtc24").text(Math.abs(omgbtcdata[5])).css("color", "red")
            }
            else{
                $("#omgbtc24").text(omgbtcdata[5]).css("color", "green")
            }
            $("#omgbtcvol").text(omgbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //=====OMGETH========
var webSocket30 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket30.listen(function(message) {
    });
   webSocket30.send({event: 'subscribe',channel: 'ticker',symbol: 'tOMGETH'}).listen(function(omgetdata) {
        var omgethdata = omgetdata[1];
        if(omgethdata instanceof Array){
        if (omgethdata[6] < 1){
                    $("#omgeth").text(omgethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (omgethdata[6] > 100){
                        $("#omgeth").text((omgethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#omgeth").text((omgethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (omgethdata[5] < 0){
                $("#omgeth24").text(Math.abs(omgethdata[5])).css("color", "red")
            }
            else{
                $("#omgeth24").text(omgethdata[5]).css("color", "green")
            }
            $("#omgethvol").text(omgethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



    //=====BCHUSD========
var webSocket31 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket31.listen(function(message) {
    });
   webSocket31.send({event: 'subscribe',channel: 'ticker',symbol: 'tBCHUSD'}).listen(function(bchusdata) {
        var bchusddata = bchusdata[1];
        if(bchusddata instanceof Array){
        if (bchusddata[6] < 1){
                    $("#bchusd").text(bchusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (bchusddata[6] > 100){
                        $("#bchusd").text((bchusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#bchusd").text((bchusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (bchusddata[5] < 0){
                $("#bchusd24").text(Math.abs(bchusddata[5])).css("color", "red")
            }
            else{
                $("#bchusd24").text(bchusddata[5]).css("color", "green")
            }
            $("#bchusdvol").text(bchusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //=====BCHBTC========
var webSocket32 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket32.listen(function(message) {
    });
   webSocket32.send({event: 'subscribe',channel: 'ticker',symbol: 'tBCHBTC'}).listen(function(bchbtdata) {
        var bchbtcdata = bchbtdata[1];
        if(bchbtcdata instanceof Array){
        if (bchbtcdata[6] < 1){
                    $("#bchbtc").text(bchbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (bchbtcdata[6] > 100){
                        $("#bchbtc").text((bchbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#bchbtc").text((bchbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (bchbtcdata[5] < 0){
                $("#bchbtc24").text(Math.abs(bchbtcdata[5])).css("color", "red")
            }
            else{
                $("#bchbtc24").text(bchbtcdata[5]).css("color", "green")
            }
            $("#bchbtcvol").text(bchbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //=====BCHETH========
var webSocket33 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket33.listen(function(message) {
    });
   webSocket33.send({event: 'subscribe',channel: 'ticker',symbol: 'tBCHETH'}).listen(function(bchetdata) {
        var bchethdata = bchetdata[1];
        if(bchethdata instanceof Array){
        if (bchethdata[6] < 1){
                    $("#bcheth").text(bchethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (bchethdata[6] > 100){
                        $("#bcheth").text((bchethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#bcheth").text((bchethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (bchethdata[5] < 0){
                $("#bcheth24").text(Math.abs(bchethdata[5])).css("color", "red")
            }
            else{
                $("#bcheth24").text(bchethdata[5]).css("color", "green")
            }
            $("#bchethvol").text(bchethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


    //====tNEOUSD========
var webSocket34 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket34.listen(function(message) {
    });
   webSocket34.send({event: 'subscribe',channel: 'ticker',symbol: 'tNEOUSD'}).listen(function(neousdata) {
        var neousddata = neousdata[1];
        if(neousddata instanceof Array){
        if (neousddata[6] < 1){
                    $("#neousd").text(neousddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (neousddata[6] > 100){
                        $("#neousd").text((neousddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#neousd").text((neousddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (neousddata[5] < 0){
                $("#neousd24").text(Math.abs(neousddata[5])).css("color", "red")
            }
            else{
                $("#neousd24").text(neousddata[5]).css("color", "green")
            }
            $("#neousdvol").text(neousddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tNEOBTC========
var webSocket35 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket35.listen(function(message) {
    });
   webSocket35.send({event: 'subscribe',channel: 'ticker',symbol: 'tNEOBTC'}).listen(function(neobtdata) {
        var neobtcdata = neobtdata[1];
        if(neobtcdata instanceof Array){
        if (neobtcdata[6] < 1){
                    $("#neobtc").text(neobtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (neobtcdata[6] > 100){
                        $("#neobtc").text((neobtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#neobtc").text((neobtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (neobtcdata[5] < 0){
                $("#neobtc24").text(Math.abs(neobtcdata[5])).css("color", "red")
            }
            else{
                $("#neobtc24").text(neobtcdata[5]).css("color", "green")
            }
            $("#neobtcvol").text(neobtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tNEOETH========
var webSocket36 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket36.listen(function(message) {
    });
   webSocket36.send({event: 'subscribe',channel: 'ticker',symbol: 'tNEOETH'}).listen(function(neoetdata) {
        var neoethdata = neoetdata[1];
        if(neoethdata instanceof Array){
        if (neoethdata[6] < 1){
                    $("#neoeth").text(neoethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (neoethdata[6] > 100){
                        $("#neoeth").text((neoethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#neoeth").text((neoethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (neoethdata[5] < 0){
                $("#neoeth24").text(Math.abs(neoethdata[5])).css("color", "red")
            }
            else{
                $("#neoeth24").text(neoethdata[5]).css("color", "green")
            }
            $("#neoethvol").text(neoethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



//====tETPUSD========
var webSocket37 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket37.listen(function(message) {
    });
   webSocket37.send({event: 'subscribe',channel: 'ticker',symbol: 'tETPUSD'}).listen(function(etpusdata) {
        var etpusddata = etpusdata[1];
        if(etpusddata instanceof Array){
        if (etpusddata[6] < 1){
                    $("#etpusd").text(etpusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (etpusddata[6] > 100){
                        $("#etpusd").text((etpusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#etpusd").text((etpusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (etpusddata[5] < 0){
                $("#etpusd24").text(Math.abs(etpusddata[5])).css("color", "red")
            }
            else{
                $("#etpusd24").text(etpusddata[5]).css("color", "green")
            }
            $("#etpusdvol").text(etpusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tETPBTC========
var webSocket38 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket38.listen(function(message) {
    });
   webSocket38.send({event: 'subscribe',channel: 'ticker',symbol: 'tETPBTC'}).listen(function(etpbtdata) {
        var etpbtcdata = etpbtdata[1];
        if(etpbtcdata instanceof Array){
        if (etpbtcdata[6] < 1){
                    $("#etpbtc").text(etpbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (etpbtcdata[6] > 100){
                        $("#etpbtc").text((etpbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#etpbtc").text((etpbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (etpbtcdata[5] < 0){
                $("#etpbtc24").text(Math.abs(etpbtcdata[5])).css("color", "red")
            }
            else{
                $("#etpbtc24").text(etpbtcdata[5]).css("color", "green")
            }
            $("#etpbtcvol").text(etpbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tETPETH========
var webSocket39 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket39.listen(function(message) {
    });
   webSocket39.send({event: 'subscribe',channel: 'ticker',symbol: 'tETPETH'}).listen(function(etpetdata) {
        var etpethdata = etpetdata[1];
        if(etpethdata instanceof Array){
        if (etpethdata[6] < 1){
                    $("#etpeth").text(etpethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (etpethdata[6] > 100){
                        $("#etpeth").text((etpethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#etpeth").text((etpethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (etpethdata[5] < 0){
                $("#etpeth24").text(Math.abs(etpethdata[5])).css("color", "red")
            }
            else{
                $("#etpeth24").text(etpethdata[5]).css("color", "green")
            }
            $("#etpethvol").text(etpethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


    //====tQTMUSD========
var webSocket40 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket40.listen(function(message) {
    });
   webSocket40.send({event: 'subscribe',channel: 'ticker',symbol: 'tQTMUSD'}).listen(function(qtmusdata) {
        var qtmusddata = qtmusdata[1];
        if(qtmusddata instanceof Array){
        if (qtmusddata[6] < 1){
                    $("#qtmusd").text(qtmusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (qtmusddata[6] > 100){
                        $("#qtmusd").text((qtmusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#qtmusd").text((qtmusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (qtmusddata[5] < 0){
                $("#qtmusd24").text(Math.abs(qtmusddata[5])).css("color", "red")
            }
            else{
                $("#qtmusd24").text(qtmusddata[5]).css("color", "green")
            }
            $("#qtmusdvol").text(qtmusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tQTMBTC========
var webSocket41 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket41.listen(function(message) {
    });
   webSocket41.send({event: 'subscribe',channel: 'ticker',symbol: 'tQTMBTC'}).listen(function(qtmbtdata) {
        var qtmbtcdata = qtmbtdata[1];
        if(qtmbtcdata instanceof Array){
        if (qtmbtcdata[6] < 1){
                    $("#qtmbtc").text(qtmbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (qtmbtcdata[6] > 100){
                        $("#qtmbtc").text((qtmbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#qtmbtc").text((qtmbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (qtmbtcdata[5] < 0){
                $("#qtmbtc24").text(Math.abs(qtmbtcdata[5])).css("color", "red")
            }
            else{
                $("#qtmbtc24").text(qtmbtcdata[5]).css("color", "green")
            }
            $("#qtmbtcvol").text(qtmbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tQTMETH========
var webSocket42 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket42.listen(function(message) {
    });
   webSocket42.send({event: 'subscribe',channel: 'ticker',symbol: 'tQTMETH'}).listen(function(qtmetdata) {
        var qtmethdata = qtmetdata[1];
        if(qtmethdata instanceof Array){
        if (qtmethdata[6] < 1){
                    $("#qtmeth").text(qtmethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (qtmethdata[6] > 100){
                        $("#qtmeth").text((qtmethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#qtmeth").text((qtmethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (qtmethdata[5] < 0){
                $("#qtmeth24").text(Math.abs(qtmethdata[5])).css("color", "red")
            }
            else{
                $("#qtmeth24").text(qtmethdata[5]).css("color", "green")
            }
            $("#qtmethvol").text(qtmethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


    //====tAVTUSD========
var webSocket43 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket43.listen(function(message) {
    });
   webSocket43.send({event: 'subscribe',channel: 'ticker',symbol: 'tAVTUSD'}).listen(function(avtusdata) {
        var avtusddata = avtusdata[1];
        if(avtusddata instanceof Array){
        if (avtusddata[6] < 1){
                    $("#avtusd").text(avtusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (avtusddata[6] > 100){
                        $("#avtusd").text((avtusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#avtusd").text((avtusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (avtusddata[5] < 0){
                $("#avtusd24").text(Math.abs(avtusddata[5])).css("color", "red")
            }
            else{
                $("#avtusd24").text(avtusddata[5]).css("color", "green")
            }
            $("#avtusdvol").text(avtusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tAVTBTC========
var webSocket44 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket44.listen(function(message) {
    });
   webSocket44.send({event: 'subscribe',channel: 'ticker',symbol: 'tAVTBTC'}).listen(function(avtbtdata) {
        var avtbtcdata = avtbtdata[1];
        if(avtbtcdata instanceof Array){
        if (avtbtcdata[6] < 1){
                    $("#avtbtc").text(avtbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (avtbtcdata[6] > 100){
                        $("#avtbtc").text((avtbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#avtbtc").text((avtbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (avtbtcdata[5] < 0){
                $("#avtbtc24").text(Math.abs(avtbtcdata[5])).css("color", "red")
            }
            else{
                $("#avtbtc24").text(avtbtcdata[5]).css("color", "green")
            }
            $("#avtbtcvol").text(avtbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tAVTETH========
var webSocket45 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket45.listen(function(message) {
    });
   webSocket45.send({event: 'subscribe',channel: 'ticker',symbol: 'tAVTETH'}).listen(function(avtetdata) {
        var avtethdata = avtetdata[1];
        if(avtethdata instanceof Array){
        if (avtethdata[6] < 1){
                    $("#avteth").text(avtethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (avtethdata[6] > 100){
                        $("#avteth").text((avtethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#avteth").text((avtethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (avtethdata[5] < 0){
                $("#avteth24").text(Math.abs(avtethdata[5])).css("color", "red")
            }
            else{
                $("#avteth24").text(avtethdata[5]).css("color", "green")
            }
            $("#avtethvol").text(avtethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


    //====tEDOUSD========
var webSocket46 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket46.listen(function(message) {
    });
   webSocket46.send({event: 'subscribe',channel: 'ticker',symbol: 'tEDOUSD'}).listen(function(edousdata) {
        var edousddata = edousdata[1];
        if(edousddata instanceof Array){
        if (edousddata[6] < 1){
                    $("#edousd").text(edousddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (edousddata[6] > 100){
                        $("#edousd").text((edousddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#edousd").text((edousddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (edousddata[5] < 0){
                $("#edousd24").text(Math.abs(edousddata[5])).css("color", "red")
            }
            else{
                $("#edousd24").text(edousddata[5]).css("color", "green")
            }
            $("#edousdvol").text(edousddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tEDOBTC========
var webSocket47 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket47.listen(function(message) {
    });
   webSocket47.send({event: 'subscribe',channel: 'ticker',symbol: 'tEDOBTC'}).listen(function(edobtdata) {
        var edobtcdata = edobtdata[1];
        if(edobtcdata instanceof Array){
        if (edobtcdata[6] < 1){
                    $("#edobtc").text(edobtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (edobtcdata[6] > 100){
                        $("#edobtc").text((edobtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#edobtc").text((edobtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (edobtcdata[5] < 0){
                $("#edobtc24").text(Math.abs(edobtcdata[5])).css("color", "red")
            }
            else{
                $("#edobtc24").text(edobtcdata[5]).css("color", "green")
            }
            $("#edobtcvol").text(edobtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tEDOETH========
var webSocket48 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket48.listen(function(message) {
    });
   webSocket48.send({event: 'subscribe',channel: 'ticker',symbol: 'tEDOETH'}).listen(function(edoetdata) {
        var edoethdata = edoetdata[1];
        if(edoethdata instanceof Array){
        if (edoethdata[6] < 1){
                    $("#edoeth").text(edoethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (edoethdata[6] > 100){
                        $("#edoeth").text((edoethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#edoeth").text((edoethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (edoethdata[5] < 0){
                $("#edoeth24").text(Math.abs(edoethdata[5])).css("color", "red")
            }
            else{
                $("#edoeth24").text(edoethdata[5]).css("color", "green")
            }
            $("#edoethvol").text(edoethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



    //====tDATUSD========
var webSocket49 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket49.listen(function(message) {
    });
   webSocket49.send({event: 'subscribe',channel: 'ticker',symbol: 'tDATUSD'}).listen(function(datusdata) {
        var datusddata = datusdata[1];
        if(datusddata instanceof Array){
        if (datusddata[6] < 1){
                    $("#datusd").text(datusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (datusddata[6] > 100){
                        $("#datusd").text((datusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#datusd").text((datusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (datusddata[5] < 0){
                $("#datusd24").text(Math.abs(datusddata[5])).css("color", "red")
            }
            else{
                $("#datusd24").text(datusddata[5]).css("color", "green")
            }
            $("#datusdvol").text(datusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tDATBTC========
var webSocket50 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket50.listen(function(message) {
    });
   webSocket50.send({event: 'subscribe',channel: 'ticker',symbol: 'tDATBTC'}).listen(function(datbtdata) {
        var datbtcdata = datbtdata[1];
        if(datbtcdata instanceof Array){
        if (datbtcdata[6] < 1){
                    $("#datbtc").text(datbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (datbtcdata[6] > 100){
                        $("#datbtc").text((datbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#datbtc").text((datbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (datbtcdata[5] < 0){
                $("#datbtc24").text(Math.abs(datbtcdata[5])).css("color", "red")
            }
            else{
                $("#datbtc24").text(datbtcdata[5]).css("color", "green")
            }
            $("#datbtcvol").text(datbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tDATETH========
var webSocket51 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket51.listen(function(message) {
    });
   webSocket51.send({event: 'subscribe',channel: 'ticker',symbol: 'tDATETH'}).listen(function(datetdata) {
        var datethdata = datetdata[1];
        if(datethdata instanceof Array){
        if (datethdata[6] < 1){
                    $("#dateth").text(datethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (datethdata[6] > 100){
                        $("#dateth").text((datethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#dateth").text((datethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (datethdata[5] < 0){
                $("#dateth24").text(Math.abs(datethdata[5])).css("color", "red")
            }
            else{
                $("#dateth24").text(datethdata[5]).css("color", "green")
            }
            $("#datethvol").text(datethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


     //====tQSHUSD========
var webSocket52 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket52.listen(function(message) {
    });
   webSocket52.send({event: 'subscribe',channel: 'ticker',symbol: 'tQSHUSD'}).listen(function(qhsusdata) {
        var qhsusddata = qhsusdata[1];
        if(qhsusddata instanceof Array){
        if (qhsusddata[6] < 1){
                    $("#qhsusd").text(qhsusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (qhsusddata[6] > 100){
                        $("#qhsusd").text((qhsusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#qhsusd").text((qhsusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (qhsusddata[5] < 0){
                $("#qhsusd24").text(Math.abs(qhsusddata[5])).css("color", "red")
            }
            else{
                $("#qhsusd24").text(qhsusddata[5]).css("color", "green")
            }
            $("#qhsusdvol").text(qhsusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tQSHBTC========
var webSocket53 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket53.listen(function(message) {
    });
   webSocket53.send({event: 'subscribe',channel: 'ticker',symbol: 'tQSHBTC'}).listen(function(qhsbtdata) {
        var qhsbtcdata = qhsbtdata[1];
        if(qhsbtcdata instanceof Array){
        if (qhsbtcdata[6] < 1){
                    $("#qhsbtc").text(qhsbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (qhsbtcdata[6] > 100){
                        $("#qhsbtc").text((qhsbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#qhsbtc").text((qhsbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (qhsbtcdata[5] < 0){
                $("#qhsbtc24").text(Math.abs(qhsbtcdata[5])).css("color", "red")
            }
            else{
                $("#qhsbtc24").text(qhsbtcdata[5]).css("color", "green")
            }
            $("#qhsbtcvol").text(qhsbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tQSHETH========
var webSocket54 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket54.listen(function(message) {
    });
   webSocket54.send({event: 'subscribe',channel: 'ticker',symbol: 'tQSHETH'}).listen(function(qhsetdata) {
        var qhsethdata = qhsetdata[1];
        if(qhsethdata instanceof Array){
        if (qhsethdata[6] < 1){
                    $("#qhseth").text(qhsethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (qhsethdata[6] > 100){
                        $("#qhseth").text((qhsethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#qhseth").te xt((qhsethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (qhsethdata[5] < 0){
                $("#qhseth24").text(Math.abs(qhsethdata[5])).css("color", "red")
            }
            else{
                $("#qhseth24").text(qhsethdata[5]).css("color", "green")
            }
            $("#qhsethvol").text(qhsethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

  //====tYYWUSD========
var webSocket55 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket55.listen(function(message) {
    });
   webSocket55.send({event: 'subscribe',channel: 'ticker',symbol: 'tYYWUSD'}).listen(function(yywusdata) {
        var yywusddata = yywusdata[1];
        if(yywusddata instanceof Array){
        if (yywusddata[6] < 1){
                    $("#yywusd").text(yywusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (yywusddata[6] > 100){
                        $("#yywusd").text((yywusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#yywusd").text((yywusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (yywusddata[5] < 0){
                $("#yywusd24").text(Math.abs(yywusddata[5])).css("color", "red")
            }
            else{
                $("#yywusd24").text(yywusddata[5]).css("color", "green")
            }
            $("#yywusdvol").text(yywusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tYYWBTC========
var webSocket56 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket56.listen(function(message) {
    });
   webSocket56.send({event: 'subscribe',channel: 'ticker',symbol: 'tYYWBTC'}).listen(function(yywbtdata) {
        var yywbtcdata = yywbtdata[1];
        if(yywbtcdata instanceof Array){
        if (yywbtcdata[6] < 1){
                    $("#yywbtc").text(yywbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (yywbtcdata[6] > 100){
                        $("#yywbtc").text((yywbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#yywbtc").text((yywbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (yywbtcdata[5] < 0){
                $("#yywbtc24").text(Math.abs(yywbtcdata[5])).css("color", "red")
            }
            else{
                $("#yywbtc24").text(yywbtcdata[5]).css("color", "green")
            }
            $("#yywbtcvol").text(yywbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tYYWETH========
var webSocket57 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket57.listen(function(message) {
    });
   webSocket57.send({event: 'subscribe',channel: 'ticker',symbol: 'tYYWETH'}).listen(function(yywetdata) {
        var yywethdata = yywetdata[1];
        if(yywethdata instanceof Array){
        if (yywethdata[6] < 1){
                    $("#yyweth").text(yywethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (yywethdata[6] > 100){
                        $("#yyweth").text((yywethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#yyweth").te xt((yywethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (yywethdata[5] < 0){
                $("#yyweth24").text(Math.abs(yywethdata[5])).css("color", "red")
            }
            else{
                $("#yyweth24").text(yywethdata[5]).css("color", "green")
            }
            $("#yywethvol").text(yywethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

  //====tGNTUSD========
var webSocket58 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket58.listen(function(message) {
    });
   webSocket58.send({event: 'subscribe',channel: 'ticker',symbol: 'tGNTUSD'}).listen(function(gntusdata) {
        var gntusddata = gntusdata[1];
        if(gntusddata instanceof Array){
        if (gntusddata[6] < 1){
                    $("#gntusd").text(gntusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (gntusddata[6] > 100){
                        $("#gntusd").text((gntusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#gntusd").text((gntusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (gntusddata[5] < 0){
                $("#gntusd24").text(Math.abs(gntusddata[5])).css("color", "red")
            }
            else{
                $("#gntusd24").text(gntusddata[5]).css("color", "green")
            }
            $("#gntusdvol").text(gntusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tGNTBTC========
var webSocket59 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket59.listen(function(message) {
    });
   webSocket59.send({event: 'subscribe',channel: 'ticker',symbol: 'tGNTBTC'}).listen(function(gntbtdata) {
        var gntbtcdata = gntbtdata[1];
        if(gntbtcdata instanceof Array){
        if (gntbtcdata[6] < 1){
                    $("#gntbtc").text(gntbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (gntbtcdata[6] > 100){
                        $("#gntbtc").text((gntbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#gntbtc").text((gntbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (gntbtcdata[5] < 0){
                $("#gntbtc24").text(Math.abs(gntbtcdata[5])).css("color", "red")
            }
            else{
                $("#gntbtc24").text(gntbtcdata[5]).css("color", "green")
            }
            $("#gntbtcvol").text(gntbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tGNTETH========
var webSocket60 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket60.listen(function(message) {
    });
   webSocket60.send({event: 'subscribe',channel: 'ticker',symbol: 'tGNTETH'}).listen(function(gntetdata) {
        var gntethdata = gntetdata[1];
        if(gntethdata instanceof Array){
        if (gntethdata[6] < 1){
                    $("#gnteth").text(gntethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (gntethdata[6] > 100){
                        $("#gnteth").text((gntethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#gnteth").te xt((gntethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (gntethdata[5] < 0){
                $("#gnteth24").text(Math.abs(gntethdata[5])).css("color", "red")
            }
            else{
                $("#gnteth24").text(gntethdata[5]).css("color", "green")
            }
            $("#gntethvol").text(gntethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

    //====tSNTUSD========
var webSocket61 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket61.listen(function(message) {
    });
   webSocket61.send({event: 'subscribe',channel: 'ticker',symbol: 'tSNTUSD'}).listen(function(sntusdata) {
        var sntusddata = sntusdata[1];
        if(sntusddata instanceof Array){
        if (sntusddata[6] < 1){
                    $("#sntusd").text(sntusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (sntusddata[6] > 100){
                        $("#sntusd").text((sntusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#sntusd").text((sntusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (sntusddata[5] < 0){
                $("#sntusd24").text(Math.abs(sntusddata[5])).css("color", "red")
            }
            else{
                $("#sntusd24").text(sntusddata[5]).css("color", "green")
            }
            $("#sntusdvol").text(sntusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tSNTBTC========
var webSocket62 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket62.listen(function(message) {
    });
   webSocket62.send({event: 'subscribe',channel: 'ticker',symbol: 'tSNTBTC'}).listen(function(sntbtdata) {
        var sntbtcdata = sntbtdata[1];
        if(sntbtcdata instanceof Array){
        if (sntbtcdata[6] < 1){
                    $("#sntbtc").text(sntbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (sntbtcdata[6] > 100){
                        $("#sntbtc").text((sntbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#sntbtc").text((sntbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (sntbtcdata[5] < 0){
                $("#sntbtc24").text(Math.abs(sntbtcdata[5])).css("color", "red")
            }
            else{
                $("#sntbtc24").text(sntbtcdata[5]).css("color", "green")
            }
            $("#sntbtcvol").text(sntbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tSNTETH========
var webSocket63 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket63.listen(function(message) {
    });
   webSocket63.send({event: 'subscribe',channel: 'ticker',symbol: 'tSNTETH'}).listen(function(sntetdata) {
        var sntethdata = sntetdata[1];
        if(sntethdata instanceof Array){
        if (sntethdata[6] < 1){
                    $("#snteth").text(sntethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (sntethdata[6] > 100){
                        $("#snteth").text((sntethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#snteth").te xt((sntethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (sntethdata[5] < 0){
                $("#snteth24").text(Math.abs(sntethdata[5])).css("color", "red")
            }
            else{
                $("#snteth24").text(sntethdata[5]).css("color", "green")
            }
            $("#sntethvol").text(sntethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


     //====tBATUSD========
var webSocket64 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket64.listen(function(message) {
    });
   webSocket64.send({event: 'subscribe',channel: 'ticker',symbol: 'tBATUSD'}).listen(function(batusdata) {
        var batusddata = batusdata[1];
        if(batusddata instanceof Array){
        if (batusddata[6] < 1){
                    $("#batusd").text(batusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (batusddata[6] > 100){
                        $("#batusd").text((batusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#batusd").text((batusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (batusddata[5] < 0){
                $("#batusd24").text(Math.abs(batusddata[5])).css("color", "red")
            }
            else{
                $("#batusd24").text(batusddata[5]).css("color", "green")
            }
            $("#batusdvol").text(batusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tBATBTC========
var webSocket65 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket65.listen(function(message) {
    });
   webSocket65.send({event: 'subscribe',channel: 'ticker',symbol: 'tBATBTC'}).listen(function(batbtdata) {
        var batbtcdata = batbtdata[1];
        if(batbtcdata instanceof Array){
        if (batbtcdata[6] < 1){
                    $("#batbtc").text(batbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (batbtcdata[6] > 100){
                        $("#batbtc").text((batbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#batbtc").text((batbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (batbtcdata[5] < 0){
                $("#batbtc24").text(Math.abs(batbtcdata[5])).css("color", "red")
            }
            else{
                $("#batbtc24").text(batbtcdata[5]).css("color", "green")
            }
            $("#batbtcvol").text(batbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tBATETH========
var webSocket66 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket66.listen(function(message) {
    });
   webSocket66.send({event: 'subscribe',channel: 'ticker',symbol: 'tBATETH'}).listen(function(batetdata) {
        var batethdata = batetdata[1];
        if(batethdata instanceof Array){
        if (batethdata[6] < 1){
                    $("#bateth").text(batethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (batethdata[6] > 100){
                        $("#bateth").text((batethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#bateth").te xt((batethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (batethdata[5] < 0){
                $("#bateth24").text(Math.abs(batethdata[5])).css("color", "red")
            }
            else{
                $("#bateth24").text(batethdata[5]).css("color", "green")
            }
            $("#batethvol").text(batethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tMNAUSD========
var webSocket67 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket67.listen(function(message) {
    });
   webSocket67.send({event: 'subscribe',channel: 'ticker',symbol: 'tMNAUSD'}).listen(function(mnausdata) {
        var mnausddata = mnausdata[1];
        if(mnausddata instanceof Array){
        if (mnausddata[6] < 1){
                    $("#mnausd").text(mnausddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (mnausddata[6] > 100){
                        $("#mnausd").text((mnausddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#mnausd").text((mnausddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (mnausddata[5] < 0){
                $("#mnausd24").text(Math.abs(mnausddata[5])).css("color", "red")
            }
            else{
                $("#mnausd24").text(mnausddata[5]).css("color", "green")
            }
            $("#mnausdvol").text(mnausddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tMNABTC========
var webSocket69 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket69.listen(function(message) {
    });
   webSocket69.send({event: 'subscribe',channel: 'ticker',symbol: 'tMNABTC'}).listen(function(mnabtdata) {
        var mnabtcdata = mnabtdata[1];
        if(mnabtcdata instanceof Array){
        if (mnabtcdata[6] < 1){
                    $("#mnabtc").text(mnabtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (mnabtcdata[6] > 100){
                        $("#mnabtc").text((mnabtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#mnabtc").text((mnabtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (mnabtcdata[5] < 0){
                $("#mnabtc24").text(Math.abs(mnabtcdata[5])).css("color", "red")
            }
            else{
                $("#mnabtc24").text(mnabtcdata[5]).css("color", "green")
            }
            $("#mnabtcvol").text(mnabtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tMNAETH========
var webSocket69 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket69.listen(function(message) {
    });
   webSocket69.send({event: 'subscribe',channel: 'ticker',symbol: 'tMNAETH'}).listen(function(mnaetdata) {
        var mnaethdata = mnaetdata[1];
        if(mnaethdata instanceof Array){
        if (mnaethdata[6] < 1){
                    $("#mnaeth").text(mnaethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (mnaethdata[6] > 100){
                        $("#mnaeth").text((mnaethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#mnaeth").te xt((mnaethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (mnaethdata[5] < 0){
                $("#mnaeth24").text(Math.abs(mnaethdata[5])).css("color", "red")
            }
            else{
                $("#mnaeth24").text(mnaethdata[5]).css("color", "green")
            }
            $("#mnaethvol").text(mnaethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



     //====tFUNUSD========
var webSocket70 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket70.listen(function(message) {
    });
   webSocket70.send({event: 'subscribe',channel: 'ticker',symbol: 'tFUNUSD'}).listen(function(funusdata) {
        var funusddata = funusdata[1];
        if(funusddata instanceof Array){
        if (funusddata[6] < 1){
                    $("#funusd").text(funusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (funusddata[6] > 100){
                        $("#funusd").text((funusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#funusd").text((funusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (funusddata[5] < 0){
                $("#funusd24").text(Math.abs(funusddata[5])).css("color", "red")
            }
            else{
                $("#funusd24").text(funusddata[5]).css("color", "green")
            }
            $("#funusdvol").text(funusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tFUNBTC========
var webSocket71 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket71.listen(function(message) {
    });
   webSocket71.send({event: 'subscribe',channel: 'ticker',symbol: 'tFUNBTC'}).listen(function(funbtdata) {
        var funbtcdata = funbtdata[1];
        if(funbtcdata instanceof Array){
        if (funbtcdata[6] < 1){
                    $("#funbtc").text(funbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (funbtcdata[6] > 100){
                        $("#funbtc").text((funbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#funbtc").text((funbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (funbtcdata[5] < 0){
                $("#funbtc24").text(Math.abs(funbtcdata[5])).css("color", "red")
            }
            else{
                $("#funbtc24").text(funbtcdata[5]).css("color", "green")
            }
            $("#funbtcvol").text(funbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tFUNETH========
var webSocket72 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket72.listen(function(message) {
    });
   webSocket72.send({event: 'subscribe',channel: 'ticker',symbol: 'tFUNETH'}).listen(function(funetdata) {
        var funethdata = funetdata[1];
        if(funethdata instanceof Array){
        if (funethdata[6] < 1){
                    $("#funeth").text(funethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (funethdata[6] > 100){
                        $("#funeth").text((funethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#funeth").te xt((funethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (funethdata[5] < 0){
                $("#funeth24").text(Math.abs(funethdata[5])).css("color", "red")
            }
            else{
                $("#funeth24").text(funethdata[5]).css("color", "green")
            }
            $("#funethvol").text(funethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



         //====tZRXUSD========
var webSocket73 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket73.listen(function(message) {
    });
   webSocket73.send({event: 'subscribe',channel: 'ticker',symbol: 'tZRXUSD'}).listen(function(zrxusdata) {
        var zrxusddata = zrxusdata[1];
        if(zrxusddata instanceof Array){
        if (zrxusddata[6] < 1){
                    $("#zrxusd").text(zrxusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (zrxusddata[6] > 100){
                        $("#zrxusd").text((zrxusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#zrxusd").text((zrxusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (zrxusddata[5] < 0){
                $("#zrxusd24").text(Math.abs(zrxusddata[5])).css("color", "red")
            }
            else{
                $("#zrxusd24").text(zrxusddata[5]).css("color", "green")
            }
            $("#zrxusdvol").text(zrxusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tZRXBTC========
var webSocket74 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket74.listen(function(message) {
    });
   webSocket74.send({event: 'subscribe',channel: 'ticker',symbol: 'tZRXBTC'}).listen(function(zrxbtdata) {
        var zrxbtcdata = zrxbtdata[1];
        if(zrxbtcdata instanceof Array){
        if (zrxbtcdata[6] < 1){
                    $("#zrxbtc").text(zrxbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (zrxbtcdata[6] > 100){
                        $("#zrxbtc").text((zrxbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#zrxbtc").text((zrxbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (zrxbtcdata[5] < 0){
                $("#zrxbtc24").text(Math.abs(zrxbtcdata[5])).css("color", "red")
            }
            else{
                $("#zrxbtc24").text(zrxbtcdata[5]).css("color", "green")
            }
            $("#zrxbtcvol").text(zrxbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tZRXETH========
var webSocket75 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket75.listen(function(message) {
    });
   webSocket75.send({event: 'subscribe',channel: 'ticker',symbol: 'tZRXETH'}).listen(function(zrxetdata) {
        var zrxethdata = zrxetdata[1];
        if(zrxethdata instanceof Array){
        if (zrxethdata[6] < 1){
                    $("#zrxeth").text(zrxethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (zrxethdata[6] > 100){
                        $("#zrxeth").text((zrxethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#zrxeth").te xt((zrxethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (zrxethdata[5] < 0){
                $("#zrxeth24").text(Math.abs(zrxethdata[5])).css("color", "red")
            }
            else{
                $("#zrxeth24").text(zrxethdata[5]).css("color", "green")
            }
            $("#zrxethvol").text(zrxethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })



    //====tTNBUSD========
var webSocket76 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket76.listen(function(message) {
    });
   webSocket76.send({event: 'subscribe',channel: 'ticker',symbol: 'tTNBUSD'}).listen(function(tnbusdata) {
        var tnbusddata = tnbusdata[1];
        if(tnbusddata instanceof Array){
        if (tnbusddata[6] < 1){
                    $("#tnbusd").text(tnbusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (tnbusddata[6] > 100){
                        $("#tnbusd").text((tnbusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#tnbusd").text((tnbusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (tnbusddata[5] < 0){
                $("#tnbusd24").text(Math.abs(tnbusddata[5])).css("color", "red")
            }
            else{
                $("#tnbusd24").text(tnbusddata[5]).css("color", "green")
            }
            $("#tnbusdvol").text(tnbusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tTNBBTC========
var webSocket77 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket77.listen(function(message) {
    });
   webSocket77.send({event: 'subscribe',channel: 'ticker',symbol: 'tTNBBTC'}).listen(function(tnbbtdata) {
        var tnbbtcdata = tnbbtdata[1];
        if(tnbbtcdata instanceof Array){
        if (tnbbtcdata[6] < 1){
                    $("#tnbbtc").text(tnbbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (tnbbtcdata[6] > 100){
                        $("#tnbbtc").text((tnbbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#tnbbtc").text((tnbbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (tnbbtcdata[5] < 0){
                $("#tnbbtc24").text(Math.abs(tnbbtcdata[5])).css("color", "red")
            }
            else{
                $("#tnbbtc24").text(tnbbtcdata[5]).css("color", "green")
            }
            $("#tnbbtcvol").text(tnbbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tTNBETH========
var webSocket78 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket78.listen(function(message) {
    });
   webSocket78.send({event: 'subscribe',channel: 'ticker',symbol: 'tTNBETH'}).listen(function(tnbetdata) {
        var tnbethdata = tnbetdata[1];
        if(tnbethdata instanceof Array){
        if (tnbethdata[6] < 1){
                    $("#tnbeth").text(tnbethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (tnbethdata[6] > 100){
                        $("#tnbeth").text((tnbethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#tnbeth").te xt((tnbethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (tnbethdata[5] < 0){
                $("#tnbeth24").text(Math.abs(tnbethdata[5])).css("color", "red")
            }
            else{
                $("#tnbeth24").text(tnbethdata[5]).css("color", "green")
            }
            $("#tnbethvol").text(tnbethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


     //====tSPKUSD========
var webSocket79 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket79.listen(function(message) {
    });
   webSocket79.send({event: 'subscribe',channel: 'ticker',symbol: 'tSPKUSD'}).listen(function(spkusdata) {
        var spkusddata = spkusdata[1];
        if(spkusddata instanceof Array){
        if (spkusddata[6] < 1){
                    $("#spkusd").text(spkusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (spkusddata[6] > 100){
                        $("#spkusd").text((spkusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#spkusd").text((spkusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (spkusddata[5] < 0){
                $("#spkusd24").text(Math.abs(spkusddata[5])).css("color", "red")
            }
            else{
                $("#spkusd24").text(spkusddata[5]).css("color", "green")
            }
            $("#spkusdvol").text(spkusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tSPKBTC========
var webSocket80 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket80.listen(function(message) {
    });
   webSocket80.send({event: 'subscribe',channel: 'ticker',symbol: 'tSPKBTC'}).listen(function(spkbtdata) {
        var spkbtcdata = spkbtdata[1];
        if(spkbtcdata instanceof Array){
        if (spkbtcdata[6] < 1){
                    $("#spkbtc").text(spkbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (spkbtcdata[6] > 100){
                        $("#spkbtc").text((spkbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#spkbtc").text((spkbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (spkbtcdata[5] < 0){
                $("#spkbtc24").text(Math.abs(spkbtcdata[5])).css("color", "red")
            }
            else{
                $("#spkbtc24").text(spkbtcdata[5]).css("color", "green")
            }
            $("#spkbtcvol").text(spkbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tSPKETH========
var webSocket81 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket81.listen(function(message) {
    });
   webSocket81.send({event: 'subscribe',channel: 'ticker',symbol: 'tSPKETH'}).listen(function(spketdata) {
        var spkethdata = spketdata[1];
        if(spkethdata instanceof Array){
        if (spkethdata[6] < 1){
                    $("#spketh").text(spkethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (spkethdata[6] > 100){
                        $("#spketh").text((spkethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#spketh").te xt((spkethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (spkethdata[5] < 0){
                $("#spketh24").text(Math.abs(spkethdata[5])).css("color", "red")
            }
            else{
                $("#spketh24").text(spkethdata[5]).css("color", "green")
            }
            $("#spkethvol").text(spkethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


    //====tTRXUSD========
var webSocket82 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket82.listen(function(message) {
    });
   webSocket82.send({event: 'subscribe',channel: 'ticker',symbol: 'tTRXUSD'}).listen(function(trxusdata) {
        var trxusddata = trxusdata[1];
        if(trxusddata instanceof Array){
        if (trxusddata[6] < 1){
                    $("#trxusd").text(trxusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (trxusddata[6] > 100){
                        $("#trxusd").text((trxusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#trxusd").text((trxusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (trxusddata[5] < 0){
                $("#trxusd24").text(Math.abs(trxusddata[5])).css("color", "red")
            }
            else{
                $("#trxusd24").text(trxusddata[5]).css("color", "green")
            }
            $("#trxusdvol").text(trxusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tTRXBTC========
var webSocket83 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket83.listen(function(message) {
    });
   webSocket83.send({event: 'subscribe',channel: 'ticker',symbol: 'tTRXBTC'}).listen(function(trxbtdata) {
        var trxbtcdata = trxbtdata[1];
        if(trxbtcdata instanceof Array){
        if (trxbtcdata[6] < 1){
                    $("#trxbtc").text(trxbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (trxbtcdata[6] > 100){
                        $("#trxbtc").text((trxbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#trxbtc").text((trxbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (trxbtcdata[5] < 0){
                $("#trxbtc24").text(Math.abs(trxbtcdata[5])).css("color", "red")
            }
            else{
                $("#trxbtc24").text(trxbtcdata[5]).css("color", "green")
            }
            $("#trxbtcvol").text(trxbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tTRXETH========
var webSocket84 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket84.listen(function(message) {
    });
   webSocket84.send({event: 'subscribe',channel: 'ticker',symbol: 'tTRXETH'}).listen(function(trxetdata) {
        var trxethdata = trxetdata[1];
        if(trxethdata instanceof Array){
        if (trxethdata[6] < 1){
                    $("#trxeth").text(trxethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (trxethdata[6] > 100){
                        $("#trxeth").text((trxethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#trxeth").te xt((trxethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (trxethdata[5] < 0){
                $("#trxeth24").text(Math.abs(trxethdata[5])).css("color", "red")
            }
            else{
                $("#trxeth24").text(trxethdata[5]).css("color", "green")
            }
            $("#trxethvol").text(trxethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


        //====tRCNUSD========
var webSocket85 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket85.listen(function(message) {
    });
   webSocket85.send({event: 'subscribe',channel: 'ticker',symbol: 'tRCNUSD'}).listen(function(rcnusdata) {
        var rcnusddata = rcnusdata[1];
        if(rcnusddata instanceof Array){
        if (rcnusddata[6] < 1){
                    $("#rcnusd").text(rcnusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (rcnusddata[6] > 100){
                        $("#rcnusd").text((rcnusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#rcnusd").text((rcnusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (rcnusddata[5] < 0){
                $("#rcnusd24").text(Math.abs(rcnusddata[5])).css("color", "red")
            }
            else{
                $("#rcnusd24").text(rcnusddata[5]).css("color", "green")
            }
            $("#rcnusdvol").text(rcnusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tRCNBTC========
var webSocket86 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket86.listen(function(message) {
    });
   webSocket86.send({event: 'subscribe',channel: 'ticker',symbol: 'tRCNBTC'}).listen(function(rcnbtdata) {
        var rcnbtcdata = rcnbtdata[1];
        if(rcnbtcdata instanceof Array){
        if (rcnbtcdata[6] < 1){
                    $("#rcnbtc").text(rcnbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (rcnbtcdata[6] > 100){
                        $("#rcnbtc").text((rcnbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#rcnbtc").text((rcnbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (rcnbtcdata[5] < 0){
                $("#rcnbtc24").text(Math.abs(rcnbtcdata[5])).css("color", "red")
            }
            else{
                $("#rcnbtc24").text(rcnbtcdata[5]).css("color", "green")
            }
            $("#rcnbtcvol").text(rcnbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tRCNETH========
var webSocket87 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket87.listen(function(message) {
    });
   webSocket87.send({event: 'subscribe',channel: 'ticker',symbol: 'tRCNETH'}).listen(function(rcnetdata) {
        var rcnethdata = rcnetdata[1];
        if(rcnethdata instanceof Array){
        if (rcnethdata[6] < 1){
                    $("#rcneth").text(rcnethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (rcnethdata[6] > 100){
                        $("#rcneth").text((rcnethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#rcneth").te xt((rcnethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (rcnethdata[5] < 0){
                $("#rcneth24").text(Math.abs(rcnethdata[5])).css("color", "red")
            }
            else{
                $("#rcneth24").text(rcnethdata[5]).css("color", "green")
            }
            $("#rcnethvol").text(rcnethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


        //====tRLCUSD========
var webSocket88 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket88.listen(function(message) {
    });
   webSocket88.send({event: 'subscribe',channel: 'ticker',symbol: 'tRLCUSD'}).listen(function(rlcusdata) {
        var rlcusddata = rlcusdata[1];
        if(rlcusddata instanceof Array){
        if (rlcusddata[6] < 1){
                    $("#rlcusd").text(rlcusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (rlcusddata[6] > 100){
                        $("#rlcusd").text((rlcusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#rlcusd").text((rlcusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (rlcusddata[5] < 0){
                $("#rlcusd24").text(Math.abs(rlcusddata[5])).css("color", "red")
            }
            else{
                $("#rlcusd24").text(rlcusddata[5]).css("color", "green")
            }
            $("#rlcusdvol").text(rlcusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tRLCBTC========
var webSocket89 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket89.listen(function(message) {
    });
   webSocket89.send({event: 'subscribe',channel: 'ticker',symbol: 'tRLCBTC'}).listen(function(rlcbtdata) {
        var rlcbtcdata = rlcbtdata[1];
        if(rlcbtcdata instanceof Array){
        if (rlcbtcdata[6] < 1){
                    $("#rlcbtc").text(rlcbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (rlcbtcdata[6] > 100){
                        $("#rlcbtc").text((rlcbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#rlcbtc").text((rlcbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (rlcbtcdata[5] < 0){
                $("#rlcbtc24").text(Math.abs(rlcbtcdata[5])).css("color", "red")
            }
            else{
                $("#rlcbtc24").text(rlcbtcdata[5]).css("color", "green")
            }
            $("#rlcbtcvol").text(rlcbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tRLCETH========
var webSocket90 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket90.listen(function(message) {
    });
   webSocket90.send({event: 'subscribe',channel: 'ticker',symbol: 'tRLCETH'}).listen(function(rlcetdata) {
        var rlcethdata = rlcetdata[1];
        if(rlcethdata instanceof Array){
        if (rlcethdata[6] < 1){
                    $("#rlceth").text(rlcethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (rlcethdata[6] > 100){
                        $("#rlceth").text((rlcethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#rlceth").te xt((rlcethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (rlcethdata[5] < 0){
                $("#rlceth24").text(Math.abs(rlcethdata[5])).css("color", "red")
            }
            else{
                $("#rlceth24").text(rlcethdata[5]).css("color", "green")
            }
            $("#rlcethvol").text(rlcethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

    //====tAIDUSD========
var webSocket91 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket91.listen(function(message) {
    });
   webSocket91.send({event: 'subscribe',channel: 'ticker',symbol: 'tAIDUSD'}).listen(function(aidusdata) {
        var aidusddata = aidusdata[1];
        if(aidusddata instanceof Array){
        if (aidusddata[6] < 1){
                    $("#aidusd").text(aidusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (aidusddata[6] > 100){
                        $("#aidusd").text((aidusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#aidusd").text((aidusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (aidusddata[5] < 0){
                $("#aidusd24").text(Math.abs(aidusddata[5])).css("color", "red")
            }
            else{
                $("#aidusd24").text(aidusddata[5]).css("color", "green")
            }
            $("#aidusdvol").text(aidusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tAIDBTC========
var webSocket92 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket92.listen(function(message) {
    });
   webSocket92.send({event: 'subscribe',channel: 'ticker',symbol: 'tAIDBTC'}).listen(function(aidbtdata) {
        var aidbtcdata = aidbtdata[1];
        if(aidbtcdata instanceof Array){
        if (aidbtcdata[6] < 1){
                    $("#aidbtc").text(aidbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (aidbtcdata[6] > 100){
                        $("#aidbtc").text((aidbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#aidbtc").text((aidbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (aidbtcdata[5] < 0){
                $("#aidbtc24").text(Math.abs(aidbtcdata[5])).css("color", "red")
            }
            else{
                $("#aidbtc24").text(aidbtcdata[5]).css("color", "green")
            }
            $("#aidbtcvol").text(aidbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tAIDETH========
var webSocket93 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket93.listen(function(message) {
    });
   webSocket93.send({event: 'subscribe',channel: 'ticker',symbol: 'tAIDETH'}).listen(function(aidetdata) {
        var aidethdata = aidetdata[1];
        if(aidethdata instanceof Array){
        if (aidethdata[6] < 1){
                    $("#aideth").text(aidethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (aidethdata[6] > 100){
                        $("#aideth").text((aidethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#aideth").te xt((aidethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (aidethdata[5] < 0){
                $("#aideth24").text(Math.abs(aidethdata[5])).css("color", "red")
            }
            else{
                $("#aideth24").text(aidethdata[5]).css("color", "green")
            }
            $("#aidethvol").text(aidethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


        //====tSNGUSD========
var webSocket94 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket94.listen(function(message) {
    });
   webSocket94.send({event: 'subscribe',channel: 'ticker',symbol: 'tSNGUSD'}).listen(function(sngusdata) {
        var sngusddata = sngusdata[1];
        if(sngusddata instanceof Array){
        if (sngusddata[6] < 1){
                    $("#sngusd").text(sngusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (sngusddata[6] > 100){
                        $("#sngusd").text((sngusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#sngusd").text((sngusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (sngusddata[5] < 0){
                $("#sngusd24").text(Math.abs(sngusddata[5])).css("color", "red")
            }
            else{
                $("#sngusd24").text(sngusddata[5]).css("color", "green")
            }
            $("#sngusdvol").text(sngusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tSNGBTC========
var webSocket95 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket95.listen(function(message) {
    });
   webSocket95.send({event: 'subscribe',channel: 'ticker',symbol: 'tSNGBTC'}).listen(function(sngbtdata) {
        var sngbtcdata = sngbtdata[1];
        if(sngbtcdata instanceof Array){
        if (sngbtcdata[6] < 1){
                    $("#sngbtc").text(sngbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (sngbtcdata[6] > 100){
                        $("#sngbtc").text((sngbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#sngbtc").text((sngbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (sngbtcdata[5] < 0){
                $("#sngbtc24").text(Math.abs(sngbtcdata[5])).css("color", "red")
            }
            else{
                $("#sngbtc24").text(sngbtcdata[5]).css("color", "green")
            }
            $("#sngbtcvol").text(sngbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tSNGETH========
var webSocket96 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket96.listen(function(message) {
    });
   webSocket96.send({event: 'subscribe',channel: 'ticker',symbol: 'tSNGETH'}).listen(function(sngetdata) {
        var sngethdata = sngetdata[1];
        if(sngethdata instanceof Array){
        if (sngethdata[6] < 1){
                    $("#sngeth").text(sngethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (sngethdata[6] > 100){
                        $("#sngeth").text((sngethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#sngeth").te xt((sngethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (sngethdata[5] < 0){
                $("#sngeth24").text(Math.abs(sngethdata[5])).css("color", "red")
            }
            else{
                $("#sngeth24").text(sngethdata[5]).css("color", "green")
            }
            $("#sngethvol").text(sngethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


     //====tREPUSD========
var webSocket97 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket97.listen(function(message) {
    });
   webSocket97.send({event: 'subscribe',channel: 'ticker',symbol: 'tREPUSD'}).listen(function(repusdata) {
        var repusddata = repusdata[1];
        if(repusddata instanceof Array){
        if (repusddata[6] < 1){
                    $("#repusd").text(repusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (repusddata[6] > 100){
                        $("#repusd").text((repusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#repusd").text((repusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (repusddata[5] < 0){
                $("#repusd24").text(Math.abs(repusddata[5])).css("color", "red")
            }
            else{
                $("#repusd24").text(repusddata[5]).css("color", "green")
            }
            $("#repusdvol").text(repusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tREPBTC========
var webSocket98 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket98.listen(function(message) {
    });
   webSocket98.send({event: 'subscribe',channel: 'ticker',symbol: 'tREPBTC'}).listen(function(repbtdata) {
        var repbtcdata = repbtdata[1];
        if(repbtcdata instanceof Array){
        if (repbtcdata[6] < 1){
                    $("#repbtc").text(repbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (repbtcdata[6] > 100){
                        $("#repbtc").text((repbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#repbtc").text((repbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (repbtcdata[5] < 0){
                $("#repbtc24").text(Math.abs(repbtcdata[5])).css("color", "red")
            }
            else{
                $("#repbtc24").text(repbtcdata[5]).css("color", "green")
            }
            $("#repbtcvol").text(repbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tREPETH========
var webSocket99 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket99.listen(function(message) {
    });
   webSocket99.send({event: 'subscribe',channel: 'ticker',symbol: 'tREPETH'}).listen(function(repetdata) {
        var repethdata = repetdata[1];
        if(repethdata instanceof Array){
        if (repethdata[6] < 1){
                    $("#repeth").text(repethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (repethdata[6] > 100){
                        $("#repeth").text((repethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#repeth").te xt((repethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (repethdata[5] < 0){
                $("#repeth24").text(Math.abs(repethdata[5])).css("color", "red")
            }
            else{
                $("#repeth24").text(repethdata[5]).css("color", "green")
            }
            $("#repethvol").text(repethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

         //====tELFUSD========
var webSocket101 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket101.listen(function(message) {
    });
   webSocket101.send({event: 'subscribe',channel: 'ticker',symbol: 'tELFUSD'}).listen(function(elfusdata) {
        var elfusddata = elfusdata[1];
        if(elfusddata instanceof Array){
        if (elfusddata[6] < 1){
                    $("#elfusd").text(elfusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (elfusddata[6] > 100){
                        $("#elfusd").text((elfusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#elfusd").text((elfusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (elfusddata[5] < 0){
                $("#elfusd24").text(Math.abs(elfusddata[5])).css("color", "red")
            }
            else{
                $("#elfusd24").text(elfusddata[5]).css("color", "green")
            }
            $("#elfusdvol").text(elfusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tELFBTC========
var webSocket102 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket102.listen(function(message) {
    });
   webSocket102.send({event: 'subscribe',channel: 'ticker',symbol: 'tELFBTC'}).listen(function(elfbtdata) {
        var elfbtcdata = elfbtdata[1];
        if(elfbtcdata instanceof Array){
        if (elfbtcdata[6] < 1){
                    $("#elfbtc").text(elfbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (elfbtcdata[6] > 100){
                        $("#elfbtc").text((elfbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#elfbtc").text((elfbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (elfbtcdata[5] < 0){
                $("#elfbtc24").text(Math.abs(elfbtcdata[5])).css("color", "red")
            }
            else{
                $("#elfbtc24").text(elfbtcdata[5]).css("color", "green")
            }
            $("#elfbtcvol").text(elfbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tELFETH========
var webSocket102 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket102.listen(function(message) {
    });
   webSocket102.send({event: 'subscribe',channel: 'ticker',symbol: 'tELFETH'}).listen(function(elfetdata) {
        var elfethdata = elfetdata[1];
        if(elfethdata instanceof Array){
        if (elfethdata[6] < 1){
                    $("#elfeth").text(elfethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (elfethdata[6] > 100){
                        $("#elfeth").text((elfethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#elfeth").te xt((elfethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (elfethdata[5] < 0){
                $("#elfeth24").text(Math.abs(elfethdata[5])).css("color", "red")
            }
            else{
                $("#elfeth24").text(elfethdata[5]).css("color", "green")
            }
            $("#elfethvol").text(elfethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


    //====tAIOUSD========
var webSocket104 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket104.listen(function(message) {
    });
   webSocket104.send({event: 'subscribe',channel: 'ticker',symbol: 'tAIOUSD'}).listen(function(aiousdata) {
        var aiousddata = aiousdata[1];
        if(aiousddata instanceof Array){
        if (aiousddata[6] < 1){
                    $("#aiousd").text(aiousddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (aiousddata[6] > 100){
                        $("#aiousd").text((aiousddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#aiousd").text((aiousddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (aiousddata[5] < 0){
                $("#aiousd24").text(Math.abs(aiousddata[5])).css("color", "red")
            }
            else{
                $("#aiousd24").text(aiousddata[5]).css("color", "green")
            }
            $("#aiousdvol").text(aiousddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tAIOBTC========
var webSocket105 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket105.listen(function(message) {
    });
   webSocket105.send({event: 'subscribe',channel: 'ticker',symbol: 'tAIOBTC'}).listen(function(aiobtdata) {
        var aiobtcdata = aiobtdata[1];
        if(aiobtcdata instanceof Array){
        if (aiobtcdata[6] < 1){
                    $("#aiobtc").text(aiobtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (aiobtcdata[6] > 100){
                        $("#aiobtc").text((aiobtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#aiobtc").text((aiobtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (aiobtcdata[5] < 0){
                $("#aiobtc24").text(Math.abs(aiobtcdata[5])).css("color", "red")
            }
            else{
                $("#aiobtc24").text(aiobtcdata[5]).css("color", "green")
            }
            $("#aiobtcvol").text(aiobtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tAIOETH========
var webSocket106 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket106.listen(function(message) {
    });
   webSocket106.send({event: 'subscribe',channel: 'ticker',symbol: 'tAIOETH'}).listen(function(aioetdata) {
        var aioethdata = aioetdata[1];
        if(aioethdata instanceof Array){
        if (aioethdata[6] < 1){
                    $("#aioeth").text(aioethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (aioethdata[6] > 100){
                        $("#aioeth").text((aioethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#aioeth").te xt((aioethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (aioethdata[5] < 0){
                $("#aioeth24").text(Math.abs(aioethdata[5])).css("color", "red")
            }
            else{
                $("#aioeth24").text(aioethdata[5]).css("color", "green")
            }
            $("#aioethvol").text(aioethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


        //====tRDNUSD========
var webSocket107 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket107.listen(function(message) {
    });
   webSocket107.send({event: 'subscribe',channel: 'ticker',symbol: 'tRDNUSD'}).listen(function(rdnusdata) {
        var rdnusddata = rdnusdata[1];
        if(rdnusddata instanceof Array){
        if (rdnusddata[6] < 1){
                    $("#rdnusd").text(rdnusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (rdnusddata[6] > 100){
                        $("#rdnusd").text((rdnusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#rdnusd").text((rdnusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (rdnusddata[5] < 0){
                $("#rdnusd24").text(Math.abs(rdnusddata[5])).css("color", "red")
            }
            else{
                $("#rdnusd24").text(rdnusddata[5]).css("color", "green")
            }
            $("#rdnusdvol").text(rdnusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tRDNBTC========
var webSocket108 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket108.listen(function(message) {
    });
   webSocket108.send({event: 'subscribe',channel: 'ticker',symbol: 'tRDNBTC'}).listen(function(rdnbtdata) {
        var rdnbtcdata = rdnbtdata[1];
        if(rdnbtcdata instanceof Array){
        if (rdnbtcdata[6] < 1){
                    $("#rdnbtc").text(rdnbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (rdnbtcdata[6] > 100){
                        $("#rdnbtc").text((rdnbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#rdnbtc").text((rdnbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (rdnbtcdata[5] < 0){
                $("#rdnbtc24").text(Math.abs(rdnbtcdata[5])).css("color", "red")
            }
            else{
                $("#rdnbtc24").text(rdnbtcdata[5]).css("color", "green")
            }
            $("#rdnbtcvol").text(rdnbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tRDNETH========
var webSocket109 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket109.listen(function(message) {
    });
   webSocket109.send({event: 'subscribe',channel: 'ticker',symbol: 'tRDNETH'}).listen(function(rdnetdata) {
        var rdnethdata = rdnetdata[1];
        if(rdnethdata instanceof Array){
        if (rdnethdata[6] < 1){
                    $("#rdneth").text(rdnethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (rdnethdata[6] > 100){
                        $("#rdneth").text((rdnethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#rdneth").te xt((rdnethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (rdnethdata[5] < 0){
                $("#rdneth24").text(Math.abs(rdnethdata[5])).css("color", "red")
            }
            else{
                $("#rdneth24").text(rdnethdata[5]).css("color", "green")
            }
            $("#rdnethvol").text(rdnethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


        //====tIRCUSD========
var webSocket110 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket110.listen(function(message) {
    });
   webSocket110.send({event: 'subscribe',channel: 'ticker',symbol: 'tIRCUSD'}).listen(function(lrcusdata) {
        var lrcusddata = lrcusdata[1];
        if(lrcusddata instanceof Array){
        if (lrcusddata[6] < 1){
                    $("#lrcusd").text(lrcusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (lrcusddata[6] > 100){
                        $("#lrcusd").text((lrcusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#lrcusd").text((lrcusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (lrcusddata[5] < 0){
                $("#lrcusd24").text(Math.abs(lrcusddata[5])).css("color", "red")
            }
            else{
                $("#lrcusd24").text(lrcusddata[5]).css("color", "green")
            }
            $("#lrcusdvol").text(lrcusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tIRCBTC========
var webSocket111 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket111.listen(function(message) {
    });
   webSocket111.send({event: 'subscribe',channel: 'ticker',symbol: 'tIRCBTC'}).listen(function(lrcbtdata) {
        var lrcbtcdata = lrcbtdata[1];
        if(lrcbtcdata instanceof Array){
        if (lrcbtcdata[6] < 1){
                    $("#lrcbtc").text(lrcbtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (lrcbtcdata[6] > 100){
                        $("#lrcbtc").text((lrcbtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#lrcbtc").text((lrcbtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (lrcbtcdata[5] < 0){
                $("#lrcbtc24").text(Math.abs(lrcbtcdata[5])).css("color", "red")
            }
            else{
                $("#lrcbtc24").text(lrcbtcdata[5]).css("color", "green")
            }
            $("#lrcbtcvol").text(lrcbtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tIRCETH========
var webSocket112 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket112.listen(function(message) {
    });
   webSocket112.send({event: 'subscribe',channel: 'ticker',symbol: 'tIRCETH'}).listen(function(lrcetdata) {
        var lrcethdata = lrcetdata[1];
        if(lrcethdata instanceof Array){
        if (lrcethdata[6] < 1){
                    $("#lrceth").text(lrcethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (lrcethdata[6] > 100){
                        $("#lrceth").text((lrcethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#lrceth").te xt((lrcethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (lrcethdata[5] < 0){
                $("#lrceth24").text(Math.abs(lrcethdata[5])).css("color", "red")
            }
            else{
                $("#lrceth24").text(lrcethdata[5]).css("color", "green")
            }
            $("#lrcethvol").text(lrcethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })


            //====tDIAUSD========
var webSocket113 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket113.listen(function(message) {
    });
   webSocket113.send({event: 'subscribe',channel: 'ticker',symbol: 'tDIAUSD'}).listen(function(lrcusdata) {
        var lrcusddata = lrcusdata[1];
        if(lrcusddata instanceof Array){
        if (lrcusddata[6] < 1){
                    $("#lrcusd").text(lrcusddata[6].toFixed(5).toLocaleString()+ " USD")
                }
                else{
                    if (lrcusddata[6] > 100){
                        $("#lrcusd").text((lrcusddata[6]).toFixed(2).toLocaleString()+ " USD")
                    }else{
                        $("#lrcusd").text((lrcusddata[6]).toFixed(4).toLocaleString()+ " USD")
                    }

                }

            if (lrcusddata[5] < 0){
                $("#lrcusd24").text(Math.abs(lrcusddata[5])).css("color", "red")
            }
            else{
                $("#lrcusd24").text(lrcusddata[5]).css("color", "green")
            }
            $("#lrcusdvol").text(lrcusddata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    });


  //====tDIABTC========
var webSocket114 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket114.listen(function(message) {
    });
   webSocket114.send({event: 'subscribe',channel: 'ticker',symbol: 'tDIABTC'}).listen(function(diabtdata) {
        var diabtcdata = diabtdata[1];
        if(diabtcdata instanceof Array){
        if (diabtcdata[6] < 1){
                    $("#diabtc").text(diabtcdata[6].toFixed(5).toLocaleString()+ " BTC")
                }
                else{
                    if (diabtcdata[6] > 100){
                        $("#diabtc").text((diabtcdata[6]).toFixed(2).toLocaleString()+ " BTC")
                    }else{
                        $("#diabtc").text((diabtcdata[6]).toFixed(4).toLocaleString()+ " BTC")
                    }

                }

            if (diabtcdata[5] < 0){
                $("#diabtc24").text(Math.abs(diabtcdata[5])).css("color", "red")
            }
            else{
                $("#diabtc24").text(diabtcdata[5]).css("color", "green")
            }
            $("#diabtcvol").text(diabtcdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })

     //====tDIAETH========
var webSocket115 = $.simpleWebSocket({ url: 'wss://api.bitfinex.com/ws/2' });
    webSocket115.listen(function(message) {
    });
   webSocket115.send({event: 'subscribe',channel: 'ticker',symbol: 'tDIAETH'}).listen(function(diaetdata) {
        var diaethdata = diaetdata[1];
        if(diaethdata instanceof Array){
        if (diaethdata[6] < 1){
                    $("#diaeth").text(diaethdata[6].toFixed(5).toLocaleString()+ " ETH")
                }
                else{
                    if (diaethdata[6] > 100){
                        $("#diaeth").text((diaethdata[6]).toFixed(2).toLocaleString()+ " ETH")
                    }else{
                        $("#diaeth").te xt((diaethdata[6]).toFixed(4).toLocaleString()+ " ETH")
                    }

                }

            if (diaethdata[5] < 0){
                $("#diaeth24").text(Math.abs(diaethdata[5])).css("color", "red")
            }
            else{
                $("#diaeth24").text(diaethdata[5]).css("color", "green")
            }
            $("#diaethvol").text(diaethdata[7]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

        }


    }).fail(function(e) {
        // error sending
    })
//===============BITTREX==================
//========================================
//========================================

