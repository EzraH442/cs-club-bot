import { commandList } from "../commands";
import { BotCommandConfig } from "./BotCommand";

const HelpCommand: BotCommandConfig = {
  name: "help",
  description: "Replies with all possible commands.",
  handler: async (interaction) => {
    let commandListString = "";

    commandList.forEach((command) => {
      commandListString += `**${command.name}:** ${command.description}\n`;
    });

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
