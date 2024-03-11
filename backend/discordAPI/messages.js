const {ws} = require("./socket.js")
const {insertSingleSqlQuery} = require("../database/database.js")

class Messages{
    constructor(){

    }

    recievedMessage(data){
        /* 
            This function is a mess, but I'm going for a drive cause car goes vrroooom
        */
        const server_id = data.guild_id;
        const channel_id = data.channel_id;
        const username = data.author.username;
        let nickname;

        try {
            nickname = data.member.nick ? data.member.nick : username;
        } catch {
            nickname = "Error: nickname could not be collected. I could fix this, but it's late." // future me laughing at this, but it works
        }

        const avatar = data.author.avatar
        // const discriminator = data.author.discriminator;
        const user_id = data.author.id;
        //const roles = data.member.roles; 
        // const joined_at = data.member.joined_at;
        const message_content = data.content
        let is_referenced = false;
        let referenced_message_data = {}
        
        if (data['referenced_message']) {
            // I guess this still works, it's been almost 6 months
            is_referenced = true;
            const username = data.referenced_message.author.username
            referenced_message_data['username'] = username
            referenced_message_data['content'] = data.referenced_message.content
        }

        
        insertSingleSqlQuery({
            username,
            nickname,
            server_id,
            channel_id,
            message_id: data.nonce,
            message_content
        })


        console.log({
            type: "message",
            server_id,
            channel_id,
            username,
            nickname,
            user_id,
            avatar,
            message: message_content,
            ...(Object.keys(referenced_message_data).length && referenced_message_data),
            extra: data
        })
    }

    sendMessage(){
        // send messages to a discord channel.
    }
}

module.exports = {
    MessagesHandler: Messages
}






 
