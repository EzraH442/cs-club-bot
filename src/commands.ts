import BotCommand from "./commands/BotCommand";
import CodeforcesCommand from "./commands/codeforces";
import HelpCommand from "./commands/help";
import LastMeetingCommand from "./commands/lastmeeting";
import LeaderboardCommand from "./commands/leaderboard";
import LinktreeCommand from "./commands/linktree";
import MeetingCommand from "./commands/meeting";

const commandList = [
  new BotCommand(HelpCommand),
  new BotCommand(LastMeetingCommand),
  new BotCommand(LeaderboardCommand),
  new BotCommand(LinktreeCommand),
  new BotCommand(MeetingCommand),
];

const commandMap = new Map<string, BotCommand>(
  commandList.map((command) => command.getMapEntry())
);

export { commandList, commandMap };
