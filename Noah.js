const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');

const prefix = '~';


bot.on('message', message => {


    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

      if (msg.startsWith('GTG')) {
        message.channel.send('Bye!')
      };

      if (msg.startsWith('@EVERYONE')) {
        message.channel.send('Was that really worth pinging everyone??')
      };

      if (msg.startsWith('I GTG')) {
        message.channel.send('Bye!')
      };

      if (msg.startsWith('COOL')) {
        message.channel.send('That is cool')
      };

      if (msg.startsWith('HEY')) {
        message.channel.send('Greetings person!')
      };

      if (msg === 'HI') {
        message.channel.send('Greetings person!')
      };

      if (msg.startsWith('@Egg')) {
        message.channel.send('Im sorry but the person you are trying to reach ***Penguin Archmage*** is not available.\nEither DM ***Penguin Archmage*** if its important or stop pinging me and leave me alone.\nThanks!')
      };


});




















bot.on('ready', () => {

  console.log('Bot Successfully Started!')

});

bot.login('MzkwNzAwNTk0MTQwMDIwNzM2.DRN7zQ.1UFlg-1tHLx-Mjcv2XilhqXCIFY');
