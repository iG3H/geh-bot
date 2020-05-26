const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const status = {
      online: ' `:green_circle: ` Online',
      idle: ' `:crescent_moon: ` Ausente',
      dnd: ' `:no_entry_sign: ` Não pertubar',
      offline: ' `⚫️` Offline'
    };

const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.member;

let avatar = message.author.displayAvatarURL({format: "png"});
  
const placa = [`

${status[member.user.presence.status]}

`]
        
await message.channel.send(placa);
  
}