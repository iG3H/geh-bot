const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/gBrqVfq.gif',
  'https://imgur.com/csysti6.gif',
  'https://imgur.com/u985dJ8.gif'
   
];

  message.delete().catch(O_o => {});
  
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('você mencionou errado um User, tente do jeito certo animal.');
}

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Segunda Habilidade: Infinitus Frigus')
        .setColor('#74a1e8')
        .setDescription(`:snowflake: ${message.author} CONGELOU ${user} :snowflake:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Nada Escapa do Gelo Verdadeiro!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}