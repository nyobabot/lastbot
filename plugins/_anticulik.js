let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 MGBOTZ-MD 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 5k/grup (1 minggu)
    ┊⫹⫺ Normal: 15k/grup (1 bulan)
    ┊⫹⫺ Standar: 30k/grup (2 bulan)
    ┊⫹⫺ Pro: 35k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 65k/grup (12 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (1 minggu)
    ┊⫹⫺ Normal: 20k (1 bulan)
    ┊⫹⫺ Pro: 40k (4 bulan)
    ┊⫹⫺ Vip: 50k (8 bulan)                                               
    ┊⫹⫺ Permanent: = 100k (Unlimited)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa Telkomsel: [082171432358]
    • Dana: [081287142545]
    • Gopay: [08xxxxxxxxxxx]
    • Ovo: [08xxxxxxxxxxxx]
    • Link Aja: [08xxxxxxxxxx]
    
    Nomor Owner :
    wa.me/6282127487538
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #BY MGBOTZ-MD`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
