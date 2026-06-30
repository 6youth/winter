import fs from 'fs';
import chalk from 'chalk';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ["6283165995953"] // ['628','628'] 2 owner atau lebih
global.author = 'Lin Anlan'
global.botname = 'Its Winter'
global.packname = 'by anlan'
global.timezone = 'Asia/Jakarta' // Ganti pakai command .settimezone
global.locale = 'en' // Ganti pakai command .setlocale
global.listprefix = ["+","!","."]
global.defaultAdminKey = crypto.randomBytes(5).toString("hex");

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://files.catbox.moe/oqgkev.jpg',
	thumbnailUrl: 'https://files.catbox.moe/vd5c6l.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: "https://youtube.com/c/aespa",
	gh: "https://github.com/findzenpeace",
	gc: "https://instagram.com/its_anlan",
	ch: "120363250409960101@newsletter"
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 900
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: "ituu anuu woii",
	owner: "gabisa dipake itu untuk anlan",
	admin: "gabisaa woii fiturnya cuman untuk atmin",
	botAdmin: "jadiin gue admin woi biar bisa",
	onWa: "nomor tersebut tidak terdaftar di WhatsApp!",
	group: "buat di grup doang gabisa di private chat",
	private: "buat di private chat",
	quoted: "reply pesannya!",
	limit: "limit habis!",
	prem: "khusus Premium!",
	text: "masukkan teksnya!",
	media: "kirim medianya!",
	wait: "tunggu yaa lagii di prosess",
	fail: "yaa sowry gaygayl",
	error: "erorr jirr",
	done: "udah y"
}

global.APIs = {
	naze: 'https://api.naze.biz.id',
	neosantara: 'https://api.neosantara.xyz/v1',
}
global.APIKeys = {
	'https://api.naze.biz.id': 'nz-f215b9905f',
	'https://api.neosantara.xyz/v1': 'nsk_1466b3588d374a059e929ccfd23caddd',
}

// Lainnya
global.jadwalSholat = {
	Subuh: '04:30',
	Dzuhur: '12:06',
	Ashar: '15:21',
	Maghrib: '18:08',
	Isya: '19:00'
}

global.badWords = ["dongo","konsol"] // input kata-kata toxic yg lain. ex: ['dongo','dongonya']
global.chatLength = 1000

fs.watchFile(__filename, async () => {
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`))
});
