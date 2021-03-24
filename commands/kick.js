const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Kick A User",
  usage: "[user]",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    try {
      const member = message.mentions.members.first();

      const embed = new MessageEmbed()
        .setTitle(`Preparing to kick ${member.username}. Yes/no.`)
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      const kickMessage = message.channel.send(embed);

      await Promise.all([kickMessage.react("✅"), kickMessage.react("❌")]);

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

      const pollEmbed = new MessageEmbed()
        .setTitle(title)
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      const poll = await message.channel.send(pollEmbed);

      await Promise.all([poll.react("✅"), poll.react("❌")]);
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
