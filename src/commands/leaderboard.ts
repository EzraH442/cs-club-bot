import { BotCommand } from "./command.types";

const LeaderboardCommand: BotCommand = {
    name: "leaderboard",
    description: "Replies with codeforces leaderboard.",
    async handler(interaction) {
        await interaction.reply("Filler Text");
    },
};

export default LeaderboardCommand;