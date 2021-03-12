const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Get A User's Avatar",
  usage: "[user]",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    if (args[0]) {
      const user = getUserFromMention(args[0], message) || message.author;

      if (user == null) {
        const invalid = new MessageEmbed()
          .setTitle("Invalid Mention")
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

        return message.channel.send(invalid);
      }

      const users = new MessageAttachment(
        user.displayAvatarURL({ format: "png" })
      );

      return message.channel.send(users);
    }

    const authors = new MessageAttachment(
      message.author.displayAvatarURL({ format: "png" })
    );

    message.channel.send(authors);

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
