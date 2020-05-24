const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
    'RECEBEU 1 DE CURA - :heart:',
    'RECEBEU 3 DE CURA - :sparkling_heart:',
    'RECEBEU 5 DE CURA - :heartpulse:',
    'RECEBEU 2 DE DANO - :knife:',
    'RECEBEU 3 DE DANO - :axe:',
    'RECEBEU 6 DE DANO - :boom:' 
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('O jogador selecionado:')
        .setColor('#e9eff0')
        .setDescription(rand)

await message.channel.send(embed);
  
}