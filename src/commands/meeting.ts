import { formatMeetingDate, getNextMeeting } from "../helpers";
import { BotCommandConfig } from "./BotCommand";

const MeetingCommand: BotCommandConfig = {
  name: "meeting",
  description: "Replies with the next meeting date.",
  async handler(interaction) {
    const nextMeeting = getNextMeeting();
    await interaction.reply(
      nextMeeting
        ? `The next meeting is on \`${formatMeetingDate(nextMeeting.date)}\``
        : "There are no more meetings! Have a great summer!",
    );
  },
};

export default MeetingCommand;
