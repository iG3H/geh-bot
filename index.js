const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000); // Código que deixa o Bot Online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)
  ) return;

  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro:" + err);
  }
});

client.on("ready", () => {
  let activities = [
                      `${client.guilds.cache.size} SERV'S`,
                      `${client.users.cache.size} USER'S`,
    `YOGA!`,
    `LADY GAGA!`,
    `PORN!`,
    `JAVA!`
      
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 7000);  // WATCHING, LISTENING, PLAYING, STREAMING

  client.user
      .setStatus("idle") // idle, dnd, online, invisible
      .catch(console.error);
console.log("Estou Online!")
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token