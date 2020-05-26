const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
const avatarList = message.author.displayAvatarURL({format: "png"});

return message.channel.send(avatarList)
  
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(`> **Seu Avatar**`)
        .setImage(avatarList)
  await message.channel.send(embed);
  

}
