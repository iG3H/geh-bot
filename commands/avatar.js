const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list = [
    
    '.png',
    '.png',
    '.png',
    '.png',
    '.png'
    
              
    
  ]
  
  
  var rand = list[Math.floor(Math.random() * list.length)];
  let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
  
        .setTitle('Este é seu Avatar!')
        .setColor('#fcba03')
        .setDescription('')
        .setThumbnail('')
          
  await message.channel.send(embed);
  
}
