function hook(channel, title, message, color, avatar) {


    if (!channel) return console.log('Channel not specified.');
    if (!title) return console.log('Title not specified.');
    if (!message) return console.log('Message not specified.');
    if (!color) color = 'd9a744';
    if (!avatar) avatar = 'https://vignette1.wikia.nocookie.net/clubpenguin/images/3/36/Sys_Snowbot.png/revision/latest?cb=20150928064319'


    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');


    channel.fetchWebhooks()
        .then(webhook => {


            let foundHook = webhook.find('name', 'Webhook');


            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png')

                        webhook.send('', {
                            "username": title,
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description":message
                            }]
                        })
                            .catch(error => {
                                console.log(error);
                                return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                            })
                    })
            } else {
                foundHook.send('', {
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                    .catch(error => {
                        console.log(error);
                        return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                    })
                }

        })

}
