import dayjs from "dayjs";

import { BotCommand } from "./command.types";

import { Meeting, meetings } from "../data";

const LastMeetingCommand: BotCommand = {
    name: "lastmeeting",
    description: "Replies with the previous lesson slides.",
    async handler(interaction) {
        const currentDate = dayjs();

        // TODO: improve this shit method of finding last meeting
        let lastMeeting: Meeting | undefined;

        for (const meeting of meetings) {
            const meetingDate = dayjs(meeting.date);

            if (currentDate.isBefore(meetingDate)) {

                // the person used the command before the first CS club meeting
                if (!lastMeeting) {
                    await interaction.reply("There wasn't a meeting last week.");
                    break;
                }

                // default values
                const slidesLink = lastMeeting.slidesLink ?? "Slides unavailible.";
                const gymLink = lastMeeting.gymLink ?? "Gym unavailible."

                await interaction.reply(
                    `Last week's lesson: ${slidesLink}\n`
                    + `Last week's Codeforces gym: ${gymLink}`
                );

                break;
            }

            lastMeeting = meeting;
        }
    },
};

export default LastMeetingCommand;
