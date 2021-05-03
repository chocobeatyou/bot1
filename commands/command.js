module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message,args, Discord){
        const NewEmbed = new Discord.MessageEmbed()
        .setColor('#fff400')
        .setTitle('Rules')
        .setDescription('Server Rules')
        .addFields(
            {name: 'Rule 1', value: 'Be respectful to all users and staff'},
            {name: 'Rule 2', value: 'No racism or any form of discrimination allowed'},
            {name: 'Rule 3', value: 'No NSFW content allowed'},
            {name: 'Rule 4', value: 'No Files'},
            {name: 'Rule 5', value: 'No spamming or advertising of any kind'},
            {name: 'Rule 6', value: 'NO LEAKING, this will lead to a instant ban'},
            {name: 'Rule 7', value: 'Have fun!'}
        )
        .setFooter('Make sure to check every rule!');

        message.channel.send(NewEmbed)
    }


}