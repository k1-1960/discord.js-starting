module.exports = {
  name: 'messageCreate',
  type: 'on',
  async run (client, message) {
    try{
      
    var prefix = "ds!";   
    if(message.author.bot) return;
    if(message.channel.type === 'DM') return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

   let cmd = client.commands.find(
        c => c.name === command || (c.alias && c.alias.includes(command))
      );
    
   if(cmd) {
      try {
        await cmd.execute(client, message, args);
    } catch (err) {
      console.log("\x1b[43m\x1b[30m", err);
      }
    }
    } catch (err) {
      console.log(`\x1b[41m\x1b[30m ❱ Error: ${err}\x1b[0m`)
    }
  }
    }