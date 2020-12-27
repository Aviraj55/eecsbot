module.exports = {
  name: "createchannel",
  description: "this command will create a new discord channel!",
  example: "!createchannel eecs112",
  execute(message, args) {
    if (!message.guild) {
      return;
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Sorry you are not an admin of this server.");
    }

    if (args.length < 1) {
      return message.channel.send(
        "!createchannel takes at least one argument for the channel name (0 provided)."
      );
    }

    try {
      const channelName = args.join("-");

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
