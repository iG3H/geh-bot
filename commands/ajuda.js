const Discord = require('discord.js');
const Commands = require('.commands/');

exports.run = async (client, message, args) => {
    
const descriptions = {
                       "g.ajuda" : "Use esse comando para ver todos os comandos disponiveis!"
};   
    
var text = "Bot Feito por GêH \n";
  Object.keys(Commands).ForEach(command =>{
   text += `\n ${command}: ${descriptions[command] ? descriptions[command]  : 'Não tem Descrição'}`    
  }
  )
   
const embed = new Discord.MessageEmbed()
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('#f7f7f5')
        .setDescription(text)
        .setTimestamp()
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
  
}