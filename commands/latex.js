const { default: axios } = require("axios");

module.exports = {
  name: "latex",
  description: "this command will render a LaTeX expression into an image",
  async execute(message, args) {
    latexExpression = args.join(" ");

    let request = {
      auth: { user: "guest", password: "guest" },
      latex: latexExpression,
      resolution: 600,
      color: "FFFFFF",
    };

    axios
      .post("http://latex2png.com/api/convert", {
        auth: { user: "guest", password: "guest" },
        latex: latexExpression,
        resolution: 600,
        color: "FFFFFF",
        x: 62,
        y: 28,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.data.url !== undefined) {
            message.channel.send("http://latex2png.com" + response.data.url);
          } else {
            message.channel.send(
              "There was an error with the format of the inputted LaTeX expression, please reformat and try again."
            );
          }
        },
        (error) => {
          message.channel.send(
            "There was an error with the LaTeX API, please try again."
          );
        }
      );
  },
};
