const Discord = require('discord.js');
const Commands = require('commands/');

exports.run = async (client, message, args) => {
    
const descriptions = {};   
  
  var text = "Bot Feito por GêH \n";
  Object.keys(Commands).ForEach(command =>{
   texto += ``\n  
    
    
    
  }
  )
  
const embed = new Discord.MessageEmbed()
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('#f7f7f5')
        .setDescription()
        .setTimestamp()
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
}