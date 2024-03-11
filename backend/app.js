const {Helpers} = require('./helpers.js')
const {DiscordHandler} = require('./discord.js')

 
const Discord = new DiscordHandler();

Discord.initializeWebSocket();
Discord.listener();

 
