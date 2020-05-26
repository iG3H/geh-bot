const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var sex = [
    
    'Homem',
    'Mulher',
    'Indefinido'
  ];
  
  let sexrand = sex[Math.floor(Math.random() * sex.length)];
  
const avatarlist = [` 

${message.author}, seu avatar está pronto:
  
. Sexo:
. Idade:
. Raça:
. Função:
. Nível:
. Elemento:
. Fraqueza:
. Vantagem:
  
`];
    
await message.channel.send(avatarlist);
  
}
