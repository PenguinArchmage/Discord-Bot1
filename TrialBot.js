const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '~';

bot.on('awaitReaction', reaction => {

  let emoji = reaction;





      if (emoji == 404704839474348032) {
        var Upvote = Upvote + 1
        console.log(Upvote)
      }
});






bot.on('ready', () => {

  console.log('Bot Successfully Started!')

});

bot.login('MzkwNzAwNTk0MTQwMDIwNzM2.DRN7zQ.1UFlg-1tHLx-Mjcv2XilhqXCIFY');
