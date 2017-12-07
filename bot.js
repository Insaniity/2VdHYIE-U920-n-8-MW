
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
   	  client.user.setStatus("online"); //dnd , online , ldle
      client.user.setGame("*leaks");
      console.log("Running as user "+client.user.username+"#"+client.user.discriminator+".");
//			bot.user.setAvatar('./avatar.png')
//  			.then(user => console.log(`New avatar set!`))
//  			.catch(console.error);
});

client.on('message', message => {

  if (message.content.startsWith("*leaks")) {
      message.channel.send({embed: {
      title: 'Leaks',
      description: 'Latest update 07/12/17 | Discord: [https://discord.gg/6cCWCPW](https://discord.gg/6cCWCPW)',
      fields: [
        {
          name: 'List of current leaks',
          value: '[Leaked Money Making Method](https://cdn.discordapp.com/attachments/386604586565107713/386604643788128267/MopxrrsMoneyGuide.pdf)\n[Amazon method](https://cdn.discordapp.com/attachments/384365250163638272/386984237011697684/Amazon_e-Book.txt)\n[Discord Raid Bots](http://www.xup.in/dl,19294864/DISCORD_BOT.RAR/)\n[uProxy, Password: LeakedSource_Username](https://cdn.discordapp.com/attachments/384364846239711234/387334787234267169/uProxy.rar)\n[Exploit Source, check discord for VT.](http://www.filedropper.com/projectshadowv12)\n[2006-2013 ROBLOX DB Leak](https://www.dropbox.com/s/26psfbdzar8bgsn/RBX_DB.zip?dl=0)\n[Cookie Muncher Revived](https://cdn.discordapp.com/attachments/380157436981411843/388427144750956545/Cookie_Ghost_Buyers-Release.zip)'
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: 'LeakedSource'
      }
    }});
  }
});

client.login("Mzg4NDQyNzM5MzY2MTY2NTQy.DQtFKw.a3B1vYUbUJ4a-05NMz3JiaLIl_I");
//client.login(process.env.client_TOKEN);
