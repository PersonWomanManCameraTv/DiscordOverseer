const {ws} = require("./discordAPI/socket.js")
const {DiscordSocketHelper} = require('./helpers.js')

const {GuildsHandler} = require("./discordAPI/guilds.js")
const {MessagesHandler} = require("./discordAPI/messages.js")
const DiscordHelper = new DiscordSocketHelper();

const Guilds = new GuildsHandler();
const Messages = new MessagesHandler();

class DiscordHandler{

    constructor(){
        
    }

    initializeWebSocket() {
        /*
            At this point, we have already completed a handshake with the socket server.
            We just need to pass our auth payload
        */
        
        ws.addEventListener("open", function open(x) {
            ws.send(JSON.stringify(DiscordHelper.sStartConnectionPayload));
        });
    }

    listener(){
        ws.addEventListener("message", function incoming(result) {
            const data = result.data;
            const payload = JSON.parse(data);

            const { t, event, op, d } = payload;
            
            if(d){
                if(d.hasOwnProperty("session_id")){
                    // session_id for socket if you need it, looks like: e75217b4315e38def579333ed682bb22
                    // I haven't found a use case, but it's here ig
                }
            }
             
            switch (op) {
                case 0:
                    // opcode 0 is used for most events. Should be under d, or t
                    break;
                case 10:
                    // opcode 10 is the heartbeat interval to keep the connection alive
                    const { heartbeat_interval } = d;
        
                    setInterval(() => {
                        ws.send(JSON.stringify({ op: 1, d: null }));
                    }, heartbeat_interval);
                    break;
            }
        
            switch (t) {
                /*
                    Options to use. Just use variable 'd' has it has the data.
                */
                case 'READY_SUPPLEMENTAL':
                    break;
                case 'READY':
                    // READY event gets called on start after authing, it returns info about self.
                    /* 
                        Here you can add an option to choose between viewing all your subscribed servers, or viewing just a single server or channel 
                        Guilds.join_single("","");
                    */
                    Guilds.join_subscribed(d);
                    break;
                case 'TYPING_START':
                    break;
                case 'MESSAGE_DELETE':
                    break;
                case 'GUILD_MEMBER_LIST_UPDATE':
                    break;
                case "MESSAGE_CREATE":
                    Messages.recievedMessage(d);
                    break;
                case "MESSAGE_ACK":
                    break;
                case "GUILD_MEMBERS_CHUNK":
                    break
            }
        });
    }

}

 


module.exports = {
    DiscordHandler
}