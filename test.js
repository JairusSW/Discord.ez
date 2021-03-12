(async () => {

    const DIG = require('discord-image-generation')

    const fs = require('fs')

    const image = await new DIG.Spank().getImage('./user1.jpg', './user2.jpg')

    fs.writeFileSync('./test.png', image)

})()