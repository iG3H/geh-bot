const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const com = (`
              
              COMANDO GERAIS"
              g.fale : O bot repete a menssagem escrita depois do comando.
              g.ajuda : Exibe a lista de comandos dis poniveis.
              
              COMANDOS DE AÇÕES"
              g.care <@user> : Pede carinho pra o usuário mencionado.
              g.seduce <@user> : Tenta seduzir o usuário mencionado. 
              g.ignite <@user> : Queima o usuário mencionado.
              g.freez <@user> : Congela o usuário mencionado.   
              g.maldite <@user> : Amaldiçoa o usuário mencionado.

              COMANDO ADMINISTRATIVOS" *Apenas com Permissão*
              g.delete <número entre 1 a 100> : Apaga a quantidade informada de menssagem no canal.
              g.destroi : Apaga uma quantidade variavél de menssagens no canal.

  `)
   
const embed = new Discord.MessageEmbed()
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('#f7f7f5')
        .setDescription(com)
        .setTimestamp()
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
  
}