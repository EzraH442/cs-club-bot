import { BotCommand } from "./command.types";

import currentDate from "../currentDate";
import { meetings } from "../data";

const LastMeetingCommand: BotCommand = {
    name: "lastmeeting",
    description: "Replies with the previous lesson slides.",
    async handler(interaction) {
        for (let i = 0; i < meetings.length; i++) {
            if (meetings[i].date > currentDate()) {
                await interaction.reply(
                    `Here is the last club lesson: ${meetings[i + 1].slidesLink}`
                );
                break;
            }
        }
    },
};

export default LastMeetingCommand;
