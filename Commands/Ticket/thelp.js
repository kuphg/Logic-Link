const Discord = require("discord.js");
const Buttons = require("discord-buttons");
const Prefix = require("discord-prefix");

exports.run = async (client, message, args, command, settings, tsettings, extra) => {
  var guildPrefix = Prefix.getPrefix(message.guild.id);
  if (!guildPrefix) guildPrefix = client.util.defaultPrefix;

  const clientMember = message.guild.me;
  const noArgs = await client.functions.getNoArgs(command, message.guild);
  const { secArg, thirdArg, fourthArg, fifthArg } = await client.functions.getArgs(args);
  const code = `\`\`\``;

  const responses = {

  }

  try {
    if (!secArg) {
      const hasSupportRole = tsettings.panels.all.some(p => message.member.roles.cache.has(p.supportRole));
      const noPanels = tsettings.panels.count == 0 ? true : false;

      const supportPermissions = `${hasSupportRole || message.member.hasPermission("ADMINISTRATOR") || message.member.roles.cache.has(settings.adminRole) ? `${client.util.support} ` : `${client.util.error} `}`;

      const adminPermissions = `${message.member.hasPermission("ADMINISTRATOR") || message.member.roles.cache.has(settings.adminRole) ? `${client.util.settings} ` : `${client.util.error} `}`;

      const cmdArray = [
        { name: `${client.util.members} Basic Commands`, value: `${code}\n${client.command.total.ticket.basic.join("\n")}${code}`, inline: true },
        { name: `${supportPermissions}Support Commands`, value: `${code}\n${client.command.total.ticket.support.join("\n")}${code}`, inline: true },
        { name: `${adminPermissions}Administrator Commands`, value: `${code}\n${client.command.total.ticket.admin.join("\n")}${code}`, inline: true }
      ]

      const embed = client.embeds.field(command, `${client.util.welcomeBotInfo}\n\n**Command List**\nBelow shows a list of available ticket commands.\nTo get more details about a particular command, run: \`${guildPrefix}thelp [command]\`.\nIf you would like a detailed guide on the help menu, run \`${guildPrefix}thelp guide\`.\n\n${code}Ticket Commands${code}\u200b${(noPanels && (message.member.hasPermission("ADMINISTRATOR") || message.member.roles.cache.has(settings.adminRole))) ? `\n${client.util.warn} This server does not have any panels. Run \`${guildPrefix}tpanels new\` to configure one.\n` : ``}`, cmdArray);
      message.lineReply(embed);

    } else {

    }
  } catch (error) {
    client.functions.sendErrorMsg(error, true, message, command);
  }
}