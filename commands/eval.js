const { MessageEmbed } = require("discord.js");

const eval = require("safe-eval");

module.exports = {
  name: "eval",
  description: "Evaluate JavaScript Code",
  usage: "[code]",
  cooldown: 1,
  guildOnly: true,
  async execute(message, args) {
    try {
      const Output = new MessageEmbed()
        .setTitle(eval(args.join('')))
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(Output);
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
