const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
    'Recebeu 1 de Cura :heart:',
    'Recebeu 3 de Cura :sparkling_heart:',
    'Recebeu 5 de Cura :heartpulse:',
    'Recebeu 2 de Dano ',
    'Recebeu 4 de Dano ',
    'Recebeu 6 de Dano ' 
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('O jogador selecionado:')
        .setColor('#FFFFFF')
        .setDescription(rand)

await message.channel.send(embed);
  
}