require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js")); // Make sure we're reading JS files

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("EECSBot is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/); // Splice command
  console.log(args);
  const command = args.shift().toLowerCase();
  console.log(command);
  console.log(args);

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "createchannel") {
    client.commands.get("createchannel").execute(message, args);
  }
});

client.login(process.env.TOKEN);
