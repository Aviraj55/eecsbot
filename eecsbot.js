require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!";

const fs = require("fs");

client.commands = new Discord.Collection();

// Make sure we're reading JavaScript files
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

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

  if (!client.commands.has(command)) {
    return message.channel.send(
      "The command " + "'!" + command + "' does not exist."
    );
  }

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error trying to execute that command.");
  }
});

client.login(process.env.TOKEN);
