const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const embed = new Discord.MessageEmbed();
  const sayMessage = args.join(" ");
  
  message.delete().catch(O_o => {});
  
  message.channel.send(sayMessage);
  
  
  
};