const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
const content = [`
              
COMANDOS GERAIS"
g.fale : O bot repete a mensagem escrita depois do comando.
g.ajuda : Exibe a lista de comandos disponíveis.
g.status : Informa seus status no Discord.

COMANDOS DE MISCEL NEA"
g.avatar : cria um personagem aleatório com uma lista de características.
g.nima : Informa sua porcentagem de sensualidade masculina!
g.s10 : Simula a invocação de heróis do AFK ARENA.

COMANDOS DE AÇÕES"
g.care <@user> : Pede carinho pra o usuário mencionado.
g.seduce <@user> : Tenta seduzir o usuário mencionado.
g.ignite <@user> : Queima o usuário mencionado.
g.freez <@user> : Congela o usuário mencionado.
g.maldite <@user> : Amaldiçoa o usuário mencionado.

COMANDOS ADMINISTRATIVOS" apenas com permissão
g.delete <número entre 1 a 100> : Apaga a quantidade informada de mensagem no canal.
g.destroi : Apaga uma quantidade variável de mensagens no canal.


  `]
   
  message.delete().catch(O_o => {});

let avatar = message.author.displayAvatarURL({format: "png"});
const embed = new Discord.MessageEmbed()
        
        .setTitle('Estes são os comandos disponiveis atualmente:')
        .setColor('RANDOM')
        .setDescription(content)
        .setThumbnail(avatar)
        .setFooter('Esperamos aumentar a lista em breve! Obrigado pelo uso.')
        
await message.channel.send(embed);
  
}