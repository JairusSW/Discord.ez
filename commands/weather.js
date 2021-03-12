const { MessageEmbed } = require("discord.js");

const Weather = require("weather-js");

module.exports = {
  name: "weather",
  description: "Get the weather",
  usage: "[location]",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    if (args.join(" ") == null) {
      const embed = new MessageEmbed()
        .setTitle(`Enter A Valid Location`)
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(embed);

      return;
    }

    Weather.find({ search: args.join(" "), degreeType: "F" }, (err, result) => {
      if (err) console.log(err);

      const weather = result[0];

      const embed = new MessageEmbed()
        .setTitle(`Weather`)
        .addField("Location", weather["location"]["name"], true)
        .addField("Condition", weather["current"]["skytext"], true)
        .addField("Temperature", `${weather["current"]["temperature"]}°F`, true)
        .addField("Feels Like", `${weather["current"]["feelslike"]}°F`, true)
        .addField("Humidity", `${weather["current"]["humidity"]}%`, true)
        .addField("Winds", weather["current"]["winddisplay"], true)
        .setThumbnail(weather["current"]["imageUrl"])
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(embed);

      return;
    });
  },
};
