export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 1) return
await m.reply(`👋 Hola!!

⚠️ Nota: no envíe spam al bot
🧃 Escriba .menu para mostrar el menú 
  
📝 ¿Quieres apoyar este proyecto para que siga actualizándose? enviar a través de: 
*https://paypal.me/azami.19*`) 
user.pc = new Date * 1
}
