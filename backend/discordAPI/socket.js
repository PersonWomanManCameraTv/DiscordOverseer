const WebSocket = require('ws');
const {DiscordSocketHelper} = require('../helpers.js')

const DiscordHelper = new DiscordSocketHelper();

let ws = new WebSocket(DiscordHelper.sStartConnectionEndpoint);
 

module.exports = {
    ws
}