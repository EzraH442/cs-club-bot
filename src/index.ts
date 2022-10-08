import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
import dateToText from "./dateToText";
import currentDate from "./currentDate";
if (!process.env.TOKEN || !process.env.CLIENT_ID) {
  console.log(
    "please get the env file from ezra huang: ezrahuang155@gmail.com"
  );
  process.exit(1);
}

//LIST OF FUTURE COMMANDS...
//Last lesson slide
//Help
//Leaderboard
//Codeforces - link handle, check graph
//  { name: "", description: ""},

const commands = [
  { name: "meeting", description: "Replies with the next meeting date."},
  { name: "linktree", description: "Replies with the linktree link."},
  { name: "lastlesson", description: "Replies with the previous lesson slides."},
  { name: "help", description: "Replies with all possible commands."},
  { name: "leaderboard", description: "Replies with codeforces leaderboard."},
  { name: "codeforces", description: "Replies with codeforces information."},
];
// test

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN!);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  //Return message with the date of the next CS club meeting
  if (interaction.commandName === "meeting"){
    for(let i = 0; i < meetingDates.length; i++){
      if(meetingDates[i] >= currentDate()){
        await interaction.reply("The next CS Club meeting is on " + dateToText(meetingDates[i]));
        break;
      }
    }
  //Return message with linktree
  } else if (interaction.commandName === "linktree"){
    await interaction.reply("Here is the Linktree: https://linktr.ee/westerncsclub")
  //Return a list of commands
  } else if (interaction.commandName === "help"){
    await interaction.reply("")
  } else if (interaction.commandName === "lastlesson"){
    await interaction.reply("Filler Text")
  } else if (interaction.commandName === "leaderboard"){
    await interaction.reply("Filler Text")
  }
});

client.login(process.env.TOKEN);

import { makeCodeforcesApiCall } from "./codeforces/auth";
import axios from "axios";
import { meetingDates } from "./data";

makeCodeforcesApiCall("/contest.list", {})
  .then((data) => {
    console.log(data.data);
  })
  .catch((e) => console.log(e));
