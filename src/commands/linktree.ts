import { BotCommandConfig } from "./BotCommand";

const LinktreeCommand: BotCommandConfig = {
  name: "linktree",
  description: "Replies with the linktree link.",
  async handler(interaction) {
    await interaction.reply(
      "Here is the Linktree: https://linktr.ee/westerncsclub"
    );
  },
};

export default LinktreeCommand;
