import 'dotenv/config'
import express from 'express'
import { Bot } from "grammy";
import { CommandGroup, commandNotFound, commands } from '@grammyjs/commands';

const bot = new Bot(process.env.TELEGRAM_BOT_KEY);

const app = express();
app.use(express.json());

const commonCommands = new CommandGroup();

commonCommands.command(
    "chat_id",
    "获取群组id",
    (ctx) => {
        ctx.reply(`本群 chat_id 是：\`${ctx.chat.id}\``)
    }
)

commonCommands.command(
    "thread_id",
    "获取话题id",
    (ctx) => {
        ctx.reply(`本话题 id 是：${ctx.message.message_thread_id}`)
    }
)

// 注册命名处理器
bot.use(commonCommands);

// 向 telegram 注册命名（显示在输入框菜单中）
await commonCommands.setCommands(bot);

// 监听所有文本消息（可扩展到其他类型）
// bot.on("message:text", async (ctx) => {
//     const chatId = ctx.chat.id;
//     const chatType = ctx.chat.type;          // "group" 或 "supergroup"
//     const chatTitle = ctx.chat.title || "无标题";

//     // 打印到控制台（开发时查看）
//     console.log("收到消息来自：");
//     console.log(`  - chat_id: ${chatId}`);
//     console.log(`  - 类型: ${chatType}`);
//     console.log(`  - 群组名称: ${chatTitle}`);
//     console.log(`  - 发送者: ${ctx.from?.username || ctx.from?.first_name || "匿名"}`);
//     console.log(`  - 话题id：${ctx.message.message_thread_id}`)

//     // 可选：仅在群组中回复 chat_id（测试用，生产环境可删除）
//     if (chatType === "group" || chatType === "supergroup") {
//         await ctx.reply(`本群 chat_id 是：${chatId}`);
//     }
// });

// async function sendLinkWithPreview(chatId) {
//   await bot.api.sendMessage(chatId, 
//     "https://jable.tv/videos/mukc-060/",
//     {
//       parse_mode: "HTML",                    // 支持富文本
//       disable_web_page_preview: false,       // 必须为 false（默认即 false）才能显示预览
//       link_preview_options: {              // Bot API 6.9+ 支持更细粒度控制（可选）
//         is_disabled: false,
//         prefer_large_media: true,         // 尝试优先使用大图（效果取决于网页标签）
//         show_above_text: true          // 预览位置：图片在上或下
//       }
//     }
//   );
// }

// sendLinkWithPreview(process.env.TELEGRAM_CHAT_ID)

const typeThread = {
    'jav': 8322,
}

// localhost:3000/jav
app.post("/url", async (req, res) => {
    const { type, url, title } = req.body;

    if (!url) {
        return res.status(400).json({ error: "缺少 url 参数" });
    }

    try {
        await bot.api.sendMessage(process.env.TELEGRAM_CHAT_ID,
            `📌 *新链接*\n\n*标题：* ${title || "无"}\n*URL：* ${url}`,
            {
                message_thread_id: typeThread[type],
                parse_mode: "Markdown",
                link_preview_options: {              // Bot API 6.9+ 支持更细粒度控制（可选）
                    is_disabled: false,          // 开启预览
                    prefer_large_media: true,         // 尝试优先使用大图（效果取决于网页标签）
                    show_above_text: true          // 预览位置：图片在上或下
                }
            });
        res.status(200).json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// 启动 express 服务，对外提供端口
app.listen(3000, () => console.log("Bot server running on port 3000"));

// 启动 bot 长轮询
bot.start()