 // Not added yet, but easy enough. Was moving things around

class ClientInputConfig{
    constructor(){
        this.bUse_config = false;  
        this.sServer_id = ""; // Add a server_id to watch a server. Empty means all servers
        this.sChannel_id = "";   // Add a channel_id to watch a channel. server_id needs to be parent server. Empty means all channels
        this.aUsers = [] // Add user_ids to watch
        this.aRoles = [] // Add role_ids to watch
        this.bBots = true; // Watch bots. Bots will send ALOT of messages between channels
    }
}

module.exports = {
    ClientInputConfig
}