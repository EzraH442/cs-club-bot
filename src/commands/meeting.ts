import { BotCommand } from "./command.types";

import dateToText from "../dateToText";
import currentDate from "../currentDate";
import { meetingDates } from "../data";

const MeetingCommand: BotCommand = {
    name: "meeting",
    description: "Replies with the next meeting date.",
    async handler(interaction) {
        for (let i = 0; i < meetingDates.length; i++) {
            if (meetingDates[i] > currentDate()) {
                await interaction.reply(
                    `The next CS Club meeting is on ${dateToText(meetingDates[i + 1])}`
                );

                break;
            }
        }
    },
};

export default MeetingCommand;
