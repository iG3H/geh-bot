const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const sayMessage = args.join(" ");
  
  
  const embed = new Discord.MessageEmbed()
  
        .setTitle('')
        .setColor('#000000')
        .setDescription(sayMessage)
        .setTimestamp()
        .setFooter('')
  
  
  
  
  message.channel.send(sayMessage);
  
    
};