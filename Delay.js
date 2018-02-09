
const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');

const prefix = '~';

bot.on('message', message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);
  let messageslice = message.content.slice(',');

  var start = Date.now();

  if (msg.startsWith(prefix + 'DELAY')) {
  message.channel.send('Starting timer...')
// expected output: starting timer...
  var delaylength = message.content.slice(7)
  setTimeout(function() {
  var millis = Date.now() - start;

  message.channel.send("seconds elapsed = " + Math.floor(millis/1000));
  // expected output : seconds elapsed = 2
}, delaylength);
}
});


bot.on('ready', () => {
  var Guilds = bot.guilds.size
  bot.user.setGame(`~help | ` + Guilds + ' Servers!');
  console.log('Bot Successfully Started!')

});

bot.login('Mzc5MDExNDk5NTgwMDYzNzQ0.DU_rWA.fKXD7mtAMUXFScBUozHhdrtSeRg');
