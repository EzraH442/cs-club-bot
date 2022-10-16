import { BotCommand } from "./command.types";

const CodeforcesCommand: BotCommand = {
    name: "codeforces",
    description: "Replies with codeforces information.",
    async handler(interaction) {
        await interaction.reply("Not implemented.");
    },
};

export default CodeforcesCommand;
