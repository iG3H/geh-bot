const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/uziKly4.gif',
  'https://imgur.com/fxcmOBV.gif',
  'https://imgur.com/Sf1H88W.gif',
  'https://imgur.com/irNZRAf.gif'
   
];

  message.delete().catch(O_o => {});

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: "png"});
  
var chance = [
                'e ganhou! :white_check_mark:',
                'e ganhou todas as badge! :white_check_mark:',
                'e ganhou o dominio do gym! :white_check_mark:',
                'e ganhou todos os pokes! :white_check_mark:',
                'e perdeu! :no_entry:',
                'e perdeu todas as badge! :no_entry:',
                'e perdeu o dominio do gym! :no_entry:',
                'e perdeu todos os pokes! :no_entry:'    
];
  
  var rand2 = chance[Math.floor(Math.random() * chance.length)];
  
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('você mencionou errado um User, tente do jeito certo animal.');
}

  const embed = new Discord.MessageEmbed()
        .setTitle('E o resultado dessa batalha Pokemon Foi...')
        .setColor('#8ff2a8')
        .setDescription(`${message.author} desafiou ${user} ${rand2}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Temos que pegar! POKÉMON!.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}