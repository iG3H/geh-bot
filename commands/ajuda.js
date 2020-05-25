const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let avatar = message.author.displayAvatarURL({format: "png"});
  
  const embed = new Discord.MessageEmbed()
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('#f7f7f5')
        .setDescription()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
  await message.channel.send(embed);
  
}