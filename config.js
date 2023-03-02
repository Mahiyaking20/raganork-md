const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v3.0.0',
    ALIVE: process.env.ALIVE || "https://i.imgur.com/KCnoMM2.jpg Hey {sender}, I'm alive \n Uptime: {uptime}",
    BLOCK_CHAT: process.env.BLOCK_CHAT || 'true',
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    AUTOMUTE_MSG: process.env.AUTOMUTE_MSG || '_Group automuted!_\n_(Change this by setting var AUTOMUTE_MSG)_',
    ANTI_SPAM: process.env.ANTI_SPAM || '919074309534-1632403322@g.us',
    MULTI_HANDLERS: convertToBool(process.env.MULTI_HANDLERS) || false,
    ANTI_BOT: process.env.ANTI_BOT || '',
    ANTISPAM_COUNT: process.env.ANTISPAM_COUNT || '7/10',
    AUTOUNMUTE_MSG: process.env.AUTOUNMUTE_MSG || '_Group auto unmuted!_\n_(Change this by setting var AUTOUNMUTE_MSG)_',
    AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS) || false,
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    PMB_VAR: convertToBool(process.env.PMB_VAR) || false,
    DIS_PM: convertToBool(process.env.DIS_PM) || false,
    REJECT_CALLS: convertToBool(process.env.REJECT_CALLS) || true,
    PMB: process.env.PMB || '_Personal messages not allowed, BLOCKED!_',
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    SESSION: process.env.SESSION.trim() || 'Raganork~fa5ed3cb98ff1858f0fc87737f02278e:333732384a713276772b6b3d',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '919074309534-1632403322@g.us',
    BOT_INFO: process.env.BOT_INFO || 'Raganork;Skl11;0;https://i.imgur.com/P7ziVhr.jpeg;https://chat.whatsapp.com/Dt3C4wrQmt0GG6io1IBIHb',
    RBG_KEY: process.env.RBG_KEY || '',
    ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'off',
    HANDLERS: process.env.HANDLERS || '.,',
    STICKER_DATA: process.env.STICKER_DATA||"Raganork",
    BOT_NAME: process.env.BOT_NAME || '𝐌𝐢𝐡𝐢𝐫𝐮𝐤 𝐃𝐢𝐥𝐬𝐡𝐬𝐧',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? 'ꪶ͢٭𝑺𝜣𝑼𝑹𝛢𝑽𝑲𝑳¹¹ꫂ;Raganork MD bot;https://www.linkpicture.com/q/rgnk.jpg' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'public',
    WARN: process.env.WARN || '60',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || 'c0664e6a-0a17-4d66-83a3-bb38990ed710',
        APP_NAME: process.env.HEROKU_APP_NAME || 'mahiya25'
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || ",94761091578 Mihiruk Dilshan",
    LANGUAGE: process.env.LANGUAGE || 'english',
    DEBUG: DEBUG,
    ACR_A: "ff489a0160188cf5f0750eaf486eee74",
    ACR_S: "ytu3AdkCu7fkRVuENhXxs9jsOW4YJtDXimAWMpJp"
    };
