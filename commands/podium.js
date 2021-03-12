const DIG = require("discord-image-generation");

const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "podium",
  description: "Create Podium Image",
  cooldown: 1,
  guildOnly: true,
  async execute(message, args) {
    try {
      const user1 = message.author;

      const user2 = await getUserFromMention(args[0], message);

      const user3 = await getUserFromMention(args[1], message);

      if (user2 == null || user3 == null) {
        const mention = new MessageEmbed()
          .setTitle("Mention Someone.")
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

        message.channel.send(mention);

        return;
      }

      const image = await new DIG.Podium().getImage(
        user1.displayAvatarURL({ dynamic: false, format: "png" }),
        user2.displayAvatarURL({ dynamic: false, format: "png" }),
        user3.displayAvatarURL({ dynamic: false, format: "png" }),
        user1.username,
        user2.username,
        user3.username
      );

      let attachment = new MessageAttachment(image, "podium.png");

      message.channel.send(attachment);
    } catch (err) {
      console.log(err);

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
