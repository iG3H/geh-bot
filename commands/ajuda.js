const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const com = (`
              g.ajuda : exibe a lista de comandos dis poniveis.
              
`)                     
   
const embed = new Discord.MessageEmbed()
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('#f7f7f5')
        .setDescription(com)
        .setTimestamp()
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
  
}