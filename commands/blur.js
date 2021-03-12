const DIG = require("discord-image-generation");

const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "blur",
  description: "Create Blurred Image",
  cooldown: 1,
  guildOnly: true,
  async execute(message, args) {
    try {
      const user =
        (await getUserFromMention(args[0], message)) || message.author;

      const image = await new DIG.Blur().getImage(
        user.displayAvatarURL({ dynamic: false, format: "png" }),
        3
      );

      let attachment = new MessageAttachment(image, "blur.png");

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
