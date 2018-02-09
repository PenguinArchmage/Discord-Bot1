const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();
const prefix = '~';

bot.on('message', async message => {

    if(message.content.startsWith(prefix + 'vote')) {
      let args = message.content.split(' ').slice(1);
      let customArgs = args.slice(0).join(' ').split(', ');

      let time = customArgs[0];
      if (!time) return message.reply('Please provide a time');
      let voteTitle = customArgs[1];
      if (!voteTitle) return message.reply('Please provide a vote Description');
      console.log('--------------------------------------------------------------------------\nA new vote has started!\nTime: ' + time + '\nReason: ' + voteTitle)

      const embed = new Discord.RichEmbed()
      .setTitle('New vote started!')
      .setDescription(`${voteTitle}\n\nReact now with 👍 or 👎\nTime : ${ms(ms(time), { long: true })}`)
      .setColor('0x42f456')
      .setTimestamp()

      let msg = await message.channel.send(embed)
      await msg.react('👍')
      await msg.react('👎')

      const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === '👍' || reaction.emoji.name ==='👎', { time: ms(time)})
      let countup = reactions.get('👍') ? reactions.get('👍').count - 1 : 'None';
      let countdown = reactions.get('👎') ? reactions.get('👎').count - 1 : 'None';
      embed.setTitle(' The vote for ' + voteTitle + ' has ended')
      embed.setDescription(`👍: ${countup}\n\n👎: ${countdown}`)
      embed.setColor('0xf44141')
      msg.clearReactions()
      await msg.edit(embed)
      console.log('The vote on *' + voteTitle + '* has been voted on and decided that:\n  Yes: ' + countup + '\n  No: ' + countdown)
      const publicembed = new Discord.RichEmbed()
        .setTitle(`A vote has occured!`)
        .addField('The vote was on:',`${voteTitle}`,true)
        .setDescription(`The final vote was:\n\n👍: ${countup}\n\n👎: ${countdown}`)
        .setColor('0x42f456')
        .setTimestamp()



      let channel2 = message.guild.channels.find('name', 'requests')
      if (channel2) channel2.send(publicembed);



    }
  });

  bot.on('ready', () => {
    var Guilds = bot.guilds.size
    bot.user.setGame(`~help | ` + Guilds + ' Servers!');
    console.log('Bot Successfully Started!')

  });

bot.login('Mzc5MDExNDk5NTgwMDYzNzQ0.DVqusw.HxHN3JyHxcp_lNSsR5IzE28_DNw');
