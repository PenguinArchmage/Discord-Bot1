
const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');

const prefix = '~';


bot.on('message', message => {


    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg === prefix + 'PING') {

        message.channel.send('Pong!');

    }


    if (msg.startsWith(prefix + 'PURGE')) {

        async function purge() {

            message.delete();


            if (sender.id == 362723394279702528) {
                message.channel.send('Nice try, <@' + sender.id + '>')
                return;
            }


            if (isNaN(args[0])) {

                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');

                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');


            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));

        }


        purge();

    }

    if (msg.startsWith(prefix + 'CAT')) {
      var CatArray = new Array('http://bestanimalwallpapers.com/wp-content/uploads/2017/09/e38767b2d4005b865e1854c265e9ab7e.jpg',
      'https://i.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg',
      'https://i.ytimg.com/vi/xUGePDg4B1A/maxresdefault.jpg',
      'http://www.cutecatcoverage.com/news/wp-content/uploads/2012/01/cute-cat-kitten.jpg')
      var Cat = CatArray[Math.floor(Math.random() * CatArray.length)];
      message.channel.send('Here is a random cat!' + Cat)
    };

    if (msg.startsWith(prefix + 'AUSTIN')) {
      var austin = new Array('Noah, DO <insert random thing>','I will have my hackers do it.','I bowl a 300');
      var rand = austin[Math.floor(Math.random() * austin.length)];


      message.channel.send(rand)
      }

      if (msg.startsWith(prefix + 'ROULETTE')) {
        if (sender.id == 290691954696781835 || sender.id == 362723394279702528 || sender.id == 315236877244563458) {
          var PersonArray = new Array('<@290691954696781835>','<@362723394279702528>','<@315236877244563458>')
          var Person = PersonArray[Math.floor(Math.random() * PersonArray.length)];
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
          message.channel.send(Person)
        }
        else {
          message.channel.send('Sorry you are not in Roultte.If you would like to join please message my owner.')
          return;
        }

      }

      if (msg.startsWith(prefix + 'CLEARCHAT')) {
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n')
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n')
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n')
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n')
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n')

      }



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



    if (msg.startsWith(prefix + 'HOOK')) {


        message.delete();

        if (msg === prefix + 'HOOK') {
            return hook(message.channel, 'Hook Usage', `${prefix}hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`,'FC8469','https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png') // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(prefix.length + 4).split(",");

        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);
    }

});


bot.on('ready', () => {

  console.log('Bot Successfully Started!')

});

bot.login('MzkwNzAwNTk0MTQwMDIwNzM2.DRN7zQ.1UFlg-1tHLx-Mjcv2XilhqXCIFY');
