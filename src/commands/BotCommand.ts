import { ChatInputCommandInteraction } from "discord.js";

export interface BotCommandConfig {
  name: string;
  description: string;
  handler: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

class BotCommand {
  name: string;
  description: string;
  handler: (interaction: ChatInputCommandInteraction) => Promise<void>;

  constructor(config: BotCommandConfig) {
    const { name, description, handler } = config;
    this.name = name;
    this.description = description;
    this.handler = handler;
  }

  getMapEntry: () => readonly [string, BotCommand] = () => {
    return [this.name, this];
  };

  getCommandInfo = () => {
    return {
      name: this.name,
      description: this.description,
    };
  };
}

export default BotCommand;
