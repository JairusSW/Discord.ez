const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Send Bot Invite Link",
  cooldown: 1,
  guildOnly: true,
  async execute(message, args) {
    try {
      const Invite = new MessageEmbed()
        .setTitle(
          `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&scope=bot&permissions=8`
        )
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(Invite);
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
