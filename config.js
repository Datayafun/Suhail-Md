const fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348137939347";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_04_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRR1V2dVNTd0s3QTE0M24wQzVhUDNCb3ppYzg3OWZPNUpVa05QV3J4RlFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrclNRU3J5WlRJTzRrTGw5RDlyYTFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkYmJhMzRiLTI0NjktNGIwZS05N2FmLWZmMWMwM2IxYzFjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDEwMyxcbiAgICAgIDE2MixcbiAgICAgIDEzNCxcbiAgICAgIDIzNyxcbiAgICAgIDE0NCxcbiAgICAgIDIyNixcbiAgICAgIDk4LFxuICAgICAgNjgsXG4gICAgICAxNjksXG4gICAgICA1OSxcbiAgICAgIDIzNSxcbiAgICAgIDEzLFxuICAgICAgMTg1LFxuICAgICAgMTAwLFxuICAgICAgMTIyLFxuICAgICAgMTk2LFxuICAgICAgMTU0LFxuICAgICAgMTM5LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDQzLFxuICAgICAgMTU4LFxuICAgICAgMTgsXG4gICAgICAyNSxcbiAgICAgIDg1LFxuICAgICAgMjIxLFxuICAgICAgOTIsXG4gICAgICA5NSxcbiAgICAgIDE5NixcbiAgICAgIDc4LFxuICAgICAgOTEsXG4gICAgICAyMjksXG4gICAgICAyNDgsXG4gICAgICAxMzAsXG4gICAgICAyNDEsXG4gICAgICAxMjUsXG4gICAgICA1MCxcbiAgICAgIDE4MSxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLWlBKSlE5UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNzkzOTM0Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQ3Nzg3Mzk1NzI5Mzk6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR1FpcUlDRVAzUHZMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdublg5VzFpaXdWbjZyaTU3LzF4TlNHblVzVnpEYTBjbmJkTXMrc3k3bGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVpZUTZTdHEvYjUyTHhPVjNyM2ZGanFSS3JXRXBjODFJQS82RVo3Witwd0ZaZmx6bUVzZGR5Rm1GVWxRNG8zNkVYaDF1dEhiQldVSHNSSGVnay9zQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVStORWQ5bVhvTXZpcS9sM0NyZGw3N2h5djBOK1FURGdLR3VmUjFvd3NUMXRIVi9xQnRhWkVrUmRvc0tYa3MvL3FkQXM5RlpzL3RmWXluVFcxTEM0aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNzkzOTM0Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc1NTA3M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
