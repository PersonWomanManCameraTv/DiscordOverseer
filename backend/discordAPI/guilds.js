/* Haven't had time to update this yet, so it's prob the worst code, but it's pretty self explanatory once you make sense of the spaghetti code */
const {ws} = require("./socket.js")

class Guilds{
    constructor(){
        this.savedChannels = [];
        this.channel_countx = 0;
 
        this.server_count = 0;
        this.channel_count = 0;
        this.filtered_channels = 0;
    }

    join_single(guild_id, channel_id){
        // Return type: jsonObject
        if (typeof guild_id !== 'string' && typeof channel_id !== 'string') {
            return {
                sucess: false,
                message: "guilds.js -> join(): Type of params `server_id` or `channel_id` must be of value `string`"
            };
        }

        payload = { "op": 14, "d": { "guild_id": guild_id, "typing": false, "threads": true, "activities": true, "members": [], "channels": { "0": [[0, 99]] }, "thread_member_lists": [] } }
        ws.send(JSON.stringify(payload));

        return {
            sucess: true,
            message: `You have joined a guild with the id of \`${guild_id}\``
        };
       
    }

    join_subscribed(d, callback = () => {}){
        let my_server_ids = []

        try {
            const result = d.guilds;
            //lol callback. Just sending back the complete my subbed guilds list
            callback({
                type: "GUILDS",
                result
            })

            result.map((server_item) => {
                let current_server_id = server_item.properties.id && server_item.properties.id ? server_item.properties.id : ""
                my_server_ids.push(current_server_id)
                this.server_count++
            })

            my_server_ids.map(async(server_id, index) => {
                // Now join each guild. Response doesn't matter,but it may end up as GUILD_MEMBER_LIST_UPDATE
                const payload = { "op": 14, "d": { "guild_id": server_id, "typing": true, "threads": true, "activities": true, "members": [], "channels": {  }, "thread_member_lists": [] } }
                ws.send(JSON.stringify(payload));
            })
        } catch (err){
            console.log("I can't regenerate it and I think it's channel or server specific. But I don't get it enough to care tbh")
            console.log(err)
        }

    }

module.exports = {
    GuildsHandler: Guilds
}
