import dayjs from "dayjs";

import { BotCommand } from "./command.types";

import { meetings } from "../data";

const MeetingCommand: BotCommand = {
    name: "meeting",
    description: "Replies with the next meeting date.",
    async handler(interaction) {
        const currentDate = dayjs();

        for (const { date } of meetings) {
            const meetingDate = dayjs(date);

            if (currentDate.isBefore(meetingDate)) {
                const dateText = meetingDate.format("MMMM DD, YYYY");

                await interaction.reply(`The next CS Club meeting is on ${dateText}`);

                break;
            }
        }
    },
};

export default MeetingCommand;
