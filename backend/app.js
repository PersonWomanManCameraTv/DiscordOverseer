const {Helpers} = require('./helpers.js')
const {DiscordHandler} = require('./discord.js')

 
const Discord = new DiscordHandler(); // Should've been called "initializeWebSocket"

Discord.initializeWebSocket(); //Should've been called "sendAuthPayload", or "authSocketClient"
Discord.listener();

 
