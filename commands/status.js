const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const status = {
      
      online: `Online`,
      idle: `Ausente`,
      dnd: `Ocupado`,
      offline: `Offline`  
      
                    };
  
  const symb = {
      
      online: `:white_small_square:`,
      idle: `:small_orange_diamond:`,
      dnd: `:small_red_triangle_down:`,
      offline:`:black_small_square:`  
      
                    };

const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.member;

  
message.delete().catch(O_o => {});

const placa = [`

${symb[member.user.presence.status]} É claro que você está ${status[member.user.presence.status]}, seu idiota!

`]
          
  const avatar = message.author.displayAvatarURL({format: "png"});
  
  const embed = new Discord.MessageEmbed()
  
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(placa)
  
  await message.channel.send(embed);
  
}