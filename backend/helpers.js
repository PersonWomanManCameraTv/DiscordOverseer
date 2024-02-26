

class Helpers{
    constructor(){
         
       
    }
}

// Could've had a better naming, but it's aight
class DiscordSocketHelper{
    constructor(){
 
        this.sDiscord_auth_token =  "";
        this.sStartConnectionEndpoint = "wss://gateway.discord.gg/?v=9&encoding=json";
        this.sStartConnectionPayload = {"op":2,"d":{
            "token":this.sDiscord_auth_token,
            "capabilities":16381,
            "properties":{
                "os":"Windows",
                "browser":"Firefox",
                "device":"",
                "system_locale":"en-US",
                "browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0",
                "browser_version":"117.0",
                "os_version":"10",
                "referrer":"",
                "referring_domain":"",
                "referrer_current":"",
                "referring_domain_current":"",
                "release_channel":"stable",
                "client_build_number":0,
                "client_event_source":null},
                "presence":{"status":"unknown",
                "since":0,
                "activities":[],
                "afk":false},
                "compress":false,"client_state":{"guild_versions":{},"highest_last_message_id":"0","read_state_version":0,"user_guild_settings_version":-1,"user_settings_version":-1,"private_channels_version":"0","api_code_version":0}}};
    }
}
 


module.exports = {
    Helpers,
    DiscordSocketHelper,
    
}
