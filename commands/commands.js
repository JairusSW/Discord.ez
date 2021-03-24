const needle = require("needle");

const { MessageEmbed } = require("discord.js");

const fs = require('fs')

module.exports = {
  name: "commands",
  description: "Get List Of Commands",
  usage: "",
  guildOnly: true,
  cooldown: 1,
  async execute(message, args) {

    let commandsEmbed = new MessageEmbed()
    .setTitle('Commands')
    .setColor("#ff5050")
    .setTimestamp()
    .setFooter(message.author.username);

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./${file}`);
        commandsEmbed.addField(`${command['name']} ${command['usage'] ? command['usage'] : ''}`, command['description'])
    }

    message.channel.send(commandsEmbed);
    
  },
};
