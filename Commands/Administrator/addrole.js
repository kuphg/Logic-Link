const Discord = require("discord.js");
const Buttons = require("discord-buttons");
const Fetch = require("node-fetch");

exports.run = async (client, message, args, command, settings, tsettings, extra) => {
  const clientMember = message.guild.me;
  const guildPrefix = await client.functions.fetchPrefix(message.guild);

  const noArgs = await client.functions.getNoArgs(command, message.guild);
  const { secArg, thirdArg, fourthArg, fifthArg } = await client.functions.getArgs(args);
  const code = `\`\`\``;

  const responses = {
    pending: `Adding the role to the user...`,
    botHierarchy: `This role has a higher or equal position as my top role.\n\n**Detailed Info**\n`,
    hierarchy: `This role has a higher or equal position as your top role.\n\n**Detailed Info**\n`
  }

  try {
    var role = message.mentions.roles.first();
    var member = message.mentions.members.first();
    var fullRole = args.slice(1).join(" ")

    if (!role) role = await client.functions.findRole(fullRole, message.guild)
    if (!member) member = await client.functions.findMember(secArg, message.guild)
    if (secArg.toLowerCase() == "me") member = message.member;

    if (member && role) {
      if (member.roles.cache.has(role.id)) {
        client.logger.updateLog(`Member already had role.`, extra.logId);
        const embed = client.embeds.error(command, `\`${member.user.tag}\` already has the <@&${role.id}> role.`);
        return message.lineReply(embed)
      }

      const pendingEmbed = client.embeds.pending(command, responses.pending);
      const editMsg = await message.lineReply(pendingEmbed)

      if (!clientMember.hasPermission(command.clientPerms)) {
        const errorEmbed = client.embeds.botPermission(command)
        return editMsg.edit(errorEmbed)
      }

      if (clientMember.roles.highest.position <= role.position) {
        client.logger.updateLog(`Role has higher than bot.`, extra.logId);
        const clientTopRole = clientMember.roles.highest;
        const embed = client.embeds.error(command, `${responses.botHierarchy}Mentioned Role - <@&${role.id}>: Position \`${role.position}\`.\nMy Top Role - <@&${clientTopRole.id}>: Position \`${clientTopRole.position}\`.`);
        return editMsg.edit(embed);
      }

      if (message.author.id !== message.guild.owner.id) {
        if (message.member.roles.highest.position <= role.position) {
          client.logger.updateLog(`Role was higher than user.`, extra.logId);
          const embed = client.embeds.error(command, `${responses.hierarchy}Mentioned Role - <@&${role.id}>: Position \`${role.position}\`.\nYour Top Role - <@&${message.member.roles.highest.id}>: Position \`${message.member.roles.highest.position}\`.`);
          return editMsg.edit(embed);
        }
      }

      member.roles.add(role, `Added the "${role.name}" role to ${member.user.tag}. Responsible User: ${message.author.tag}`)
      .then((r) => {
        client.logger.updateLog(`Added role successfully.`, extra.logId);
        const successEmbed = client.embeds.success(command, `Added the <@&${role.id}> role to <@${member.id}>.`);
        editMsg.edit(successEmbed)
      })
      .catch(async (error) => {
        client.logger.updateLog(`An error occured.`, extra.logId);
        const errorEmbed = await client.embeds.errorInfo(command, error);
        editMsg.edit(errorEmbed)
      })
    } else {
      if (!thirdArg && member) {
        client.logger.updateLog(`User did not pass enough arguments.`, extra.logId);
        const embed = await client.embeds.noArgs(command, message.guild);
        message.lineReply(embed);

      } else if (!member) {
        if (!thirdArg) {
          client.logger.updateLog(`Member does not exist.`, extra.logId);
          const errorEmbed = client.embeds.noMember(command, secArg);
          message.lineReply(errorEmbed);

        } else {
          client.logger.updateLog(`Member and role does not exist.`, extra.logId);
          const errorEmbed = client.embeds.noMembersOrRoles(command, secArg, thirdArg);
          message.lineReply(errorEmbed);
        }
      } else {
        client.logger.updateLog(`Role does not exist.`, extra.logId);
        const errorEmbed = client.embeds.noRole(command, thirdArg);
        message.lineReply(errorEmbed);
      }
    }
  } catch (error) {
    client.functions.sendErrorMsg(error, true, message, command);
  }
}