module.exports = {
  name: "textbook",
  description:
    "this command will send you the textbook for the specified class!",
  example: "!textbook EECS40",

  execute(message, args) {
    course = args[0].toLowerCase();

    // TODO: ADD COURSE TEXTBOOKS FOR EACH COURSE
    switch (course) {
      case "eecs112l":
        message.channel.send("https://");
        break;
      case "eecs114":
        message.channel.send("https://");
        break;
      case "eecs170b":
        message.channel.send("https://");
        break;
      case "eecs170lb":
        message.channel.send("https://");
        break;
      case "afam40b":
        message.channel.send("https://");
        break;
    }
  },
};
