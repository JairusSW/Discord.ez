const { MessageEmbed } = require("discord.js");

const eval = require("safe-eval");

module.exports = {
  name: "math",
  description: "Do Math Problem",
  usage: "[problem]",
  cooldown: 1,
  guildOnly: true,
  async execute(message, args) {
    try {
      const Answer = new MessageEmbed()
        .setTitle(eval(args.join('')))
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(Answer);
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
