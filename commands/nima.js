const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const number = [
                ':one:',
                ':two:',
                ':three:',
                ':four:',
                ':five:',
                ':six:',
                ':seven:',
                ':eight:',
                ':nine:',
                ':zero:'
               ];
  
var rand2 = number[Math.floor(Math.random() * number.length)];
  
var rand1 = number[Math.floor(Math.random() * number.length)];
   
var list = [
  'https://imgur.com/ypsad6p.gif',
  'https://imgur.com/LxbLDuV.gif',
  'https://imgur.com/E68sOrQ.gif',
  'https://imgur.com/r4YIriv.gif',
  'https://imgur.com/6UCiQnB.gif',
  'https://imgur.com/fjE6T1z.gif'   
];

message.delete().catch(O_o => {});

var rand = list[Math.floor(Math.random() * list.length)];
  
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Sua Porcentagem de Sensualidade Masculina é:')
        .setColor('#34b1eb')
        .setDescription(`===========> ${rand1}${rand2}% <===========`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I Am A Sexy Guy')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}