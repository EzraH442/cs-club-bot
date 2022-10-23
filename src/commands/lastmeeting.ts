import { Meeting, meetings } from "../data";

import { getLastMeeting } from "../helpers";
import { BotCommandConfig } from "./BotCommand";

const makeReplyText = (meeting: Meeting) => {
  return (
    `Last week's lesson: ${meeting.slidesLink}\n` +
    `Last week's Codeforces gym: ${meeting.gymLink}`
  );
};

const LastMeetingCommandConfig: BotCommandConfig = {
  name: "lastmeeting",
  description: "Replies with the previous lesson slides.",
  handler: async (interaction) => {
    let lastMeeting = getLastMeeting();

    await interaction.reply(
      lastMeeting
        ? makeReplyText(lastMeeting)
        : "There hasn't beet a meeting yet"
    );
  },
};

export default LastMeetingCommandConfig;
