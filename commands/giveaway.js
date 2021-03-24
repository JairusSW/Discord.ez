/*const ms = require("ms");

const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  name: "giveaway",
  description: "Set Up A Giveaway",
  usage: "[user]",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    try {
      let time;

      let title;

      let prize;

      const embed = new MessageEmbed()
        .setTitle("Please Enter A Title.")
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(embed);

      try {
        const filter = (m) => message.author.id === m.author.id;

        const response = await message.channel.awaitMessages(filter, {
          time: 15000,
          max: 1,
          errors: ["time"],
        });

        title = response.first().content;
      } catch {
        const NoResponse = new MessageEmbed()
          .setTitle("Invalid Response. Cancelling.")
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

        message.channel.send(NoResponse);

        return;
      }

      const embed = new MessageEmbed()
        .setTitle("Please Enter A Time.")
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(embed);
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

  mention = mention.replace("&", "!");

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    return message.client.users.cache.get(mention);
  }
}
*/