const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');

const prefix = '~';




bot.on('message', async message => {



    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if(message.content.startsWith(prefix + 'VOTE')) {
      const embed = new Discord.RichEmbed()
      .setTitle('Vote Started!')
      .setColor('0x4286f4')
      .setDescription(`VOTE for ^`)
      let msg = await message.channel.send(embed)
      await msg.react('🎉')
      const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === '🎉', { time: 30000})
      let user = reactions.get('🎉').users.filter(user => user.bot === false).map(user => user.username)
      let count = reactions.get('🎉').users.filter(user => user.bot === false).count;
      let person = reactions.get('🎉').users.filter(user => user.bot === false)
      embed.setDescription(`**${count}** user has voted`)
      msg.edit(embed)
      console.log(`All users ${user}`)
      message.channel.send(`${user}`)


    }
  });


bot.on('ready', () => {
  var Guilds = bot.guilds.size
  bot.user.setGame(`~help | ` + Guilds + ' Servers!');
  console.log('Bot Successfully Started!')

});

bot.login('Mzc5MDExNDk5NTgwMDYzNzQ0.DU_rWA.fKXD7mtAMUXFScBUozHhdrtSeRg');
