import { getStandings } from "../codeforces/methods";
import { BotCommand } from "./command.types";

const LeaderboardCommand: BotCommand = {
  name: "leaderboard",
  description: "Replies with cumulative codeforces leaderboard.",
  async handler(interaction) {
    await interaction.deferReply();
    try {
      const standings = [...Object.entries(await getStandings())];

      const sorted = standings
        .sort(([_, score1], [__, score2]) => {
          if (score2 > score1) return 1;
          else if (score1 > score2) return -1;
          return 0;
        })
        .slice(0, 10);
      console.log(sorted);
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
    } catch (e) {
      console.log(e);
    }
  },
};

export default LeaderboardCommand;
