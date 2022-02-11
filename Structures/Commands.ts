const Commands = {
  General: {
    description: "Basic info / utility commands available to all users.",
    avatar: {
      name: "Avatar",
      description: "Displays the profile avatar of any user.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 2,
      minArgs: 0,
      options: [],
      aliases: ["av"],
      usage: "avatar [user]",
      category: "General",
      commandName: "avatar"
    },
    botinfo: {
      name: "Bot Info",
      description: "Provides information about Logic Link.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 2,
      minArgs: 0,
      options: [],
      aliases: ["binfo"],
      usage: "botinfo",
      category: "General",
      commandName: "botinfo"
    },
    help: {
      name: "Help",
      description: "Provides a list of commands.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 2,
      minArgs: 0,
      options: [],
      aliases: ["cmd", "cmds", "commands"],
      usage: "help [command name]",
      category: "General",
      commandName: "help"
    },
    serverinfo: {
      name: "Server Info",
      description: "Provides info about this server.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 6,
      minArgs: 0,
      options: [],
      aliases: ["sinfo"],
      usage: "serverinfo",
      category: "General",
      commandName: "serverinfo"
    },
    roleinfo: {
      name: "Role Info",
      description: "Provides info about a specific role.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 4,
      minArgs: 1,
      options: [],
      aliases: ["rinfo"],
      usage: "roleinfo <role>",
      category: "General",
      commandName: "roleinfo"
    },
    channelinfo: {
      name: "Channel Info",
      description: "Provides info about a specific channel.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 5,
      minArgs: 0,
      options: [],
      aliases: ["cinfo"],
      usage: "channelinfo <channel>",
      category: "General",
      commandName: "channelinfo"
    },
    invite: {
      name: "Bot Invite",
      description: "Provides the invite link that you can use to add Logic Link to this server.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 1,
      minArgs: 0,
      options: [],
      aliases: ["inv", "links"],
      usage: "invite",
      category: "General",
      commandName: "invite"
    },
    membercount: {
      name: "Member Count",
      description: "Provides the number of members in this server.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 1,
      minArgs: 0,
      options: [],
      aliases: ["mcount", "mc"],
      usage: "membercount",
      category: "General",
      commandName: "membercount"
    },
    pastebin: {
      name: "Pastebin",
      description: "Creates a new paste from https://pastebin.com.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 10800,
      minArgs: 1,
      options: ["new"],
      aliases: ["paste", "pbin"],
      usage: "pastebin <option>",
      category: "General",
      commandName: "pastebin"
    },
    ping: {
      name: "Ping",
      description: "Checks the bot's latency.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 1,
      minArgs: 0,
      options: [],
      aliases: [],
      usage: "ping",
      category: "General",
      commandName: "ping"
    },
    remind: {
      name: "Remind",
      description: "Creates an automatic reminder that direct messages you a task when the time runs out.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 5,
      minArgs: 1,
      options: [],
      aliases: ["remindme"],
      usage: "remind [duration] <task>",
      category: "General",
      commandName: "remind"
    },
    uptime: {
      name: "Up-Time",
      description: "Shows how long the bot has last been online for.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 1,
      minArgs: 0,
      options: [],
      aliases: ["up-time", "upt"],
      usage: "uptime",
      category: "General",
      commandName: "uptime"
    },
    voice: {
      name: "Voice",
      description: "Performs various voice channel actions.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 2,
      minArgs: 1,
      options: ["connect", "disconnect", "play", "pause"],
      aliases: ["vc"],
      usage: "voice <option>",
      category: "General",
      commandName: "voice",
      option: {
        connect: {
          name: "Voice - Connect",
          description: "Connects Logic Link to a voice channel.",
          permissions: ["ALL"],
          clientPerms: [],
          cooldown: 2,
          minArgs: 2,
          options: [],
          aliases: [],
          usage: "voice connect",
          category: "General",
          commandName: "connect"
        },
        disconnect: {
          name: "Voice - Disconnect",
          description: "Disconnects Logic Link from a voice channel.",
          permissions: ["ALL"],
          clientPerms: [],
          cooldown: 2,
          minArgs: 2,
          options: [],
          aliases: [],
          usage: "voice disconnect",
          category: "General",
          commandName: "disconnect"
        },
        play: {
          name: "Voice - Play",
          description: "Play any song or podcast from YouTube in a voice channel.",
          permissions: ["ALL"],
          clientPerms: [],
          cooldown: 2,
          minArgs: 2,
          options: [],
          aliases: [],
          usage: "voice play <search query>",
          category: "General",
          commandName: "play"
        },
        pause: {
          name: "Voice - Pause",
          description: "Pauses the currently playing audio.",
          permissions: ["ALL"],
          clientPerms: [],
          cooldown: 2,
          minArgs: 2,
          options: [],
          aliases: [],
          usage: "voice pause",
          category: "General",
          commandName: "pause"
        }
      }
    },
    whois: {
      name: "Who Is",
      description: "Retrieves information about a user.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 3,
      minArgs: 0,
      options: [],
      aliases: ["who-is", "userinfo", "uinfo", "who"],
      usage: "whois [user]",
      category: "General",
      commandName: "whois"
    }
  },
  Ticket: {
    description: "Next generation ticket systems and commands great for de-cluttering channels.",
    thelp: {
      name: "Ticket Help",
      description: "Provides information about ticket commands.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 2,
      minArgs: 0,
      options: [],
      aliases: ["tickethelp"],
      usage: "thelp [command]",
      category: "Ticket",
      subCategory: "Basic",
      commandName: "thelp"
    },
    panels: {
      name: "Ticket Panels",
      description: "Allows users to view or modify ticket panels.",
      permissions: ["ADMINISTRATOR"],
      clientPerms: [],
      cooldown: 3,
      minArgs: 0,
      options: ["new", "modify", "delete"],
      aliases: ["panel", "tpanels"],
      usage: "panels [new | modify | delete]",
      category: "Ticket",
      subCategory: "Administrator",
      commandName: "panels",
      option: {
        new: {
          name: "Ticket Panels - New",
          description: "Creates a new ticket panel for this server.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 3,
          minArgs: 0,
          options: [],
          aliases: [],
          usage: "panels new",
          category: "Ticket",
          subCategory: "Administrator",
          commandName: "new",
        },
        modify: {
          name: "Ticket Panels - Modify",
          description: "Modifies the data of a ticket panel.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 3,
          minArgs: 0,
          options: [],
          aliases: [],
          usage: "panels modify <panel id>",
          category: "Ticket",
          subCategory: "Administrator",
          commandName: "modify",
        },
        delete: {
          name: "Ticket Panels - Delete",
          description: "Deletes a ticket panel.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 3,
          minArgs: 0,
          options: [],
          aliases: [],
          usage: "panels delete <panel id>",
          category: "Ticket",
          subCategory: "Administrator",
          commandName: "delete",
        },
        all: {
          name: "Ticket Panels - All",
          description: "Shows a list of all panels and their configuration.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 3,
          minArgs: 0,
          options: [],
          aliases: [],
          usage: "panels all",
          category: "Ticket",
          subCategory: "Administrator",
          commandName: "all",
        },
        help: {
          name: "Ticket Panels - Help",
          description: "Shows a list of all command options for the panels command.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 3,
          minArgs: 0,
          options: [],
          aliases: [],
          usage: "panels help",
          category: "Ticket",
          subCategory: "Administrator",
          commandName: "help",
        }
      }
    },
    tsettings: {
      name: "Ticket Settings",
      description: "Allows users to view or modify ticket settings.",
      permissions: ["ADMINISTRATOR"],
      clientPerms: [],
      cooldown: 3,
      minArgs: 0,
      options: [],
      aliases: ["ticketsettings", "tset"],
      usage: "tsettings [setting] [option parameter]",
      category: "Ticket",
      subCategory: "Administrator",
      commandName: "tsettings"
    }
  },
  Moderator: {
    description: "Advanced moderation commands useful for stopping raids and attacks.",
    announce: {
      name: "Announce",
      description: "Sends an announcement to a channel.",
      permissions: ["MENTION_EVERYONE"],
      clientPerms: ["MENTION_EVERYONE"],
      cooldown: 3,
      minArgs: 1,
      options: ["everyone", "here", "role"],
      aliases: ["announcement", "anounce"],
      usage: "announce [option] <channel> <announcement>",
      category: "Moderator",
      commandName: "announce",
      option: {
        everyone: {
          name: "Announce - Everyone",
          description: "Sends an announcement to a channel that pings @everyone.",
          permissions: ["SEND_MESSAGES", "MENTION_EVERYONE"],
          clientPerms: ["SEND_MESSAGES", "MENTION_EVERYONE"],
          cooldown: 3,
          minArgs: 1,
          options: [],
          aliases: [],
          usage: "announce everyone <channel> <announcement>",
          category: "Moderator",
          commandName: "everyone"
        },
        here: {
          name: "Announce - Here",
          description: "Sends an announcement to a channel that pings @here.",
          permissions: ["SEND_MESSAGES", "MENTION_EVERYONE"],
          clientPerms: ["SEND_MESSAGES", "MENTION_EVERYONE"],
          cooldown: 3,
          minArgs: 1,
          options: [],
          aliases: [],
          usage: "announce here <channel> <announcement>",
          category: "Moderator",
          commandName: "here"
        },
        role: {
          name: "Announce - Role",
          description: "Sends an announcement to a channel that pings a role.",
          permissions: ["SEND_MESSAGES"],
          clientPerms: ["SEND_MESSAGES"],
          cooldown: 3,
          minArgs: 1,
          options: [],
          aliases: [],
          usage: "announce role <role> <channel> <announcement>",
          category: "Moderator",
          commandName: "role"
        }
      }
    },
    ban: {
      name: "Ban",
      description: "Permanently removes members from this server, banned users are not able to rejoin unless unbanned.",
      permissions: ["BAN_MEMBERS"],
      clientPerms: ["BAN_MEMBERS"],
      cooldown: 4,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "ban <user> [reason]",
      category: "Moderator",
      commandName: "ban",
    },
    case: {
      name: "Cases",
      description: "Allows users to view and remove moderation cases for that server.",
      permissions: ["MANAGE_NICKNAMES"],
      clientPerms: ["MANAGE_NICKNAMES"],
      cooldown: 4,
      minArgs: 0,
      options: [],
      aliases: ["cases"],
      usage: "case <id>",
      category: "Moderator",
      commandName: "case",
    },
    softban: {
      name: "Softban",
      description: "Bans members from this server without deleting previous messages.",
      permissions: ["BAN_MEMBERS"],
      clientPerms: ["BAN_MEMBERS"],
      cooldown: 4,
      minArgs: 1,
      options: [],
      aliases: ["sban"],
      usage: "softban <user> [reason]",
      category: "Moderator",
      commandName: "softban"
    },
    tempban: {
      name: "Tempban",
      description: "Temporarily bans members from this server.",
      permissions: ["BAN_MEMBERS"],
      clientPerms: ["BAN_MEMBERS"],
      cooldown: 4,
      minArgs: 1,
      options: [],
      aliases: ["tban"],
      usage: "tban <user> <duration> [reason]",
      category: "Moderator",
      commandName: "tempban"
    },
    embed: {
      name: "Embed",
      description: "Creates a customizeable embed to send in any channel.",
      permissions: ["MANAGE_MESSAGES"],
      clientPerms: ["SEND_MESSAGES"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["emb"],
      usage: "embed \"<title>\" <description>",
      category: "Moderator",
      commandName: "embed"
    },
    kick: {
      name: "Kick",
      description: "Removes members from this server, kicked users are able to rejoin.",
      permissions: ["KICK_MEMBERS"],
      clientPerms: ["KICK_MEMBERS"],
      cooldown: 1,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "kick <user> [reason]",
      category: "Moderator",
      commandName: "kick"
    },
    mute: {
      name: "Mute",
      description: "Removes the ablity for a user to type in a text channel.",
      permissions: ["MANAGE_ROLES"],
      clientPerms: ["MANAGE_ROLES"],
      cooldown: 7,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "mute <user> [duration] [reason]",
      category: "Moderator",
      commandName: "mute"
    },
    nickname: {
      name: "Nickname",
      description: "Modifies the nickname of members in this server.",
      permissions: ["MANAGE_NICKNAMES"],
      clientPerms: ["MANAGE_NICKNAMES"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["nick", "setnick", "set-nick"],
      usage: "nickname <user> <new nickname | reset>",
      category: "Moderator",
      commandName: "nickname"
    },
    purge: {
      name: "Purge",
      description: "Quickly deletes messages from a channel.",
      permissions: ["MANAGE_MESSAGES"],
      clientPerms: ["MANAGE_MESSAGES"],
      cooldown: 8,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "purge <number>",
      category: "Moderator",
      commandName: "purge"
    },
    slowmode: {
      name: "Slowmode",
      description: "Limits how fast users are able to send messages.",
      permissions: ["MANAGE_CHANNELS"],
      clientPerms: ["MANAGE_CHANNELS"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["slow", "smode"],
      usage: "slowmode [channel] <number | off>",
      category: "Moderator",
      commandName: "slowmode"
    },
    unban: {
      name: "Un-Ban",
      description: "Removes bans from users.",
      permissions: ["BAN_MEMBERS"],
      clientPerms: ["BAN_MEMBERS"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["un-ban"],
      usage: "unban <user> [reason]",
      category: "Moderator",
      commandName: "unban"
    },
    unmute: {
      name: "Un-Mute",
      description: "Removes mutes from users.",
      permissions: ["MANAGE_CHANNELS"],
      clientPerms: ["MANAGE_CHANNELS"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["un-mute"],
      usage: "unmute <user> [reason]",
      category: "Moderator",
      commandName: "unmute"
    },
    warn: {
      name: "Warn",
      description: "Creates a logged warning attached to a certain user.",
      permissions: ["MANAGE_NICKNAMES"],
      clientPerms: [],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "warn <user> [warning]",
      category: "Moderator",
      commandName: "warn"
    },
    warnings: {
      name: "Warnings",
      description: "Views all warnings from a particular user.",
      permissions: ["MANAGE_NICKNAMES"],
      clientPerms: [],
      cooldown: 3,
      minArgs: 1,
      options: [],
      aliases: ["warns"],
      usage: "warnings <member>",
      category: "Moderator",
      commandName: "warnings"
    }
  },
  Administrator: {
    description: "Easy to use admin / utility commands that can get the job done quickly.",
    addrole: {
      name: "Add Role",
      description: "Adds a specific role to a user.",
      permissions: ["MANAGE_ROLES"],
      clientPerms: ["MANAGE_ROLES"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["giverole", "add"],
      usage: "addrole <user> <role>",
      category: "Administrator",
      commandName: "addrole",
    },
    addroles: {
      name: "Add Roles",
      description: "Adds multiple roles to a user.",
      permissions: ["MANAGE_ROLES"],
      clientPerms: ["MANAGE_ROLES"],
      cooldown: 10,
      minArgs: 1,
      options: [],
      aliases: ["giveroles"],
      usage: "addroles <user> <roles>",
      category: "Administrator",
      commandName: "addroles",
    },
    create: {
      name: "Create",
      description: "Creates roles and channels in this server.",
      permissions: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
      clientPerms: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
      cooldown: 2,
      minArgs: 1,
      options: ["channel", "role", "voice"],
      aliases: ["crt"],
      usage: "create <option> <name>",
      category: "Administrator",
      commandName: "create",
      option: {
        channel: {
          name: "Create - Channel",
          description: "Creates text channels in this server.",
          permissions: ["MANAGE_CHANNELS"],
          clientPerms: ["MANAGE_CHANNELS"],
          cooldown: 2,
          options: [],
          aliases: [],
          usage: "create channel <name>",
          category: "Administrator",
          commandName: "channel"
        },
        role: {
          name: "Create - Role",
          description: "Creates roles in this server.",
          permissions: ["MANAGE_ROLES"],
          clientPerms: ["MANAGE_ROLES"],
          cooldown: 2,
          options: [],
          aliases: [],
          usage: "create role <name>",
          category: "Administrator",
          commandName: "role"
        },
        voice: {
          name: "Create - Voice Channel",
          description: "Creates voice channels in this server.",
          permissions: ["MANAGE_CHANNELS"],
          clientPerms: ["MANAGE_CHANNELS"],
          cooldown: 2,
          options: [],
          aliases: [],
          usage: "create voice <name>",
          category: "Administrator",
          commandName: "voice"
        }
      }
    },
    delete: {
      name: "Delete",
      description: "Deletes roles and channels in this server.",
      permissions: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
      clientPerms: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["dlt"],
      usage: "delete <role | channel>",
      category: "Administrator",
      commandName: "delete",
      option: {
        channel: {
          name: "Delete - Channel",
          description: "Deletes channels in this server.",
          permissions: ["MANAGE_CHANNELS"],
          clientPerms: ["MANAGE_CHANNELS"],
          cooldown: 2,
          options: [],
          aliases: [],
          usage: "delete <channel>",
          category: "Administrator",
          commandName: "channel"
        },
        role: {
          name: "Delete - Role",
          description: "Deletes roles in this server.",
          permissions: ["MANAGE_ROLES"],
          clientPerms: ["MANAGE_ROLES"],
          cooldown: 2,
          options: [],
          aliases: [],
          usage: "delete <role>",
          category: "Administrator",
          commandName: "role"
        }
      }
    },
    hide: {
      name: "Hide",
      description: "Prevents all users from being able to see a certain channel.",
      permissions: ["MANAGE_CHANNELS"],
      clientPerms: ["MANAGE_CHANNELS"],
      cooldown: 5,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "hide [channel] [reason]",
      category: "Administrator",
      commandName: "hide"
    },
    hoist: {
      name: "Hoist",
      description: "Separates users with a role differently from online members.",
      permissions: ["MANAGE_ROLES"],
      clientPerms: ["MANAGE_ROLES"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "hoist <role>",
      category: "Administrator",
      commandName: "hoist"
    },
    lock: {
      name: "Lock",
      description: "Prevents all users from being able to type in a text channel.",
      permissions: ["MANAGE_CHANNELS"],
      clientPerms: ["MANAGE_CHANNELS"],
      cooldown: 3,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "lock [channel] [reason]",
      category: "Administrator",
      commandName: "lock"
    },
    lockdown: {
      name: "Lockdown",
      description: "Locks all channels from being typed in from regular server members.",
      permissions: ["MANAGE_CHANNELS"],
      clientPerms: ["MANAGE_CHANNELS"],
      cooldown: 8,
      minArgs: 0,
      options: [],
      aliases: ["ld"],
      usage: "lockdown [off]",
      category: "Administrator",
      commandName: "lockdown"
    },
    removerole: {
      name: "Remove Role",
      description: "Removes a specific role from a user.",
      permissions: ["MANAGE_ROLES"],
      clientPerms: ["MANAGE_ROLES"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["takerole", "remove"],
      usage: "removerole <user> <role>",
      category: "Administrator",
      commandName: "removerole",
    },
    removeroles: {
      name: "Remove Role",
      description: "Removes multiple roles from a user.",
      permissions: ["MANAGE_ROLES"],
      clientPerms: ["MANAGE_ROLES"],
      cooldown: 10,
      minArgs: 1,
      options: [],
      aliases: ["takeroles"],
      usage: "removeroles <user> <roles>",
      category: "Administrator",
      commandName: "removeroles",
    },
    settings: {
      name: "Settings",
      description: "Allows you to view and configure this server settings.",
      permissions: ["ADMINISTRATOR"],
      clientPerms: [],
      cooldown: 2,
      minArgs: 0,
      options: ["prefix", "adminrole", "modrole", "logchannel", "welcome", "welcomechannel", "welcomerole"],
      aliases: ["setting", "set"],
      usage: "settings [option] [option parameter]",
      category: "Administrator",
      commandName: "settings",
      option: {
        prefix: {
          name: "Setting - Prefix",
          description: "Modifies the current prefix for this server.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["pre"],
          usage: "settings prefix <new prefix>",
          category: "Administrator",
          commandName: "prefix"
        },
        adminrole: {
          name: "Setting - Administrator Role",
          description: "Changes what roles will have access to administrator commands.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["adm", "admin", "administrator", "administratorrole"],
          usage: "settings adminrole <role>",
          category: "Administrator",
          commandName: "adminrole"
        },
        modrole: {
          name: "Setting - Moderator Role",
          description: "Changes what roles will have access to moderator commands.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["mod", "moderator", "moderatorrole"],
          usage: "settings modrole <role>",
          category: "Administrator",
          commandName: "modrole"
        },
        logchannel: {
          name: "Setting - Log Channel",
          description: "Changes what channel server logs are sent to.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["log", "logchan"],
          usage: "settings logchannel <channel>",
          category: "Administrator",
          commandName: "logchannel"
        },
        mutedrole: {
          name: "Setting - Muted Role",
          description: "Changes what role will be granted to users who are muted.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["muted"],
          usage: "settings mutedrole <role>",
          category: "Administrator",
          commandName: "mutedrole"
        },
        welcome: {
          name: "Setting - Welcome System",
          description: "Enables or disable the welcoming system.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["welc", "welcomesystem"],
          usage: "settings welcome <on | off>",
          category: "Administrator",
          commandName: "welcome"
        },
        welcomechannel: {
          name: "Setting - Welcome Channel",
          description: "Changes what channel new users are welcomed in.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["welcomechan", "welcchan", "wc", "welc"],
          usage: "settings welcomechannel <channel>",
          category: "Administrator",
          commandName: "welcomechannel"
        },
        welcomerole: {
          name: "Setting - Welcome Role",
          description: "Changes what role new users recieve once they join this server.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["welcrole", "wr", "welcr"],
          usage: "settings welcomerole <role>",
          category: "Administrator",
          commandName: "welcomerole"
        },
        welcomemsg: {
          name: "Setting - Welcome Message",
          description: "Modifies the kind message that greets new users in this server.\n\`[user]\`, \`[tag]\`, \`[id]\` and \`[username]\` are replaced with their respective values.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["welcmsg", "wm", "welcm"],
          usage: "settings welcomemsg <msg>",
          category: "Administrator",
          commandName: "welcomemsg"
        },
        reset: {
          name: "Settings - Reset",
          description: "Resets server settings for that guild.",
          permissions: ["ADMINISTRATOR"],
          clientPerms: [],
          cooldown: 1,
          aliases: ["rst"],
          usage: "settings reset",
          category: "Administrator",
          commandName: "reset"
        },
      }
    },
    unhoist: {
      name: "Un-Hoist",
      description: "Turns off the hoist for a role.",
      permissions: ["MANAGE_ROLES"],
      clientPerms: ["MANAGE_ROLES"],
      cooldown: 2,
      minArgs: 1,
      options: [],
      aliases: ["un-hoist"],
      usage: "unhoist <role>",
      category: "Administrator",
      commandName: "unhoist"
    },
    unhide: {
      name: "Un-Hide",
      description: "Allows users to be able to see a certain channel again.",
      permissions: ["MANAGE_CHANNELS"],
      clientPerms: ["MANAGE_CHANNELS"],
      cooldown: 5,
      minArgs: 1,
      options: [],
      aliases: [],
      usage: "unhide [channel] [reason]",
      category: "Administrator",
      commandName: "unhide"
    },
    unlock: {
      name: "Un-Lock",
      description: "Re-enables the ability for users to talk in a text channel.",
      permissions: ["MANAGE_CHANNELS"],
      clientPerms: ["MANAGE_CHANNELS"],
      cooldown: 5,
      minArgs: 1,
      options: [],
      aliases: ["un-lock"],
      usage: "unlock [channel] [reason]",
      category: "Administrator",
      commandName: "unlock"
    }
  },
  Support: {
    description: "Helpful commands for our support team used to diagnose issues.",
    bug: {
      name: "Bug Report",
      description: "Submits a bug report to the support server.",
      permissions: [],
      clientPerms: [],
      cooldown: 10,
      minArgs: 1,
      options: [],
      aliases: ["report"],
      usage: "bug new",
      category: "Support",
      commandName: "bug"
    },
    error: {
      name: "Error",
      description: "Retrieves error information from an error ID.",
      permissions: ["SUPPORT_TEAM"],
      clientPerms: [],
      cooldown: 3,
      minArgs: 1,
      options: [],
      aliases: ["err"],
      usage: "error <id>",
      category: "Support",
      commandName: "error"
    },
    shelp: {
      name: "Support Help",
      description: "Provides information about support team commands.",
      permissions: [],
      clientPerms: [],
      cooldown: 2,
      minArgs: 0,
      options: [],
      aliases: [],
      usage: "shelp [command]",
      category: "Support",
      commandName: "shelp"
    }
  },
  Developer: {
    description: "Secret development commands used to debug problems and fix bugs.",
    blacklist: {
      name: "Blacklist",
      description: "Disallows certain users from using commands.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: ["view"],
      aliases: ["bl", "bls"],
      usage: "blacklist <user> [reason]",
      category: "Developer",
      commandName: "blacklist",
      option: {
        view: {
          name: "Blacklist - View",
          description: "Shows a list of currently blacklisted users.",
          permissions: ["BOT_DEVELOPER"],
          clientPerms: [],
          cooldown: 0,
          minArgs: 1,
          options: ["view"],
          aliases: [],
          usage: "blacklist <user> [reason]",
          category: "Developer",
          commandName: "blacklist",
        }
      }
    },
    devlock: {
      name: "Developer Lock",
      description: "Disables commands when they contain bugs, are under development, or contain security risks.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: ["view"],
      aliases: ["dlock", "dl"],
      usage: "devlock <command> [guild] [option | reason]",
      category: "Developer",
      commandName: "devlock",
      option: {
        view: {
          name: "Developer Lock - View",
          description: "Used to view the currently locked commands.",
          permissions: ["BOT_DEVELOPER"],
          clientPerms: [],
          cooldown: 0,
          minArgs: 1,
          options: [],
          aliases: ["check"],
          usage: "devlock view",
          category: "Developer",
          commandName: "view",
        }
      }
    },
    devlockdown: {
      name: "Developer Lockdown",
      description: "Disables all commands bein being used.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: [],
      aliases: ["devld"],
      usage: "devlockdown [guild] <reason>",
      category: "Developer",
      commandName: "devlockdown"
    },
    devhelp: {
      name: "Developer Help",
      description: "Shows a list of developer commands.",
      permissions: ["ALL"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 0,
      options: [],
      aliases: ["dhelp"],
      usage: "devhelp [option]",
      category: "Developer",
      commandName: "devhelp"
    },
    devmode: {
      name: "Developer Mode",
      description: "Enables the bot developer mode.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: [],
      aliases: ["dmode"],
      usage: "devmode <on | off>",
      category: "Developer",
      commandName: "devmode"
    },
    eval: {
      name: "Eval",
      description: "Executes javascript code directly from discord.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: ["silent", "async"],
      aliases: ["e"],
      usage: "eval [option] <code>",
      category: "Developer",
      commandName: "eval",
      option: {
        silent: {
          name: "Eval - Silent",
          description: "Executes javascript code silently.",
          permissions: ["BOT_DEVELOPER"],
          clientPerms: [],
          cooldown: 0,
          minArgs: 1,
          options: [],
          aliases: ["s"],
          usage: "eval silent <code>",
          category: "Developer",
          commandName: "silent",
        },
        async: {
          name: "Eval - Async",
          description: "Executes javascript code in an asynchronous thread.",
          permissions: ["BOT_DEVELOPER"],
          clientPerms: [],
          cooldown: 0,
          minArgs: 1,
          options: [],
          aliases: ["a"],
          usage: "eval async <code>",
          category: "Developer",
          commandName: "async",
        }
      }
    },
    logs: {
      name: "Logs",
      description: "Allows the bot developer to view and create logs.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 0,
      options: ["add", "remove", "persistent"],
      aliases: [],
      usage: "logs <option>",
      category: "Developer",
      commandName: "logs"
    },
    reload: {
      name: "Reload",
      description: "Reloads the content of a command file.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: [],
      aliases: ["rld"],
      usage: "reload <command name>",
      category: "Developer",
      commandName: "reload"
    },
    reset: {
      name: "Reset",
      description: "Resets database keys.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: ["cooldown", "settings"],
      aliases: ["rst"],
      usage: "reset <option> <option parameter>",
      category: "Developer",
      commandName: "reset",
      option: {
        cooldown: {
          name: "Reset - Cooldown",
          description: "Resets the command cooldown for a specific user.",
          permissions: ["BOT_DEVELOPER"],
          clientPerms: [],
          cooldown: 0,
          minArgs: 1,
          options: [],
          aliases: [],
          usage: "reset cooldown <user> [command]",
          category: "Developer",
          commandName: "cooldown",
        },
        settings: {
          name: "Reset - Settings",
          description: "Resets the settings for a particular guild.",
          permissions: ["BOT_DEVELOPER"],
          clientPerms: [],
          cooldown: 0,
          minArgs: 1,
          options: [],
          aliases: [],
          usage: "reset settings <guild> [setting]",
          category: "Developer",
          commandName: "settings",
        }
      }
    },
    restart: {
      name: "Restart",
      description: "Restarts Logic Link.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 0,
      options: [],
      aliases: [],
      usage: "restart",
      category: "Developer",
      commandName: "restart"
    },
    shutdown: {
      name: "Shutdown",
      description: "Logs out of Logic Link.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 0,
      options: [],
      aliases: [],
      usage: "shutdown",
      category: "Developer",
      commandName: "shutdown"
    },
    test: {
      name: "Test",
      description: "A command used to test out new features.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 0,
      options: [],
      aliases: [],
      usage: "test",
      category: "Developer",
      commandName: "test"
    },
    unblacklist: {
      name: "Un-Blacklist",
      description: "Un-blacklists users from Logic Link.",
      permissions: ["BOT_DEVELOPER"],
      clientPerms: [],
      cooldown: 0,
      minArgs: 1,
      options: [],
      aliases: ["ubl"],
      usage: "unblacklist <user>",
      category: "Developer",
      commandName: "unblacklist",
    },
  }
}

export default Commands;