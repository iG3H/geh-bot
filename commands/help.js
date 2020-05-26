const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
    if (!message.mentions.users.size) {
      return message.channel.send(
        `> **Seu** avatar 🖼 ${message.author.displayAvatarURL}`
      )
    }
    
    )

    return message.channel.send(avatarList)
  },
