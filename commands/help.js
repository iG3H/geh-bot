const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const content = [`
              
              COMANDO GERAIS"
              g.fale : O bot repete a menssagem escrita depois do comando.
              g.ajuda : Exibe a lista de comandos disponiveis.
              g.status : Informa seus status no Discord.
              
              COMANDOS DE AÇÕES"
              g.care <@user> : Pede carinho pra o usuário mencionado.
              g.seduce <@user> : Tenta seduzir o usuário mencionado. 
              g.ignite <@user> : Queima o usuário mencionado.
              g.freez <@user> : Congela o usuário mencionado.   
              g.maldite <@user> : Amaldiçoa o usuário mencionado.

              COMANDO ADMINISTRATIVOS" *apenas com Permissão*
              g.delete <número entre 1 a 100> : Apaga a quantidade informada de menssagem no canal.
              g.destroi : Apaga uma quantidade variavél de menssagens no canal.

  `] };
   
const embed = {
                  color: 'RANDON',
                  title: 'Minha lista de comandos',
                  description: (content),
                  timestamp: new Date(),
                  footer: {},
                  text: '2020 ®Liga dos Programadores'
      
    }

   