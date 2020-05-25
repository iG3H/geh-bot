const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
const descriptions = {
  
  
  
};   
  
  
const embed = new Discord.MessageEmbed()
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('#f7f7f5')
        .setDescription()
        .setTimestamp()
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
}