import { Bot, InlineKeyboard } from "grammy";

// 创建一个 bot，输入 bot 的 token
const bot = new Bot("8784650180:AAFCFcCZX5bUSz0MEdlSEh3HQUUyrCiDp4I");

// 处理 /start 命令
bot.command("start", (ctx) => {
    ctx.reply("Hello! I am your Telegram bot.");
})

const inlineKeyboard = new InlineKeyboard()
  .text("« 1", "first")
  .text("‹ 3", "prev")
  .text("· 4 ·", "stay")
  .text("5 ›", "next")
  .text("31 »", "last");

// 向用户发送消息
bot.api.sendMessage(5123002702, "Hi!");

bot.command("inline", async (ctx) => {
  await ctx.reply("Curious? Click me!", { reply_markup: inlineKeyboard });
});

// 处理其它消息
bot.on("message", (ctx) => {
    ctx.reply("You chat:" + ctx.chat.id);
    ctx.reply("You said:" + ctx.message.text);
})

// 启动 bot
bot.start();