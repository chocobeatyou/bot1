module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '838559760377708544';
        const AnnouncementsTeamRole = message.guild.roles.cache.find(role => role.name === "Announcements");
        const GiveawaysTeamRole = message.guild.roles.cache.find(role => role.name === "Giveaways");
        const ServerUpdatesTeamRole = message.guild.roles.cache.find(role => role.name === "Server Updates");
        const ImportantTeamRole = message.guild.roles.cache.find(role => role.name === "Important");

        const AnnouncementsTeamEmoji = '📢';
        const GiveawaysTeamEmoji = '🎁';
        const ServerUpdatesTeamEmoji = '🔁';
        const ImportantTeamEmoji = '❗';

        let embed = new Discord.MessageEmbed()
            .setColor('#fff400')
            .setTitle('Reaction Roles')
            .setDescription('Choose here for which events you want a ping!\n\n'
                + `${AnnouncementsTeamEmoji} for announcements!\n`
                + `${GiveawaysTeamEmoji} for giveaways\n`
                + `${ServerUpdatesTeamEmoji} for server updates\n`
                + `${ImportantTeamEmoji} for important messages`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(AnnouncementsTeamEmoji);
        messageEmbed.react(GiveawaysTeamEmoji);
        messageEmbed.react(ServerUpdatesTeamEmoji);
        messageEmbed.react(ImportantTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name === AnnouncementsTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(AnnouncementsTeamRole);
                }
                if(reaction.emoji.name === GiveawaysTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GiveawaysTeamRole);
                }
                if(reaction.emoji.name === ServerUpdatesTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ServerUpdatesTeamRole);

                }if(reaction.emoji.name === ImportantTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ImportantTeamRole);

                }
            } else {
                return;
            }

        });    
        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name === AnnouncementsTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(AnnouncementsTeamRole);
                }
                if(reaction.emoji.name === GiveawaysTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(GiveawaysTeamRole);
                }
                if(reaction.emoji.name === ServerUpdatesTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ServerUpdatesTeamRole);

                }if(reaction.emoji.name === ImportantTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ImportantTeamRole);

                }
            } else {
                return;
            }
        });
    }

    
}      
