const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/y4hfWyo.gif',
  'https://imgur.com/EJUFBFv.gif',
  'https://imgur.com/vOr86i0.gif'
   
];

  message.delete().catch(O_o => {});

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('você mencionou errado um User, tente do jeito certo animal.');
}

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Terceira Habilidade: Tenebris Mortis')
        .setColor('#3a0166')
        .setDescription(`:skull: ${message.author} AMALDIÇOU ${user} :skull:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('As trevas consomen tudo! -Veigas Terr.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}