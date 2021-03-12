const Air5 = require("air5");

const database = new Air5("Muzuk", {
  provider: "LevelDB",
});

module.exports = {
  name: "ready",
  on: true,
  execute(client) {
    client.queue = new Map();

    client.userDatabase = database;

    client.musicDatabase = database;
  },
};
