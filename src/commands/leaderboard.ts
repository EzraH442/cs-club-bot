import {
  getMostRecentContest,
  getTopTenParticipants,
} from "../codeforces/methods";
import { BotCommand } from "./command.types";

const LeaderboardCommand: BotCommand = {
  name: "leaderboard",
  description: "Replies with cumulative codeforces leaderboard.",
  async handler(interaction) {
    await interaction.deferReply();
    try {
      const id = (await getMostRecentContest()).id;
      const info = await getTopTenParticipants(id);

      console.log(info);
      let handlesString = "";
      let scoreString = "";

      info.map(({ handle, points }) => {
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
