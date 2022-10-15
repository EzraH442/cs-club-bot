import { BotCommand } from "./command.types";

import { commandMap } from "../commands";

const HelpCommand: BotCommand = {
    name: "help",
    description: "Replies with all possible commands.",
    async handler(interaction) {
        let commandListString = "";

        for (const command of commandMap.values()) {
            commandListString += `**${command.name}:** ${command.description}\n`;
        }

        let helpEmbed = {
            title: "Help:",
            fields: [
                {
                    name: "Commands:",
                    value: commandListString,
                },
            ],
        };

        await interaction.reply({ embeds: [helpEmbed] });
    },
};

export default HelpCommand;
