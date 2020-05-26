const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const content = [`


const target = message.mentions.users.first() || message.author
let user = message.mentions.users.first() || client.users.cache.get(args[0]);


`];

const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.member;

let avatar = message.author.displayAvatarURL({format: "png"});
  
const placa = new Discord.MessageEmbed()
        
        .setColor('RANDOM')
        .setThumbnail(avatar)
        
await message.channel.send(placa);
  
}