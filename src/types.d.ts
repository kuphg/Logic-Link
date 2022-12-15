import Discord from "discord.js";
import Client from "Models/Client";
import prompts from "./Modules/Prompts";

type embedColors = "RED" | "GREEN" | "BLUE" | "ORANGE" | "DEFAULT" | string | number;
type caseTypes = "BAN" | "SOFTBAN" | "KICK" | "MUTE" | "UNBAN" | "UNMUTE" | "WARN";
type RGBOptions = [number, number, number];

type guildChannel = Discord.GuildChannel | Discord.ThreadChannel;
type caseCollection = Discord.Collection<number, caseData>;
type guildTextChannel = Discord.TextChannel | Discord.ThreadChannel | Discord.NewsChannel;
type anyGuildSetting = string | guildChannel | Discord.Role | null | boolean | caseCollection;
type chalkOptions = "bold" | "dim" | "italic" | "underline" | "inverse" | "strikethrough" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite";
type logDataCollection = Discord.Collection<string, logData>;
type commandCategory = Discord.Collection<string, commandData>;

type modPerms = "BAN_MEMBERS" | "KICK_MEMBERS" | "MANAGE_MESSAGES";
type adminPerms = "MANAGE_GUILD" | "MANAGE_ROLES" | "MANAGE_CHANNELS";
  
type client = Client;
type permissionString =
  'CREATE_INSTANT_INVITE'
  | 'KICK_MEMBERS'
  | 'BAN_MEMBERS'
  | 'ADMINISTRATOR'
  | 'MANAGE_CHANNELS'
  | 'MANAGE_GUILD'
  | 'ADD_REACTIONS'
  | 'VIEW_AUDIT_LOG'
  | 'PRIORITY_SPEAKER'
  | 'STREAM'
  | 'VIEW_CHANNEL'
  | 'SEND_MESSAGES'
  | 'SEND_TTS_MESSAGES'
  | 'MANAGE_MESSAGES'
  | 'EMBED_LINKS'
  | 'ATTACH_FILES'
  | 'READ_MESSAGE_HISTORY'
  | 'MENTION_EVERYONE'
  | 'USE_EXTERNAL_EMOJIS'
  | 'VIEW_GUILD_INSIGHTS'
  | 'CONNECT'
  | 'SPEAK'
  | 'MUTE_MEMBERS'
  | 'DEAFEN_MEMBERS'
  | 'MOVE_MEMBERS'
  | 'USE_VAD'
  | 'CHANGE_NICKNAME'
  | 'MANAGE_NICKNAMES'
  | 'MANAGE_ROLES'
  | 'MANAGE_WEBHOOKS'
  | 'MANAGE_EMOJIS_AND_STICKERS'
  | 'USE_APPLICATION_COMMANDS'
  | 'REQUEST_TO_SPEAK'
  | 'MANAGE_THREADS'
  | 'USE_PUBLIC_THREADS'
  | 'USE_PRIVATE_THREADS'
  | 'USE_EXTERNAL_STICKERS'
  | 'ALL';

interface buttonData {
  label?: string,
  style: "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER" | "LINK",
  id: string,
  emoji?: string,
  url?: string,
  disabled?: boolean
}

interface caseFilter {
  type?: caseTypes,
  user?: string,
  moderator?: string,
  reason?: string,
  timestamp?: number
  when?: "BEFORE" | "AFTER"
}

interface extraObject {
  allArgs: string[],
  mentioned: boolean,
  logId: number,
  hasBotSupport: boolean,
  hasTicketSupport: boolean,
  isDev: boolean,
  prompt: prompts
}

interface memoryUsage {
  rss?: number,
  heapTotal?: number,
  heapUsed?: number,
  external?: number,
  arrayBuffers?: number
}

interface caseData {
  id?: number,
  type: caseTypes,
  user: string,
  moderator: string,
  reason: string,
  timestamp: number
}

interface channelHideData {
  hidden: boolean,
  locker: string,
  lockedAt: number
}

interface channelLockData {
  locked: boolean,
  locker: string,
  lockedAt: number
}

interface channelData {
  hide: channelHideData,
  lock: channelLockData
}

interface selectMenuData {
  label: string,
  description: string,
  id: string,
  emoji?: string,
  def?: boolean
}

interface fieldData {
  name: string,
  value: string,
  inline?: boolean
}

interface logData {
  timestamp: number,
  content: string,
  type: "log" | "warn" | "error",
  user: string | null,
  details: string[]
}

interface commandLockData {
  reason: string,
  guild: null | string,
  timestamp: number
}

interface embedData {
  title?: string,
  description: string,
  color?: embedColors,
  footer?: [string, string],
  timestamp?: number,
  image?: string,
  thumbnail?: string,
  fields?: fieldData[]
}

interface menuItemData {
  label: string,
  description?: string,
  value: string,
  emoji?: string,
  def?: boolean
}

interface helpCategoryInfo {
  noPanels: string;
  guildPrefix: string,
  Administrator: string,
  Developer: string,
  General: string,
  Moderator: string,
  Support: string,
  Ticket: {
    Basic: string,
    Support: string,
    Admin: string,
    title: string,
  }
}

interface ticketPanel {
  name?: string,
  opened?: string,
  closed?: string,
  ticket?: string,
  claiming?: boolean,
  channel?: string,
  support?: string[],
  additional?: string[]
}

interface promptQuestion {
  title: string,
  question: string,
  description: string
}

interface promptData {
  [key: string]: promptQuestion
}

interface messageCollectorOptions {
  collect: (msg: Discord.Message, args: {
    collector: Discord.MessageCollector,
    current: number,
    next: Function,
    msgArgs: string[],
    embed: (type: "success" | "error", description: string, originalQuestion?: boolean | fieldData[]) => void,
    functions: {
      validateOption: (collected: empty) => 0 | 1
    },
    lastMessage: Discord.Message
  }) => 0 | 1,
  end: (collected: Discord.Collection<string, Discord.Message>, result: string, args: {
    collector: Discord.MessageCollector,
    lastMessage: Discord.Message,
    question: promptQuestion
  }) => any,
  _collect?: Function,
  _end?: Function,
  promptData?: {
    info: promptData,
    embeds: Discord.MessageEmbed[],
    startEmbed: Discord.MessageEmbed
  }
  collectorOptions?: Discord.CollectorOptions<[Discord.Message<boolean>]>
}

// interface componentCollectorOptions {
//   collect: (int: Discord.Interaction, args: {
//     collector: Discord.InteractionCollector<Discord.MessageComponentInteraction>,
//     current: number,
//     next: Function,
//     embed: (type: "success" | "error", description: string, originalQuestion?: boolean | fieldData[]) => void,
//     lastMessage: Discord.Message
//   }) => 1 | 0,
//   end: (collected: Discord.Collection<string, Discord.Message>, result: string, args: {
//     collector: Discord.InteractionCollector<Discord.MessageComponentInteraction>,
//     lastMessage: Discord.Message,
//     question: promptQuestion
//   }) => any,
//   _collect: Function,
//   _end: Function,
//   promptData?: {
//     info: promptData,
//     embeds: Discord.MessageEmbed[]
//   }
//   collectorOptions?: Discord.InteractionCollectorOptions<Discord.Interaction>
// }

interface guildSettings {
  prefix: string,
  modRole: string,
  adminRole: string,
  logChannel: string,
  welcomeChannel: string,
  welcomeRole: string,
  welcomeMsg: string,
  mutedRole: string,
  welcomeSystem: boolean,
  mutedRoleConfig: boolean,
  cases: Discord.Collection<number, caseData>,

  modRoleObj: Discord.Role,
  adminRoleObj: Discord.Role,
  logChannelObj: Discord.GuildChannel,
  welcomeChannelObj: Discord.GuildChannel,
  welcomeRoleObj: Discord.Role,
  mutedRoleObj: Discord.Role
}

interface commandData {
  name: string,
  description: string,
  permissions: permissionString[],
  clientPerms: permissionString[],
  cooldown: number,
  minArgs: number,
  options: string[],
  aliases: string[],
  usage: string,
  commandName: string
  category: "Administrator" | "Developer" | "General" | "Moderator" | "Support" | "Ticket",
  subCategory?: "Basic" | "Support" | "Administrator",
  run: Function,
  option: {
    [key: string]: commandData
  }
}

interface timeData {
  passed: boolean,
  digit: number,
  duration: number | null,
  display: string,
  unit: string
}

interface ticketSettings {
  settings: {
    dmUsers: boolean
  },
  panels: Discord.Collection<number, panelData>
}

interface panelData {
  name: string,
  opened: string,
  closed: string,
  claiming: boolean,
  support: string[],
  additional: string[],
  channel: string,
  createdAt: number,
  createdBy: string,
  tickets: Discord.Collection<number, ticketData>,
  totalTicketCount: number,
  ticketLimit: number,
  claimedName: string,
  ticketName: string,
  panelMessage: string | null,
  ticketMessage: string | null,
  id: number,
  createdMessage: string
}

interface ticketData {
  id: number,
  state: "OPENED" | "CLOSED"
  channel: string,
  opener: string,
  claimer: string | null,
  timestamp: number
}

interface args {
  secArg: string,
  thirdArg: string,
  fourthArg: string,
  fifthArg: string,
}

interface collectorOptions {
  filter?: Function,
  idle?: number
}

interface itemFilterOptions {
  safe?: boolean,
  searchFilter?: Function
}

interface errorData {
  name: string,
  message: string,
  stack: string,
  path?: string,
  code?: number | string,
  method?: string,
  httpStatus?: number | string
}

interface empty {
  [key: string]: any
}