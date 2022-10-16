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
                    `Last week's lesson: ${meetings[i + 1].slidesLink}` + 
                    `Last week's codeforces gym: ${meetings[i + 1].gym}`
                );
                break;
            }
        }
    },
};

export default LastMeetingCommand;
