const axios = require("axios");
const path = require("path");
const fs = require("fs");

const baseApiUrl = async () => {
 const base = await axios.get(
 "https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json"
 );
 return base.data.api;
};

module.exports.config = {
 name: "album",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Dipto Modified By SAHU",
 description: "Displays album options for selection.",
 usePrefix: true,
 prefix: true,
 category: "Media",
 commandCategory: "Media",
 usages:
 "Only or add [cartoon/photo/lofi/sad/islamic/funny/horny/anime/aesthetic/cat/lyrics/love/sigma]",
 cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {

 if (!args[0]) {

 api.setMessageReaction("😘", event.messageID, (err) => {}, true);

 const albumOptions = [
 "𝗙𝘂𝗻𝗻𝘆 𝘃𝗶𝗱𝗲𝗼","𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼","𝗦𝗮𝗱 𝘃𝗶𝗱𝗲𝗼","𝗔𝗻𝗶𝗺𝗲 𝘃𝗶𝗱𝗲𝗼",
 "𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝘃𝗶𝗱𝗲𝗼","𝗟𝗼𝗙𝗶 𝗩𝗶𝗱𝗲𝗼","𝗛𝗼𝗿𝗻𝘆 𝘃𝗶𝗱𝗲𝗼","𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼",
 "𝗙𝗹𝗼𝘄𝗲𝗿 𝗩𝗶𝗱𝗲𝗼","𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼","𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼","𝗦𝗶𝗴𝗺𝗮 𝗥𝘂𝗹𝗲",
 "𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼","𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼","18+ 𝘃𝗶𝗱𝗲𝗼","𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝘃𝗶𝗱𝗲𝗼",
 "𝗙𝗼𝗼𝘁𝗕𝗮𝗹𝗹 𝘃𝗶𝗱𝗲𝗼","𝗚𝗶𝗿𝗹 𝘃𝗶𝗱𝗲𝗼","𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗩𝗶𝗱𝗲𝗼","𝗖𝗿𝗶𝗰𝗸𝗲𝘁 𝘃𝗶𝗱𝗲𝗼",
 ];

 const message =
 "╔══════════════════════╗\n" +
 "║ 🎵 𝗔𝗹𝗯𝘂𝗺 𝗩𝗶𝗱𝗲𝗼 𝗟𝗶𝘀𝘁 🎶\n" +
 "╠══════════════════════╣\n" +
 "║ 🎬 𝟬𝟭. 𝗙𝘂𝗻𝗻𝘆 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🌙 𝟬𝟮. 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 💔 𝟬𝟯. 𝗦𝗮𝗱 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🎎 𝟬𝟰. 𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🐾 𝟬𝟱. 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🎧 𝟬𝟲. 𝗟𝗼𝗙𝗶 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🔥 𝟬𝟳. 𝗛𝗼𝗿𝗻𝘆 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 💑 𝟬𝟴. 𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🌹 𝟬𝟵. 𝗙𝗹𝗼𝘄𝗲𝗿 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🖼️ 𝟭𝟬. 𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼\n" +
 "║ 🌌 𝟭𝟭. 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🦁 𝟭𝟮. 𝗦𝗶𝗴𝗺𝗮 𝗥𝘂𝗹𝗲\n" +
 "║ 🎶 𝟭𝟯. 𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🐱 𝟭𝟰. 𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🚫 𝟭𝟱. 18+ 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🎮 𝟭𝟲. 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ ⚽ 𝟭𝟳. 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 👧 𝟭𝟴. 𝗚𝗶𝗿𝗹 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🤝 𝟭𝟵. 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗩𝗶𝗱𝗲𝗼\n" +
 "║ 🏏 𝟮𝟬. 𝗖𝗿𝗶𝗰𝗸𝗲𝘁 𝗩𝗶𝗱𝗲𝗼\n" +
 "╠══════════════════════╣\n" +
 "║ আপনি যে নাম্বারের ভিডিও চান\n" +
 "║ সেটি রিপ্লাই করুন\n" +
 "╚══════════════════════╝";

 await api.sendMessage(
 { body: message },
 event.threadID,
 (error, info) => {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: event.senderID,
 });
 },
 event.messageID
 );
 }

};

module.exports.handleReply = async function ({ api, event, handleReply }) {

 api.unsendMessage(handleReply.messageID);

 const owner = "61574007381785";

 const reply = parseInt(event.body);

 if (isNaN(reply) || reply < 1 || reply > 20) {
 return api.sendMessage("১ থেকে ২০ এর মধ্যে একটি নাম্বার দিন", event.threadID, event.messageID);
 }

 let queryMap = {
 1: "funny",
 2: "islamic",
 3: "sad",
 4: "anime",
 5: "cartoon",
 6: "lofi",
 7: "horny",
 8: "love",
 9: "flower",
 10: "photo",
 11: "aesthetic",
 12: "sigma",
 13: "lyrics",
 14: "cat",
 15: "sex",
 16: "ff",
 17: "football",
 18: "girl",
 19: "friend",
 20: "cricket"
 };

 if ((reply === 7 || reply === 15) && event.senderID !== owner) {
 return api.sendMessage("❌ এই কমান্ড শুধু এডমিন ব্যবহার করতে পারবে!", event.threadID, event.messageID);
 }

 try {

 const res = await axios.get(`${await baseApiUrl()}/album?type=${queryMap[reply]}`);

 const videoUrl = res.data.data;

 const video = (await axios.get(videoUrl, { responseType: "arraybuffer" })).data;

 const filePath = path.join(__dirname, "cache", `video_${Date.now()}.mp4`);

 fs.writeFileSync(filePath, Buffer.from(video));

 api.sendMessage(
 {
 body: "📀 আপনার ভিডিও",
 attachment: fs.createReadStream(filePath)
 },
 event.threadID,
 () => fs.unlinkSync(filePath),
 event.messageID
 );

 } catch (e) {

 api.sendMessage("ভিডিও আনতে সমস্যা হয়েছে", event.threadID, event.messageID);

 }

};
