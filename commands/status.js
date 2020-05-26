const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const content = [`
              
                TESTANDO A PORRA DO COMANDO EM JAVA!
                🔍 Informações do usuário - ${message.author.tag}



  `]

const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.member;

let avatar = message.author.displayAvatarURL({format: "png"});
  
const embed = new Discord.MessageEmbed()
        
        .setAuthor(`🔍 Informações do usuário - ${message.author.tag}`)
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('RANDOM')
        .setDescription(member)
        .setThumbnail(avatar)  
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
}