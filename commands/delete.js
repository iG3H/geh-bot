const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Tá querendo apagar o que? Você não tem permissão de Gerenciar Mensagens, FDP!"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "seu imbecil! Você tem que escrever um número de 1 à 99 para que eu possa apagar as mensagens."
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`Limpei ${args[0]} menssagens nesse caralho!`)
    .catch(error =>
      console.log(`Não consegui deletar as merdas das mensagens por causa de: ${error}`)
    );
};