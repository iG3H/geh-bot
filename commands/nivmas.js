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
  
var rand2 = mumber[Math.floor(Math.random() * number.length)];  
  
var list = [
  'https://imgur.com/g54UpQP.gif',
  'https://imgur.com/w06DjGv.gif',
  'https://imgur.com/SZD4ZLG.gif',
  'https://imgur.com/BNxLtAE.gif'
   
];

  message.delete().catch(O_o => {});

var rand = list[Math.floor(Math.random() * list.length)];
  
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('RANDOM')
        .setDescription(`${number}${number}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}