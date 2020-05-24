const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Tá querendo apagar o que? Você não tem permissão de Gerenciar Mensagens, FDP!"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 1000)
    return message.reply(
      "forneça um número de até 1000 mensagens a serem excluídas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`${args[0]} mensagens limpas nesse chat`)
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};