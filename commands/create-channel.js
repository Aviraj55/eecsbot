module.exports = {
  name: "createchannel",
  description: "this command will create a new discord channel!",
  example: "!createchannel eecs112",
  execute(message, args) {
    if (!message.guild) {
      return;
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.guild.channel.send("Sorry you are not an admin of this server.");
    }
    try {
      const channelName = args[0];

      message.guild.channels.create(channelName, {
        type: "text",
      });

      message.channel.send(
        "Channel " + channelName + " has been created successfully!"
      );
    } catch (e) {
      message.channel.send("An error occured. Please try again <3");
    }
  },
};
