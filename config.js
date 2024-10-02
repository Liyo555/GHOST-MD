const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qeA2QL6T#3H4Ql5FgOtXbvSXyWNBcMk_-0MqFwV30lNJc7Ujf2ok",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
MONGODB: process.env.MONGODB || "",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
