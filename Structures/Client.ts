import Discord from "discord.js";
import Types from "../Typings/types";
import Enmap from "enmap";
import fs from "fs";
import path from "path";

import Components from "../Modules/Components";
import Commands from "../Structures/Commands";
import Config from "../Structures/Config";
import Embeds from "../Modules/Embeds";
import Functions from "../Modules/Functions";
import Prompts from "../Modules/Prompts";
import Database from "../Structures/Database";
import Logger from "../Modules/Logger";
import Util from "../Structures/Util";
import Schemas from "../Modules/Schemas";
import server from "../server";

export default class Client extends Discord.Client {
  components = new Components();
  functions = new Functions();
  embeds = new Embeds();
  schemas = new Schemas();
  logger = new Logger();
  cooldown = new Enmap();

  category = new Discord.Collection([
    ["administrator", []],
    ["developer", []],
    ["general", []],
    ["moderator", []],
    ["support", []],
    ["ticket", {
      administrator: [],
      support: [],
      basic: []
    }],
  ]);
  
  prompts = Prompts;
  commands = Commands;
  config = Config;
  db = Database;
  util = Util;

  server: any;
  readySince: number;
  cmdScheme: any[];

  constructor(options) {
    super(options);

    for (let category of Util.cmdCategories) {
      const pathCategory = this.functions.upperFirst(category);
      if (category == "ticket") {
        for (let tckCategory of Util.ticketCategories) {
          const pathTckCategory = this.functions.upperFirst(tckCategory);
          fs.readdir(path.resolve(__dirname, `../Commands/Ticket/${pathTckCategory}/`), async (error, files) => {
            if (error) throw error;

            for (let file of files) {
              if (!file.endsWith(".ts")) return;
              let name = file.split(".")[0];
              let cmd = (await import(path.resolve(__dirname, `../Commands/Ticket/${pathTckCategory}/${name}`))).default;

              this.functions.log(`CMD: ${name}`, "bold");
              this.commands.ticket[tckCategory][name].run = cmd;

              let currentCategory = this.category.get(category)[tckCategory];
              currentCategory.push(name);

              this.category.set(category, currentCategory);
            }
          });
        }
      } else {
        fs.readdir(path.resolve(__dirname, `../Commands/${pathCategory}/`), async (error, files) => {
          if (error) throw error;
          for (let file of files) {
            if (!file.endsWith(".ts")) continue;
            
            let name = file.split(".")[0];
            let cmd = (await import(path.resolve(__dirname, `../Commands/${pathCategory}/${name}/`))).default;
            
            this.functions.log(`CMD: ${name}`);
            console.log(this.commands, category)
            this.commands[category][name].run = cmd;
            
            let currentCategory = this.category.get(category) as string[];
            currentCategory.push(name);

            this.category.set(category, currentCategory);
          }
        });
      }
    }
  }
}