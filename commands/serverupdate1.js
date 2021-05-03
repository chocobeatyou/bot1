module.exports = {
    name: 'serverupdate1',
    description: "Embeds!",
    execute(message,args, Discord){
        const NeqEmbed = new Discord.MessageEmbed()
        .setColor('#fff400')
        .setTitle('Server Update')
        .addFields(
            {name: 'Version 1.0.0 kTec Bot', value: 'React-to-rule and Rules.'},
            {name: 'Server', value: 'Added WTS, WTB, React-to-rule and Rules.'}
        )
        message.channel.send(NeqEmbed)
    }


}