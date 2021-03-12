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
        const user =
          getUserFromMention(args, message.client)[0] || message.author;

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

function getUserFromMention(args, client) {
  if (!mention) return;

  const mentions = [];

  for (const arg of args) {
    if (arg.startsWith("<@") && arg.endsWith(">")) {
      mention = arg.slice(2, -1);

      if (mention.startsWith("!")) {
        mention = arg.slice(1);
      }

      mentions.push(client.users.cache.get(mention));
    }
  }

  return mentions;
}
