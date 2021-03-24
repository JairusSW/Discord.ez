const DIG = require("discord-image-generation");

const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "bed",
  description: "Create Monster Under Bed Comic",
  usage: "[user]",
  cooldown: 1,
  guildOnly: true,
  async execute(message, args) {
    try {
      const user2 = getUserFromMention(args[0], message) || message.author;

      if (user2 == null) {
        const mention = new MessageEmbed()
          .setTitle("Mention Someone.")
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

        message.channel.send(mention);

        return;
      }

      const image = await new DIG.Bed().getImage(
        message.author.displayAvatarURL({ format: "png" }),
        user2.displayAvatarURL({ format: "png" })
      );

      let attachment = new MessageAttachment(image, "monster.png");

      message.channel.send(attachment);
    } catch (err) {
      const Unavaliable = new MessageEmbed()
        .setTitle("Something Happened.")
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(Unavaliable);
    }
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
