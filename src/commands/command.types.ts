import { ChatInputCommandInteraction } from "discord.js";

export interface BotCommand {
    name: string;
    description: string;
    handler(interaction: ChatInputCommandInteraction): Promise<void>;
}