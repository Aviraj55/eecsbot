const { default: axios } = require("axios");

module.exports = {
  name: "hello",
  description: "say hi to Peter!",
  example: "!hello",
  async execute(message, args) {
    const url = "https://complimentr.com/api";
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

    try {
      const response = await axios.get(url);
      compliment = response.data.compliment;
      message.channel.send(
        greeting +
          " " +
          message.member.displayName +
          ". " +
          compliment.charAt(0).toUpperCase() +
          compliment.slice(1)
      );
    } catch (error) {
      console.error("An error occurred connecting to complients API");
    }
  },
};
