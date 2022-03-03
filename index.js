/* From our archives */
const client = require('./discord/client');
const { _TOKEN } = require('./config/config');

/* From npm packages */
const { Collection } = require('discord.js');
const handle = require('handle-bot');

/* From/For Client/bot */
client.commands = new Collection();

/* Handling */
handle.events(client, 'eventos', true);
handle.commands('comandos', client.commands, true);

client.login(_TOKEN)