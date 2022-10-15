import HelpCommand from "./commands/help";
import LastMeetingCommand from "./commands/lastmeeting";
import LeaderboardCommand from "./commands/leaderboard";
import LinktreeCommand from "./commands/linktree";
import MeetingCommand from "./commands/meeting";

const commandList = [
    HelpCommand,
    LastMeetingCommand,
    LeaderboardCommand,
    LinktreeCommand,
    MeetingCommand,
];

const commandMap = new Map(
    commandList.map((command) => {
        return [command.name, command];
    })
);

export { commandList, commandMap };
