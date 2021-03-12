const needle = require("needle");

const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "random-cat",
  description: "Get Random Cat Picture",
  usage: "",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    needle.get("https://aws.random.cat/meow", (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const embed = new MessageAttachment(body["file"]);

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
