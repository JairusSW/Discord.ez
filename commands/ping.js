const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Get the ping in milliseconds",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args, config) {
    const embed = new MessageEmbed()
      .setTitle("Pinging...")
      .setColor("#ff5050")
      .setTimestamp()
      .setFooter(message.author.username);

    message.channel.send(embed).then((sent) => {
      const time = Date.now() - message.createdTimestamp;

      const timestamp = time.toString().split("");

      if (timestamp[0] === "-") timestamp.shift();

      const embed = new MessageEmbed()
        .setTitle(`${timestamp.join("")}ms`)
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      sent.edit(embed);
    });

    return;
  },
};
