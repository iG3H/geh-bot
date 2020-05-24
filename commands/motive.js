const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [

  'Todo dia pode ser um bom dia, se você não estiver nele!',
  'A morte é inevitável!',
  'Não deixe para desistir amanhã se você pode desistir agora!',
  'Nada é tão horrivel que você não possa piorar!'
  
]

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Uma reflexão para você...')
        .setColor('#34495E')
        .setDescription(rand)
        .setImage()
        .setTimestamp()
        .setThumbnail()
        .setFooter('Vida que segue...')
        
  await message.channel.send(embed);


} 