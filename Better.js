const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '~';

bot.on('message', message => {
  
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

if (messageReactionAdd == 371122590233788416) {
  message.channel.send('there is a bennett!')
} else return;
});
bot.on('ready', () => {

  console.log('Bot Successfully Started!')

});

bot.login('MzkwNzAwNTk0MTQwMDIwNzM2.DRN7zQ.1UFlg-1tHLx-Mjcv2XilhqXCIFY');
