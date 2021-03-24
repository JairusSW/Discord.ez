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

      await message.channel.send(embed);

      try {

        const filter = (m) => message.author.id === m.author.id;

        const response = await message.channel.awaitMessages(filter, {
          time: 15000,
          max: 1,
          errors: ["time"],
        });

        const yesses = ['y', 'yes']

        const nos = ['n', 'no']

        const res = response.first().content.toLowerCase().trim();

        if (yesses.includes(res)) {

          member.kick()

        } else if (nos.includes(res)) {

          const NoKick = new MessageEmbed()
          .setTitle(`Did not kick user`)
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

          message.channel.send(NoKick);

        } else {

          const Nothing = new MessageEmbed()
          .setTitle(`Invalid Response. Cancelling.`)
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

          message.channel.send(Nothing);

        }

      } catch {
        const NoResponse = new MessageEmbed()
          .setTitle("Invalid Response. Cancelling.")
          .setColor("#ff5050")
          .setTimestamp()
          .setFooter(message.author.username);

        message.channel.send(NoResponse);

        return;
      }

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
