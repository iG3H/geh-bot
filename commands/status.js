const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
    const inline = true
    const status = {
      online: ' `🟢` Online',
      idle: ' `🟠` Ausente',
      dnd: ' `🔴` Não pertubar',
      offline: ' `⚫️` Offline'
    };
  
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
    const target = message.mentions.users.first() || message.author
    const bot = member.user.bot ? '`🤖` Sim' : ' `🙂` Não'
  
    
    const embed = new Discord.RichEmbed()

      .setThumbnail((target.displayAvatarURL))
      .setColor('RANDOM')
      .setAuthor('🔍 Informações do usuário')
      .addField('**Tag**', `${member.user.tag}`, inline)
      .addField('**ID**', member.user.id, inline)
      .addField('**Nickname**', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
      .addField('**Bot**', `${bot}`, inline, true)
      .addField('**Status**', `${status[member.user.presence.status]}`, inline, true)
      .addField('**Jogando**', `${member.user.presence.game ? `${member.user.presence.game.name}` : ' Nada'}`, inline, true)
      .addField('**Cargos**', `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(' **|** ') || 'Nenhum cargo'}`, true)
      
      .setTimestamp()

  await message.channel.send(embed)
  
}