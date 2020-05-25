const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list1 = [
    
    'https://imgur.com/GkeMEmn.png',
    'https://imgur.com/DqZxAwR.png',
    'https://imgur.com/KrGHNyo.png',
    'https://imgur.com/lEJElPF.png',
    'https://imgur.com/y3v4oVL.png'           
  ];
   
  let element = list1[Math.floor(Math.random() * list1.length)];
  
  let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
  
        .setTitle('Este é seu Avatar!')
        .setColor('#afb0b3')
        .setDescription('')
        .setImage(element)
        .setImage(element)
        .setThumbnail(avatar)
  
  await message.channel.send(embed);
  
}
