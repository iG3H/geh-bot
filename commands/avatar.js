const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var sex = [
    
    'Homem',
    'Mulher',
    'Indefinido',
    'Desconhecido'
  ];
  let sexrand = sex[Math.floor(Math.random() * sex.length)];
  
  var age = [
    
    '13 anos',
    '20 anos',
    '25 anos',
    '31 anos',
    '40 anos',
    '47 anos',
    '55 anos',
    '62 anos',
    '70 anos',
    '88 anos',
    '90 anos',
    '111 anos',
    'desconhecido'
    
  ];
  let agerand = age[Math.floor(Math.random() * age.length)];
  
  
const avatarlist = [` 

${message.author}, seu avatar está pronto:
  
. Sexo: ${sexrand}
. Idade: ${agerand}
. Raça:
. Função:
. Nível:
. Elemento: 
. Fraqueza:
. Vantagem:
  
`];
    
await message.channel.send(avatarlist);
  
}
