const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/zYyDXUz.gif',
  'https://imgur.com/Nys9ale.gif',
  'https://imgur.com/epGVKxr.gif',
  'https://imgur.com/Zk1x4kP.gif'
   
];

  message.delete().catch(O_o => {});

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: "png"});
  
var chance = [
                'teve sucesso :v:',
                'falhou :thumbsdown:'    
];
  
  var rand2 = chance[Math.floor(Math.random() * chance.length)];
  
  const embed = new Discord.MessageEmbed()
        .setTitle('Quarta Habilidade: Perfectus Defensionis')
        .setColor('#8ff2a8')
        .setDescription(`:shield: ${message.author}, ${rand2} na sua proteção! :shield:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Livra-me deste mal, oh luz eu te peço!.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}