const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Tá querendo apagar o que? Você não tem permissão de Gerenciar Mensagens, FDP!"
                        )

  const channel = message.channel;
  const fetchmessage = await channel.fetchmessage ();
  await channel.bulkdelete(fetchmessage);
  message.reply ("Destruí todas as Evidências!");
  
};