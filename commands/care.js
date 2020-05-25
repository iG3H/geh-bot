const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/uHFAsns.gif',
  '.gif',
  '.gif',
  '.gif',
  '.gif'
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('você mencionou errado um User, tente do jeito certo animal.');
}

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('É uma Crise de Carência')
        .setColor('#f291ca')
        .setDescription(`:heartpulse: ${message.author} está tentando seduzir ${user} :heartpulse:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Só, só o amor, só o amor, faz o mundo andar.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}