const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  description: "Set Up A Poll",
  usage: "",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    try {
      let title;

      const embed = new MessageEmbed()
        .setTitle("Please Enter A Title For The Poll.")
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
