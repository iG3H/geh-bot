const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Tá querendo apagar o que? Você não tem permissão de Gerenciar Mensagens, FDP!"
    );
  
  const fetched = await message.channel.messages.fetch({
   
  });
  
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`Limpei ${args[0]} menssagens nesse caralho!`)
    .catch(error =>
      console.log(`Não consegui deletar as merdas das mensagens por causa de: ${error}`)
    );
};