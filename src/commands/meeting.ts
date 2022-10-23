import dayjs from "dayjs";
import { getNextMeeting } from "../helpers";
import { BotCommandConfig } from "./BotCommand";

const MeetingCommand: BotCommandConfig = {
  name: "meeting",
  description: "Replies with the next meeting date.",
  async handler(interaction) {
    const nextMeeting = getNextMeeting();
    await interaction.reply(
      nextMeeting
        ? `The next CS Club meeting is on ${dayjs(nextMeeting.date).format(
            "MMMM D, YYYY"
          )}`
        : "There are no more CS Club Meetings! Have a great summer!"
    );
  },
};

export default MeetingCommand;
