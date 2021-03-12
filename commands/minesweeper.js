const Minesweeper = require("discord.js-minesweeper");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "minesweeper",
  description: "Get Minesweeper Game",
  guildOnly: true,
  cooldown: 5,
  async execute(message, args) {
    const levels = {
      easy: {
        rows: 5,
        colums: 5,
        mines: 3,
      },
      medium: {
        rows: 5,
        colums: 5,
        mines: 5,
      },
      hard: {
        rows: 5,
        colums: 5,
        mines: 10,
      },
    };

    const level = levels[args[0].toLowerCase()];

    if (level == null) {
      const no_level = new MessageEmbed()
        .setTitle("No Level Selected")
        .setColor("#ff5050")
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(no_level);

      return;
    }

    const minesweeper = new Minesweeper({
      rows: level["rows"],
      columns: level["colums"],
      mines: level["mines"],
      revealFirstCell: false,
    });

    const matrix = minesweeper.start();

    message.channel.send(matrix);

    return;
  },
};
