const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "messageReactionRemove",
  on: true,
  async execute(reaction, user, client) {
    const message = reaction.message;

    if (message.author.id === user.id) return;

    if (reaction.emoji.name !== "⭐") return;

    const { starboardChannel } = client.settings.get(message.guild.id);

    const starChannel = message.guild.channels.cache.find(
      (channel) => channel.name == starboardChannel
    );

    if (!starChannel) return;

    const fetchedMessages = await starChannel.messages.fetch({ limit: 100 });

    const stars = fetchedMessages.find(
      (m) =>
        m.embeds[0].footer.text.startsWith("⭐") &&
        m.embeds[0].footer.text.endsWith(reaction.message.id)
    );

    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(
        stars.embeds[0].footer.text
      );

      const foundStar = stars.embeds[0];

      const image =
        message.attachments.size > 0
          ? extension(reaction, message.attachments.array()[0].url)
          : "";

      const embed = new MessageEmbed()
        .setColor(foundStar.color)
        .setDescription(foundStar.description)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(`⭐ ${parseInt(star[1]) - 1} | ${message.id}`)
        .setImage(image);

      const starMsg = await starChannel.messages.fetch(stars.id);

      await starMsg.edit({ embed });

      if (parseInt(star[1]) - 1 == 0) return starMsg.delete(1000);
    }
  },
};

function extension(reaction, attachment) {
  const imageLink = attachment.split(".");
  const typeOfImage = imageLink[imageLink.length - 1];
  const image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
  if (!image) return "";
  return attachment;
}
