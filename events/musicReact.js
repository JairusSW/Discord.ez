module.exports = {
    name: 'messageReactionAdd',
    on: true,
    execute(reaction, user, client) {

        if (reaction.partial) {
		
            try {
    
                await reaction.fetch()
    
            } catch (err) {
                
            }
        }
    
        let controlPanelEdit
    
        let song
    
        if (client.queue.has(user.id)) {
    
            const userQueue = client.queue.get(user.id)
    
            if (reaction.emoji.name) {
    
                const emojis = ['▶', '⏸', '⏪', '⏩', '🔄', '🔀', '🔊', '🔉', '🔈']
    
                if (emojis.includes(reaction.emoji.name)) {
    
                    if (reaction.emoji.name === '▶') {
    
                        if (userQueue.playing === false) {
                            
                            userQueue.connection.dispatcher.resume()
    
                            userQueue.playing = true
    
                        }
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                        .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '⏸') {
    
                        if (userQueue.playing === true)  {
                            
                            userQueue.connection.dispatcher.pause()
    
                            userQueue.playing = false
    
                        }
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                          .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '⏩') {
    
                        userQueue.connection.dispatcher.end()
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                          .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '⏪') {
    
                        userQueue.location = userQueue.location - 2
    
                        userQueue.connection.dispatcher.end()
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                          .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '🔄') {
    
                        userQueue.loop ? userQueue.loop = false : userQueue.loop = true
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                          .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '🔀') {
    
                        userQueue.shuffle ? userQueue.shuffle = false : userQueue.shuffle = true
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                          .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '🔊') {
    
                        userQueue.volume = userQueue.volume + 1
    
                        userQueue.connection.dispatcher.setVolumeLogarithmic(userQueue.volume / 5)
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                          .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '🔉') {
    
                        userQueue.volume = userQueue.volume - 1
    
                        userQueue.connection.dispatcher.setVolumeLogarithmic(userQueue.volume / 5)
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                        .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                    if (reaction.emoji.name === '🔈') {
    
                        if (userQueue.mute === true) {
    
                            userQueue.mute = false
    
                            userQueue.connection.dispatcher.setVolumeLogarithmic(userQueue.volume / 5)
    
                        }
    
                        if (userQueue.mute === false) {
    
                            userQueue.mute = true
    
                            userQueue.connection.dispatcher.setVolumeLogarithmic(0 / 5)
                            
                        }
    
                        song = userQueue.songs[userQueue.location]
    
                        controlPanelEdit = new MessageEmbed()
                        .setTitle(`Song Dashboard`)
                        .addField(`Pause`, `${userQueue.playing ? 'Off' : 'On'}`)
                        .addField(`Loop`, `${userQueue.loop ? 'On' : 'Off'}`)
                        .addField(`Shuffle`, `${userQueue.shuffle ? 'On' : 'Off'}`)
                        .addField(`Volume`, `${userQueue.volume * 10}`)
                        .addField(`Position `, `[${songLength((Date.now() - userQueue.current) / 1000)}/${songLength(song.length)}]`)
                        .setThumbnail(`${song.thumbnail}`)
                        .setColor('#ff5050')
                        .setFooter(`----------------------------------------------------------------------------------------------`)
    
                        reaction.message.edit(controlPanelEdit)
    
                    }
    
                }
    
            }
    
        }
    }
}