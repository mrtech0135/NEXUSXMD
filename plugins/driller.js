
const { cmd } = require('../command');
// View Channel Info
cmd({
    pattern: "viewchannel",
    alias: ["channelinfo", "viewchan"],
    desc: "View channel info",
    category: "info",
    react: "👀",
    filename: __filename
},
async (conn, mek, m, { reply, react }) => {
    await react("👀");
    return reply(`Welcome to the official *https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x* channel!
Here you’ll get updates, support, and connect with the NEXUS-XMD bot community.
Any questions about the bot or repo? Just ask!`);
});
// Who is Pkdriller
cmd({
    pattern: "pkdriller",
    alias: ["driller", "whoispkdriller"],
    desc: "About Pkdriller",
    category: "info",
    react: "👤",
    filename: __filename
},
async (conn, mek, m, { reply, react }) => {
    await react("👤");
    return reply(`*Pkdriller* is the developer behind NEXUS-XMD, a WhatsApp bot for automation and API integration.
He works on tech projects and his official repo is here:
https://github.com/Pkdriller/NEXUS-XMD`);
});
```
