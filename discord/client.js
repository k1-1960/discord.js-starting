const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ], allowedMentions: {
    repliedUser: false 
  }
});

module.exports = client;