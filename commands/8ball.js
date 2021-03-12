const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  description: "Gives A Magical 8Ball Response",
  usage: "[question]",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {
    const answers = [
      "Yes, always.",
      "Possibly not.",
      "Who knows?",
      "Why would anyone care?",
      "Look to the gods.",
      "You may rely on it.",
      "Without a doubt.",
      "It is decidedly so.",
      "It is certain.",
      "Most likely.",
      "Possibly.",
      "Mabye.",
      "Quite possible.",
      "My sources say no.",
      "The gods say no.",
      "The gods are uncertain.",
      "Very doubtful.",
      "No way.",
      "Buy a fortune cookie.",
      "The answer is hiding inside you",
      "You may rely on it.",
      "Open the fortune cookie.",
      "The fortune cookie demands it.",
      "Find it in yourself.",
      "You decide.",
      "Who cares?",
      "Certainly not.",
      "I hope so.",
      "Not in your wildest dreams.",
      "There is a good chance.",
      "Quite likely.",
      "I think so.",
      "I hope not.",
      "Never!",
      "Pfft.",
      "Sorry, bucko.",
      "The future is bleak.",
      "The future is uncertain.",
      "I would rather not say.",
      "Who cares?",
      "Possibly.",
      "Never, ever, ever.",
      "There is a small chance.",
      "Yes!",
      "Lol no.",
      "There is a high probability.",
      "What difference does it makes?",
      "Not my problem.",
      "Ask someone else.",
      "Ask me later.",
      "I'm busy. Later.",
      "No way.",
      "What do you think?",
      "I really don't want to say.",
      "Don't let me say it. I might cry.",
    ];

    const answer = answers[(Math.random() * answers.length) | 0];

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username}, ${answer}`)
      .setColor("#ff5050")
      .setTimestamp()
      .setFooter(message.author.username);

    message.channel.send(embed);

    return;
  },
};
