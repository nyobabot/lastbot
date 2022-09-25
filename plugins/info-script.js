import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*SUBSCRIBE*
*https://youtube.com/channel/UCbI74T0AXUI26VC88NyoWdw*

*https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow*

_*JOIN GRUP KAWAN*_
https://chat.whatsapp.com/E1TElUfSJY63Cs9WqNjEEC

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Mau Yang No Error Script Bot nya, Gas Cek Video YT :
https://youtu.be/Pgv_GuQTPyo

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/6282127487538`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/al_pakel",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'MGBOTZ-MD MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc|scbot|SC|Sc)$/i

export default handler
