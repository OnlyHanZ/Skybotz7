import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `Hai, ${ucapan()}

${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `💬 Ada yg bisa ${this.user.name} bantu?\n\nJangan Lupa Join :D\nhttps://chat.whatsapp.com/CZlamemhpn06a5sW063xOg`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : 'Note: Database Bot ini bisa saja kereset karena platformnya..\nSupport Bot ini dengan cara berdonasi/sewa bot agar BOT ini bisa on 24 Jam dan databasenya tidak akan tereset.\n\nTrima Kasih🙏🏻', [user.banned ? 'Owner' : 'Donasi', user.banned ? '.creator' : '.donasi'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Makassar').format('HH')
    let res = "Selamat Dinihari 🌆"
    if (time >= 4) {
        res = "Selamat Pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat Siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌙"
    }
    return res
}