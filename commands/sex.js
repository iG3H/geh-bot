const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Nada de pornô pra tu criança! Você não tem permissão do ADM para isso, FDP!"
    );

var list = [
  'https://imgur.com/CZrk8XH.gif',
  'https://imgur.com/0Vc9I2R.gif',
  'https://imgur.com/xch6xZE.gif',
  'https://imgur.com/PJIHb4Z.gif',
  'https://imgur.com/dWlSqpi.gif'
  
];

  message.delete().catch(O_o => {});

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('você mencionou errado um User, tente do jeito certo animal.');
}

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#f54254')
        .setDescription(`:underage: ${message.author} quer fazer isto com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail('')
        .setFooter('Use com moderação!!')
        .setAuthor('');
  await message.channel.send(embed);
  
}