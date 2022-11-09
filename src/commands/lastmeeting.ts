import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import { ButtonStyle } from "discord.js";

import { formatMeetingDate, getLastMeeting } from "../helpers";
import { BotCommandConfig } from "./BotCommand";

const LastMeetingCommandConfig: BotCommandConfig = {
  name: "lastmeeting",
  description: "Replies with the previous lesson slides.",
  handler: async (interaction) => {
    const lastMeeting = getLastMeeting();

    if (!lastMeeting) {
      interaction.reply("There has not been a meeting yet!");
      return;
    }

    const { date, slidesLink, gymLink } = lastMeeting;

    const slidesLinkButton = new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setLabel(`Lesson Slides ${slidesLink ? "" : "(Unavailable)"}`)
      .setURL(slidesLink ?? "https://example.com")
      .setDisabled(!slidesLink);

    const gymLinkButton = new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setLabel(`Lesson Gym ${gymLink ? "" : "(Unavailable)"}`)
      .setURL(gymLink ?? "https://example.com")
      .setDisabled(!gymLink);

    const linkActionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      slidesLinkButton,
      gymLinkButton,
    );

    await interaction.reply({
      content: `The last meeting was on \`${formatMeetingDate(date)}\``,
      components: [linkActionRow],
    });
  },
};

export default LastMeetingCommandConfig;
