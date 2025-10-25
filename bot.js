import express from "express";
import { Telegraf } from "telegraf";

const app = express();
const bot = new Telegraf("8472729663:AAFOPv2yRoFbu-cVcG-_k4VQDf6ikFPLUNs");

// বেসিক কমান্ড
bot.start((ctx) => ctx.reply("🕌 আসসালামু আলাইকুম! Sheikh Bari Mosjid বটে স্বাগতম।"));
bot.command("donate", (ctx) =>
  ctx.reply("অনুদান পাঠাতে পারেন bKash: 01558769288, Nagad: 01558769288, Rocket: 01558769288")
);

// express webhook
app.use(bot.webhookCallback("/api/bot"));

export default app;