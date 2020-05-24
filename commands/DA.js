const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'Recebeu ',
  'https://imgur.com/w06DjGv.gif',
  'https://imgur.com/SZD4ZLG.gif',
  'https://imgur.com/BNxLtAE.gif'
   
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('você mencionou errado um jogador.');
}

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Primeira Habilidade: Infernum Sinitis')
        .setColor('#CB4335')
        .setDescription(`:flame: ${message.author} INCENDIOU ${user} :flame:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Queime Herege!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}