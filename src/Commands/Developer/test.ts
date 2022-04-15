import Discord from "discord.js";
import Types from "../../Typings/types";
import fetch from "node-fetch";

export default async function run(client: Types.client, message: Discord.Message, args: string[], command: Types.commandData, settings: Types.guildSettings, tsettings: Types.ticketSettings, extra: Types.extraObject) {
  
  const clientMember = message.guild.me;
  const guildPrefix = client.functions.fetchPrefix(message.guild);
  const { secArg, thirdArg, fourthArg, fifthArg } = client.functions.getArgs(args);
  const code = `\`\`\``;
  const responses = {};

  try {
    message.reply("pl")
  } catch (error) {
    client.functions.sendErrorMsg(error, message, command, extra.logId);
  }
}