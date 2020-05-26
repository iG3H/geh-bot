const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const status = {
      
      online: `:white_small_square: - Online`,
      idle: `:small_orange_diamond: - Ausente`,
      dnd: `:small_red_triangle_down: - Não pertubar`,
      offline: `:black_small_square: - Offline`  
      
                    };

const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.member;

let avatar = message.author.displayAvatarURL({format: "png"});
  
const placa = [`

${status[member.user.presence.status]}

`]
        
await message.channel.send(placa);
  
}