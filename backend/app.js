 
//let {ClientInputConfig} = require('./config.js')

const {Helpers} = require('./helpers.js')
const {DiscordHandler} = require('./discord.js')

//const config = new ClientInputConfig()
 
const Discord = new DiscordHandler();

Discord.initializeWebSocket();
Discord.listener();

 