const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('kTecbot is online!');
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command === 'twitter'){
        client.commands.get('twitter').execute(message, args, Discord);
    } else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);    
    } else if (command === 'command'){
        client.commands.get('command').execute(message, args, Discord, client); 
    } else if (command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord, client); 
    } else if (command === 'serverupdate1'){
        client.commands.get('serverupdate1').execute(message, args, Discord, client); 
    }

});








client.login('ODM4NTI2NjQwODc0MzIzOTk4.YI8Yyg.vJeR_WU-zIR-5TGBiYZirDq6OAI');