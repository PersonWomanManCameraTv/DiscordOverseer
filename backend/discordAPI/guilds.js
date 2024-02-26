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

    join_subscribed(d){
        let subscribed_guilds = {}
        try {
            const result = d.guilds;

            result.map((server_item) => {
                this.server_count = this.server_count + 1
                let current_server_id = server_item.properties.id
                subscribed_guilds[current_server_id] = []

                server_item.channels.map((channel_item) => {

                    /*
                        Look into this. Sometimes "member" doesn't want to appear in some servers as a role. I'm using this to see
                        if I have perms to join that channel. No role member in server, no channel.
                        So, there's a socket call to get roles of a server, but this is okay for now.
                    */
                    channel_item.permission_overwrites.map((roles_overwrite) => {
                        if (roles_overwrite.type === "member") {
                            this.channel_count = this.channel_count + 1
                            subscribed_guilds[current_server_id].push(channel_item.id)
                        }else{
                            this.filtered_channels += 1
                        }
                    })
                })
            })

            const server_keys = Object.keys(subscribed_guilds)

            server_keys.map(async(server_id_, index) => {
                // Now join each guild
                const payload = { "op": 14, "d": { "guild_id": server_id_, "typing": true, "threads": true, "activities": true, "members": [], "channels": { "0": [[index, 99]] }, "thread_member_lists": [] } }
                ws.send(JSON.stringify(payload));
            })
        } catch (err){
            console.log("Send this error message to me. I can't regenerate it and I think it's channel or server specific.")
            console.log(err)
        }

    }

    clear_guilds(){
        const payload = { "op": 4, "d": { "guild_id": null, "channel_id": null, "self_mute": true, "self_deaf": false, "self_video": false, "flags": 2 } }
        ws.send(JSON.stringify(payload));
    }
}

module.exports = {
    GuildsHandler: Guilds
}