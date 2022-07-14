const Util = {
  channels: {
    botError: "845056542251286558",
    botEntry: "843557479858307102",
    bugReport: "879338575089512478"
  },
  emojis: {
    trashcan: `<:IconDeleteTrashcan:868118760702234674>`,
    stage: `<:StagePublic:868113751637917726>`,
    arrowLeft: `890992483901767700`,
    arrowRight: `890994441073090570`,
    dash: `<:greendash:903084370066300928>`,
    application: `<:ApplicationPending:894929360128188458>`,
    ticket: `<:Ticket:901471547527692329>`,
    rules: `<:ChannelRules:868119604214505512>`,
    link: `<:Link:868115215340941322>`,
    integration: `<:IconIntegration:868118554497671238>`,
    members: `<:IconMembers:868118276310437898>`,
    cross: `<:Cross:867955785978761266>`,
    slash: `<:MessageIconSlashCommands:868115363211124807>`,
    check: `<:Check:867931890437476353>`,
    error: `<:MessageFail:868113159737720912>`,
    warn: `<:Warn:868113114221121586>`,
    settings: `<:IconSettings:868117828341997588>`,
    category: `<:ChannelCategory:868119798620512297>`,
    roleIcon: `<:IconRole:868117933237358642>`,
    message: `<:StatusRichPresence:868113305565278218>`,
    reply: `<:Reply:878702649732628561>`,
    locked: `<:IconLock:868118375170211852>`,
    clock: `<:IconClock:868118866960728144>`,
    text: `<:ChannelThread:868119251897163786>`,
    override: `<:IconBuildoverride:868118920140300339>`,
    calender: `<:IconCalendar:868118892432752641>`,
    panel: `<:ChannelNews:868119725945815110>`,
    brilliance: `<:Brilliance:877357261767442476>`,
    bravery: `<:Bravery:877357222802378752>`,
    balance: `<:Balance:877357325776740363>`,
    pending: `<a:Loading:866730924606226462>`,
    hypesquad: `<:HypeSquadEvents:885688936595324928>`,
    earlySupporter: `<:EarlySupporter:885689185254637609>`,
    certifiedMod: `<:CertifiedMod:873596085787033682>`,
    discordStaff: `<:DiscordStaff:873596117592440902>`,
    partnered: `<:DiscordPartner:873595971169292328>`,
    bugHunter: `<:BugHunter:885689807223812218>`,
    bugHunterLvl2: `<:BugHunterLvl2:885690063407681578>`,
    botDev: `<:BotDeveloper:885926265767477248>`,
    sticker: `<:Sticker:868115008314298408>`,
    voice: `<:ChannelVC:868119020811997204>`,
    news: `<:ChannelAnnouncements:868119845080825856>`,
    boost: `<:BoostLvl3:868114870988587064>`,
    boost2: `<:BoostLvl2:868114905599983678>`,
    boost1: `<:BoostLvl1:868114938504298556>`,
    verified: `<:Verified:868114239552909323>`,
    support: `<:IconSupport:868117797429997578>`,
    store: `<:Store:888183437696045166>`,
    thread: `<:ChannelThread:868119331492483092>`,
    threadPrivate: `<:ChannelThreadPrivate:868119110398144512>`,
    channel: `<:ChannelText:868119367689334834>`,
  },
  messages: {
    welcomeBotInfo: "Welcome to Logic Link, a powerful utility/moderation bot with advanced customization and automation options.",
    botInfo: "Logic Link is a powerful utility/moderation bot with advanced customization and automation options.",
    errorMsgDefault: `An error has occured whilst running this command.\nIf this issue persists, please contact the bot developer or support server.\n\u200b`,
    unexpectedError: `An unexpected error has occured.                      \u200b`,
    devLocked: `Locked to bot developer.`,
    noPerms: "No required permissions.",
    reason: `No reason was provided.`,
    
    noAlias: "No command aliases found.",
    noOption: "No command options found.",
    noCooldown: "No command cooldown found.",

    buggy: `This command contains some issues that prevent it from working correctly.`,
    security: `This command is currently under investigation for possible security risks.`,
    development: `This command is currently in development.`,
    botHierarchy: `This role has a higher or equal position as my top role.`,
    hierarchy: `This role has a higher or equal position as your top role.`,
    hierarchyM: `This member has a higher or equal role position as your top role.`,
    botHierarchyM: `This member has a higher or equal role position as my top role.`,

    requiredParams: `You are missing required parameters needed to carry out this command.`,
    deleteConfirmation: `This command is able to delete roles and channels based on partial names without warning. Please be careful when using this command, if you don't feel comfortable providing a partial name, remember that you can always just mention the role or channel to be sure that you are deleting the right one.\n\nBy clicking the "Accept" button below, you acknowledge the conditions above and understand that you will be fully responsible for roles and channels deleted with this command.`,
  },
  categoryInfo: {
    Administrator: "Easy to use admin / utility commands that can get the job done quickly.",
    Developer: "Secret development commands used to debug problems and fix bugs.",
    General: "Basic info / utility commands available to all users.",
    Moderator: "Advanced moderation commands useful for stopping raids and attacks.",
    Support: "Helpful commands for our support team used to diagnose issues.",
    Ticket: "Next generation ticket systems and commands great for de-cluttering channels."
  },
  promptData: {
    panel: {
      name: {
        title: `Panel Name`,
        question: `What should be the name of this panel?`,
        description: `The name must be within 3 and 32 characters long.\nThe name must also be unique to other panels.`
      },
      opened: {
        title: `Opened Category`,
        question: `Where would you like opened tickets to go?`,
        description: `Type the name or ID of a category you want to set this to.\nTickets will be moved here once they are opened.`
      },
      closed: {
        title: `Closed Category`,
        question: `Where would you like closed tickets to go?`,
        description: `Type the name or ID of a category you want to set this to.\nTickets will be moved here once they are closed.`
      },
      claiming: {
        title: `Ticket Claiming`,
        question: `Would you like to enable or disable panel claiming? (\`on\` or \`off\`)`,
        description: `Type the option that you would like this to set to.\nWhen enabled, support team roles will be able to claim tickets.`
      },
      support: {
        title: `Support Roles`,
        question: `What are some support roles that you would like for this panel?`,
        description: `Members with these roles will be able to view and manage support tickets.\nMention or type the names of those roles below.`
      },
      additional: {
        title: `Additional Roles`,
        question: `What are some additional roles that you would like for this panel?`,
        description: `By default, members with these roles will be able to view support tickets.\nMention or type the names of those roles below.`
      },
      channel: {
        title: `Panel Channel`,
        question: `Where would you like this panel to be sent to?`,
        description: `Mention or type the name of a channel for this setting.\nMake sure that I have the required permissions to send messages here.`
      },
      ticketFormat: {
        title: `Ticket Format`,
        question: `What format should ticket names follow?`, 
        description: `The format must be within 3 and 32 characters long.\nText that includes \`[number]\` will be replaced with the current ticket number.`
      },
      claimedFormat: {
        title: `Claimed Format`,
        question: `What format should claimed ticket names follow?`,
        description: `The format must be within 3 and 32 characters long.\nText that includes \`[number]\` will be replaced with the current ticket number.`
      }
    }
  },
  timeoutLimit: 2147483647,
  resetAliases: ["clear", "remove", "reset", "off"],
  intents: [
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_BANS',
    'GUILD_INTEGRATIONS',
    'GUILD_INVITES',
    'GUILD_VOICE_STATES',
    'GUILD_PRESENCES',
    'GUILD_MESSAGES',
    'DIRECT_MESSAGES',
    'GUILD_SCHEDULED_EVENTS'
  ],
  permissions: {
    keyPerms: [
      'ADMINISTRATOR',
      'MANAGE_GUILD',
      'MANAGE_CHANNELS',
      'MANAGE_ROLES',
      'MANAGE_NICKNAMES',
      'MANAGE_WEBHOOKS',
      'MANAGE_MESSAGES',
      'MANAGE_EMOJIS',
      'BAN_MEMBERS',
      'KICK_MEMBERS',
      'MENTION_EVERYONE',
    ],
    modPerms: ["BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_MESSAGES"],
    adminPerms: ["MANAGE_GUILD", "MANAGE_ROLES", "MANAGE_CHANNELS"]
  },
  chalkOptions: ["bold", "dim", "italic", "underline", "inverse", "strikethrough", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "gray", "bgBlack", "bgRed", "bgGreen", "bgYellow", "bgBlue", "bgMagenta", "bgCyan", "bgWhite"]
}

export default Util;