import {Context, Telegraf} from "telegraf";
import "dotenv/config";

// random shit
export const token = process.env.BOT_TOKEN;
if(!token) throw new Error("ENV PARSING ERROR");

//
const bot = new Telegraf(token);
bot.command('start', Telegraf.reply('λ'));
bot.on('text', async (ctx: Context) => {
    // @ts-ignore
    const textMessage: String = ctx.message.text;
    await ctx.reply(textMessage.toString());
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));