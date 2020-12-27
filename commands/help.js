const fs = require("fs");
module.exports = {
  name: "help",
  description:
    "this command will list all the commands and their descriptions.",
  example: "!help",
  execute(message, args) {
    try {
      const commands = {};

      const commandFiles = fs
        .readdirSync(`./commands`)
        .filter((file) => file.endsWith(".js"))
        .filter((file) => file !== "help.js");

      for (const file of commandFiles) {
        const command = require(`./${file}`);
        const command_name = command.name;

        commands[command_name] = command;
      }

      outputString = "";
      for (const [key, val] of Object.entries(commands)) {
        currentCommandOutput =
          "```Command: !" +
          key +
          "\n" +
          "Description: " +
          val.description +
          "\n" +
          "Example: " +
          val.example +
          "\n\n```";

        outputString += currentCommandOutput;
      }

      message.channel.send(outputString);
    } catch (e) {
      message.channel.send("An error occured. Please try again <3");
    }
  },
};
