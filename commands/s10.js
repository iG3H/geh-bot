const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const number = [
                ':blue_square:',
                ':blue_square:',
                ':blue_square:',
                ':blue_square:',
                ':green_square:',
                ':green_square:',
                ':green_square:',
                ':green_square:',
                ':green_square:',
                ':purple_square:'        
               ];
  
var rand1 = number[Math.floor(Math.random() * number.length)];
  
var rand2 = number[Math.floor(Math.random() * number.length)];
  
var rand3 = number[Math.floor(Math.random() * number.length)];
  
var rand4 = number[Math.floor(Math.random() * number.length)];
  
var rand5 = number[Math.floor(Math.random() * number.length)];
  
var rand6 = number[Math.floor(Math.random() * number.length)];
  
var rand7 = number[Math.floor(Math.random() * number.length)];
  
var rand8 = number[Math.floor(Math.random() * number.length)];
  
var rand9 = number[Math.floor(Math.random() * number.length)];
  
var rand0 = number[Math.floor(Math.random() * number.length)];
   
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
        .setDescription(`===========> ${rand1} - ${rand2} <===========
                         ===========> ${rand1} - ${rand2} <===========
                         ===========> ${rand1} - ${rand2} <===========`)
        .setImage('')
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Parabéns!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}