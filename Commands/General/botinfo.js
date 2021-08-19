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
    info: `\n\n**Library**\nDiscord.js V12.5.3\n\n**Developer**\n<@611624247240032256>`
  }
  
  try {
    const embed = client.embeds.blue(command, client.util.botInfo + responses.info);

    message.lineReply(embed)
  } catch (error) {
    client.functions.sendErrorMsg(error, true, message, command);
  }
}