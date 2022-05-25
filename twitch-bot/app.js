const Discord = require('discord.js')
const client = new Discord.Client()
const TwitchAPI = require('node-twitch').default
const config = require('./config')

const twitch = new TwitchAPI({
    client_id: vjhbqx1oe5poozfr0ea2jas0x0ufxa,
    client_secret: ect4r7qgjwyscj937eo76nfqdn4cd4
});

let isLiveMemory = false

const run = async function Run () {
    await twitch.getStreams({ channel: "PolyTurbulent"}).then(async data => {
        const r = data.data[0]
        let thisGuildOnly = client.guilds.cache.get("GuildID")
        const channelAnnounceLive = thisGuildOnly.channels.cache.find(x => x, id === "ChannelAnnounceLiveID")

        if (r !== undefined) {
            if (r.type === "live") {
                if (isLiveMemory === false || isLiveMemory === undefined) {
                    isLiveMemory = true
                } else if (isLiveMemory === true) {
                } else {}
            } else {
                if (isLiveMemory === true) {
                    isLiveMemory = false
                } else {}
            }
        } else {
            if (isLiveMemory === true) {
                isLiveMemory = false
            } else {}
        }
    })
}
setInterval(run, 15000)