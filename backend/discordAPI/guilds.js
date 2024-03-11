/* Haven't had time to update this yet, so it's prob the worst code, but it's pretty self explanatory once you make sense of the spaghetti code */
const {ws} = require("./socket.js")

class Guilds{
    join_subscribed(d, callback = () => {}){
        let my_server_ids = []

        try {
            const result = d.guilds;
            
            result.map((server_item) => {
                const current_server_id = server_item.properties.id && server_item.properties.id ? server_item.properties.id : ""
                my_server_ids.push(current_server_id)
            })

            my_server_ids.map(async(server_id, index) => {
                // Now join each guild. Response doesn't matter,but it may end up as GUILD_MEMBER_LIST_UPDATE
                // Dpending on how many servers you have, you may need to add a sleep 500ms here. But I don't have an issue.
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
