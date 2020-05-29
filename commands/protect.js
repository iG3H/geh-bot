const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/y4hfWyo.gif',
  'https://imgur.com/EJUFBFv.gif',
  'https://imgur.com/vOr86i0.gif'
   
];

  message.delete().catch(O_o => {});

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: "png"});
  
var chance = [
                'teve sucesso :v:',
                'falhou vergonhosamente :thumbsdown:'    
];
  
  const embed = new Discord.MessageEmbed()
        .setTitle('Quarta Habilidade: Perfectus Defensionis')
        .setColor('#8ff2a8')
        .setDescription(`:shield: ${message.author}, ${chance} na sua proteção! :shield:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Livra-me deste mal, oh luz eu te peço!.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}