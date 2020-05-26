const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const content = [`
              
                TESTANDO A PORRA DO COMANDO EM JAVA!
.setAuthor('🔍 Informações do usuário')


  `]


   
  message.delete().catch(O_o => {});

let avatar = message.author.displayAvatarURL({format: "png"});
const embed = new Discord.MessageEmbed()
        
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('RANDOM')
        .setDescription(content)
        .setThumbnail(avatar)

        .addField('**Nickname**', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
     
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
}