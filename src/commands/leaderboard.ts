import { getStandings } from "../codeforces/methods";
import { BotCommandConfig } from "./BotCommand";

const LeaderboardCommandConfig: BotCommandConfig = {
  name: "leaderboard",
  description: "Replies with cumulative codeforces leaderboard.",
  handler: async (interaction) => {
    await interaction.deferReply();
    const standings = [...Object.entries(await getStandings())];

    const sorted = standings
      .sort(([_, score1], [__, score2]) => {
        if (score2 > score1) return 1;
        else if (score1 > score2) return -1;
        return 0;
      })
      .slice(0, 10);

    let handlesString = "";
    let scoreString = "";

    sorted.map(([handle, points]) => {
      handlesString += `${handle}\n`;
      scoreString += `${points}\n`;
    });

    let standingsEmbed = {
      title: "Standings:",
      fields: [
        { name: "Handles:", value: handlesString, inline: true },
        { name: "Score:", value: scoreString, inline: true },
      ],
    };

    await interaction.editReply({ embeds: [standingsEmbed] });
  },
};

export default LeaderboardCommandConfig;
