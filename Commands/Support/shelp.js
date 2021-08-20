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
    const cmdArray = [
      { name: `${client.util.support} Support Commands`, value: `${code}\n${client.command.total.support.join("\n")}${code}`, inline: true }
    ]

    if (!secArg) {
      const helpEmbed = client.embeds.field(command, `${client.util.welcomeBotInfo}\n\n**Command List**\nBelow shows a list of all support commands.\nTo get more details about a particular command, run: \`${guildPrefix}shelp [command]\`.\nIf you would like a detailed guide on the help menu, run \`${guildPrefix}shelp guide\`.\n\n${code}Support Commands${code}\u200b`, cmdArray)

      message.lineReply(helpEmbed)
    } else {
      if (secArg == "guide") {
        const embed = client.embeds.blue(command, `\`<>\` <:Line:867201669371265054> Required field.\n\`[]\` <:Line:867201669371265054> Optional field.\n\`|\` <:Line:867201669371265054> Or indicator.`);
        return message.lineReply(embed)
      }
      
      var infoCmd = null;

      for (const [name, info] of Object.entries(client.command.support)) {
        if (infoCmd) break;
        if (secArg == info.commandName || info.aliases.includes(secArg)) {
          infoCmd = info;
          break;
        }
      }
      
      if (infoCmd) {
        const embed = client.embeds.helpMenu(infoCmd, guildPrefix);
        message.lineReply(embed);
        
      } else {
        const embed = client.embeds.error(command, `\`${secArg}\` is not a valid command, refer to the help menu.`);
        message.lineReply(embed);
      }
    }
  } catch (error) {
    client.functions.sendErrorMsg(error, true, message, command);
  }
}