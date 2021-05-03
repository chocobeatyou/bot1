module.exports = {
    name: 'twitter',
    description: "sends twitter link!",
    execute(message,args){
        message.channel.send('https://twitter.com/kTec058');
    }
}