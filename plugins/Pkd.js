```js
const { cmd } = require('../command');
const axios = require('axios');cmd({
    pattern: "ai",
    alias: ["bot", "gpt", "gpt4", "bing", "dj"],
    desc: "Chat with an AI model",
    category: "ai",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for the AI.\nExample: `.ai Hello`");const lower = q.toLowerCase();
        let specialMsg = null;if (
            lower.includes("who is pk") ||
            lower.includes("who is pkdriller") ||
            lower.includes("pkdriller ni nani") ||
            lower.includes("about pkdriller")
        ) {
            specialMsg = `*Pkdriller* is the developer of NEXUS-XMD, a powerful WhatsApp bot from Kenya.\nGitHub: https://github.com/Pkdriller/NEXUS-XMD`;
        } else if (
            lower.includes("what is nexus xmd") ||
            lower.includes("nexus xmd") ||
            lower.includes("about nexus xmd")
        ) {
            specialMsg = `*NEXUS-XMD* is a feature-rich WhatsApp bot built by Pkdriller.\nCheck it out here: https://github.com/Pkdriller/NEXUS-XMD`;
        } else if (
            lower.includes("what is this channel") ||
            lower.includes("about this channel") ||
            lower.includes("channel info")
        ) {
            specialMsg = `This is the official Pkdriller channel for NEXUS-XMD updates, support, and community.\nRepo: https://github.com/Pkdriller/NEXUS-XMD`;
  }if (!data || !data.message) {
            await react("❌");
            return reply("AI failed to respond. Please try again later.");
  }
