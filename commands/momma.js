const needle = require("needle");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "momma",
  description: "Get Random Momma Joke",
  usage: "",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    needle.get("https://api.yomomma.info/", (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const embed = new MessageEmbed()
          .setTitle(`${body["joke"].replace("\\", "")}`)
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
