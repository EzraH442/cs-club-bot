import dotenv from "dotenv";
dotenv.config();

import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
import { commandList, commandMap } from "./commands";

const GUILD_ID = "911078927303335957";

// if (
//   !process.env.TOKEN ||
//   !process.env.CLIENT_ID ||
//   !process.env.CF_ID ||
//   !process.env.CF_SECRET
// ) {
//   console.log(
//     "please get the env file from ezra huang: ezrahuang155@gmail.com",
//   );
//   process.exit(1);
// }

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN!);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    const commandInfo = commandList.map((command) => command.getCommandInfo());

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID!, GUILD_ID),
      { body: commandInfo },
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commandMap.get(interaction.commandName)!;

  try {
    await command.handler(interaction);
  } catch (e) {
    console.log(e);
  }
});

client.login(process.env.TOKEN).then(() => {
  client.application!.commands.set([]);
});
