hiconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_15_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5qaUdSNEpuNVlqSHgyanFtUzEzZithMHcxL1h3QmRDZnBTTXpLY1pQOVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInk0MTZlNTJHUlZXcldJdlJJclFUMGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmNiYjllMTMtZDFiNy00NjAyLTg1ZmQtMWU1OThhZDkyMTdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDE4OCxcbiAgICAgIDE0MSxcbiAgICAgIDExNCxcbiAgICAgIDcwLFxuICAgICAgMTAxLFxuICAgICAgMTI5LFxuICAgICAgNDMsXG4gICAgICAxOTQsXG4gICAgICAxMjUsXG4gICAgICAyMzMsXG4gICAgICAxMDcsXG4gICAgICAyNTQsXG4gICAgICA1NCxcbiAgICAgIDUwLFxuICAgICAgMTc4LFxuICAgICAgMjU0LFxuICAgICAgNjMsXG4gICAgICA3OSxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA2MixcbiAgICAgIDIzOSxcbiAgICAgIDE4OSxcbiAgICAgIDE3NCxcbiAgICAgIDEyMSxcbiAgICAgIDI0NixcbiAgICAgIDExOSxcbiAgICAgIDEyOSxcbiAgICAgIDUzLFxuICAgICAgMTEyLFxuICAgICAgMTMsXG4gICAgICAxODcsXG4gICAgICAyMDgsXG4gICAgICAxNTcsXG4gICAgICAyMDIsXG4gICAgICA0OSxcbiAgICAgIDIxMyxcbiAgICAgIDE5MSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOMVpKTVAyVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTcxODE2OTU2OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFrb1wiLFxuICAgIFwibGlkXCI6IFwiMjEzNTYzMjcyNjA5OTcyOjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXcGxza0VFT2I1aHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXd0Z0F5aEV2N2xFZEFBSmwxQU5kTzZLNDN5U08zelAzRGdKY0tTT2ltdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvcEJ4b1ZHK3BRQnVrQXpnb2dkcnVQRnlGNkFPSm4ySURWSnFCOUdTZ0hiMkdzT3RUSFU5dWU3cU8vMjhZNWdzTDROd05VTkRPVUR6aDd6MUlOUUJDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoOUgxYkZKZEg1aGFzWXJlNGQveWgyQmJtanJqb0I4MkxVSkRybXpGZk5Tak1Xc3dONG4zRmwrOGlkQitjMDA1UUZsLzRCRHc2c1FOWlFtTGJjNDdqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzE4MTY5NTY6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Nzc4NTM2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
