const Discord = require('discord.js');

exports.run = async (client, message, args) => {

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
        .setTitle('Oi! Vem cá... Posso brincar com você?')
        .setColor('#e60082')
        .setDescription(`:underage: ${message.author} está se alimentando de ${user} :underage:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Use com moderação!!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}