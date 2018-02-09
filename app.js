
const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');

const prefix = '~';


bot.on('message', message => {


    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg.startsWith(prefix + 'CAT')) {
      var CatArray = new Array('http://bestanimalwallpapers.com/wp-content/uploads/2017/09/e38767b2d4005b865e1854c265e9ab7e.jpg',
      'https://i.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg',
      'https://i.ytimg.com/vi/xUGePDg4B1A/maxresdefault.jpg',
      'http://www.cutecatcoverage.com/news/wp-content/uploads/2012/01/cute-cat-kitten.jpg')
      var Cat = CatArray[Math.floor(Math.random() * CatArray.length)];
      message.channel.send('Here is a random cat!' + Cat)
    };

      var start = Date.now();

      if (msg.startsWith(prefix + 'DELAY')) {
        message.channel.send('Starting timer...')

        var delaylength = message.content.slice(7)
        setTimeout(function() {
          var millis = Date.now() - start;

          message.channel.send("seconds elapsed = " + Math.floor(millis/1000));

        }, delaylength);
      }


      if (message.content === '~avatar') {

        message.reply(message.author.avatarURL);
      };


    if (msg.startsWith(prefix + 'WEATHER')) {

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
            if (err) message.channel.send(err);

            if (result === undefined || result.length === 0) {
                message.channel.send('**Please enter a valid location.**')
                return;
            }


            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)


                message.channel.send({embed});
                console.log(sender + ' checked the weather' )

              })
        };







          if (msg.startsWith(prefix + 'STATS')) {

            var Guilds = bot.guilds.size
            var Users = bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()

            const embed = new Discord.RichEmbed()
                .setDescription(`**Stats:**`)
                .setAuthor(`Stats for Virus.exe`)
                .setColor(0x00AE86)
                .addField('**Guilds:**',`${bot.guilds.size}`, true)
                .addField('**Users:**',Users, true)



                  message.channel.send({embed});
              }
    });

bot.on('ready', () => {
  var Guilds = bot.guilds.size
  bot.user.setGame(`~help | ` + Guilds + ' Servers!');
  console.log('Bot Successfully Started!')

});

bot.login('Mzc5MDExNDk5NTgwMDYzNzQ0.DU_rWA.fKXD7mtAMUXFScBUozHhdrtSeRg');
