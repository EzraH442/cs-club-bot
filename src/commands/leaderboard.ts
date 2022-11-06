import { ButtonInteraction, ComponentType } from "discord.js";
import { getStandings } from "../codeforces/methods";
import { BotCommandConfig } from "./BotCommand";
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const LeaderboardCommandConfig: BotCommandConfig = {
  name: "leaderboard",
  description: "Replies with cumulative codeforces leaderboard.",
  handler: async (interaction) => {
    await interaction.deferReply();
    const standings = [...Object.entries(await getStandings())];

    const sorted = standings.sort(([_, score1], [__, score2]) => {
      if (score2 > score1) return 1;
      else if (score1 > score2) return -1;
      return 0;
    });

    let handles: String[] = [];
    let scores: String[] = [];

    //Push the handles and scores into their respective arrays as strings
    sorted.map(([handle, points]) => {
      handles.push(`${handle}`);
      scores.push(`${points}`);
    });

    //standingsEmbeds[i] contains a discord embed of the ith page of the leaderboard
    let standingsEmbeds: Object[] = [];

    //standingsEmbedPage contains the current page being displayed 
    let standingsEmbedPage = 0;

    //Each page contains a max of ten handles and scores
    for (let page = 0; page < Math.ceil(sorted.length / 10); page++) {

      //Split handles into 10 lines to display 
      let handlesString = "";
      handles
        .slice(page * 10, page * 10 + Math.min(handles.length - page * 10, 10))
        .map((handle) => {
          handlesString += `${handle}\n`;
        });
      console.log(handlesString);

      //Split scores into 10 lines to display
      let scoresString = "";
      scores
        .slice(page * 10, page * 10 + Math.min(scores.length - page * 10, 10))
        .map((score) => {
          scoresString += `${score}\n`;
        });
      console.log(scoresString);

      //Create standings embed page
      let standingsPage = {
        title: "Standings:",
        fields: [
          { name: "Handles:", value: handlesString, inline: true },
          { name: "Score:", value: scoresString, inline: true },
        ],
        footer: {
          text: `Page ${page}`,
        },
      };

      standingsEmbeds.push(standingsPage);
    }

    //Action row for previous and next page
    const actionRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("previous")
          .setEmoji("⬅️")
          .setStyle(ButtonStyle.Primary)
          .setDisabled(standingsEmbedPage === 0),
        new ButtonBuilder()
          .setCustomId("next")
          .setEmoji("➡️")
          .setStyle(ButtonStyle.Primary)
          .setDisabled(standingsEmbedPage === standingsEmbeds.length - 1)
      );
    console.log(JSON.stringify(actionRow));

    const response = await interaction.editReply({
      embeds: [standingsEmbeds[standingsEmbedPage]],
      components: [actionRow],
    });

    //Filter out button interactions from users that are not the sender
    const collectorFilter = (buttonInteraction: ButtonInteraction) =>
      buttonInteraction.user.id === interaction.user.id;

    const collector = response.createMessageComponentCollector({
      filter: collectorFilter,
      componentType: ComponentType.Button,
    });

    //Button interaction handler
    collector.on("collect", async collectorInteraction => {
      await collectorInteraction.deferUpdate();
      if (collectorInteraction.customId === "previous") {
        //Go to previous page
        standingsEmbedPage--;
      }
      if (collectorInteraction.customId === "next") {
        //Go to next page
        standingsEmbedPage++;
      }

      //Update availability of buttons
      actionRow["components"][0].setDisabled(standingsEmbedPage === 0);
      actionRow["components"][1].setDisabled(standingsEmbedPage === standingsEmbeds.length - 1)
      await collectorInteraction.editReply({
        embeds: [standingsEmbeds[standingsEmbedPage]],
        components: [actionRow],
      });
    });
  },
};

export default LeaderboardCommandConfig;
