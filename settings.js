/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT090SnNtSFJRcGU0S2V5bnE1bVIyTWo0cThyLytlVkdiM3dLYVp5NmNWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmk1eVdkcHhHQmIvL0JVckY0U1N6QTI1bWZScWs4TVpNSTAwb2pnMERXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTmhvWUhvZDNMUS8xVXpvQ2FOOUVOVmdZZ2xzVGZ3bHFPNFpQOFZHUDFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQcWc1U0RnSTVEODh4VGxlUituTUZEa0pvZVpxeCsxV3YxeVRJS1hoY2tNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZITWs3L1NNNmhwaE5oRkI4ZGVVQ1ZjRTZWK0MzKy9zb3NrOHNTZFF0bVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9VQ2dEUCs3TW80dFBlM3VGZ2FIRFZieXNYckMranpHcnZ3dEdMRlpVZ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZEMjdSWGhBQ0ZUT3NRak5WdDRqTWRwMFZCQU5aaks3OTRBK0xyQmFXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid29jK1Qrc0pjVVQ1eVRWdTFrWnVCQU5Ob2J2YXZQSlVrQ1I4SWhYYlkxND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im45OTk3dWVQTWt1TEV0dms0VHlVRFp0VTNSRnY5cTlRcXNqS3pKRHNRVDdGdmh3M1N3YmxuWVNDYUtTcW9qc0szVnZ3aERtZGZRM2FFOXhiMStSQkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IlJTcUVDTWdDZURDajFYRFNOakxVVnNmWlhlYjZobXZUcmFSend4V0ZJRTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBkUmxoUG9vUjVlODhraEdFQUtST0EiLCJwaG9uZUlkIjoiY2YzZmUxMzQtZjA0NC00MmY2LTgwZTAtMTQwYTRhMTViMjg4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhlR2k0SmIzSmlJYlJMS2VjNnN1T01ORmtWQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYMGtnWVpnbENaL2hwYkgya1lxYlFZT0NZRlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSE5LWFJMQVkiLCJtZSI6eyJpZCI6IjIzMzIwMTU1NTgwMToxMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjY0bzU4REVNZkp4Ym9HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYVRiWkxTemtueitQTFEwb0I5RzBWbVZoY3AyaFIvcnlrRmV5VkdWY3huMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOTBHL21abWx6OVM5eFcrVnNkcXg5d241RVhSRVczUGh6OHppaE5TL2NCSXVueTZRZ1BFdTlqS0padFpValpNY1FMVzFSMWd3SmhPbDNjNlhYck5qQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ims0ejFaNGhlNVRtN0dTcWc1ZzlianVlVW9aQkZySHl6VTlPc3cwNmFoaVFybzRFSm9wK1pyaDAyZUJaNUdCZFRkWk80bnRaNTc0dnAwVHdMeDJYUENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjAxNTU1ODAxOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldrMjJTMHM1SjgvankwTktBZlJ0RlpsWVhLZG9VZjY4cEJYc2xSbFhNWjkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMzODc0NzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXFDIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  anticall,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
