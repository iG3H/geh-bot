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
  
  var race = [
    
    'Bestial',
    'Humano',
    'Elfo',
    'Orc',
    'Anão',
    'Retornado'
    
  ];
  let racerand = race[Math.floor(Math.random() * race.length)];
  
  var dec = [
    
    'Dragão',
    'Fáerico',
    'Gigante',
    'Oceanico',
    'Alado'
    
  ];
  let decrand = dec[Math.floor(Math.random() * dec.length)];
  
  var fun = [
    
    'Guerreiro',
    'Mago',
    'Protetor',
    'Caçador'
    
  ];
  let funrand = fun[Math.floor(Math.random() * fun.length)];
  
  var niv = [
    
    'Iniciante',
    'Mediano',
    'Experiente',
    'Mestre',
    'Lenda',
    'Desconhecido'

    
  ];
  let nivrand = niv[Math.floor(Math.random() * niv.length)];
  
  var ele = [
    
    'Terra',
    'Fogo',
    'Água',
    'Ar'
    
  ];
  let elerand = ele[Math.floor(Math.random() * ele.length)];
  
  var des = [

    'Escuro',
    'Luminosidade',
    'Sangramento',
    'Pouca Resistência'
    
  ];
  let desrand = des[Math.floor(Math.random() * des.length)];
  
  var van = [
    
    'Força Superior',
    'Genialidade',
    'Manamante',
    'Velocidade'
    
  ];
  let vanrand = van[Math.floor(Math.random() * van.length)];
      
const avatarlist = [` 

${message.author}, seu avatar está pronto:
  
. Sexo: ${sexrand}
. Idade: ${agerand}
. Raça: ${racerand}
. Decendência: ${decrand}
. Função: ${funrand}
. Nível: ${nivrand}
. Elemento: ${elerand}
. Fraqueza: ${desrand}
. Vantagem: ${vanrand}
  
`];
     
await message.channel.send(avatarlist);
  
}
