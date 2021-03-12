const needle = require("needle");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cat-fact",
  description: "Get Random Cat Fact",
  usage: "",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    needle.get("https://catfact.ninja/fact", (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const embed = new MessageEmbed()
          .setTitle(`${body["fact"]}`)
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
    });
  },
};
