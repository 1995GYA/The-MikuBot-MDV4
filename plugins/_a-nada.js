let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/Tvpv.mp4', 'https://qu.ax/Tvpv.mp4','https://qu.ax/Tvpv.mp4']
//let pp2 = 'https://tinyurl.com/294oahv9'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '✦ Menciona al usuario con *@user*'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `*${name}*` + ' está saludando a' + ` *${name2}*` + ' (ﾉ^ヮ^)ﾉ*:・ﾟ✧', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['saludar <@user>']
handler.tags = ['fun']
handler.command = ['saludar', 'hola']
export default handler
