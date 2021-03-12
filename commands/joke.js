const needle = require("needle");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "joke",
  description: "Gives Random Joke",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    needle.get(
      "https://official-joke-api.appspot.com/random_joke",
      (err, res, body) => {
        if (!err && res.statusCode === 200) {
          const embed = new MessageEmbed()
            .setTitle(`${body["setup"]}\n${body["punchline"]}`)
            .setColor("#ff5050")
            .setTimestamp()
            .setFooter(message.author.username);

          message.channel.send(embed);

          return;
        }

        const error = new MessageEmbed()
          .setTitle("Something Happened.")
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

        message.channel.send(error);

        return;
      }
    );
  },
};
