import { BotCommandConfig } from "./BotCommand";

const CodeforcesCommand: BotCommandConfig = {
  name: "codeforces",
  description: "Replies with codeforces information.",
  handler: async (interaction) => {
    await interaction.reply("Not implemented.");
  },
};

export default CodeforcesCommand;
