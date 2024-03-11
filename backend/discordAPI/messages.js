const {ws} = require("./socket.js")
const {insertSingleSqlQuery} = require("../database/database.js")

class Messages{
    constructor(){

    }

    recievedMessage(data){
        console.log(data)
    }

    sendMessage(){
        // send messages to a discord channel.
    }
}

module.exports = {
    MessagesHandler: Messages
}






 
