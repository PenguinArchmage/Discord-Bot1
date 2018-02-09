// Calling Packages
const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js'); // Make sure you call the packages you install.

// Global Settings
const prefix = '~'; // This is the prefix, you can change it to whatever you want.

// Functions
function hook(channel, title, message, color, avatar) { // This function uses quite a few options. The last 2 are optional.

    // Reassign default parameters - If any are blank.
    if (!channel) return console.log('Channel not specified.');
    if (!title) return console.log('Title not specified.');
    if (!message) return console.log('Message not specified.');
    if (!color) color = 'd9a744'; // This is an optional variable. Therefore the default HEX color will be whatever you post there. Mine will be d9a744
    if (!avatar) avatar = 'https://vignette1.wikia.nocookie.net/clubpenguin/images/3/36/Sys_Snowbot.png/revision/latest?cb=20150928064319' // This is also an optional variable, you can change the default to any icon.

    // We want to remove spaces from color & url, since they might have it on the sides.
    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');

    // This is the start of creating the webhook
    channel.fetchWebhooks() // This gets the webhooks in the channel
        .then(webhook => {

            // Fetches the webhook we will use for each hook
            let foundHook = webhook.find('name', 'Webhook'); // You can rename 'Webhook' to the name of your bot if you like, people will see if under the webhooks tab of the channel.

            // This runs if the webhook is not found.
            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                    .then(webhook => {
                        // Finally send the webhook
                        webhook.send('', {
                            "username": title,
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description":message
                            }]
                        })
                            .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                                console.log(error);
                                return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                            })
                    })
            } else { // That webhook was only for if it couldn't find the original webhook
                foundHook.send('', { // This means you can just copy and paste the webhook & catch part.
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                    .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                        console.log(error);
                        return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                    })
                }

        })

}

// Listener Event: Runs whenever a message is received.
bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands

    // Ping
    if (msg === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('Pong!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.

    }

    // Purge
    if (msg.startsWith(prefix + 'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Lets delete the command message, so it doesnt interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (sender.id != 290691954696781835) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('Nice try, <@' + sender.id + '>')
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }

    if (msg.startsWith(prefix + 'CAT')) {
      var CatArray = new Array('http://bestanimalwallpapers.com/wp-content/uploads/2017/09/e38767b2d4005b865e1854c265e9ab7e.jpg',
      'http://bestanimalwallpapers.com/wp-content/uploads/2017/09/e38767b2d4005b865e1854c265e9ab7e.jpg',
      'https://i.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg',
      'https://i.ytimg.com/vi/xUGePDg4B1A/maxresdefault.jpg',
      'http://www.cutecatcoverage.com/news/wp-content/uploads/2012/01/cute-cat-kitten.jpg')
      var Cat = CatArray[Math.floor(Math.random() * CatArray.length)];

    if (msg.startsWith(prefix + 'ROULETTE')) {
      if (sender.id == 290691954696781835 || sender.id == 362723394279702528 || sender.id == 315236877244563458) {
        var PersonArray = new Array('<@290691954696781835>','<@362723394279702528>','<@315236877244563458>')
        var Person = PersonArray[Math.floor(Math.random() * PersonArray.length)];
        message.channel.send

      }


    }




      message.channel.send('Here is a random cat!' + Cat)
    };

    if (msg.startsWith(prefix + 'AUSTIN')) {
      var austin = new Array('well according to the theory of relativity','I AM PICKLE RIIIIIIIIIIICK','WUBBA LUBBA DUB DUB','no that is false','why did you kick me','wEll IF You ThiNk AboUt It');
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


    if (msg.startsWith(prefix + 'DOG')) {
      var DogArray = new Array('https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg','https://cdn.shopify.com/s/files/1/1368/5523/t/2/assets/slide_6.jpg?16620316254560117391','https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg')
      var Dog = DogArray[Math.floor(Math.random() * DogArray.length)];
      const embed = new Discord.RichEmbed()
          .setDescription(`**HERE IS A DOG**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
          .setAuthor('Dog for <@sender.id>') // This shows the current location of the weather.
          .setThumbnail('https://assets1.cdn-mw.com/mw/images/article/art-wap-article-main/puppy-3143-7cfb4d6a42dfc7d9d1ae7e23126279e8@1x.jpg') // This sets the thumbnail of the embed
          .setDescription(Dog)

    }


    if (msg.startsWith(prefix + 'WEATHER')) { // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
            if (result === undefined || result.length === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                // Now, let's display it when called
                message.channel.send({embed});
                console.log(sender + ' checked the weather' )
                if (sender.id == 290691954696781835 || sender.id == 362723394279702528 ) {
                  message.channel.send('hi')
                }

              })
        };


    // This episode will be going over the hook command.
    if (msg.startsWith(prefix + 'HOOK')) { // We are using a .startsWith because the command will have arguments.

        // Delete the message that the user sends
        message.delete();

        if (msg === prefix + 'HOOK') { // This checks if the only thing they sent was 'Hook'
            return hook(message.channel, 'Hook Usage', `${prefix}hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`,'FC8469','https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png') // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(prefix.length + 4).split(","); // This slices the first 6 letters (prefix & the word hook) then splits them by 'commas'

        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]); // This is where it actually calls the hook.
    }

});

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
bot.on('ready', () => {

  console.log('Bot Successfully Started!')

});

bot.login('MzkwNzAwNTk0MTQwMDIwNzM2.DRN7zQ.1UFlg-1tHLx-Mjcv2XilhqXCIFY');
