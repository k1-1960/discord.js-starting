module.exports = {
  name: 'ping',
  alias: [],
  async execute (client, message, args){
    message.reply(`${client.ws.ping} ms`);
  }
}