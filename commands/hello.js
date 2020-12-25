module.exports = {
  name: "hello",
  description: "say hi to Peter!",
  execute(message, args) {
    const greetings = [
      "Hello",
      "Ciao",
      "Howdy",
      "Greetings",
      "Salut",
      "Hola",
      "Gday",
      "Hey",
      "What's good",
      "Sup",
      "Yo",
    ];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    message.channel.send(
      greeting +
        " " +
        message.member.displayName +
        " it's a great day to be an Anteater!"
    );
  },
};
