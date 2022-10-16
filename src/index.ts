import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

import { commandList, commandMap } from "./commands";

if (!process.env.TOKEN || !process.env.CLIENT_ID) {
    console.log(
        "please get the env file from ezra huang: ezrahuang155@gmail.com"
    );
    process.exit(1);
}

//LIST OF FUTURE COMMANDS...
//Last lesson slide
//Leaderboard
//Codeforces - link handle, check graph
//  { name: "", description: ""},

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN!);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        const commandInfo = commandList.map((command) => {
            return {
                name: command.name,
                description: command.description,
            };
        });

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
            body: commandInfo,
        });

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

    const command = commandMap.get(interaction.commandName);

    // not a known command so ignore it
    if (!command) return;

    await command.handler(interaction);
});

client.login(process.env.TOKEN);