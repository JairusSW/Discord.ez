const needle = require("needle");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "insult",
  description: "Gives Random Insults",
  usage: "[user]",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    needle.get("https://quandyfactory.com/insult/json/", (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const user = getUserFromMention(args[0], message) || message.author;

        if (user == null) {
          const embed = new MessageEmbed()
            .setTitle("Insult A Real Person")
            .setColor("#ff5050")
            .setTimestamp()
            .setFooter(message.author.username);

          message.channel.send(embed);

          return;
        }

        const embed = new MessageEmbed()
          .setTitle(`${user.username}, ${body["insult"]}`)
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

function getUserFromMention(mention, message) {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    return message.client.users.cache.get(mention);
  }
}

