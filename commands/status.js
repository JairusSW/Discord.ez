const os = require("os");

const ms = require("ms");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "status",
  description: "Get full bot status",
  usage: "",
  cooldown: 1,
  guildOnly: true,
  async execute(message, args) {
    try {
      const platforms = {
        aix: `IBM ${process.arch}`,
        win32: `Windows ${process.arch}`,
        darwin: `MacOS ${process.arch}`,
        freebsd: `FreeBSD ${process.arch}`,
        linux: `Linux ${process.arch}`,
        openbsd: `OpenBSD ${process.arch}`,
        sunos: `SunOS ${process.arch}`,
      };

      const platform = platforms[process.platform];

      const model = os.cpus()[0]["model"];

      const cores = os.cpus().length;

      let usedMem = (os.totalmem() - os.freemem()).toString().split("");
      usedMem.reverse();
      usedMem.splice(0, 9);
      usedMem.reverse();
      usedMem = usedMem.join("");

      let memory = os.totalmem().toString().split("");
      memory.reverse();
      memory.splice(0, 9);
      memory.reverse();
      memory = `${usedMem}/${memory.join("")} GB`;

      const Status = new MessageEmbed()
        .setTitle(message.client.user.username)
        .addField("Uptime:", ms(message.client.uptime))
        .addField("Shards:", message.client.shard.count | 0)
        .addField("Platform:", platform)
        .addField("CPU:", model)
        .addField("Cores:", cores)
        .addField("Memory:", memory)
        .setColor("#ff5050")
        .setThumbnail(
          message.client.user.displayAvatarURL({
            dynamic: false,
            format: "png",
          })
        )
        .setTimestamp()
        .setFooter(message.author.username);

      message.channel.send(Status);
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
