const needle = require("needle");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "compliment",
  description: "Be noice to someone! :P",
  usage: "[user]",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    const selections = [
      "Your so nice.",
      "You the best 😀.",
      "Your a good friend.",
      "Coolest person ever!!",
      "You are Awesome!!😎",
      "You are awesome beyond description. 👌",
      "You are as awesome as a bunny. 🐰",
      "You are noice. 🤣 ",
      "Your outlook on life is the best.",
      "You light up the server.",
      "Your so thoughtful.",
      "You are funny and weird.",
      "Your a genuis 🧐.",
    ];

    const selection = selections[(Math.random() * balls.length) | 0];

    let user = getUserFromMention(args[0], message);

    if (user == null) user = message.author;
    const embed = new MessageEmbed()
      .setTitle(`${user.username}, ${selection}`)
      .setColor("#000FF")
      .setTimestamp()
      .setFooter(message.author.username);

    message.channel.send(embed);

    return;
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
