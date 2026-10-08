require("dotenv").config();

const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = process.env.BOT_TOKEN;
const OWNER_ID = process.env.OWNER_ID;

if (!BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing.");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

function isOwner(ctx) {
  return OWNER_ID && String(ctx.from?.id) === String(OWNER_ID);
}

function mainMenu() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback("🧠 AI CORE", "ai"),
      Markup.button.callback("🎙 VOICE AI", "voice")
    ],
    [
      Markup.button.callback("🖼 AI VISION", "vision"),
      Markup.button.callback("📄 DOC AI", "docs")
    ],
    [
      Markup.button.callback("💎 PREMIUM", "premium"),
      Markup.button.callback("👤 PROFILE", "profile")
    ],
    [
      Markup.button.callback("🎟 PROMO", "promo"),
      Markup.button.callback("💳 PAYMENTS", "payments")
    ],
    [
      Markup.button.callback("📥 DOWNLOADER", "download"),
      Markup.button.callback("🎮 GAMES", "games")
    ],
    [
      Markup.button.callback("🔧 TOOLS", "tools"),
      Markup.button.callback("📡 STATUS", "status")
    ],
    [
      Markup.button.callback("🚀 MINI APP", "miniapp")
    ]
  ]);
}

bot.start(async (ctx) => {
  const user = ctx.from;

  const name = user.first_name || "User";

  await ctx.reply(
`⚡ *XMATRIX*

Welcome, *${name}*.

╭────────────────────────╮
│ 🟢 CORE: ONLINE
│ 🧠 AI: READY
│ 💎 PREMIUM: AVAILABLE
│ ⚡ SYSTEM: v1.0
╰────────────────────────╯

Your futuristic Telegram command system is online.

Select a module below:`,
    {
      parse_mode: "Markdown",
      ...mainMenu()
    }
  );
});

bot.command("id", async (ctx) => {
  await ctx.reply(
`🆔 *XMATRIX ID*

User ID:
\`${ctx.from.id}\`

Username:
@${ctx.from.username || "none"}`,
    { parse_mode: "Markdown" }
  );
});

bot.command("help", async (ctx) => {
  await ctx.reply(
`⚡ *XMATRIX HELP*

/start — Open XMATRIX
/id — Show your Telegram ID
/help — Show help
/profile — Open profile
/premium — Premium system
/status — System status

More commands will be unlocked as the XMATRIX core grows.`,
    {
      parse_mode: "Markdown",
      ...mainMenu()
    }
  );
});

bot.command("profile", async (ctx) => {
  const user = ctx.from;

  await ctx.reply(
`👤 *XMATRIX PROFILE*

Name: ${user.first_name || "Unknown"}
Username: @${user.username || "none"}
Telegram ID: \`${user.id}\`

💎 Premium: CHECKING...
⚡ Access: STANDARD`,
    { parse_mode: "Markdown" }
  );
});

bot.command("premium", async (ctx) => {
  await ctx.reply(
`💎 *XMATRIX PREMIUM*

Premium features will include:

⚡ Advanced AI
🧠 AI document analysis
🎙 Voice processing
🖼 AI vision
📥 Premium tools
🚀 Higher limits
🔐 Exclusive features

Payment and automatic activation will be added to the Premium Engine.`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("💎 VIEW PLANS", "plans")],
        [Markup.button.callback("⬅️ BACK", "back")]
      ])
    }
  );
});

bot.command("status", async (ctx) => {
  await ctx.reply(
`📡 *XMATRIX SYSTEM STATUS*

🟢 Telegram Core: ONLINE
🟢 Command Engine: ONLINE
🟢 Interface Engine: ONLINE
🟡 AI Core: STANDBY
🟡 Premium Engine: STANDBY
🟡 Mini App: DEVELOPMENT

⚡ XMATRIX v1.0`,
    { parse_mode: "Markdown" }
  );
});

bot.action("ai", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🧠 *AI CORE*

The XMATRIX AI engine is ready for integration.

Coming modules:

• 💬 AI Chat
• 📚 Context memory
• 📄 Document AI
• 🎙 Voice AI
• 🖼 Vision AI
• ✨ AI generation`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("voice", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎙 *VOICE AI*

Send a voice message and XMATRIX will eventually be able to:

🎙 Voice → Text
🧠 Text → AI
📋 AI → Action
⏰ Voice → Reminder`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("vision", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🖼 *AI VISION*

XMATRIX Vision will analyze images you send to the bot.

🔍 Image analysis
📝 Image description
🧠 Visual questions
📦 Object recognition`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("docs", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📄 *DOCUMENT AI*

Upload a supported document and XMATRIX will be able to:

📚 Understand documents
🔎 Search content
🧠 Answer questions
📝 Summarize files`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("premium", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`💎 *PREMIUM CORE*

Premium access will unlock advanced XMATRIX capabilities.

⚡ Higher limits
🧠 Advanced AI
🎙 Voice AI
🖼 Vision
📄 Document AI
🚀 Exclusive tools`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("💎 VIEW PLANS", "plans")],
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("profile", async (ctx) => {
  await ctx.answerCbQuery();

  const user = ctx.from;

  await ctx.editMessageText(
`👤 *YOUR XMATRIX PROFILE*

Name: ${user.first_name || "Unknown"}
Username: @${user.username || "none"}
ID: \`${user.id}\`

⚡ Access: STANDARD
💎 Premium: INACTIVE`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("💎 PREMIUM", "premium")],
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("promo", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎟 *PROMO SYSTEM*

Promo codes will be used for:

💎 Premium access
🎁 Rewards
⚡ Feature unlocks
👥 Referral campaigns`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("payments", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`💳 *XMATRIX PAYMENTS*

The payment engine will support Telegram's native digital-payment system.

💎 Premium plans
🔄 Subscriptions
🎟 Promo codes
📜 Payment history`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("download", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📥 *XMATRIX DOWNLOADER*

The downloader module will be added as a separate service.

Supported features will depend on the source and its terms.`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("games", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎮 *XMATRIX GAMES*

Game modules can be added here.

🏆 Leaderboards
🎯 Challenges
🎁 Rewards
👥 Multiplayer features`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("tools", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🔧 *XMATRIX TOOLS*

Future tools:

🧮 Smart utilities
🌐 Web tools
📝 Text tools
🔐 Security utilities
⚡ Automation`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("status", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📡 *XMATRIX STATUS*

🟢 Core: ONLINE
🟢 Telegram: CONNECTED
🟢 Commands: ONLINE
🟡 AI: STANDBY
🟡 Premium: DEVELOPMENT
🟡 Mini App: DEVELOPMENT`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("plans", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`💎 *XMATRIX PREMIUM PLANS*

FREE
Basic XMATRIX access.

PREMIUM
Advanced AI + premium tools.

PRO
Higher limits + advanced features.

Payment integration will be connected after the core bot is deployed.`,
    {
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("⬅️ MAIN MENU", "back")]
      ])
    }
  );
});

bot.action("miniapp", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🚀 *XMATRIX MINI APP*

The futuristic full-screen dashboard will be connected here.

It will contain the complete XMATRIX interface.`,
    { parse_mode: "Markdown" }
  );
});

bot.action("back", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`⚡ *XMATRIX*

🟢 CORE: ONLINE
🧠 AI: READY
💎 PREMIUM: AVAILABLE

Select a module:`,
    {
      parse_mode: "Markdown",
      ...mainMenu()
    }
  );
});

bot.command("panel", async (ctx) => {
  if (!isOwner(ctx)) {
    return ctx.reply("⛔ Access denied.");
  }

  await ctx.reply(
`👑 *XMATRIX OWNER MATRIX*

🔐 Owner access confirmed.

Available systems:

👥 Users
💎 Premium
🎟 Promo
📢 Broadcast
📊 Analytics
⚙️ Settings`,
    { parse_mode: "Markdown" }
  );
});

bot.catch((error) => {
  console.error("XMATRIX ERROR:", error);
});

bot.launch();

console.log("⚡ XMATRIX is online.");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));