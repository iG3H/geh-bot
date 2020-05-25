const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list = [
    
    'https://imgur.com/GkeMEmn.png',
    'https://imgur.com/DqZxAwR.png',
    'https://imgur.com/KrGHNyo.png',
    'https://imgur.com/lEJElPF.png',
    'https://imgur.com/y3v4oVL.png'           
  ];
  
  
  let rand = list[Math.floor(Math.random() * list.length)];
  let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
  
        .setTitle('Este é seu Avatar!')
        .setColor('#afb0b3')
        .setDescription('')
        .setImage(rand)
        .setThumbnail(avatar)          
  await message.channel.send(embed);
  
}
