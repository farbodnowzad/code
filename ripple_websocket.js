const websocket = require('ws');
const ws = new websocket("wss://s1.ripple.com:443");
ws.subscribe
ws.on("open", function(){
    var d = new Date()
    console.log("websocket opened at " + d.getHours() + ":" 
        + d.getMinutes() + ":" + d.getSeconds())
    var subscription = {
    "id": "Watch for new validated ledgers",
    "command": "subscribe",
    "streams": ["ledger"]
    }
    ws.send(JSON.stringify(subscription))
})
ws.on("error", function(error){
    console.log(error)
})
ws.on("message", function incoming(data) {
    var obj = JSON.parse(data)
    console.log(obj)
});
