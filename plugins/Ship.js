let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (command == 'ship') {
    if (!text) {
      return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()} *MENCIONE 2 NOMBRES PARA CALCULAR EL PORCENTAJE*`, m);
    }

       const [textValue, text2Value] = text.split(' ');

    if (!text2Value) {
            text2Value = textValue;
    }

    let juego = `❣️ *${textValue}* tu oportunidad de enamorarte de *${text2Value}* ES DE ${Math.floor(Math.random() * 101)}%* 👩🏻‍❤️‍👨🏻`.trim();
    await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {});
  }
}

handler.help = ['ship'].map(v => v + ' <text> <text2>')
handler.tags = ['calculator']
handler.command = ['ship']
handler.exp = 100
export default handler
