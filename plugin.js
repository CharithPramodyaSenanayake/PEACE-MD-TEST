require('./settings')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    Mimetype,
    generateWAMessage,
    prepareWAMessageMedia,
    prepareMessageFromContent,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio');
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const {
    EmojiAPI
} = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const qrcode = require('qrcode')
const {
    buffergif
} = require('./lib/myfunc2')
const {
    y2mateA,
    y2mateV
} = require('./lib/y2mate')
const google = require('google-it')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const moment = require('moment-timezone')
const {
    JSDOM
} = require('jsdom')
const speed = require('performance-now')
const {
    performance
} = require('perf_hooks')
const {
    igApi,
    getSessionId
} = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const {
    fetchBuffer
} = require("./lib/myfunc2")
const {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom,
    getGroupAdmins
} = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'


var LOGO_MAKING = '*🌈 මදක් රැදීසිටින්න ඔබගේ textlogo සෑදමින් පවතී...*'

//TIME	
const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss')
const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')
if (time2 < "23:59:00") {
    var ucapanWaktu = `Good Night 🌌`
}
if (time2 < "19:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "18:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "15:00:00") {
    var ucapanWaktu = `Good Afternoon 🌅`
}
if (time2 < "11:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
}
if (time2 < "05:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
}



// language	
const Language = require('./language');
const Lang = Language.getString('main');

//read database jid	
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));	
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));	
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));	
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));	
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));	
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));	
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));	
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));	
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));	
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));	
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));	
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));	
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));	
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));	
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));	
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));	
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));	
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));	


module.exports = PeaceMd = async (PeaceMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await PeaceMd.decodeJid(PeaceMd.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const type = Object.keys(mek.message)[0]
        const from = mek.key.remoteJid
        const content = JSON.stringify(mek.message)


        //media detect \\	
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        //hijack function	
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()


        //Fake	
        const ftroli = {
            key: {
                fromMe: false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast"
            },
            "message": {
                orderMessage: {
                    itemCount: 2022,
                    status: 200,
                    thumbnail: thumb,
                    surface: 200,
                    message: botname,
                    orderTitle: ownername,
                    sellerJid: '0@s.whatsapp.net'
                }
            },
            contextInfo: {
                "forwardingScore": 999,
                "isForwarded": true
            },
            sendEphemeral: true
        }
        const fdoc = {
            key: {
                participant: '0@s.whatsapp.net',
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                documentMessage: {
                    title: botname,
                    jpegThumbnail: thumb
                }
            }
        }
        const fvn = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "audioMessage": {
                    "mimetype": "audio/ogg; codecs=opus",
                    "seconds": 359996400,
                    "ptt": "true"
                }
            }
        }
        const fgif = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": botname,
                    "h": wm,
                    'seconds': '359996400',
                    'gifPlayback': 'true',
                    'caption': ownername,
                    'jpegThumbnail': thumb
                }
            }
        }
        const fgclink = {
            key: {
                participant: "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "6288213840883-1616169743@g.us",
                    "inviteCode": "m",
                    "groupName": wm,
                    "caption": `${pushname}`,
                    'jpegThumbnail': thumb
                }
            }
        }
        const fvideo = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": botname,
                    "h": wm,
                    'seconds': '359996400',
                    'caption': `${pushname}`,
                    'jpegThumbnail': thumb
                }
            }
        }
        const floc = {
            key: {
                participant: '0@s.whatsapp.net',
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                locationMessage: {
                    name: wm,
                    jpegThumbnail: thumb
                }
            }
        }
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': ownername,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }
            }
        }



        // Group	
        const groupMetadata = m.isGroup ? await PeaceMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false

        //afk and other	

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = true
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = true
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: true,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: true,
            }

        } catch (err) {
            console.error(err)
        }



        if (db.data.settings[botNumber].autobio) {
            let setting = global.db.data.settings[botNumber]
            if (new Date() * 1 - setting.status > 1000) {
                let uptime = await runtime(process.uptime())
                await PeaceMd.setStatus(`${PeaceMd.user.name} | 👨‍💻 Runtime : ${runtime(process.uptime())}`)
                setting.status = new Date() * 1
            }
        }
        // Public & Self	
        if (!PeaceMd.public) {
            if (!m.key.fromMe) return
        }

        function randomNomor(angka) {
            return Math.floor(Math.random() * angka) + 1
        }
        const hsjdh = randomNomor(5)

        //auto recording all	
        if (global.autoRecord) {
            if (m.chat) {
                PeaceMd.sendPresenceUpdate('recording', m.chat)
            }
        }
        //autotyper all	
        if (global.autoTyping) {
            if (m.chat) {
                PeaceMd.sendPresenceUpdate('composing', m.chat)
            }
        }

        //WARRRRRRR	
        const doc = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: ""
                } : {})
            },
            "message": {
                "stickerMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
                    "fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
                    "fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
                    "mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
                    "mimetype": "image/webp",
                    "directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
                    "fileLength": "14240",
                    "mediaKeyTimestamp": "1664991742",
                    "isAcharithted": false
                }
            }
        }

        const fmedia = {
            key: {
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            contextInfo: {
                forwardingScore: 9999,
                isForwarded: false, //:'v	
                showAdAttribution: true,
                title: botname,
                mediaType: "VIDEO",
                mediaUrl: websitex,
                previewType: "PHOTO",
                thumbnail: thumb,
                sourceUrl: "",
                detectLinks: false,
            }
        }

        //reply fake	
        //group target \\	
        const reply = (teks) => {
            PeaceMd.sendMessage(m.chat, {
                text: teks,
                contextInfo: {
                    "externalAdReply": {
                        "title": ` ${global.botname}`,
                        "body": `${ownername}`,
                        "previewType": "PHOTO",
                        "thumbnailUrl": ``,
                        "thumbnail": { url: `${global.alivepic}` },
                        "sourceUrl": `${linkz}`
                    }
                }
            }, {
                quoted: m
            })
        }



        
        //inbox	

        if (!m.isGroup && global.INBOX_BLOCK == 'on') {
            if (!isCreator) {
                await PeaceMd.sendText(m.chat, global.INBOX_BLOCK_MSG)
                await sleep(8000)
                return await PeaceMd.updateBlockStatus(m.sender, 'block')
            }
        }

        //button	
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
            const butonna = {
                text: text1,
                footer: desc1,
                buttons: but,
                headerType: 1
            }
            PeaceMd.sendMessage(id, butonna, options)
        }
        const http = randomNomor(500)

        //document	
        const kontol = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                documentMessage: {
                    title: `${pushname}`,
                    jpegThumbnail: thumb
                }
            }
        }
        sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
            let buttonMessage = {
                document: doc,
                mimetype: "application/pdf",
                fileName: fileName,
                fileLength: fileLength,
                caption: caption,
                footer: footer,
                buttons: buttons,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: time,
                        body: boddy,
                        thumbnail: thumbnail,
                        thumbnailUrl: thumbnailUrl,
                        sourceUrl: sourceUrl,
                        mediaUrl: mediaUrl,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaType: 1
                    }
                }
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, options)
        }

        //---------------------------------------------------------------------------------------------------------------------------------//	
        //  Chatbot by FantoX001 on behalf of Team ATLAS - All Rights Reserved	

        if (!m.isGroup && !isCmd) {
            const botReply = await axios.get(`http://api.brainshop.ai/get?bid=172352&key=vTmMboAxoXfsKEQQ&uid=[uid]&msg=[${budy}]`)
            var replyText = `${botReply.data.cnt}`;
            m.reply(replyText);
        }

        //---------------------------------------------------------------------------------------------------------------------------------//	

        // Autosticker gc	
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await PeaceMd.sendImageAsSticker(from, mediac, m, {
                    packname: global.packname,
                    author: global.author
                })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await PeaceMd.sendVideoAsSticker(from, mediac, m, {
                    packname: global.packname,
                    author: global.author
                })
            }
        }

        // Anti Link	
        if (Antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
                if (!isBotAdmins) return m.reply(`${Lang.BOT_ADMIN}, to kick the person who send link`)
                let gclink = (`https://chat.whatsapp.com/` + await PeaceMd.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return PeaceMd.sendMessage(m.chat, {
                    text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`
                })
                if (isAdmins) return PeaceMd.sendMessage(m.chat, {
                    text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
                })
                if (isCreator) return PeaceMd.sendMessage(m.chat, {
                    text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`
                })
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`,
                    contextInfo: {
                        mentionedJid: [kice]
                    }
                }, {
                    quoted: m
                })
            }
        }




        // AUTO MASSAGE REPLY REACT🐣	

        if (global.AUTO_REACT == 'true') {
            //const sudoo = HELPERS.split(',')	
            const Sudooo = [HELPERS].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            if (Sudooo) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `👻`,
                        key: m.key
                    }
                })

            }
            if (m.sender == `${global.owner}@s.whatsapp.net`) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: global.OWNER_REACT,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🥲`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😙`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😹`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😹`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😂`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😹`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🤣`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😂`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🥰`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😍`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😍`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😇`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🤗`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🤗`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🙂`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😔`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😇`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😇`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😙`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🌝`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😪`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😪`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😔`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😔`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`paka`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🍆`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`charith`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `👻`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`❤`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `💞`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🌝`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🌚`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🌚`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🌝`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`🤨`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `😮‍💨`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`😒`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🙄`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`charith`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `👀`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`sex`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🧐`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`ima`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🐼`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`rash`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🦄`,
                        key: m.key
                    }
                })
            }
            if (budy.match(`vish`)) {
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `🦚`,
                        key: m.key
                    }
                })
            }
            const reactimoji = ["🌍", "🐼", "😎", "🥺", "😳", "😲", "😯", "😥", "😱", "😭", "😖", "😈", "📥", "😀", "😃", "😄", "😁", "😆", "🥹", "😅", "☺", "️😊", "🙃", "😉", "😌", "🤓", "💦", "🥸", "🤩", "🥳", "😕", "😖", "😩", "🥺", "🖤", "💔", "❤️‍🔥", "❤️‍🩹", "💋", "😤", "🤬", "🥵", "🥶", "😶", "🤡", "😐", "😯", "😮", "🥱", "😪", "😵", "😵‍💫", "🙈", "👺", "💩", "👻", "💀", "☠️", "👾", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😾", "🫶", "🤲", "🫵", "👍", "🫳", "👉", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍❄", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🌙", "🍆", "🍊", "🥎", "🧡", "💟", "💘", "🇱🇰", "🫂", "👀", "🪀", "⚽", "🧘‍♀️", "✈️", "🎡", "⛲", "🎠", "⛱️", "Hi", "morning", "night", "gm", "gn", "😘", "🤤", "💪", "🙏", "👋", "😊", "🖕", "🌼", "🌸", "🍑", "ok", "elisa", "Elisa"]
            const repkyreact = ["🌍", "🐼", "😎", "🥺", "😳", "😲", "😯", "😥", "😱", "🤧", "😖", "😈", "😶‍🌫️", "😀", "😃", "😄", "😁", "😆", "🥹", "😅", "☺", "️😊", "🙃", "😉", "😌", "🦁", "💥", "🥸", "🤩", "🥳", "😕", "😖", "😩", "🥺", "🤍", "💔", "❤️‍🔥", "❤️‍🩹", "💋", "😤", "🤬", "🥵", "🥶", "😶", "🤡", "😐", "😯", "😮", "🥱", "😪", "😵", "😵‍💫", "🙊", "👺", "💩", "👻", "💀", "☠️", "👾", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😾", "🫶", "🤲", "🫵", "👍", "🫳", "👉", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍❄", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🌙", "🍆", "🍊", "🥎", "🧡", "💟", "💘", "🇱🇰", "🫂", "👀", "🪀", "⚽", "🧘‍♀️", "✈️", "🎡", "⛲", "🎠", "⛱️", "👋", "⛅", "🌌", "🌄", "🌙", "😘", "🤤", "💪", "🙏", "👋", "😊", "🖕", "🌼", "🌸", "🍑", "✌️", "👸", "👸"]
            for (any in reactimoji) {
                if (budy.toLowerCase().includes(reactimoji[any])) {
                    imoji = repkyreact[any]
                    //await PeaceMd.sendText(m.chat, imoji )	
                    await PeaceMd.sendMessage(from, {
                        react: {
                            text: imoji,
                            key: m.key
                        }
                    })
                }
            }


        }
        /* const blockk = JSON.parse(fs.readFileSync('./database/Desable_chats.json'))	
         for (any in blockk ){	
         if (m.chat === any) return	
         reply('Block chat')	
         }*/
        // Antiwame by xeon	
        if (antiWame)
            if (budy.includes(`Wa.me`)) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                kice = m.sender
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`,
                    contextInfo: {
                        mentionedJid: [kice]
                    }
                }, {
                    quoted: m
                })
            } else {}
        if (antiWame)
            if (budy.includes(`http://wa.me`)) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                kice = m.sender
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`,
                    contextInfo: {
                        mentionedJid: [kice]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antivirtex by xeon	
        if (antiVirtex) {
            if (budy.length > 3500) {
                if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            }
        }
        //anti bad words by xeon	
        if (antiToxic)
            if (bad.includes(messagesD)) {
                tos = ['Hey, watch your mouth', 'Never been taught how to speak?', 'Stop being toxic my friend🤢', 'Dont be toxic🦄']
                sin = tos[Math.floor(Math.random() * (tos.length))]
                m.reply(sin)
                if (m.text) {
                    bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
                    if (isAdmins) return m.reply(bvl)
                    if (m.key.fromMe) return m.reply(bvl)
                    if (isCreator) return m.reply(bvl)
                    await PeaceMd.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                    PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                    PeaceMd.sendMessage(from, {
                        text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`,
                        contextInfo: {
                            mentionedJid: [m.sender]
                        }
                    }, {
                        quoted: m
                    })
                }
            }
        //antilink youtube video by xeon	
        if (AntiLinkYoutubeVid)
            if (budy.includes("https://youtu.be/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antilink youtube channel by xeon	
        if (AntiLinkYoutubeChannel)
            if (budy.includes("https://youtube.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sendet]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antilink instagram by xeon	
        if (AntiLinkInstagram)
            if (budy.includes("https://www.instagram.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antilink facebook by xeon	
        if (AntiLinkFacebook)
            if (budy.includes("https://facebook.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antilink telegram by xeon	
        if (AntiLinkTelegram)
            if (budy.includes("https://t.me/")) {
                if (AntiLinkTelegram)
                    if (!isBotAdmins) return
                bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antilink tiktok by xeon	
        if (AntiLinkTiktok)
            if (budy.includes("https://www.tiktok.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antilink twitter by xeon	
        if (AntiLinkTwitter)
            if (budy.includes("https://twitter.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            } else {}
        //antilink all by xeon	
        if (AntiLinkAll)
            if (budy.includes("https://")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                await PeaceMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
                PeaceMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`,
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                }, {
                    quoted: m
                })
            } else {}


        // Mute Chat	
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

        //emoji 	
        const emote = (satu, dua) => {
            try {
                const {
                    EmojiAPI
                } = require("emoji-api");
                const emoji = new EmojiAPI();
                emoji.get(satu)
                    .then(emoji => {
                        const buttons = [{
                            buttonId: "y",
                            buttonText: {
                                displayText: satu
                            },
                            type: 1
                        }]
                        const buttonMessage = {
                            image: {
                                url: emoji.images[dua].url
                            },
                            caption: Lang.MESS_WAIT,
                            footerText: `${botname}`,
                            buttons: buttons,
                            headerType: 4
                        }
                        PeaceMd.sendMessage(from, buttonMessage, {
                            quoted: m
                        })
                    })
            } catch (e) {
                m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
            }
        }
        // Respon Cmd with media	
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let {
                text,
                mentionedJid
            } = hash
            let messages = await generateWAMessage(m.chat, {
                text: text,
                mentions: mentionedJid
            }, {
                userJid: PeaceMd.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, PeaceMd.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            PeaceMd.ev.emit('messages.upsert', msg)
        }


        //TicTacToe\\	
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            //reply(`[DEBUG]\n${parseInt(m.text)}`)	
            if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'Game Has Ended',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}	
${arr.slice(0, 3).join('')}	
${arr.slice(3, 6).join('')}	
${arr.slice(6).join('')}	
${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}	
❌: @${room.game.playerX.split('@')[0]}	
⭕: @${room.game.playerO.split('@')[0]}	
Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await PeaceMd.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            await PeaceMd.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }

        //Suit PvP	
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
                    PeaceMd.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu	
                PeaceMd.sendText(m.chat, `Suit has been sent to chat	
@${roof.p.split`@`[0]} and 	
@${roof.p2.split`@`[0]}	
Please choose a suit in the respective chat"	
click https://wa.me/${botNumber.split`@`[0]}`, m, {
                    mentions: [roof.p, roof.p2]
                })
                if (!roof.pilih) PeaceMd.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
                if (!roof.pilih2) PeaceMd.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) PeaceMd.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        PeaceMd.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /scissors/i
            let b = /rock/i
            let k = /paper/i
            let reg = /^(scissors|rock|paper)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
                if (!roof.pilih2) PeaceMd.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
                if (!roof.pilih) PeaceMd.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                PeaceMd.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}	
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}	
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}	
`.trim(), m, {
                    mentions: [roof.p, roof.p2]
                })
                delete this.suit[roof.id]
            }
        }

        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`	
Don't tag him!	
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}	
During ${clockString(new Date - afkTime)}	
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`	
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}	
During ${clockString(new Date - user.afkTime)}	
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        //---------------------------------------------------------------------------------------------------------------------------------//	
        //  Chatbot by FantoX001 on behalf of Team ATLAS - All Rights Reserved	

        if (!m.isGroup && !isCmd) {
            const botReply = await axios.get(`http://api.brainshop.ai/get?bid=172352&key=vTmMboAxoXfsKEQQ&uid=[uid]&msg=[${budy}]`)
            var replyText = `${botReply.data.cnt}`;
            m.reply(replyText);
        }

        //---------------------------------------------------------------------------------------------------------------------------------//	

        //swtich case	
        switch (command) {
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = +new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break
        case 'ttc':
        case 'ttt':
        case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
                room.o = m.chat
                room.game.playerO = m.sender
                room.state = 'PLAYING'
                let arr = room.game.render().map(v => {
                    return {
                        X: '❌',
                        O: '⭕',
                        1: '1️⃣',
                        2: '2️⃣',
                        3: '3️⃣',
                        4: '4️⃣',
                        5: '5️⃣',
                        6: '6️⃣',
                        7: '7️⃣',
                        8: '8️⃣',
                        9: '9️⃣',
                    } [v]
                })
                let str = `Room ID: ${room.id}	
${arr.slice(0, 3).join('')}	
${arr.slice(3, 6).join('')}	
${arr.slice(6).join('')}	
Waiting @${room.game.currentTurn.split('@')[0]}	
Type *surrender* to surrender and admit defeat`
                if (room.x !== room.o) await PeaceMd.sendText(room.x, str, m, {
                    mentions: parseMention(str)
                })
                await PeaceMd.sendText(room.o, str, m, {
                    mentions: parseMention(str)
                })
            } else {
                room = {
                    id: 'tictactoe-' + (+new Date),
                    x: m.chat,
                    o: '',
                    game: new TicTacToe(m.sender, 'o'),
                    state: 'WAITING'
                }
                if (text) room.name = text
                m.reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
                this.game[room.id] = room
            }
        }
        break
        case 'delttc':
        case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
                if (this.game) {
                    delete this.game
                    PeaceMd.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
                } else if (!this.game) {
                    m.reply(`Session TicTacToe🎮 does not exist`)
                } else throw '?'
            } catch (e) {
                m.reply('damaged')
            }
        }
        break
        case 'suitpvp':
        case 'rps':
        case 'rockpaperscissors':
        case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete your previous game`)
            if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                mentions: [owner[1] + '@s.whatsapp.net']
            })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_	
@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*	
*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
                chat: await PeaceMd.sendText(m.chat, caption, m, {
                    mentions: parseMention(caption)
                }),
                id: id,
                p: m.sender,
                p2: m.mentionedJid[0],
                status: 'wait',
                waktu: setTimeout(() => {
                    if (this.suit[id]) PeaceMd.sendText(m.chat, `_Suit time out_`, m)
                    delete this.suit[id]
                }, 60000),
                poin,
                poin_lose,
                timeout
            }
        }
        break
        case 'chat': {
            if (!isCreator) throwLang.NOT_OWNER
            if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
            if (args[0] === 'mute') {
                PeaceMd.chatModify({
                    mute: 'Infinity'
                }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'unmute') {
                PeaceMd.chatModify({
                    mute: null
                }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'archive') {
                PeaceMd.chatModify({
                    archive: true
                }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'unarchive') {
                PeaceMd.chatModify({
                    archive: false
                }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'read') {
                PeaceMd.chatModify({
                    markRead: true
                }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'unread') {
                PeaceMd.chatModify({
                    markRead: false
                }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'delete') {
                PeaceMd.chatModify({
                    clear: {
                        message: {
                            id: m.quoted.id,
                            fromMe: true
                        }
                    }
                }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
        }
        break


        case 'buttonmaker': {
            if (!isPremium) throw mess.premime
            if (!text) throw `💭 Example : ${prefix + command} Hi;Peace`
            let jawab = `${text.split(";")[0]}`
            let buttons = [{
                buttonId: 'menu',
                buttonText: {
                    displayText: `MENU`
                },
                type: 1
            }]
            await PeaceMd.sendButtonText(m.chat, buttons, jawab, `${text.split(";")[1]}`, m)
        }
        break

        case 'react': {
            if (!isCreator) throw Lang.NOT_OWNER
            reactionMessage = {
                react: {
                    text: args[0],
                    key: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: quoted.id
                    }
                }
            }
            PeaceMd.sendMessage(m.chat, reactionMessage)
        }
        break

        case 'join': {
            if (!isCreator) throw Lang.NOT_OWNER
            if (!text) throw Lang.NOGROUP_LINK
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
            m.reply(mess.wait)
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await PeaceMd.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break

        case 'leavegc': {
            if (!isCreator) throw Lang.NOT_OWNER
            await PeaceMd.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break

        case 'setexif': {
            if (!isCreator) throw Lang.NOT_OWNER
            if (!text) throw `Example : ${prefix + command} packname|author`
            global.packname = text.split("|")[0]
            global.author = text.split("|")[1]
            m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
        }
        break

        case 'kick': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throw Lang.NOT_ADMIN
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await PeaceMd.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break

        case 'add': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throw Lang.NOT_ADMIN
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await PeaceMd.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break

        case 'promote': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await PeaceMd.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break
        case 'demote': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await PeaceMd.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break
        case 'block': {
            if (!isCreator) throwLang.NOT_OWNER
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await PeaceMd.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break
        case 'unblock': {
            if (!isCreator) throwLang.NOT_OWNER
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await PeaceMd.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break
        case 'setname':
        case 'setsubject': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            if (!text) throw 'Text ?'
            await PeaceMd.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
        }
        break
        case 'setdesc':
        case 'setdesk': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            if (!text) throw 'Text ?'
            await PeaceMd.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
        }
        break
        case 'setbotpp': {
            if (!isCreator) throwLang.NOT_OWNER
            if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
            if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
            if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
            let media = await PeaceMd.downloadAndSaveMediaMessage(quoted)
            await PeaceMd.updateProfilePicture(botNumber, {
                url: media
            }).catch((err) => fs.unlinkSync(media))
            m.reply(mess.success)
        }
        break
        case 'setgrouppp':
        case 'setgruppp':
        case 'setgcpp': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isAdmins) throwLang.NOT_ADMIN
            if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
            if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
            if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
            let media = await PeaceMd.downloadAndSaveMediaMessage(quoted)
            await PeaceMd.updateProfilePicture(m.chat, {
                url: media
            }).catch((err) => fs.unlinkSync(media))
            m.reply(mess.success)
        }
        break
        case 'tagall': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 	
 	
 💬 *Message : ${q ? q : 'empty'}*\n\n`
            for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
            }
            PeaceMd.sendMessage(m.chat, {
                text: teks,
                mentions: participants.map(a => a.id)
            }, {
                quoted: m
            })
        }
        break
        case 'hidetag': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            PeaceMd.sendMessage(m.chat, {
                text: q ? q : '',
                mentions: participants.map(a => a.id)
            }, {
                quoted: m
            })
        }
        break
        case 'style':
        case 'styletext': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out	
            db.data.users[m.sender].limit -= 1 // -1 limit	
            let {
                styletext
            } = require('./lib/scraper')
            if (!text) throw 'Enter Query text!'
            let anu = await styletext(text)
            let teks = `Style Text From ${text}\n\n`
            for (let i of anu) {
                teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
            }
            m.reply(teks)
        }
        break

        case 'group':
        case 'grup': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            if (args[0] === 'close') {
                await PeaceMd.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'open') {
                await PeaceMd.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
            } else {
                let buttons = [{
                        buttonId: 'group open',
                        buttonText: {
                            displayText: 'Open'
                        },
                        type: 1
                    },
                    {
                        buttonId: 'group close',
                        buttonText: {
                            displayText: 'Close'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttons, `Mode Group`, botname, m)

            }
        }
        break
        case 'editinfo': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            if (args[0] === 'open') {
                await PeaceMd.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'close') {
                await PeaceMd.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
            } else {
                let buttons = [{
                        buttonId: 'editinfo open',
                        buttonText: {
                            displayText: 'Open'
                        },
                        type: 1
                    },
                    {
                        buttonId: 'editinfo close',
                        buttonText: {
                            displayText: 'Close'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
        }
        break

        case 'chatinfo': {
            if (!m.quoted) m.reply('Reply Message')
            let msg = await m.getQuotedObj()
            if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
            let teks = ''
            for (let i of msg.userReceipt) {
                let read = i.readTimestamp
                let unread = i.receiptTimestamp
                let waktu = read ? read : unread
                teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
                teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
            }
            PeaceMd.sendTextWithMentions(m.chat, teks, m)
        }
        break
        case 'linkgroup':
        case 'linkgc':
        case 'gclink':
        case 'grouplink': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            let response = await PeaceMd.groupInviteCode(m.chat)
            PeaceMd.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, {
                detectLink: true
            })
        }
        break
        case 'ephemeral': {
            if (!m.isGroup) throw Lang.NOT_GC
            if (!isBotAdmins) throw Lang.BOT_ADMIN
            if (!isAdmins) throwLang.NOT_ADMIN
            if (!text) throw 'Enter the value enable/disable'
            if (args[0] === 'enable') {
                await PeaceMd.sendMessage(m.chat, {
                    disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
                }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'disable') {
                await PeaceMd.sendMessage(m.chat, {
                    disappearingMessagesInChat: false
                }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
        }
        break
        case 'delete':
        case 'del': {
            if (!m.quoted) throw false
            let {
                chat,
                fromMe,
                id,
                isBaileys
            } = m.quoted
            if (!isBaileys) throw 'The message was not sent by a bot!'
            PeaceMd.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: true,
                    id: m.quoted.id,
                    participant: m.quoted.sender
                }
            })
        }
        break
        case 'report':
        case 'bug': {
            if (!text) throw `Example : ${prefix + command} Report an error feature`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
            let ments = [ownernya, me]
            let buttons = [{
                buttonId: 'hehehe',
                buttonText: {
                    displayText: '🙏THANKS FOR THE REPORT'
                },
                type: 1
            }]
            await PeaceMd.sendButtonText(ownernya, buttons, pjtxt, botname, m, {
                mentions: ments
            })
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await PeaceMd.sendButtonText(m.chat, buttons, akhji, botname, m, {
                mentions: ments
            })
        }
        break

        case 'bctext':
        case 'broadcasttext':
        case 'broadcast':
            if (!isCreator) throwLang.NOT_OWNER
            if (!text) throw `Enter text`
            var data = await store.chats.all()
            for (let i of data) {
                PeaceMd.sendMessage(i.id, {
                    text: `${ownername}'s Broadcast\n\nMessage : ${q}`
                })
                await sleep(1000)
            }
            break
        case 'broadcastimage':
        case 'bcimage':
        case 'broadcastvideo':
        case 'broadcastvid':
            if (!isCreator) throwLang.NOT_OWNER
            if (!text) throw `enter text`
            let getGroups = await PeaceMd.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let xeoncast = groups.map(v => v.id)
            m.reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
            for (let i of xeoncast) {
                let txt = `${ownername}'s Broadcast\n\nMessage : ${text}`
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    await PeaceMd.sendMessage(i, {
                        image: media,
                        caption: txt,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (/video/.test(mime)) {
                    let media = await quoted.download()
                    await PeaceMd.sendMessage(i, {
                        video: media,
                        caption: txt,
                        mentions: participants.map(a => a.id)
                    })
                }
            }
            m.reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`)
            break
        case 'q':
        case 'quoted': {
            if (!m.quoted) return m.reply('💭 Reply Message!!')
            let wokwol = await PeaceMd.serializeM(await m.getQuotedObj())
            if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
            await wokwol.quoted.copyNForward(m.chat, true)
        }
        break
        case 'listpc': {
            let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
            let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
            for (let i of anulistp) {
                let nama = store.messages[i].array[0].pushName
                teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
            }
            PeaceMd.sendTextWithMentions(m.chat, teks, m)
        }
        break
        case 'listgc': {
            let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
            let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
            for (let i of anulistg) {
                let metadata = await PeaceMd.groupMetadata(i)
                teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Colombo').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
            }
            PeaceMd.sendTextWithMentions(m.chat, teks, m)
        }
        break
        case 'listonline':
        case 'onlinelist': {
            let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
            let online = [...Object.keys(store.presences[id]), botNumber]
            PeaceMd.sendText(m.chat, 'Online Member:\n\n' + online.map(v => '${themeemoji} @' + v.replace(/@.+/, '')).join`\n`, m, {
                mentions: online
            })
        }
        break
        case 'sticker':
        case 's':
        case 'stickergif':
        case 'sgif': {
            if (!quoted) throw `*💭 Reply Video/Image With Caption* ${prefix + command}`
            m.reply(mess.wait)
            if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await PeaceMd.sendImageAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                let media = await quoted.download()
                let encmedia = await PeaceMd.sendVideoAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
            }
        }
        break
        case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let {
                eBinary
            } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
        case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let {
                dBinary
            } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
        case 'buypreim':
            m.reply(`Chat owner bro, please type .owner`)
            break
        case 'addprem':
            if (!isCreator) throwLang.NOT_OWNER
            if (!q) return m.reply(`Enter the sample number\n\nExample: \n${prefix}${command} 916909137213`)
            if (isNaN(q)) return await m.reply('must be a number')
            if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
            prmi = args.join(" ")
            premium.push(`${prmi}@s.whatsapp.net`)
            fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
            m.reply(`* PREMIUM ADDED *\n\n${themeemoji} *ID*: ${prmi}`)
            break
        case 'delprem':
        case 'dellprem':
            if (!isCreator) throwLang.NOT_OWNER
            if (!q) return m.reply(`Enter the Number\n\nExample: \n${prefix}${command} 916909137213`)
            if (isNaN(q)) return await m.reply('must be a number')
            if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
            prmin = `${q}@s.whatsapp.net`
            anul = banned.indexOf(prmin)
            premium.splice(anul, 1)
            fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
            m.reply(`Success deleting premium ${prmi}`)
            break
        case 'emojimix':
        case 'emomix': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🧩`,
                    key: m.key
                }
            })
            let [emoji1, emoji2] = text.split` `
            if (!emoji1) throw `💭 ${prefix + command} 😎 😋`
            if (!emoji2) throw `💭 ${prefix + command} 😎 😋`
            let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
            for (let res of anumojimix.results) {
                let encmedia = await PeaceMd.sendImageAsSticker(m.chat, res.url, m, {
                    packname: global.packname,
                    author: global.author,
                    categories: res.tags
                })
                await fs.unlinkSync(encmedia)
            }
        }
        break
        case 'mixemoji': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🧩`,
                    key: m.key
                }
            })
            if (!text) throw `💭 ${prefix + command} 😎 😋`
            let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
            for (let res of anumix2.results) {
                let encmedia = await PeaceMd.sendImageAsSticker(m.chat, res.url, m, {
                    packname: global.packname,
                    author: global.author,
                    categories: res.tags
                })
                await fs.unlinkSync(encmedia)
            }
        }
        break
        case 'tts':
        case 'say': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🧩`,
                    key: m.key
                }
            })
            if (!text) throw `Example : ${prefix + command} peace`
            let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
            PeaceMd.sendMessage(m.chat, {
                audio: {
                    url: tts.result
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m
            })
        }
        break
        case 'smeme':
        case 'stickermeme':
        case 'stickmeme': {
            let {
                TelegraPh
            } = require('./lib/uploader')
            if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
            if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
            if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
            m.reply(mess.wait)
            mee = await PeaceMd.downloadAndSaveMediaMessage(quoted)
            mem = await TelegraPh(mee)
            meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
            memek = await PeaceMd.sendImageAsSticker(m.chat, meme, m, {
                packname: global.packname,
                author: global.author
            })
            await fs.unlinkSync(memek)
        }
        break
        case 'toimage':
        case 'toimg': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🖼`,
                    key: m.key
                }
            })
            if (!quoted) throw 'Reply Image'
            if (!/webp/.test(mime)) throw `💭 Reply sticker with caption *${prefix + command}*`
            m.reply(mess.wait)
            let media = await PeaceMd.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                fs.unlinkSync(media)
                if (err) throw err
                let bufferimg13x = fs.readFileSync(ran)
                PeaceMd.sendMessage(m.chat, {
                    image: bufferimg13x
                }, {
                    quoted: m
                })
                fs.unlinkSync(ran)
            })
        }
        break
        case 'tomp4':
        case 'tovideo': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🎥`,
                    key: m.key
                }
            })
            if (!quoted) throw 'Reply Image'
            if (!/webp/.test(mime)) throw `💭 reply sticker with caption *${prefix + command}*`
            m.reply(mess.wait)
            let {
                webp2mp4File
            } = require('./lib/uploader')
            let media = await PeaceMd.downloadAndSaveMediaMessage(quoted)
            let webpToMp4 = await webp2mp4File(media)
            await PeaceMd.sendMessage(m.chat, {
                video: {
                    url: webpToMp4.result,
                    caption: 'Convert Webp To Video'
                }
            }, {
                quoted: m
            })
            await fs.unlinkSync(media)
        }
        break
        case 'toaud':
        case 'toaudio': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🔉`,
                    key: m.key
                }
            })
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `💭 Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let {
                toAudio
            } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            PeaceMd.sendMessage(m.chat, {
                audio: audio,
                mimetype: 'audio/mpeg'
            }, {
                quoted: m
            })
        }
        break
        case 'tomp3': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🔉`,
                    key: m.key
                }
            })
            if (/document/.test(mime)) throw `💭 Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let {
                toAudio
            } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            PeaceMd.sendMessage(m.chat, {
                document: audio,
                mimetype: 'audio/mpeg',
                fileName: `Convert By ${PeaceMd.user.name}.mp3`
            }, {
                quoted: m
            })
        }
        break
        case 'tovn':
        case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `💭 Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let {
                toPTT
            } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            PeaceMd.sendMessage(m.chat, {
                audio: audio,
                mimetype: 'audio/mpeg',
                ptt: true
            }, {
                quoted: m
            })
        }
        break
        case 'togif': {
            if (!quoted) throw 'Reply video'
            if (!/webp/.test(mime)) throw `💭 reply sticker with caption *${prefix + command}*`
            m.reply(mess.wait)
            let {
                webp2mp4File
            } = require('./lib/uploader')
            let media = await PeaceMd.downloadAndSaveMediaMessage(quoted)
            let webpToMp4 = await webp2mp4File(media)
            await PeaceMd.sendMessage(m.chat, {
                video: {
                    url: webpToMp4.result,
                    caption: 'Convert Webp To Video'
                },
                gifPlayback: true
            }, {
                quoted: m
            })
            await fs.unlinkSync(media)
        }
        break
        case 'nobg':
        case 'removebg':
        case 'remove-bg': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🖼`,
                    key: m.key
                }
            })
            if (!quoted) throw `💭 Send/Reply Image With Caption ${prefix + command}`
            if (!/image/.test(mime)) throw `💭 Send/Reply Image With Caption ${prefix + command}`
            if (/webp/.test(mime)) throw `💭 Send/Reply Image With Caption ${prefix + command}`
            let remobg = require('remove.bg')
            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
            hmm = await './src/remobg-' + getRandom('')
            localFile = await PeaceMd.downloadAndSaveMediaMessage(quoted, hmm)
            outputFile = await './src/hremo-' + getRandom('.png')
            m.reply(mess.wait)
            remobg.removeBackgroundFromImageFile({
                path: localFile,
                apiKey: apinobg,
                size: "regular",
                type: "auto",
                scale: "100%",
                outputFile
            }).then(async result => {
                PeaceMd.sendMessage(m.chat, {
                    image: fs.readFileSync(outputFile),
                    caption: mess.success
                }, {
                    quoted: m
                })
                await fs.unlinkSync(localFile)
                await fs.unlinkSync(outputFile)
            })
        }
        break
        case 'yts':
        case 'ytsearch': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🔎`,
                    key: m.key
                }
            })
            if (!text) throw `💭 Example : ${prefix + command} Gajaman`
            let yts = require("youtube-yts")
            let search = await yts(text)
            let teks = 'YouTube Search\n\n Result From ' + text + '\n\n'
            let no = 1
            for (let i of search.all) {
                teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
            }
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: search.all[0].thumbnail
                },
                caption: teks
            }, {
                quoted: m
            })
        }
        break
        case 'google': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🔎`,
                    key: m.key
                }
            })
            if (!text) throw `💭 Example : ${prefix + command} Gajaman`
            let google = require('google-it')
            google({
                'query': text
            }).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                    teks += `${themeemoji} *Title* : ${g.title}\n`
                    teks += `${themeemoji} *Description* : ${g.snippet}\n`
                    teks += `${themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
                }
                m.reply(teks)
            })
        }
        break
        case 'video':
        case 'විඩියො': {
            PeaceMd.sendMessage(from, {
                react: {
                    text: `🎥`,
                    key: m.key
                }
            })
            if (!text) return reply(`💭 Example : ${prefix + command} bombe motayi`)
            let yts = require("yt-search")
            let search = await yts(text)
            let anulay = search.videos[0]
            let buttons = [{
                    buttonId: `ytmp4 ${anulay.url} 360p`,
                    buttonText: {
                        displayText: '🎥 Video(360p) 🎥'
                    },
                    type: 1
                },
                {
                    buttonId: `ytmp4 ${anulay.url} 720p`,
                    buttonText: {
                        displayText: '🎥 Video(720p) 🎥'
                    },
                    type: 1
                },
                {
                    buttonId: `playmp4 ${anulay.url}`,
                    buttonText: {
                        displayText: '📁 Document 📁'
                    },
                    type: 1
                }
            ]
            let buttonMessage = {
                image: {
                    url: anulay.thumbnail
                },
                caption: `
━━━━━━━━━━━━━━━━
  PEACE MD VIDEO DOWNLOADER 
━━━━━━━━━━━━━━━━
           	
🔰 ᴛɪᴛʟᴇ : ${anulay.title}	
             	
⏰ ᴅᴜʀᴀᴛɪᴏɴ : ${anulay.timestamp}	
             	
🎩 ᴀᴜᴛʜᴏʀ : ${anulay.author.name}	
             	
🔗 ᴜʀʟ : ${anulay.url}	
             	
🐌 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}`,
                footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
                buttons: buttons,
                headerType: 4,
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, {
                quoted: m
            })
        }
        break

        //--------------------------------------------------------------------------------------------------------------\\	

        case 'song':
        case 'සිංදුව':
        case 'සින්දුව': {
            PeaceMd.sendMessage(from, {
                react: {
                    text: `🎧`,
                    key: m.key
                }
            })
            if (!text) throw `Example : ${prefix + command} bombe motayi`
            let yts = require("youtube-yts")
            let search = await yts(text)
            let anulay = search.videos[0]
            let buttons = [{
                    buttonId: `ytmp3 ${anulay.url} 128kbps`,
                    buttonText: {
                        displayText: '🎧 Audio 🎧'
                    },
                    type: 1
                },
                {
                    buttonId: `ytdoc ${anulay.url}`,
                    buttonText: {
                        displayText: '📁 Document 📁'
                    },
                    type: 1
                }
            ]
            let buttonMessage = {
                image: {
                    url: anulay.thumbnail
                },
                caption: `
━━━━━━━━━━━━━━━━━
     PEACE MD SONG DOWNLOADER
━━━━━━━━━━━━━━━━━
             	
🔰 ᴛɪᴛʟᴇ : ${anulay.title}	
             	
⏰ ᴅᴜʀᴀᴛɪᴏɴ : ${anulay.timestamp}	
             	
🎩 ᴀᴜᴛʜᴏʀ : ${anulay.author.name}	
             	
🔗 ᴜʀʟ : ${anulay.url}	
             	
🐌 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}`,
                footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
                buttons: buttons,
                headerType: 4
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, {
                quoted: m
            })

        }
        break

        case 'play':
        case 'ytplay': {
            if (!text) throw `Example : ${prefix + command} bombe motayi`
            let yts = require("youtube-yts")
            let search = await yts(text)
            let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
            let buttons = [{
                    buttonId: `playmp3 ${anulay.url}`,
                    buttonText: {
                        displayText: '🎧 Audio 🎧'
                    },
                    type: 1
                },
                {
                    buttonId: `playmp4 ${anulay.url}`,
                    buttonText: {
                        displayText: '🎥 Video 🎥'
                    },
                    type: 1
                },
                {
                    buttonId: `ytdoc ${anulay.url}`,
                    buttonText: {
                        displayText: '📁 Document 📁'
                    },
                    type: 1
                }


            ]
            let buttonMessage = {
                image: {
                    url: anulay.thumbnail
                },
                caption: `	
━━━━━━━━━━━━━━━━━
    PEACE MD YT SEARCH
━━━━━━━━━━━━━━━━━

🔰 Title : ${anulay.title}	

⏰ Duration : ${anulay.timestamp}	

👀 Viewers : ${anulay.views}	

📅 Upload At : ${anulay.ago}	

🎩 Author : ${anulay.author.name}	

🎯 Channel : ${anulay.author.url}	

📃 Description : ${anulay.description}	

🌐 Url : ${anulay.url}`,
                footer: botname,
                buttons: buttons,
                headerType: 4
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, {
                quoted: m
            })
        }
        break
        case 'playmp3': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko	
            if (!text) throw `Example : ${prefix + command} bombe motayi`
            const xeonplaymp3 = require('./lib/ytdl2')
            let yts = require("youtube-yts")
            let search = await yts(text)
            let anup3k = search.videos[0]
            const pl = await xeonplaymp3.mp3(anup3k.url)
            await PeaceMd.sendMessage(m.chat, {
                audio: fs.readFileSync(pl.path),
                fileName: anup3k.title + '.mp3',
                mimetype: 'audio/mp4',
                ptt: false,
                contextInfo: {
                    externalAdReply: {
                        title: anup3k.title,
                        body: botname,
                        thumbnail: await fetchBuffer(pl.meta.image),
                        mediaType: 2,
                        mediaUrl: anup3k.url,
                    }

                },
            }, {
                quoted: m
            })
            await fs.unlinkSync(pl.path)
            break

            //--------------------------------------------------------------------------------------------------------------\\	

        case 'playmp4':
            if (!text) throw `Example : ${prefix + command} bombe motayi`
            const xeonplaymp4 = require('./lib/ytdl2')
            let ytsmp4 = require("youtube-yts")
            let xeonsearch13 = await ytsmp4(text)
            let anuvidoke4 = xeonsearch13.videos[0]
            const pl2 = await xeonplaymp4.mp4(anuvidoke4.url)
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: pl2.videoUrl
                },
                fileName: anuvidoke4.title + '.mp4',
                mimetype: 'video/mp4',
                contextInfo: {
                    externalAdReply: {
                        title: anuvidoke4.title,
                        body: botname,
                        thumbnail: await fetchBuffer(anuvidoke4.thumbnail),
                        mediaType: 2,
                        mediaUrl: anuvidoke4.url,
                    }

                },
            }, {
                quoted: m
            })
            break



            // song	

        case 'ytmp3':
        case 'ytaudio':
            const xeonaudp3 = require('./lib/ytdl2')
            if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
            const audio = await xeonaudp3.mp3(text)
            PeaceMd.sendMessage(m.chat, {
                audio: {
                    url: audio.path
                },
                mimetype: 'audio/mpeg',
                fileName: `${audio.meta.title}.mp3`
            }, {
                quoted: m
            })
            PeaceMd.sendMessage(from, {
                react: {
                    text: `✅`,
                    key: m.key
                }
            })
            break


        case 'ytdoc': {
            if (!text) return reply(mess.linkm)
            if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
            anu = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp3?url=${text}&apikey=DarkNero`)
            if (anu.filesize_video >= 999999) return reply('File Over Limit ' + util.format(anu))
            const docdown = await PeaceMd.sendText(m.chat, `Im Downloading Your ${m.pushName} Audio ... 🔄`)
            tummb = await getBuffer(anu.thumb)
            await PeaceMd.sendMessage(from, {
                delete: docdown.key
            })
            const docup = await PeaceMd.sendText(m.chat, `Im uploding Your ${m.pushName} Audio ... 📤`)
            const doc = await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: anu.download
                },
                mimetype: 'audio/mpeg',
                fileName: `${anu.title}.mp3`
            }, {
                quoted: m
            }).catch((err) => reply(mess.error))
            await PeaceMd.sendMessage(from, {
                delete: docup.key
            })
            PeaceMd.sendMessage(from, {
                react: {
                    text: `✅`,
                    key: m.key
                }
            })
        }
        break



        case 'ytmp4':
        case 'ytvideo': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko	
            const xeonvidoh = require('./lib/ytdl2')
            if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) throw `Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
            const vid = await xeonvidoh.mp4(text)
            const ytc = `	
━━━━━━━━━━━━━━━━
  PEACE MD VIDEO DOWNLOADER 
━━━━━━━━━━━━━━━━

*🔰 Tittle* ${vid.title}	
*📅 Date* ${vid.date}	
*⏰ Duration* ${vid.duration}	
*📌 Quality* ${vid.quality}`
            await PeaceMd.sendMessage(m.chat, {
                video: {
                    url: vid.videoUrl
                },
                caption: ytc
            }, {
                quoted: m
            })
            PeaceMd.sendMessage(from, {
                react: {
                    text: `✅`,
                    key: m.key
                }
            })
            break

        case 'pinterest': {
            m.reply(mess.wait)
            let {
                pinterest
            } = require('./lib/scraper')
            anupint = await pinterest(text)
            result = anupint[Math.floor(Math.random() * anupint.length)]
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: result
                },
                caption: `${themeemoji} Media Url : ` + result
            }, {
                quoted: m
            })
        }
        break


        case 'wallpaper': {
            if (!text) throw 'Enter Query Title'
            let {
                wallpaper
            } = require('./lib/scraper')
            anuwallpep = await wallpaper(text)
            let resultaa = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
            let resultbb = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
            let resultcc = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
            let resultdd = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
            let resultee = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]

            await PeaceMd.sendMessage(m.chat, {
                image: {
                    url: resultaa.image[0]
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
            }, {
                quoted: m
            });
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: resultbb.image[0]
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
            }, {
                quoted: m
            });
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: resultcc.image[0]
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
            }, {
                quoted: m
            });
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: resultdd.image[0]
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
            }, {
                quoted: m
            });
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: resultee.image[0]
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
            }, {
                quoted: m
            });
        }
        break
        case 'wikimedia': {
            if (!text) throw 'Enter Query Title'
            let {
                wikimedia
            } = require('./lib/scraper')
            anuwmedia = await wikimedia(text)
            result = anumedia[Math.floor(Math.random() * anumedia.length)]
            let buttons = [{
                buttonId: `wikimedia ${text}`,
                buttonText: {
                    displayText: 'Next'
                },
                type: 1
            }]
            let buttonMessage = {
                image: {
                    url: result.image
                },
                caption: `🔰 Title : ${result.title}\n🌐 Source : ${result.source}\n🔗 Media Url : ${result.image}`,
                footer: botname,
                buttons: buttons,
                headerType: 4
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, {
                quoted: m
            })
        }
        break
        case 'tinyurl': {
            if (!q) return m.reply('link?')
            request(`https://tinyurl.com/api-create.php?url=${q}`, function(error, response, body) {
                try {
                    m.reply(body)
                } catch (e) {
                    m.reply(e)
                }
            })
        }
        break

        case 'logo': {
            if (!text) return reply('```💭 Please give me a some words ...```\n_example .logo CHARITH_')


            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🧩`,
                    key: m.key
                }
            })

            const desmsg = `
━━━━━━━━━━━━━━━━━
           PEACE MD LOGO MAKER
━━━━━━━━━━━━━━━━━

✌ PEACE _${m.pushName}_
✏ LOGO TEXT _${text}_

👇 Select a Style`
            let sections = [{

                "title": "ᴘᴇᴀᴄᴇ ᴍᴅ ʟᴏɢᴏ sᴛʏʟᴇs",
                "rows": [{
                        "title": "CANDY STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `candy ${text}`
                    },
                    {
                        "title": "CHRISTMAS STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `christmas ${text}`
                    },
                    {
                        "title": "DEEPSEA STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `deepsea ${text}`
                    },
                    {
                        "title": "SCIFI STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `scifi ${text}`
                    },
                    {
                        "title": "RAINBOW STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `rainbow ${text}`
                    },
                    {
                        "title": "WATERPIPE STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `waterpipe ${text}`
                    },
                    {
                        "title": "SPOOKEY STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `spooky ${text}`
                    },
                    {
                        "title": "PENCIL STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `pencil ${text}`
                    },
                    {
                        "title": "CIRCUITE STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `circuit ${text}`
                    },
                    {
                        "title": "DESCOVERY STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `discovery ${text}`
                    },
                    {
                        "title": "FICTION STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `fiction ${text}`
                    },
                    {
                        "title": "DEMON STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `demon ${text}`
                    },
                    {
                        "title": "TRANSFORMER STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `transformer ${text}`
                    },
                    {
                        "title": "BERRY STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `berry ${text}`
                    },
                    {
                        "title": "THUNDER  STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `thunder ${text}`
                    },
                    {
                        "title": "MAGMA STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `magma ${text}`
                    },
                    {
                        "title": "3-D STONE STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `3dstone ${text}`
                    },
                    {
                        "title": "NEONLIGHT STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `neonlight ${text}`
                    },
                    {
                        "title": "GLITCH STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `glitch ${text}`
                    },
                    {
                        "title": "HARRYPOTTER STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `harrypotter ${text}`
                    },
                    {
                        "title": "BROKENGLASS STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `brokenglass ${text}`
                    },
                    {
                        "title": "PAPERCUT STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `papercut ${text}`
                    },
                    {
                        "title": "WATERCOLOR STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `watercolor ${text}`
                    },
                    {
                        "title": "MULTICOLOR STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `multicolor ${text}`
                    },
                    {
                        "title": "NEON DEVIL STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `neondevil ${text}`
                    },
                    {
                        "title": "UNDERWATER STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `underwater ${text}`
                    },
                    {
                        "title": "GRAFFITIBIKE STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `graffitibike ${text}`
                    },
                    {
                        "title": "SNOW STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `snow ${text}`
                    },
                    {
                        "title": "CLOUD STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `cloud ${text}`
                    },
                    {
                        "title": "HONEY STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `honey ${text}`
                    },
                    {
                        "title": "ICE STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `ice ${text}`
                    },
                    {
                        "title": "BISCUIT STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `biscuit ${text}`
                    },
                    {
                        "title": "WOOD STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `wood ${text}`
                    },
                    {
                        "title": "CHOCOLATE STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `chocolate ${text}`
                    },
                    {
                        "title": "STRAWBERRY STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `strawberry ${text}`
                    },
                    {
                        "title": "MATRIXS STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `matrix ${text}`
                    },
                    {
                        "title": "BLOOD STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `blood ${text}`
                    },
                    {
                        "title": "DROPWATER STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `dropwater ${text}`
                    },
                    {
                        "title": "TOXIC STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `toxic ${text}`
                    },
                    {
                        "title": "LAVA STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `lava ${text}`
                    },
                    {
                        "title": "ROCK STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `rock ${text}`
                    },
                    {
                        "title": "BLOODGLAS STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `bloodglas ${text}`
                    },
                    {
                        "title": "HALLOWEN STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `hallowen ${text}`
                    },
                    {
                        "title": "DARKGOLD STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `darkgold ${text}`
                    },
                    {
                        "title": "JOKER STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `joker ${text}`
                    },
                    {
                        "title": "WICKER STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `wicker ${text}`
                    },
                    {
                        "title": "FIREWORK STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `firework ${text}`
                    },
                    {
                        "title": "SKELETON STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `skeleton ${text}`
                    },
                    {
                        "title": "BLACKPINK STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `blackpink ${text}`
                    },
                    {
                        "title": "SAND STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `sand ${text}`
                    },
                    {
                        "title": "GLUE STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `glue ${text}`
                    }, ///
                    {
                        "title": "3D BOX STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `3dbox ${text}`
                    },
                    {
                        "title": "GLITCH STYLE - 2",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `glitch2 ${text}`
                    },
                    {
                        "title": "GLITCH STYLE - 3",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `glitch3 ${text}`
                    },
                    {
                        "title": "GREEN NEON STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `greenneon ${text}`
                    },
                    {
                        "title": "3D NEON STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `3dneon ${text}`
                    },
                    {
                        "title": "BOKEH STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `bokeh ${text}`
                    },
                    {
                        "title": "BEAR STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `bear ${text}`
                    },
                    {
                        "title": "CHRISTMAS STYLE - 2",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `sparklechristmas ${text}`
                    },
                    {
                        "title": "CHRISTMAS STYLE - 3",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `3dchristmas ${text}`
                    },
                    {
                        "title": "RAINBOW STYLE - 3",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `rainbow2 ${text}`
                    },
                    {
                        "title": "FRUIT JUICE STYLE",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `fruitjuice ${text}`
                    },

                    ///
                    {
                        "title": "1917 STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `1917 ${text}`
                    },
                    {
                        "title": "LEAVES STYLE ",
                        "description": `\n${m.pushName} Buddy, PEACE MD is Ready to make your logo`,
                        "rowId": `leaves ${text}`
                    }
                ]
            }]

            await PeaceMd.sendListMsg(m.chat, `${desmsg}`, `ᴘᴇᴀᴄᴇ ᴍᴅ`, `*  🎨LOGOS BY PEACE MD🎨 *`, `MAKE LOGO`, sections, m)

        }

        break

        case 'candy':
        case 'christmas':
        case '3dchristmas':
        case 'sparklechristmas':
        case 'deepsea':
        case 'scifi':
        case 'rainbow2':
        case 'waterpipe':
        case 'spooky':
        case 'wolflogo':
        case 'pencil':
        case 'circuit':
        case 'discovery':
        case 'metalic':
        case 'fiction':
        case 'demon':
        case 'transformer':
        case 'berry':
        case 'thunder':
        case '3dstone2':
        case 'neonhart':
        case 'goldlion':
        case 'neonhart2':
        case 'gem':
        case 'neonlight':
        case 'glitch':
        case 'harrypotter':
        case 'brokenglass':
        case 'papercut':
        case 'potty':
        case 'watercolor':
        case 'multicolor':
        case 'neondevil':
        case 'underwater':
        case 'graffitibike':
        case 'snow':
        case 'cloud':
        case 'honey':
        case 'ice':
        case 'fruitjuice':
        case 'biscuit':
        case 'wood':
        case 'chocolate':
        case 'strawberry':
        case 'matrix':
        case 'blood':
        case 'dropwater':
        case 'toxic':
        case 'lava':
        case 'rock':
        case 'bloodglas':
        case 'halloween':
        case 'darkgold':
        case 'joker':
        case 'wicker':
        case 'firework':
        case 'skeleton':
        case 'blackpink':
        case 'sand':
        case 'glue':
        case '1917':
        case 'leaves':
        case 'demon': {

            var MAKING = '*🌈 Take a moment to createing your textlogo...*\n*🌈 මදක් රැදීසිටින්න ඔබගේ textlogo සෑදමින් පවතී...*'

            if (!q) return reply(`Example\n : ${prefix + command} PEACE MD`)
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🧩`,
                    key: m.key
                }
            })
            let link
            if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
            if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
            if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
            if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
            if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
            if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
            if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
            if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
            if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
            if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
            if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
            if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
            if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
            if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
            if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
            if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
            if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
            if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
            if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
            if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
            if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
            if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
            if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
            if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
            if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
            if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
            if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
            if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
            if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
            if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
            if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
            if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
            if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
            if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
            if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
            if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
            if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
            if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
            if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
            if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
            if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
            if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
            if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
            if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
            if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
            if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
            if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
            if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
            if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
            if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
            if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
            if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
            if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
            if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
            if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
            if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
            if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
            if (/neonhart/.test(command)) link = 'https://textpro.me/create-neon-light-on-brick-wall-online-1062.html'
            if (/wolflogo/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
            if (/goldlion/.test(command)) link = 'https://textpro.me/create-avatar-gold-online-956.html'
            if (/neonhart2/.test(command)) link = 'https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html'
            if (/gem/.test(command)) link = 'https://textpro.me/blue-gem-text-effect-830.html'
            if (/potty/.test(command)) link = 'https://textpro.me/create-3d-pottery-text-effect-online-1088.html'

            let anu = await maker.textpro(link, q)
            const logomaking = await PeaceMd.sendText(m.chat, MAKING)
            await PeaceMd.sendMessage(m.chat, {
                image: {
                    url: anu
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
            }, {
                quoted: m
            })
            await PeaceMd.sendMessage(m.chat, {
                delete: logomaking.key
            })
        }
        break


        case 'glitch3':

            if (!q) return reply(`Use ${prefix + command} text|text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case '3dbox':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'waterdrop':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'lion2':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'papercut':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'transformer':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'harrypot':

            if (!q) return reply(`Use ${prefix + command} text|text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'neondevil':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case '3dstone':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case '3davengers':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'thunder':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'window':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'blackpinkneon':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'graffiti':
        case 'grafiti':

            if (!q) return reply(`Use ${prefix + command} text|text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'pornhub2':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'blackpink2':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'glitch':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'glitch2':

            if (!q) return reply(`Use ${prefix + command} text|text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'glitch3':

            if (!q) return reply(`Use ${prefix + command} text|text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case '3dspace':

            if (!q) return reply(`Use ${prefix + command} text|text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'lion':

            if (!q) return reply(`Use ${prefix + command} text|text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case '3dneon':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'neon':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'greenneon':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'bokeh':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'holographic':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'bear':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break



        case 'wolf':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            teks1 = q.split("|")[0]
            teks2 = q.split("|")[1]
            maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
                    `${teks1}`, `${teks2}`
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break




        case 'joker':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break


        case 'dropwater2':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'summertime':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'neonlight2':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'thewall':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'natural':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'carbon':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

        case 'pencil':

            if (!q) return reply(`Use ${prefix + command} text`)
            await PeaceMd.sendText(m.chat, ' *🌈 Take a moment to createing your textlogo...*')
            maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break

            /// phtoooxy 
        case 'lovemsg':

            maker.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${q}`, ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));

            break
            //https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html
        case 'darkmetal':
            maker.photooxy("https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html", [`${q}`, ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));

            break
        case 'qsteel':
        case 'qavenger':
        case 'qpolugon':
        case 'qhsteel':
        case 'qwood':
        case 'qlovely':
        case 'qmetalic':
        case 'qneon':
        case 'qpubg':
        case 'qfire':
        case 'qhorr':
        case 'qhalowin':
        case 'qvideogame':
        case 'qwolf':
        case 'qninja':
        case 'qreto': {

            const logomaking = await PeaceMd.sendText(m.chat, LOGO_MAKING)


            text1 = q.split(" ")[0]
            text2 = q.split(" ")[1]
            var link
            if (/qsteel/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/steel-text-effect-66.html`
            if (/qavenger/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html`
            if (/qpolugon/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-logo-avatar-online-style-polygon-logo-320.html`
            if (/qhsteel/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/heated-steel-lettering-effect-65.html`
            if (/qwood/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-3d-wood-text-effects-online-free-705.html`
            if (/qlovely/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/lovely-floral-ornamental-banner-online-603.html`
            if (/qmetalic/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-metallic-cover-online-297.html`
            if (/qneon/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/neon-text-effect-online-78.html`
            if (/qpubg/.test(command)) link = `https://api.akuari.my.id/photooxy/scraper2?text1=${text1}&text2=${text2}&link=https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html`
            if (/qfire/.test(command)) link = `https://api.akuari.my.id/photooxy/scraper2?text1=${text1}&text2=${text2}&link=https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html`
            if (/qhorr/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-a-cinematic-horror-text-effect-1045.html`
            if (/qhalowin/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
            if (/qvideogame/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
            if (/qwolf/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-wolf-logo-galaxy-online-936.html`
            if (/qninja/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-ninja-logo-online-935.html`
            if (/reto/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-3d-retro-text-effect-online-free-106a5.html`
            const charith = await fetchJson(link)
            const data = charith.respon
            //const logomaking = await PeaceMd.sendText(m.chat, LOGO_MAKING )          
            await PeaceMd.sendMessage(m.chat, {
                image: {
                    url: data
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
            }, {
                quoted: m
            })
            await PeaceMd.sendMessage(m.chat, {
                delete: logomaking.key
            })

        }
        break
        case 'tlc':
        case 'tls':
        case 'tlm':
        case 'tle':
        case 'tlb':
        case 'mountain': {

            const logomaking = await PeaceMd.sendText(m.chat, LOGO_MAKING)
            text1 = q.split(" ")[0]
            text2 = q.split(" ")[1]
            var link
            if (/tlc/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-cobra?text=${text1}&text_2=${text2}`
            if (/tls/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-singa?text=${text1}&text_2=${text2}`
            if (/tlm/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-macan?text=${text1}&text_2=${text2}`
            if (/tle/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-elang?text=${text1}&text_2=${text2}`
            if (/tlb/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-banteng?text=${text1}&text_2=${text2}`
            if (/mountain/.test(command)) link = `https://api.akuari.my.id/ephoto/mountain?text=${text1}&text_2=${text2}`

            await PeaceMd.sendMessage(m.chat, {
                image: {
                    url: link
                },
                caption: `ᴘᴇᴀᴄᴇ ᴍᴅ`
            }, {
                quoted: m
            })
            await PeaceMd.sendMessage(m.chat, {
                delete: logomaking.key
            })

        }
        break
        case 'pslogo': {
            var MAX = '```💭 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_.pslogo Charith Pramodya_'
            if (!text && !text.includes(' ')) return reply(MAX)

            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🧩`,
                    key: m.key
                }
            })

            const desmsg = `
        ━━━━━━━━━━━━━━━━━
                   PEACE MD LOGO MAKER
        ━━━━━━━━━━━━━━━━━
        
        ✌ PEACE _${m.pushName}_
        ✏ LOGO TEXT _${text}_
        
        👇 Select a Style`

            let sections = [{

                "rows": [{
                        "title": "Steel style",
                        "rowId": `qsteel ${text}`
                    },
                    {
                        "title": "avenger style",
                        "rowId": `qavenger ${text}`
                    },
                    {
                        "title": "polygon style ",
                        "rowId": `qpolugon ${text}`
                    },
                    {
                        "title": "fire steel style ",
                        "rowId": `qhsteel ${text}`
                    },
                    {
                        "title": "wood style ",
                        "rowId": `qwood ${text}`
                    },
                    {
                        "title": "ornamental style ",
                        "rowId": `qlovely ${text}`
                    },
                    {
                        "title": "matalic style ",
                        "rowId": `qmetalic ${text}`
                    },
                    {
                        "title": "neon style ",
                        "rowId": `qneon ${text}`
                    },
                    {
                        "title": "pubg style ",
                        "rowId": `qpubg ${text}`
                    },
                    {
                        "title": "fire game style ",
                        "rowId": `qfire ${text}`
                    },
                    {
                        "title": "horror style ",
                        "rowId": `qhorr ${text}`
                    },
                    {
                        "title": "haloween style",
                        "rowId": `qhalowin ${text}`
                    },
                    {
                        "title": "video game style",
                        "rowId": `qvideogame ${text}`
                    },
                    {
                        "title": "wolf style ",
                        "rowId": `qwolf ${text}`
                    },
                    {
                        "title": "ninja style ",
                        "rowId": `qninja ${text}`
                    },
                    {
                        "title": "3d reto style ",
                        "rowId": `qreto ${text}`
                    },
                    {
                        "title": "bear style",
                        "rowId": `bear ${text}`
                    },
                    {
                        "title": "lion style ",
                        "rowId": `lion ${text}`
                    },
                    {
                        "title": "3dspace style ",
                        "rowId": `3dspace ${text}`
                    },
                    {
                        "title": "glitch style ",
                        "rowId": `glitch3 ${text}`
                    },
                    {
                        "title": "glitch style - 2 ",
                        "rowId": `glitch2 ${text}`
                    },
                    {
                        "title": "pronhub style ",
                        "rowId": `pornhub2 ${text}`
                    },
                    {
                        "title": "grafiti style ",
                        "rowId": `grafiti ${text}`
                    },
                    {
                        "title": "giltch style 3 ",
                        "rowId": `glitch3 ${text}`
                    },
                    {
                        "title": "team logo style - 1 ",
                        "rowId": `tlc ${text}`
                    },
                    {
                        "title": "team logo style - 2 ",
                        "rowId": `tls ${text}`
                    },
                    {
                        "title": "team logo style - 3 ",
                        "rowId": `tlm ${text}`
                    },
                    {
                        "title": "team logo style - 4 ",
                        "rowId": `tle ${text}`
                    },
                    {
                        "title": "team logo style - 5 ",
                        "rowId": `tlb ${text}`
                    },
                    {
                        "title": "mountain style ",
                        "rowId": `mountain ${text}`
                    },
                    {
                        "title": "💻 Developer 💻",
                        "rowId": `dev`
                    }
                ]
            }]
            await PeaceMd.sendListMsg(m.chat, `${desmsg}`, `ᴘᴇᴀᴄᴇ ᴍᴅ`, `*🎨 PEACE MD LOGO MAKER 🎨*`, `MAKE LOGO`, sections, m)

        }
        break

        case 'textmaker': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `✏`,
                    key: m.key
                }
            })
            if (args.length < 1) throw `💭 ${prefix + command} CHARITH`
            if (args[0] === 'glitch') {
                if (args.length < 2) throw `💭 ${prefix + command + ' ' + args[0]} ${global.ownername}`
                let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
                PeaceMd.sendMessage(from, {
                    image: {
                        url: teds
                    },
                    caption: "ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ"
                }, {
                    quoted: m
                })
            } else if (args[0] === 'glow') {
                if (args.length < 2) throw `💭 ${prefix + command + ' ' + args[0]} ${global.ownername}`
                let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
                PeaceMd.sendMessage(from, {
                    image: {
                        url: teds
                    },
                    caption: "ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ"
                }, {
                    quoted: m
                })
            } else {
                m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
            }
        }
        break
        case 'hoorror': {

            let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
            let anui = await textpro(link, q)
            m.reply(`Wait a moment while making the logo about 1 minute`)
            console.log(anui)
            PeaceMd.sendMessage(from, {
                image: {
                    url: anui
                },
                caption: Lang.MESS_WAIT
            }, {
                quoted: m
            })
        }
        break
        case 'whitebear':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'thunder2':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
            break
        case 'neon':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'matrix2':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'sky':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'magma':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'sand':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'pencil':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'graffiti':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'metallic':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'steel':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'harrpotter':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'underwater':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'luxury':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'glue2':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'fabric':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'neonlight':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'lava':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'toxic':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'ancient':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'christmas2':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'sci_fi':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'rainbow':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'classic':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'watercolor2':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'halloweem2':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'halloweenfire':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'writing':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'foggy':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'marvel':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'skeleton2':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'sketch':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'wonderful':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'batman':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'juice':

            if (!q) throw `Use ${prefix + command} text`
            m.reply(mess.wait)
            maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
                    `${q}`,
                ])
                .then((data) => PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: data
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                }))
                .catch((err) => console.log(err));
            break
        case 'pornhub': {

            if (!q) throw `Example: ${prefix + command} CHARITH PRAMODYA`
            m.reply(mess.wait)
            inilogo4 = args.join(" ")
            inilogo9 = args.join(" ")
            var logo4 = inilogo4.split('|')[0]
            var logo9 = inilogo9.split('|')[1]
            let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`, `${logo9}`])
            console.log(anuphub)
            PeaceMd.sendMessage(from, {
                image: {
                    url: anuphub
                },
                caption: Lang.MESS_WAIT
            }, {
                quoted: m
            })
        }
        break
        case 'retro': {
            if (!q) throw `Example: ${prefix + command} `
            m.reply(mess.wait)
            inilogo4 = args.join(" ")
            inilogo9 = args.join(" ")
            var logo4 = inilogo4.split('|')[0]
            var logo9 = inilogo9.split('|')[1]
            let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`, `${logo9}`])
            console.log(anutro2)
            PeaceMd.sendMessage(from, {
                image: {
                    url: anutro2
                },
                caption: Lang.MESS_WAIT
            }, {
                quoted: m
            })
        }
        break
        case 'horror': {
            if (!q) throw `Example: ${prefix + command} CHARITH PRAMODYA`
            m.reply(mess.wait)
            inilogo4 = args.join(" ")
            inilogo9 = args.join(" ")
            var logo4 = inilogo4.split('|')[0]
            var logo9 = inilogo9.split('|')[1]
            let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`, `${logo9}`])
            console.log(anuror2)
            PeaceMd.sendMessage(from, {
                image: {
                    url: anuror2
                },
                caption: Lang.MESS_WAIT
            }, {
                quoted: m
            })
        }
        break
        case '8bit': {
            if (!q) throw `Example: ${prefix + command} CHARITH PRAMODYA`
            m.reply(mess.wait)
            inilogo4 = args.join(" ")
            inilogo9 = args.join(" ")
            var logo4 = inilogo4.split('|')[0]
            var logo9 = inilogo9.split('|')[1]
            let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`, `${logo9}`])
            console.log(anubit8)
            PeaceMd.sendMessage(from, {
                image: {
                    url: anubit8
                },
                caption: Lang.MESS_WAIT
            }, {
                quoted: m
            })
        }
        break
        case 'tiktok': {
            if (!text) return m.reply(`Example : ${prefix + command} link`)
            if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
            m.reply(mess.wait)
            require('./lib/tiktok').Tiktok(q).then(data => {
                var button = [{
                    buttonId: `tiktokaudio ${q}`,
                    buttonText: {
                        displayText: `AUDIO‡`
                    },
                    type: 1
                }, {
                    buttonId: `menu`,
                    buttonText: {
                        displayText: `Menu`
                    },
                    type: 1
                }]
                PeaceMd.sendMessage(m.chat, {
                    caption: Lang.MESS_WAIT,
                    video: {
                        url: data.watermark
                    },
                    buttons: button,
                    footer: botname,
                    mentions: [sender]
                })
            })
        }
        break
        case 'tiktokaudio': {
            if (!text) return m.reply(`Example : ${prefix + command} link`)
            if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
            m.reply(mess.wait)
            require('./lib/tiktok').Tiktok(q).then(data => {
                PeaceMd.sendMessage(m.chat, {
                    audio: {
                        url: data.audio
                    },
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m
                })
            })
        }
        break

        case 'git':
        case 'gitclone':
            if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/Kaveeshasithum`)
            if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            let [, user, repo] = args[0].match(regex1) || []
            repo = repo.replace(/.git$/, '')
            let url = `https://api.github.com/repos/${user}/${repo}/zipball`
            let filename = (await fetch(url, {
                method: 'HEAD'
            })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            PeaceMd.sendMessage(m.chat, {
                document: {
                    url: url
                },
                fileName: filename + '.zip',
                mimetype: 'application/zip'
            }, {
                quoted: m
            }).catch((err) => reply(mess.error))
            break
        case 'pinterest': {
            m.reply(mess.wait)
            let {
                pinterest
            } = require('./lib/scraper')
            anutrest = await pinterest(text)
            result = anutrest[Math.floor(Math.random() * anutrest.length)]
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: result
                },
                caption: '⭔ Media Url : ' + result
            }, {
                quoted: m
            })
        }
        break
        case 'ringtone': {
            if (!text) throw `Example : ${prefix + command} black rover`
            let {
                ringtone
            } = require('./lib/scraper')
            let anutone2 = await ringtone(text)
            let result = anutone2[Math.floor(Math.random() * anutone2.length)]
            PeaceMd.sendMessage(m.chat, {
                audio: {
                    url: result.audio
                },
                fileName: result.title + '.mp3',
                mimetype: 'audio/mpeg'
            }, {
                quoted: m
            })
        }
        break




        case 'bass':
        case 'blown':
        case 'deep':
        case 'earrape':
        case 'fast':
        case 'fat':
        case 'nightcore':
        case 'reverse':
        case 'robot':
        case 'slow':
        case 'smooth':
        case 'squirrel':
            try {
                let set
                if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                    m.reply(mess.wait)
                    let media = await PeaceMd.downloadAndSaveMediaMessage(quoted)
                    let ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return m.reply(err)
                        let buff = fs.readFileSync(ran)
                        PeaceMd.sendMessage(m.chat, {
                            audio: buff,
                            mimetype: 'audio/mpeg'
                        }, {
                            quoted: m
                        })
                        fs.unlinkSync(ran)
                    })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
            } catch (e) {
                m.reply(e)
            }
            break
        case 'setcmd': {
            if (!m.quoted) throw 'Reply Message!'
            if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
            if (!text) throw `For What Command?`
            let hash = m.quoted.fileSha256.toString('base64')
            if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
            global.db.data.sticker[hash] = {
                text,
                mentionedJid: m.mentionedJid,
                creator: m.sender,
                at: +new Date,
                locked: false,
            }
            m.reply(`Done!`)
        }
        break
        case 'delcmd': {
            let hash = m.quoted.fileSha256.toString('base64')
            if (!hash) throw `No hashes`
            if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
            delete global.db.data.sticker[hash]
            m.reply(`Done!`)
        }
        break
        case 'listcmd': {
            let teks = `	
*List Hash*	
Info: *bold* hash is Locked	
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}	
`.trim()
            PeaceMd.sendText(m.chat, teks, m, {
                mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
            })
        }
        break
        case 'lockcmd': {
            if (!isCreator) throwLang.NOT_OWNER
            if (!m.quoted) throw 'Reply Message!'
            if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
            let hash = m.quoted.fileSha256.toString('base64')
            if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
            global.db.data.sticker[hash].locked = !/^un/i.test(command)
            m.reply('Done!')
        }
        break
        case 'addmsg': {
            if (!m.quoted) throw 'Reply Message You Want To Save In Database'
            if (!text) throw `Example : ${prefix + command} filename`
            let msgs = global.db.data.database
            if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
            msgs[text.toLowerCase()] = quoted.fakeObj
            m.reply(`Successfully added message in message list as '${text}'	
    	
Access with ${prefix}getmsg ${text}	
View list of Messages With ${prefix}listmsg`)
        }
        break
        case 'getmsg': {
            if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
            let msgs = global.db.data.database
            if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
            PeaceMd.copyNForward(m.chat, msgs[text.toLowerCase()], true)
        }
        break
        case 'delmsg':
        case 'deletemsg': {
            let msgs = global.db.data.database
            if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
            delete msgs[text.toLowerCase()]
            m.reply(`Successfully deleted '${text}' from the message list`)
        }
        break

        case 'menfess':
        case 'menfes':
        case 'confes':
        case 'confess':
            if (m.isGroup) return m.reply(Lang.NOT_GC)
            if (!text) return m.reply(`*How to use?*\n\Send command ${prefix + command} number|sender|message\n\nExample ${prefix + command} 91xxxxxxxxxx|handsome here|I have a crush on you\n\nExample 2 : ${prefix + command} 91xxxxxxxxxx|ur crush|I have a crush on you\n\nDon't worry, privacy is safe><`)
            let nomor = q.split('|')[0] ? q.split('|')[0] : q
            let saking = q.split('|')[1] ? q.split('|')[1] : q
            let pesan = q.split('|')[2] ? q.split('|')[2] : ''
            if (pesan.length < 1) return m.reply(`All must be filled in! eg : confess 91xxxxxxxxxx|from|hello dude`)
            let teksnya = `Hi friend, there is confess message for you!!\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
            gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
            var button = [{
                buttonId: `menfesconfirm`,
                buttonText: {
                    displayText: `CONFIRM‡`
                },
                type: 1
            }, {
                buttonId: `menu`,
                buttonText: {
                    displayText: `Menu`
                },
                type: 1
            }]
            PeaceMd.sendMessage(`${nomor}@s.whatsapp.net`, {
                caption: teksnya,
                image: {
                    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
                },
                buttons: button,
                footer: botname
            })
            m.reply(`Success Sending Menfess!!`)
            break
        case 'menfesconfirm': {
            PeaceMd.sendMessage(q, {
                text: `It's been confirmed, Confess🌹`
            })
            m.reply(`Thank you confess for being accepted.`)
        }
        break
        case 'anonymous': {
            if (m.isGroup) return m.reply(Lang.NOT_GC)
            this.anonymous = this.anonymous ? this.anonymous : {}
            let buttons = [{
                buttonId: 'start',
                buttonText: {
                    displayText: 'Start'
                },
                type: 1
            }]
            PeaceMd.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await PeaceMd.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
        }
        break
        case 'keluar':
        case 'leave': {
            if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
            this.anonymous = this.anonymous ? this.anonymous : {}
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                let buttons = [{
                    buttonId: 'start',
                    buttonText: {
                        displayText: 'Start'
                    },
                    type: 1
                }]
                await PeaceMd.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``)
                throw false
            }
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) await PeaceMd.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'mulai':
        case 'start': {
            if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
            this.anonymous = this.anonymous ? this.anonymous : {}
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                let buttons = [{
                    buttonId: 'keluar',
                    buttonText: {
                        displayText: 'Stop'
                    },
                    type: 1
                }]
                await PeaceMd.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                let buttons = [{
                        buttonId: 'next',
                        buttonText: {
                            displayText: 'Skip'
                        },
                        type: 1
                    },
                    {
                        buttonId: 'keluar',
                        buttonText: {
                            displayText: 'Stop'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await PeaceMd.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
            } else {
                let id = +new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function(who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function(who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                let buttons = [{
                    buttonId: 'keluar',
                    buttonText: {
                        displayText: 'Stop'
                    },
                    type: 1
                }]
                await PeaceMd.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
            }
            break
        }
        case 'next':
        case 'lanjut': {
            if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
            this.anonymous = this.anonymous ? this.anonymous : {}
            let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!romeo) {
                let buttons = [{
                    buttonId: 'start',
                    buttonText: {
                        displayText: 'Start'
                    },
                    type: 1
                }]
                await PeaceMd.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                throw false
            }
            let other = romeo.other(m.sender)
            if (other) await PeaceMd.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
            delete this.anonymous[romeo.id]
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                let buttons = [{
                        buttonId: 'next',
                        buttonText: {
                            displayText: 'Skip'
                        },
                        type: 1
                    },
                    {
                        buttonId: 'keluar',
                        buttonText: {
                            displayText: 'Stop'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await PeaceMd.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
            } else {
                let id = +new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function(who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function(who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                let buttons = [{
                    buttonId: 'keluar',
                    buttonText: {
                        displayText: 'Stop'
                    },
                    type: 1
                }]
                await PeaceMd.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
            }
            break
        }
        case 'public': {
            if (!isCreator) throwLang.NOT_OWNER
            PeaceMd.public = true
            m.reply('*Successful in Changing To Public Usage*')
        }
        break
        case 'self': {
            if (!isCreator) throwLang.NOT_OWNER
            PeaceMd.public = false
            m.reply('*Successful in Changing To Self Usage*')
        }
        break


        //ping	

        case 'ping':
        case 'ping2': {
            const start = new Date().getTime()
            await PeaceMd.sendText(m.chat, '*📡  ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*')
            const end = new Date().getTime()
            const poonn = await PeaceMd.sendText(m.chat, '*ᴘᴏɴɢ* ' + (end - start) + ' *_ᴍs_*')
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `✅`,
                    key: poonn.key
                }
            })
        }
        break
        case 'botstetus':
        case 'stetus': {
            const start = new Date().getTime()
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `⚧️`,
                    key: m.key
                }
            })
            const end = new Date().getTime()
            const ping = (end - start) + 'ms'
        }
        break




        case 'setmenu': {
            if (!isCreator) throwLang.NOT_OWNER
            let setbot = db.data.settings[botNumber]
            if (args[0] === 'templateImage') {
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
            } else if (args[0] === 'templateVideo') {
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
            } else if (args[0] === 'templateGif') {
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
            } else if (args[0] === 'templateMessage') {
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
            } else {
                let sections = [{
                    title: "CHANGE MENU BOT",
                    rows: [{
                            title: "Template Image",
                            rowId: `setmenu templateImage`,
                            description: `Change menu bot to Template Image`
                        },
                        {
                            title: "Template Video",
                            rowId: `setmenu templateVideo`,
                            description: `Change menu bot to Template Video`
                        },
                        {
                            title: "Template Gif",
                            rowId: `setmenu templateGif`,
                            description: `Change menu bot to Template Gif`
                        },
                        {
                            title: "Template Message",
                            rowId: `setmenu templateMessage`,
                            description: `Change menu bot to Template Message`
                        }
                    ]
                }, ]
                PeaceMd.sendListMsg(m.chat, ` *Din* Setmenu nya!`, PeaceMd.user.name, `*Hello DarkNeroINC* !`, `🌟`, sections, m)
            }
        }
        break

        case 'req':
        case 'request': {
            if (!text) throw `Example : ${prefix + command} Fitur Min`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${command} ${text}`
            let ments = [ownernya, me]
            let buttons = [{
                buttonId: 'hehehe',
                buttonText: {
                    displayText: '🙏THANKS'
                },
                type: 1
            }]
            await PeaceMd.sendButtonText(ownernya, buttons, pjtxt, botname, m, {
                mentions: ments,
                quoted: fdoc
            })
            let akhji = `*Request has been sent*\n*To Owner @${ownernya.split('@')[0]}*\n_Thank you🙏_`
            await PeaceMd.sendButtonText(m.chat, buttons, akhji, botname, m, {
                mentions: ments,
                quoted: fkontak
            })
        }
        break
        case 'report':
        case 'bug': {
            if (!text) throw `Example : ${prefix + command} Report an error feature`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
            let ments = [ownernya, me]
            let buttons = [{
                buttonId: 'hehehe',
                buttonText: {
                    displayText: '🙏THANKS FOR THE REPORT'
                },
                type: 1
            }]
            await PeaceMd.sendButtonText(ownernya, buttons, pjtxt, botname, m, {
                mentions: ments
            })
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await PeaceMd.sendButtonText(m.chat, buttons, akhji, botname, m, {
                mentions: ments
            })
        }
        break
        case 'creategroup':
            if (!isCreator) return m.reply(mess.owner)
            if (!q) return reply("Enter text")
            const group = await PeaceMd.groupCreate(q, [owner + "@s.whatsapp.net"])
            m.reply(mess.success)
            PeaceMd.sendMessage(group.id, {
                text: 'Halo!!'
            }) // say hello to everyone on the group	
            break
        case 'antilinkyoutubevideo':
        case 'antilinkyoutubevid':
        case 'antilinkytvid': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkYoutubeVid) return m.reply('Already activated')
                ntilinkytvid.push(from)
                fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
                m.reply('Success in turning on youtube video antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
                let off = ntilinkytvid.indexOf(from)
                ntilinkytvid.splice(off, 1)
                fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
                m.reply('Success in turning off youtube video antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinkyoutubech':
        case 'antilinkyoutubechannel':
        case 'antilinkytch': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkYoutubeChannel) return m.reply('Already activated')
                ntilinkytch.push(from)
                fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
                m.reply('Success in turning on youtube channel antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkYoutubeChannel) return m.reply('Already deactivated')
                let off = ntilinkytch.indexOf(from)
                fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
                ntilinkytch.splice(off, 1)
                m.reply('Success in turning off youtube channel antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinkinstagram':
        case 'antilinkig':
        case 'antilinkinsta': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkInstagram) return m.reply('Already activated')
                ntilinkig.push(from)
                fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
                m.reply('Success in turning on instagram antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkInstagram) return m.reply('Already deactivated')
                let off = ntilinkig.indexOf(from)
                ntilinkig.splice(off, 1)
                fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
                m.reply('Success in turning off instagram antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinkfacebook':
        case 'antilinkfb': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkFacebook) return m.reply('Already activated')
                ntilinkfb.push(from)
                fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
                m.reply('Success in turning on facebook antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkFacebook) return m.reply('Already deactivated')
                let off = ntilinkfb.indexOf(from)
                ntilinkfb.splice(off, 1)
                fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
                m.reply('Success in turning off facebook antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinktelegram':
        case 'antilinktg': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkTelegram) return m.reply('Already activated')
                ntilinktg.push(from)
                fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
                m.reply('Success in turning on telegram antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkTelegram) return m.reply('Already deactivated')
                let off = ntilinktg.indexOf(from)
                ntilinktg.splice(off, 1)
                fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
                m.reply('Success in turning off telegram antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinktiktok':
        case 'antilinktt': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkTiktok) return m.reply('Already activated')
                ntilinktt.push(from)
                fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
                m.reply('Success in turning on tiktok antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkTiktok) return m.reply('Already deactivated')
                let off = ntilinktt.indexOf(from)
                ntilinktt.splice(off, 1)
                fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
                m.reply('Success in turning off tiktok antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinktwt':
        case 'antilinktwitter':
        case 'antilinktwit': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkTwitter) return m.reply('Already activated')
                ntilinktwt.push(from)
                fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
                m.reply('Success in turning on twitter antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkTwitter) return m.reply('Already deactivated')
                let off = ntilinktwt.indexOf(from)
                ntilinktwt.splice(off, 1)
                fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
                m.reply('Success in turning off twitter antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinkall': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiLinkTwitter) return m.reply('Already activated')
                ntilinkall.push(from)
                fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
                m.reply('Success in turning on all antilink in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiLinkAll) return m.reply('Already deactivated')
                let off = ntilinkall.indexOf(from)
                ntilinkall.splice(off, 1)
                fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
                m.reply('Success in turning off all antilink in this group')
            } else {
                let buttonsntilink = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antitoxic': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (antiToxic) return m.reply('Already activated')
                nttoxic.push(from)
                fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
                m.reply('Success in turning on antitoxic in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!antiToxic) return m.reply('Already deactivated')
                let off = nttoxic.indexOf(from)
                nttoxic.splice(off, 1)
                fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
                m.reply('Success in turning off antitoxic in this group')
            } else {
                let buttonsnttoxic = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'autoreply': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (Autoreply) return m.reply('Already activated')
                autorep.push(from)
                fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
                m.reply('Success in turning on auto reply in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nAuto reply has been enabled in this group, means bot may send unnecessary voice note!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!Autoreply) return m.reply('Already deactivated')
                let off = autorep.indexOf(from)
                autorep.splice(off, 1)
                fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
                m.reply('Success in turning off auto reply in this group')
            } else {
                let buttonsnttoxic = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antiwame': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (antiWame) return m.reply('Already activated')
                ntwame.push(from)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
                m.reply('Success in turning on antiwame in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!antiWame) return m.reply('Already deactivated')
                let off = nttoxic.indexOf(from)
                ntwame.splice(off, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
                m.reply('Success in turning off antiwame in this group')
            } else {
                let buttonsntwame = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'antilinkgc': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (Antilinkgc) return m.reply('Already activated')
                ntlinkgc.push(from)
                fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
                m.reply('Success in turning on antiwame in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!Antilinkgc) return m.reply('Already deactivated')
                let off = ntlinkgc.indexOf(from)
                ntlinkgc.splice(off, 1)
                fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
                m.reply('Success in turning off antiwame in this group')
            } else {
                let buttonsntwame = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break

        case 'fliptext': {
            if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext ${ownername}`)
            quere = args.join(" ")
            flipe = quere.split('').reverse().join('')
            m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
        }
        break
        case 'toviewonce':
        case 'toonce': {
            if (!quoted) return m.reply(`Reply image`)
            if (/image/.test(mime)) {
                anuoncr2 = await PeaceMd.downloadAndSaveMediaMessage(quoted)
                PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: anuoncr2
                    },
                    viewOnce: true
                }, {
                    quoted: m
                })
            } else if (/video/.test(mime)) {
                anuonce2 = await PeaceMd.downloadAndSaveMediaMessage(quoted)
                PeaceMd.sendMessage(m.chat, {
                    video: {
                        url: anuonce2
                    },
                    viewOnce: true
                }, {
                    quoted: m
                })
            }
        }
        break
        case 'autostickergc':
        case 'autosticker':
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
            if (args[0] === 'on') {
                if (isAutoSticker) return m.reply(`Already activated`)
                autosticker.push(from)
                fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                m.reply('autosticker activated')
            } else if (args[0] === 'off') {
                let anuticker1 = autosticker.indexOf(from)
                autosticker.splice(anuticker1, 1)
                fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                m.reply('auto sticker deactivated')
            }
            break
        case 'antivirus':
        case 'antivirtex': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (antiVirtex) return m.reply('Already activated')
                ntvirtex.push(from)
                fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
                m.reply('Success in turning on antivirus in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!antiVirtex) return m.reply('Already deactivated')
                let off = ntvirtex.indexOf(from)
                ntvirtex.splice(off, 1)
                fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
                m.reply('Success in turning off antivirus this group')
            } else {
                let buttonsntvirtex = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'nsfw': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (args[0] === "on") {
                if (AntiNsfw) return m.reply('Already activated')
                ntnsfw.push(from)
                fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
                m.reply('Success in turning on nsfw in this group')
                var groupe = await PeaceMd.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                PeaceMd.sendMessage(from, {
                    text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
                    contextInfo: {
                        mentionedJid: mems
                    }
                }, {
                    quoted: m
                })
            } else if (args[0] === "off") {
                if (!AntiNsfw) return m.reply('Already deactivated')
                let off = ntnsfw.indexOf(from)
                ntnsfw.splice(off, 1)
                fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
                m.reply('Success in turning off nsfw in this group')
            } else {
                let buttonsntnsfw = [{
                        buttonId: `${command} on`,
                        buttonText: {
                            displayText: 'On'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${command} off`,
                        buttonText: {
                            displayText: 'Off'
                        },
                        type: 1
                    }
                ]
                await PeaceMd.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
            }
        }
        break
        case 'mediafire': {
            const {
                mediafireDl
            } = require('./lib/mediafire.js')
            await mediafireDl(text).then(async (baby1) => {
                if (baby1[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* ' + util.format(baby1))
                const down = await PeaceMd.sendText(m.chat, '*⤵ Downloading mediafire file...*')
                await PeaceMd.sendMessage(m.chat, {
                    delete: down.key
                })
                const upload = await PeaceMd.sendText(m.chat, '*⤴ Uploading your mediafire file...*')

                const result4 = `*MEDIAFIRE DOWNLOADER*	
  	
*Name* : ${baby1[0].nama}	
*Size* : ${baby1[0].size}	
*Mime* : ${baby1[0].mime}	
*Link* : ${baby1[0].link}`
                //reply(`${result4}`)	
                const me = await PeaceMd.sendMessage(m.chat, {
                    document: {
                        url: baby1[0].link
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime
                }, {
                    quoted: m
                }).catch((err) => reply(mess.error))
                await PeaceMd.sendMessage(m.chat, {
                    delete: upload.key
                })
                await PeaceMd.sendMessage(from, {
                    react: {
                        text: `📁`,
                        key: me.key
                    }
                })
            }).catch((err) => reply(NOT_FOUND))

        }
        break

        break
        case 'lyrics': {
            PeaceMd.sendMessage(from, {
                react: {
                    text: `📃`,
                    key: m.key
                }
            })
            if (!text) return reply(`Use example ${prefix}lyrics passa`)
            m.reply(mess.wait)
            const chari = await fetchJson(`https://sinhalasonglyrics.com/?s=${text}&submit=Search`)

            const $ = cheerio.load(response.data);
            const firstResult = $('.entry-title > a').first();
            const songTitle = firstResult.text().trim();
            const songLink = firstResult.attr('href');

            const msg = `
    *🗳️ Title :* ${songTitle}
    
    *📁 LYRICS :*
    ${lyrics}
    
    `
            await PeaceMd.sendText(m.chat, msg)
        }
        break
        case 'lyrics2':
            if (!text) throw `Song name?`
            const findLyrics = require('simple-find-lyrics')
            try {
                const lyrics = await findLyrics(text)
                if (lyrics.lyrics == '') return console.log("it's f up")
                var txt = `	
*${themeemoji} Title :* ${lyrics.title}	
*${themeemoji} Artist :* ${lyrics.artist}	
*${themeemoji} Lyrics :-* \n	
${lyrics.lyrics}`
                console.log(lyrics)
                await PeaceMd.sendMessage(m.chat, {
                    text: txt
                }, {
                    quoted: m
                })
            } catch (err) {
                console.log(err)
            }
            break
        case 'gimage': {
            if (!text) throw `Example : ${prefix + command} kaori cicak`
            xeonezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
            n = xeonezyanu.result
            images = n[Math.floor(Math.random() * n.length)]
            let buttons = [{
                buttonId: `gimage ${text}`,
                buttonText: {
                    displayText: 'Next Image'
                },
                type: 1
            }]
            let buttonMessage = {
                image: {
                    url: images
                },
                caption: `*-------「 GIMAGE SEARCH 」-------*	
${themeemoji} *Query* : ${text}	
${themeemoji} *Media Url* : ${images}`,
                footer: botname,
                buttons: buttons,
                headerType: 4
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, {
                quoted: m
            })
        }
        break
        case 'img':
        case 'image': {
            m.reply(mess.wait)
            let {
                pinterest
            } = require('./lib/scraperW')
            anuxeonezy2 = await pinterest(text)
            resultkkk3 = anuxeonezy2[Math.floor(Math.random() * anuxeonezy2.length)]
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: resultkkk3
                },
                caption: ` ${themeemoji} Media Url : ` + resultkkk3
            }, {
                quoted: m
            })
        }
        break
        case 'swm':
        case 'stickerwm':
        case 'wm':
        case 'take': {
            if (!args.join(" ")) return m.reply(`Example :\nswm ${global.author}|${global.packname}`)
            const swn = args.join(" ")
            const pcknm = swn.split("|")[0];
            const atnm = swn.split("|")[1];
            if (m.quoted.isAcharithted === true) {
                PeaceMd.downloadAndSaveMediaMessage(quoted, "gifee")
                PeaceMd.sendMessage(from, {
                    sticker: fs.readFileSync("gifee.webp")
                }, {
                    quoted: m
                })
            } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await PeaceMd.sendImageAsSticker(m.chat, media, m, {
                    packname: pcknm,
                    author: global.atnm
                })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await PeaceMd.sendVideoAsSticker(m.chat, media, m, {
                    packname: pcknm,
                    author: atnm
                })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
            }
        }
        break
        case 'emoji': {
            if (!args.join(" ")) return m.reply('Where is the emoji?')
            emoji.get(args.join(" ")).then(async (emoji) => {
                let mese = await PeaceMd.sendMessage(m.chat, {
                    image: {
                        url: emoji.images[4].url
                    },
                    caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ`
                }, {
                    quoted: m
                })
                await PeaceMd.sendMessage(from, {
                    text: "reply #s to this image to make sticker"
                }, {
                    quoted: mese
                })
            })
        }
        break
        case 'volume': {
            if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
            media = await PeaceMd.downloadAndSaveMediaMessage(quoted, "volume")
            if (isQuotedAudio) {
                rname = getRandom('.mp3')
                exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply('Error!')
                    jadie = fs.readFileSync(rname)
                    PeaceMd.sendMessage(from, {
                        audio: jadie,
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(rname)
                })
            } else if (isQuotedVideo) {
                rname = getRandom('.mp4')
                exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply('Error!')
                    jadie = fs.readFileSync(rname)
                    PeaceMd.sendMessage(from, {
                        video: jadie,
                        mimetype: 'video/mp4'
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(rname)
                })
            } else {
                m.reply("Send video/audio")
            }
        }
        break

        case 'animewallpaper':
        case 'animewall': {
            if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
            let {
                wallpaper
            } = require('./lib/scraperW')
            anu = await wallpaper(args)
            result = anu[Math.floor(Math.random() * anu.length)]
            let buttons = [{
                buttonId: `.wallpaper ${args.join(" ")}`,
                buttonText: {
                    displayText: 'Next Image'
                },
                type: 1
            }]
            let buttonMessage = {
                image: {
                    url: result.image[0]
                },
                caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, {
                quoted: m
            })
        }
        break




        //chat bot	

        case 'hi': {
            reply(Lang.HI_REP)
        }

        break
        case 'mk': {
            reply(Lang.MK_REP)
        }
        break

        case 'gm':
        case 'morning': {
            reply(Lang.GM_REP)
        }
        break
        case 'gn': {
            reply(Lang.GN_REP)
        }
        break

        case 'ane':
        case 'anee':
        case 'aneee': {
            reply(Lang.ANE_REP)
        }
        break

        case 'pala':
        case 'charith':
        case 'ayya':
        case 'chamrith': {
            reply(Lang.PALA_REP)
        }
        break


        //PeaceMd.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            	
        break
        case 'igemoji':
        case 'instagramemoji':
            if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "11")
            break
        case 'iphoneemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "0")
            break
        case 'googleemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "1")
            break
        case 'samsungemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "2")
            break
        case 'microsoftemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "3")
            break
        case 'whatsappemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "4")
            break
        case 'twitteremoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "5")
            break
        case 'facebookemoji':
        case 'fbemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "6")
            break
        case 'skypeemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "7")
            break
        case 'joyemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "8")
            break
        case 'mojiemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "9")
        case 'pediaemoji':
            if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
            m.reply(mess.wait)
            emote(q, "10")
            break


        case 'patrick':
        case 'patricksticker': {
            var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
            var wifegerak = ano.split('\n')
            var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
            encmedia = await PeaceMd.sendImageAsSticker(from, wifegerakx, m, {
                packname: global.packname,
                author: global.author,
            })
            await fs.unlinkSync(encmedia)
        }
        break
        case 'ttp': {
            if (!text) return m.reply(`*Example : ${prefix + command} peace*`)
            await PeaceMd.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {
                asSticker: true
            })

        }
        break
        case 'dogesticker':
        case 'dogestick':
        case 'doge': {
            var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
            var wifegerak = ano.split('\n')
            var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
            encmedia = await PeaceMd.sendImageAsSticker(from, wifegerakx, m, {
                packname: global.packname,
                author: global.author,
            })
            await fs.unlinkSync(encmedia)
        }
        break
        case 'lovesticker':
        case 'lovestick': {
            var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
            var wifegerak = ano.split('\n')
            var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
            encmedia = await PeaceMd.sendImageAsSticker(from, wifegerakx, m, {
                packname: global.packname,
                author: global.author,
            })
            await fs.unlinkSync(encmedia)
        }
        break
        case 'gura':
        case 'gurastick': {
            var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
            var wifegerak = ano.split('\n')
            var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
            encmedia = await PeaceMd.sendImageAsSticker(from, wifegerakx, m, {
                packname: global.packname,
                author: global.author,
            })
            await fs.unlinkSync(encmedia)
        }
        break

        case 'id': {
            m.reply(from)
        }
        break
        case 'toqr': {
            if (!q) return m.reply(' Please include link or text!')
            let qyuer = await qrcode.toDataURL(q, {
                scale: 35
            })
            let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
            let buff = getRandom('.jpg')
            await fs.writeFileSync('./' + buff, data)
            let medi = fs.readFileSync('./' + buff)
            await PeaceMd.sendMessage(from, {
                image: medi,
                caption: Lang.MESS_WAIT
            }, {
                quoted: m
            })
            setTimeout(() => {
                fs.unlinkSync(buff)
            }, 10000)
        }
        break
        case 'ig':
        case 'instagram':
        case 'reels': { //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko	
            if (args.length === 0) throw `Where is the link?\nSend ${prefix + command} url`
            let urlInsta = args[0];
            if (!(urlInsta.includes("instagram.com/p/") ||
                    urlInsta.includes("instagram.com/reel/") ||
                    urlInsta.includes("instagram.com/tv/")))
                return PeaceMd.sendMessage(
                    m.chat, {
                        text: `The link you provided is not a instagram link`
                    }, {
                        quoted: m
                    }
                );
            if (urlInsta.includes("?"))
                urlInsta = urlInsta.split("/?")[0];
            console.log(urlInsta);
            ig.fetchPost(urlInsta).then((res) => {
                if (res.media_count == 1) {
                    if (res.links[0].type == "video") {
                        PeaceMd.sendMessage(
                            m.chat, {
                                video: {
                                    url: res.links[0].url
                                }
                            }, {
                                quoted: m
                            }
                        )
                    } else if (res.links[0].type == "image") {
                        PeaceMd.sendMessage(
                            m.chat, {
                                image: {
                                    url: res.links[0].url
                                }
                            }, {
                                quoted: m
                            }
                        )
                    }
                } else if (res.media_count > 1) {
                    for (let i = 0; i < res.media_count; i++) {
                        if (res.links[i].type == "video") {
                            PeaceMd.sendMessage(
                                m.chat, {
                                    video: {
                                        url: res.links[i].url
                                    }
                                }, {
                                    quoted: m
                                }
                            )
                        } else if (res.links[i].type == "image") {
                            PeaceMd.sendMessage(
                                m.chat, {
                                    image: {
                                        url: res.links[i].url
                                    }
                                }, {
                                    quoted: m
                                }
                            )
                        }
                    }
                }
            }).catch((error) => {
                console.log(error);
                PeaceMd.sendMessage(m.chat, {
                    text: `Must be private or unavailable`
                }, {
                    quoted: m
                })
            });
        }
        break
        case 'spotify': //credit: Ray Senpai❤️ https://github.com/EternityBots/Nezuko	
            if (!text) return m.reply(`Where is the link?`)
            const Spotify = require('./lib/spotify')
            const spotify = new Spotify(text)
            const info = await spotify.getInfo()
            if ((info).error) throw `The link you provided is not spotify link`
            const {
                name, artists, album_name, release_date, cover_url
            } = info
            const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(	
            ','	
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
            const response = await PeaceMd.sendMessage(m.chat, {
                image: {
                    url: cover_url
                },
                caption: details
            }, {
                quoted: m
            })
            const bufferpotify = await spotify.download()
            await PeaceMd.sendMessage(m.chat, {
                audio: bufferpotify
            }, {
                quoted: response
            })
            break
        case 'reddit': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko	
            if (!text) throw `Where is the subreddit name?`
            const RedditImageFetcher = require("reddit-image-fetcher")
            RedditImageFetcher.fetch({
                    type: 'custom',
                    total: 1,
                    addSubreddit: text,
                }).then(result => {
                    console.log(result);
                    let akusingle = result[0]
                    PeaceMd.sendMessage(m.chat, {
                        image: {
                            url: akusingle.image
                        }
                    }, {
                        quoted: m
                    })
                })
                .catch(err => {
                    m.reply("Not found!")
                })
            break
        case 'define': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko	
            if (!q) throw `What do you want to define?`
            try {
                targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
                if (!targetfine) throw mess.error
                const reply = `	
*${themeemoji} Word:* ${q}	
*${themeemoji} Definition:* ${targetfine.data.list[0].definition	
    .replace(/\[/g, "")	
    .replace(/\]/g, "")}	
*${themeemoji} Example:* ${targetfine.data.list[0].example	
    .replace(/\[/g, "")	
    .replace(/\]/g, "")}`
                PeaceMd.sendMessage(m.chat, {
                    text: reply
                }, {
                    quoted: m
                })
            } catch (err) {
                console.log(err)
                return m.reply(`*${q}* isn't a valid text`)
            }
            break

        case 'quotes':
            const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
            const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
            return m.reply(textquotes)
            break
        case 'resetlinkgc':
        case 'resetlinkgroup':
        case 'resetlinkgrup':
        case 'revoke':
        case 'resetlink':
        case 'resetgrouplink':
        case 'resetgclink':
        case 'resetgruplink': {
            if (!m.isGroup) return m.reply(Lang.NOT_GC)
            if (!isBotAdmins) return m.reply(Lang.BOT_ADMIN)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            PeaceMd.groupRevokeInvite(m.chat)
        }
        break
        case 'imdb':
            if (!text) return m.reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
            PeaceMd.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
        case 'weather':
            if (!text) return m.reply('💭 .weather matale')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

            PeaceMd.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
            )
            break
        case 'horoscope':
            if (!text) return m.reply('What sign?')
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date
                        console.log(date)
                        let textw = ""
                        textw += `*👁️ Horoscope of  ${text}*\n\n`
                        textw += `*Current Date:* ${json.current_date}.\n`
                        textw += `*Sign:* ${text}.\n`
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`
                        textw += `*Compatibility:* ${json.compatibility}.\n`
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`
                        textw += `*Lucky Color:* ${json.color}.\n`
                        textw += `*Today Mood:* ${json.mood}.\n`
                        textw += `*Overall:* ${json.description}.\n`
                        m.reply(textw)
                    })

            } catch (e) {
                console.log(e)
            }
            break
        case 'wanumber':
        case 'searchno':
        case 'searchnumber':
            var inputnumber = text.split(" ")[0]
            if (!inputnumber.includes('x')) return m.reply(`You did not add xx\nExample: ${prefix + command} 9169091372xx`)
            m.reply(`Searching for WhatsApp account in given range...`)

            function countInstances(string, word) {
                return string.split(word).length - 1
            }
            var number0 = inputnumber.split('x')[0]
            var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
            var random_length = countInstances(inputnumber, 'x')
            var randomxx
            if (random_length == 1) {
                randomxx = 10
            } else if (random_length == 2) {
                randomxx = 100
            } else if (random_length == 3) {
                randomxx = 1000
            }
            var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
            var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
            var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
            for (let i = 0; i < randomxx; i++) {
                var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                var status1 = nu[Math.floor(Math.random() * nu.length)]
                var status2 = nu[Math.floor(Math.random() * nu.length)]
                var status3 = nu[Math.floor(Math.random() * nu.length)]
                var dom4 = nu[Math.floor(Math.random() * nu.length)]
                var random21
                if (random_length == 1) {
                    random21 = `${status1}`
                } else if (random_length == 2) {
                    random21 = `${status1}${status2}`
                } else if (random_length == 3) {
                    random21 = `${status1}${status2}${status3}`
                } else if (random_length == 4) {
                    random21 = `${status1}${status2}${status3}${dom4}`
                }
                var anu = await PeaceMd.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
                var anuu = anu.length !== 0 ? anu : false
                try {
                    try {
                        var anu1 = await PeaceMd.fetchStatus(anu[0].jid)
                    } catch {
                        var anu1 = '401'
                    }
                    if (anu1 == '401' || anu1.status.length == 0) {
                        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                    } else {
                        text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Colombo').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                    }
                } catch {
                    nowhatsapp += `${number0}${i}${number1}\n`
                }
            }
            m.reply(`${text66}${nobio}${nowhatsapp}`)
            break


            //wamod	
        case 'wamod':
        case 'whatsapp': {
            PeaceMd.sendMessage(from, {
                react: {
                    text: `🪀`,
                    key: m.key
                }
            })
            const uplode = await PeaceMd.sendText(m.chat, `PEACE MD Searching Whatsapp Mods...`, m, )
            let anu = await fetchJson('https://raw.githubusercontent.com/CharithPramodyaSenanayake/peacy/main/Whatsapp%20Mods/whatsappmod.json')
            const sections = [{
                title: "Please Select Mod🪀",
                rows: [{
                        title: `RDX WhatsApp V32 🪀`,
                        rowId: `oggfjjffrhg`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    },
                    {
                        title: `RDX WhatsApp V33 🪀`,
                        rowId: `bwghjjyjj`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    },
                    {
                        title: `RDX WhatsApp V29`,
                        rowId: `fmrhkuul`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    },
                    {
                        title: `RDX WhatsApp V27`,
                        rowId: `gbwhadhfjjtr`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    },
                    {
                        title: `RDX WhatsApp V30`,
                        rowId: `yosfhkulil`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    },
                    {
                        title: `Yo WhatsApp Unlock 🪀`,
                        rowId: `dahykuilil`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    },
                    {
                        title: `FM WhatsApp Only Antivirus 🪀`,
                        rowId: `aptytuui7`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    },
                    {
                        title: `Aps Normal Theme Whatsapp 🪀`,
                        rowId: `ayhtuyiyiy`,
                        description: `ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ᴘᴇᴀᴄᴇ ᴍᴅ`
                    }

                ]
            }, ]

            const listMessage = {
                text: "Please Select Mod🙊\n\n_Whatsapp Mod ගණන🙊 : 8_",
                footer: "ᴘᴇᴀᴄᴇ ᴍᴅ",
                buttonText: "Select Mod",
                sections
            }

            const me = await PeaceMd.sendMessage(m.chat, listMessage, m, )
        }
        break

        //------------Orginal Whatsapp------------//	

        case 'oggfjjffrhg': {
            let apk = 'https://download2301.mediafire.com/9k4vmrwcfgzgHXK9ZTpA5MPo-Zrf_aeGS8UCQFRvAWT-sIXAs7GRHNZSV5Li8gllg3RMSb4SArWosLC91-3gbBz-BK0/4btgeoy3mw5ibwj/Orginal+Wa+By+Vihanga+MD.apk'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk
                },
                mimetype: 'application/octet-stream',
                fileName: `WhatsApp.apk`
            }, {
                quoted: m
            })
        }
        break

        //------------Bissnuss Whatsapp------------//		

        case 'bwghjjyjj': {
            let apk = 'https://download1085.mediafire.com/uroewxfn4hbghhE-LVT2UKS48dFk0-9mtDXoh_qkAllL3mg_1oo1X_TYWe7pg_mzEgXIl1hFi_OXn8y2hOQeXygcgGw/slm9xkv1ubf4u2u/Wa+Business+By+Vihanga+MD.apk'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk
                },
                mimetype: 'application/octet-stream',
                fileName: `Bissnuss WhatsApp.apk`
            }, {
                quoted: m
            })
        }
        break

        //------------Fm Whatsapp------------//					

        case 'fmrhkuul': {
            let apk = 'https://download2356.mediafire.com/eyesnhh6iabgG6ZEe3O9BODr0ERrrFNj3J60_G3L9ZsXA6PPeUYSZ93ttQqQY1JVjlqGbmJGJwNu8A7enzsvDZzH458/g7o9igrn3cozwg3/Fm+Wa+By+Vihanga+MD.apk'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk
                },
                mimetype: 'application/octet-stream',
                fileName: `FMWhatsApp.apk`
            }, {
                quoted: m
            })
        }
        break

        //------------Gb Whatsapp------------//				

        case 'gbwhadhfjjtr': {
            let apk = 'https://download2271.mediafire.com/jk6fhbd86jcgttxSSd9tcqiY05HAK1Z0cghTDd7SP2HgdTo5rvTdXe3ftrQwW9mci61yvg2zpz7cfuDw9FGWWpmGz_Q/i4az6d9d11me9rl/Gb+Wa+By+Vihanga+MD.apk'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk
                },
                mimetype: 'application/octet-stream',
                fileName: `GBWhatsApp.apk`
            }, {
                quoted: m
            })
        }
        break

        //------------Yo Whatsapp------------//				

        case 'yosfhkulil': {
            let apk = 'https://download2391.mediafire.com/tljnhbsyxregcoyJH7h472sdDUnIcPgkw-g1vJQOTwI0x_FdGtCeFBhjLGkmXLu-GNTvtTE97S5Dlzb5yZb6AhP66LY/tmnatbpznbd8f4t/Yo+Wa+By+Vihanga+MD.apk'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk
                },
                mimetype: 'application/octet-stream',
                fileName: `YOWhatsApp.apk`
            }, {
                quoted: m
            })
        }
        break

        //------------Dark Alpha v25 Anti Virus Whatsapp------------//				

        case 'dahykuilil': {
            let zip = 'https://download1324.mediafire.com/zy6ndnyx8uhgfKz_KRuAL1BiBMFLi0pFTXpvYUZXEK-CiZvhFAfWdltinLXyKUanNfZMh72lIWOPRWsWOBFEK36Ru48/31z8bnzz5lz7f3v/%E2%97%84%CD%A2%E0%BD%B2%E1%B3%80%CA%99%CA%9F%E1%B4%80%E1%B4%84%E1%B4%8B+-%E1%B4%80%CA%9F%E1%B4%A9%CA%9C%E1%B4%80+%E1%B4%A035%C2%B0%E1%AD%84%E2%96%B8%CD%A6%F0%9F%8D%83_2.22.10.73_r.zip'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: zip
                },
                mimetype: 'application/octet-stream',
                fileName: `Dark Alpha v25 Anti Virus Whatsapp.zip`
            }, {
                quoted: m
            })
        }
        break

        //------------Aps Neon Gray Whatsapp------------//					

        case 'aptytuui7': {
            let apk = 'https://download1506.mediafire.com/2hyzib3zmxrg3Mg9C3TNzE-dJJU4kJmJYfWmNJPzutP2O-knj_zvJ8mmRjcmnV_04Y3QBJHdOQP8T884eKKBA2a86cI/yftiamsvl90nnec/%5Bneon+gray%5D+%E2%9A%B6APS+WA+V.XV.apk'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk
                },
                mimetype: 'application/octet-stream',
                fileName: `Aps Neon Gray Whatsapp.apk`
            }, {
                quoted: m
            })
        }
        break


        //------------Aps Normal Theem Whatsapp------------//				

        case 'ayhtuyiyiy': {
            let apk = 'https://download1512.mediafire.com/6f1t14z246vgAq3GxfRP76rIkv578607P8BHP_pcQCVdIizjEtTU75jhQ7mRtIGAUMboSlqPVMKjZOJ7adzqvDc8drk/ajcq9gyzw3vm56e/%5Bnormal+theme%5D+%E2%9A%B6APS+WA+V.XV.apk'
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk
                },
                mimetype: 'application/octet-stream',
                fileName: `Aps Normal Theem Whatsapp.apk`
            }, {
                quoted: m
            })
        }
        break
        //img	

        case 'peacepic': {

            if (!text) return reply(`💭 ${m.pushName} Give Some search \n_ Example : ${prefix}peacepic Gajaman_`)
            await PeaceMd.sendText(m.chat, mess.wait)
            await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
                .then(async (charith) => {
                    const imagee1 = charith.result[0].url
                    const imagee2 = charith.result[1].url
                    const imagee3 = charith.result[2].url
                    const imagee4 = charith.result[3].url
                    const imagee5 = charith.result[4].url
                    await PeaceMd.sendMessage(m.chat, {
                        image: {
                            url: imagee1
                        },
                        caption: 'ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ'
                    }, {
                        quoted: m
                    })
                    await PeaceMd.sendMessage(m.chat, {
                        image: {
                            url: imagee2
                        },
                        caption: 'ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ'
                    }, {
                        quoted: m
                    })
                    await PeaceMd.sendMessage(m.chat, {
                        image: {
                            url: imagee3
                        },
                        caption: 'ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ'
                    }, {
                        quoted: m
                    })
                    await PeaceMd.sendMessage(m.chat, {
                        image: {
                            url: imagee4
                        },
                        caption: 'ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ'
                    }, {
                        quoted: m
                    })
                    await PeaceMd.sendMessage(m.chat, {
                        image: {
                            url: imagee5
                        },
                        caption: 'ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ'
                    }, {
                        quoted: m
                    })
                    await PeaceMd.sendMessage(m.chat, {
                        delete: load.key
                    })

                }).catch((err) => reply('not found'))

            //reply('not setted')	
        }
        break

        //modapk	
        case 'modapk': {
            await PeaceMd.sendText(m.chat, mess.wait)
            await fetchJson(`https://api.akuari.my.id/search/searchmod?query=${text}`)
                .then(async (charith) => {
                    const search = charith.respon
                    let sections = []
                    for (let i of search) {
                        const list = {
                            title: `SELECT YOUR MOD APP`,
                            rows: [{
                                title: `${i.title}`,
                                rowId: `modapkdl ${i.link} ${i.title}`,
                                description: `➮ Version ${i.version}`
                            }, ]
                        }
                        sections.push(list)
                    }
                    const sendm = PeaceMd.sendMessage(
                        m.chat, {
                            text: `${m.pushName} This is matching apk\n\n➮ ʀᴇǫᴜᴇsᴛ ${text}`,
                            footer: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                            title: "PEACE MD MOD APK",
                            buttonText: "DOWNLOAD MOD APK",
                            sections
                        }, {
                            quoted: m
                        })
                }).catch((err) => m.reply(NOT_FOUND))
        }
        break

        /*case 'apk': {

            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🧰`,
                    key: m.key
                }
            })
            if (!text) return reply('*💭 Please give plastore app name*')
            await PeaceMd.sendText(m.chat, mess.wait)
            await fetchJson(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
                .then(async (charith) => {
                    const caption = ` 
━━━━━━━━━━━━━━━━━
    PEACE MD APK DOWNLOADER
━━━━━━━━━━━━━━━━━
🔰 ᴛɪᴛᴛʟᴇ : ${charith.hasil[0].title}

📦 ᴘᴀᴄᴋᴀɢᴇ ɴᴀᴍᴇ : ${charith.hasil[0].appId}

👨‍💻 ᴅᴇᴠᴇʟᴏᴘᴇʀ : ${charith.hasil[0].developer}

🌟 ʀᴀᴛᴇ : ${charith.hasil[0].scoreText}

📃 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${charith.hasil[0].summary}

🌐 ᴜʀʟ : ${charith.hasil[0].url} 
`

                    const buttons = [{
                            buttonId: `getapk ${charith.hasil[0].url}`,
                            buttonText: {
                                displayText: '🗳️ DOWNLOAD APK 🗳️'
                            },
                            type: 1
                        },

                    ]
                    const buttonMessage = {
                        image: {
                            url: charith.hasil[0].icon
                        },
                        caption: caption,
                        footer: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        buttons: buttons,
                        headerType: 4
                    }

                    await PeaceMd.sendMessage(m.chat, buttonMessage, {
                        quoted: m
                    })
                }).catch((err) => m.reply('NOT_FOUND'))
        }
        break*/
case 'apktest': {
    if (!text) throw `⚠️️ *_Ingrese el nombre de la aplicación de Play Store que desea descargar._*`
    try {
    let res = await fetch(`https://api.akuari.my.id/downloader/apkdownloader?query=${text}`)
    let json = await res.json()
    let { version, updated, developer, id, requirements, installed } = json.info
    let pp = await (await fetch('https://telegra.ph/file/e867ad919a98764a4d719.jpg')).buffer()
    let info = `*🎋 • Versión:* ${version}\n*🗓️ • Actualización:* ${updated}\n*👨🏻‍💻 • Desarrollador:* ${developer}\n*ℹ️ • ID:* ${id}\n*📱 • Android:* ${requirements}\n*📈 • Instalada:* ${installed}`
    await conn.sendNyanCat(m.chat, `${info}\n\nහිටු...`, pp, `• Downloader Play Store🥗`, me, script, m)
    
conn.sendMessage(m.chat, { document: { url: `${json.apkdownload}` }, mimetype: 'application/videos.android.package-archive', fileName: `${text}.apk` }, { quoted: m })
} catch { m.reply('⚠️ *_Resultados no encontrados._*') }
}

        /*case 'getapk': {
            if (!text.includes('https://play.google.com/')) return reply('*💭 Please give me a correct link*\n _.getapk https://play.google.com/store/apps/details?id=com.whatsapp_')
            await PeaceMd.sendMessage(from, {
                text: `*📥 Downloading Playstore apk...*`
            }, {
                quoted: m
            })
            //await getBuffer(`https://api.akuari.my.id/downloader/apkdownloader2?package=${text}`)
            //const kkkkh = await fetchJson(`https://api.akuari.my.id/search/playstoresearch?query=${text}
            //const name = `${args[0].split('https://play.google.com/store/apps/details?id=')[1]}`
            //.then(async (charith) => {
            const apk = await fetchJson(`https://api.akuari.my.id/downloader/apkdownloader2?package=${text}`)
            await PeaceMd.sendMessage(from, {
                text: `*📤 Uploading playstore apk...*`
            }, {
                quoted: m
            })
            //https://telegra.ph/file/5c59cd0f4c3e3fa79ee77.jpg
            //const buffer = await getBuffer(charith.respon.downloadapk)

            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: apk.respon.downloadapk
                },
                mimetype: 'application/vnd.android.package-archive',
                fileName: `${text}`
            }, {
                quoted: m
            })
            //}).catch((err) => m.reply(NOT_FOUND))

        }
        break*/


        case 'news': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🗞️`,
                    key: m.key
                }
            })
            const news = await fetchJson(`https://api.sdbots.tk/hirunews`)
            const cap = `
 *🏷️ Title* ${news.title}

 *⏰ Time* _${news.date}_

 *📄️ Description*\n
 ${news.description}
 `

            const templateMessage = {
                image: {
                    url: news.img
                },
                caption: '━━━━━━━━━━━━━━━━━━━━━━━━━\n               PEACE MD NEWS\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' + cap,
                footer: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                headerType: 4
            }

            await PeaceMd.sendMessage(m.chat, templateMessage, {
                quoted: m
            })

            // await PeaceMd.sendMessage(m.chat, { image: { url : news.img} , caption : cap }, { quoted: m })
        }
        break


        case 'ehi': {
            await PeaceMd.sendMessage(from, {
                react: {
                    text: `🗂️`,
                    key: m.key
                }
            })
            const ehiup = await PeaceMd.sendText(m.chat, `${m.pushName}, PEACE MD Uploading EHI files...`)

            let ehi1 = 'https://github.com/CharithPramodyaSenanayake/peacy/blob/main/EHI/FB.ehi'
            let ehi2 = 'https://github.com/CharithPramodyaSenanayake/peacy/blob/main/EHI/WA.ehi'
            let ehi3 = 'https://github.com/CharithPramodyaSenanayake/peacy/blob/main/EHI/YT.ehi'
            let ehi4 = 'https://github.com/CharithPramodyaSenanayake/peacy/blob/main/EHI/ZM.ehi'


            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: ehi1
                },
                mimetype: 'application/octet-stream',
                fileName: `✌ FACEBOOK ✌.ehi`
            }, {
                quoted: m
            })
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: ehi2
                },
                mimetype: 'application/octet-stream',
                fileName: `✌ WHATSAPP ✌.ehi`
            }, {
                quoted: m
            })
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: ehi3
                },
                mimetype: 'application/octet-stream',
                fileName: `✌ YOUTUBE ✌.ehi`
            }, {
                quoted: m
            })
            await PeaceMd.sendMessage(m.chat, {
                document: {
                    url: ehi4
                },
                mimetype: 'application/octet-stream',
                fileName: `✌ ZOOM ✌.ehi`
            }, {
                quoted: m
            })

            await PeaceMd.sendMessage(from, {
                delete: ehiup.key
            })
        }
        break


        //react	
        case '✌': {
            PeaceMd.sendMessage(from, {
                react: {
                    text: `✌`,
                    key: m.key
                }
            })
        }
        break

        //fb	
        case 'fb':
            try {
                PeaceMd.sendMessage(m.chat, {
                    react: {
                        text: '🧼',
                        key: m.key
                    }
                })
                if (!text) return reply(`Example : ${prefix + command} link`)

                const sdfbdown = await PeaceMd.sendMessage(m.chat, {
                    text: 'PEACE MD Uploading'
                }, {
                    quoted: m
                })
                await PeaceMd.sendMessage(m.chat, {
                    delete: sdfbdown.key
                })
                const sdfbup = await PeaceMd.sendMessage(m.chat, {
                    text: 'PEACE MD Uploading'
                }, {
                    quoted: m
                })
                let host = `https://api.akuari.my.id/downloader/fbdl?link=${text}`;
                axios.get(host)
                    .then(({
                        data
                    }) => {
                        PeaceMd.sendMessage(m.chat, {
                            video: {
                                url: data.url.url
                            },
                            caption: 'ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ'
                        }, {
                            quoted: m
                        })
                    })
                await PeaceMd.sendMessage(m.chat, {
                    delete: sdfbup.key
                })
            } catch (e) {
                await PeaceMd.sendMessage(m.chat, {
                    text: 'NOT FOUND'
                }, {
                    quoted: m
                })
            }
            break



            //------------------------The End----------------------\\	

        case 'tqtt':
            throw `💓Thanks To💓	
┆
┆Me (Charith Pramodya Senanayake)
┆My family
┆And all friends who helped asdemble this sexy script.!!	
┆
┆ 💝Thank you for helping us💝`
            break

        case 'tgsticker': {

            if (!text) return reply('💭 Please give me a telegram sticker pack link')
            if (!text.includes('https://t.me/addstickers')) return reply('*💭 Please give me a correct link*\n _.tgsticker <Sticker pack link>')
            //if (!isUrl(args[0]) && !args[0].includes('https://t.me/addstickers')) throw '*The link you provided is not valid*'                
            await PeaceMd.sendText(m.chat, '*PEACE BUDDY...*')
            await fetchJson(`https://api.zahwazein.xyz/downloader/telesticker?apikey=bbe8d5b68a58&url=${text}`)
                .then(async (sticker) => {
                    //  await PeaceMd.sendText(m.chat, util.format(sticker))
                    const stik = sticker.result
                    const img = stik[1].url
                    const img2 = stik[2].url
                    const img3 = stik[3].url
                    const img4 = stik[4].url
                    const img5 = stik[5].url
                    const img6 = stik[6].url
                    const img7 = stik[7].url
                    const img8 = stik[8].url
                    const img9 = stik[9].url
                    const img10 = stik[10].url
                    const img11 = stik[11].url
                    const img12 = stik[12].url
                    const img13 = stik[13].url
                    const img14 = stik[14].url
                    const img15 = stik[15].url

                    //await PeaceMd.sendMessage(m.chat ,{ sticker : { url : img }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
                    await PeaceMd.sendImageAsSticker(m.chat, img, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img2, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img3, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img4, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img5, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img6, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img7, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img8, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img9, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img10, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img11, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img12, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img13, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img14, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                    await PeaceMd.sendImageAsSticker(m.chat, img15, m, {
                        packname: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        author: 'ʙʏ ᴄʜᴀʀɪᴛʜ'
                    })
                }).catch((err) => m.reply('*මෙම telegram sticker Download කල නොහැක !!!*'))

        }
        break

        case 'developer':
        case 'dev': {
            reply(`━━━━━━━━━━━━━━━━\n         PEACE MD DEVELOPER\n━━━━━━━━━━━━━━━━\n\nッ Charith Pramodya Senanayake\nッ Matale / Pallepola\nッ 💙💛❤️\nッ +16\nッ July / 29\nッ wa.me/94712448370`)
        }
        break
        case 'owner':
        case 'creator':
        case 'moderator':
        case 'mod': {
            PeaceMd.sendContact(m.chat, owner, m)
        }
        break

        case 'alive': {
            PeaceMd.sendMessage(from, {
                react: {
                    text: `✌`,
                    key: m.key
                }
            })
            let buttons = [{
                    buttonId: `list`,
                    buttonText: {
                        displayText: 'MENU'
                    },
                    type: 1
                },
                {
                    buttonId: `ping`,
                    buttonText: {
                        displayText: 'SPEED'
                    },
                    type: 1
                },
            ]
            let buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `${global.alivemsg}`,
                footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
                buttons: buttons,
                headerType: 4,
            }
            PeaceMd.sendMessage(m.chat, buttonMessage, {
                quoted: m
            })
        }
        break


        case 'psxxx': {
                                   
            if (!text) throw ` ${prefix + command} mia kalifa`
            await PeaceMd.sendMessage(from, { react: { text: `🍑`, key: m.key }})
            await fetchJson(`https://api.zahwazein.xyz/searching/xnxx?apikey=bbe8d5b68a58&query=${text}`)
            .then(async (charith) => {
                const search = charith.respon
                let sections = []
                for (let i of search) {
                    const list = {
                        title: `SELECT YOUR MOD APP`,
                        rows: [{
                            title: `${no++} > ${i.title}`,
                            rowId: `downxnxx ${i.link}`,
                            description: `\n➠ Title ${i.title}
                            ➠ duration ${i.duration}`
                        }, ]
                    }
                    sections.push(list)
                }
                const sendm = PeaceMd.sendMessage(
                    m.chat, {
                        text: `${m.pushName} This is matching apk\n\n➮ ʀᴇǫᴜᴇsᴛ ${text}`,
                        footer: 'ᴘᴇᴀᴄᴇ ᴍᴅ',
                        title: "PEACE MD MOD APK",
                        buttonText: "DOWNLOAD MOD APK",
                        sections
                    }, {
                        quoted: m
                    })
            }).catch((err) => m.reply('NOT_FOUND'))
    }
    break

case 'xnxx': {
                                   
    await PeaceMd.sendMessage(from, { react: { text: `🍑`, key: m.key }})
    if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} story wa anime`
    
    let search = await fetchJson(`https://api.zahwazein.xyz/searching/xnxx?apikey=bbe8d5b68a58&query=${text}`)
    let teks = '*🎭 XNXX RESULTS 🎭* '+text+'\n\n'
    let no = 1
    for (let i of search) {
        teks += `🔵 No : ${no++}\n👽 title - ${i.title}\n🔄 Duration : ${i.duration}\n 🤤 URL - ${i.link}\n\n─────────────────\n\n`
    }
    PeaceMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/023d7602dcf73bd2638a6.jpg' },  caption: teks }, { quoted: m })
}
break
case 'downxnxx' : {
 await PeaceMd.sendMessage(from, { react: { text: `🤤`, key: m.key }})
 await PeaceMd.sendText(m.chat, `*🔄 Please wait Downloading Xnxx Video ${m.pushName}...*`, m, )
 const vid = await axios.get(`https://api.zahwazein.xyz/searching/xnxx?apikey=bbe8d5b68a58&query=${text}`)
 const video = vid.result.url
 const image = vid.result.thumb
 
 await PeaceMd.sendMessage(m.chat, { image: { url: image },  caption: `┌       *༺ 📥  𝚇𝙽𝚇𝚇 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁  📥 ༻*
 
 
│ *📡 ᴛɪᴛʟᴇ* : ${vid.result.title}

│  *📽️ ᴅᴜʀᴀᴛɪᴏɴ :* ${vid.result.duration}

│ *💥 ǫᴜᴀʟɪᴛʏ :* ${vid.result.quality}

│ *👁 ᴠɪᴇᴡs :* ${vid.result.views}

└───────────❍` })
 await PeaceMd.sendMessage(m.chat, { video: { url: video }, caption: `*💥 SUCCESS DOWNLOAD XNXX VIDEO 💥*` }, { quoted: m })
 
}
break

        case 'list':
        case 'menu':
        case 'මෙනු':
        case 'peace': {
            PeaceMd.sendMessage(from, {
                react: {
                    text: `📃`,
                    key: m.key
                }
            })
            const sections = [{
                    "title": "📃 PEACE MD MENU 📃",
                    "rows": [

                        {
                            "title": "Primary Commands",
                            "description": "Main commands Of PEACE MD(Any user allowed)",
                            "rowId": `${prefix}mainmenu`
                        },
                        {
                            "title": "Download Commands",
                            "description": "Media downloading command Of PEACE MD",
                            "rowId": `${prefix}downmenu`
                        },
                        {
                            "title": "Logo Commands",
                            "description": "Logo making commands.",
                            "rowId": `${prefix}logomenu`
                        },
                        {
                            "title": "Other Commands",
                            "description": "Tools and other commands",
                            "rowId": `${prefix}othermenu`
                        }


                    ]
                },
                {
                    "title": "Credits",
                    "rows": [{
                        "title": "Thanks To ❤️",
                        "description": "Credit Of PEACE MD !!",
                        "rowId": `${prefix}tqtt`
                    }]
                }
            ]
            const listMessage = {
                text: "📃 PEACE MD MENU LIST\n_Commands are classified into 5 categories_\n\n```📃 Primary Commands\n💭 Main commands.(Any user allowed)\n\n📃 Download Commands\n💭 Media downloading commands.\n\n📃 Logo Commands\n💭 Logo making commands.\n\n📃 Other Commands\n💭 Tools and other commands\n\n📃 Profile Commands\n💭 Bot settings and bot WhatsApp profile related commands.```\n\n👇 _Please choose a command category and get the command list._",
                footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
                title: `✌ PEACE BUDDY`,
                buttonText: "Menu",
                sections
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, listMessage)
        }
        break

        case 'mainmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '👨‍💻 DEVELOPER 👩‍💻'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '😋 OWNER 😋'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `
━━━━━━━━━━━━━━━━
        PEACE MD MAIN MENU
━━━━━━━━━━━━━━━━

📃 ${prefix}self	
💭 Desc : To make the bot private usage	
✏️ Eg :${prefix}self	
━━━━━━━━━━━━━━━━━

📃 ${prefix}public 	
💭 Desc : To make the bot public usage	
✏️ Eg :${prefix}public 	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}join	
💭 Desc : To join a group	
✏️ Eg :${prefix}join [group link]	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}leavegc	
💭 Desc : To leave a group 	
✏️ Eg :${prefix}Leavegc	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}setbio	
💭 Desc : To change about of your number 	
✏️ Eg :${prefix}setbio Hey there I am PEACE MD	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}bctext	
💭 Desc : To broadcast a text	
✏️ Eg :${prefix}bctext Hello	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}bcimage	
💭 Desc : To broadcast a image	
✏️ Eg :${prefix} bcimage [image]	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}bcvideo	
💭 Desc : To broadcast a video 	
✏️ Eg :${prefix}bcvideo	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}setbotpp	
💭 Desc : To change profile picture of your number 	
✏️ Eg :${prefix}setbotpp [image]	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}setthumb	
💭 Desc : To change bot thumb image	
✏️ Eg :${prefix}setthumb [image]	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}setexif	
💭 Desc : To change sticker making packname and author	
✏️ Eg :${prefix}setexif darknero|darknero	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}creategroup 	
💭 Desc : To create a group 	
✏️ Eg :${prefix}creategroup [group name]	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}block	
💭 Desc : To block a user	
✏️ Eg :${prefix}block [user]	
━━━━━━━━━━━━━━━━━	

📃 ${prefix}unblock 	
💭 Desc : To unblock a user	
✏️ Eg :${prefix}unblock [user]	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break



        case 'ownermenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '👨‍💻 DEVELOPER 👩‍💻'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '😋 OWNER 😋'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ OWNER MENU	
📃 ${prefix}self	
💭 Desc : To make the bot private usage	
✏️ Eg :${prefix}self	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}public 	
💭 Desc : To make the bot public usage	
✏️ Eg :${prefix}public 	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}join	
💭 Desc : To join a group	
✏️ Eg :${prefix}join [group link]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}leavegc	
💭 Desc : To leave a group 	
✏️ Eg :${prefix}Leavegc	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}setbio	
💭 Desc : To change about of your number 	
✏️ Eg :${prefix}setbio Hey there I am PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}bctext	
💭 Desc : To broadcast a text	
✏️ Eg :${prefix}bctext Hello	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}bcimage	
💭 Desc : To broadcast a image	
✏️ Eg :${prefix} bcimage [image]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}bcvideo	
💭 Desc : To broadcast a video 	
✏️ Eg :${prefix}bcvideo	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}setbotpp	
💭 Desc : To change profile picture of your number 	
✏️ Eg :${prefix}setbotpp [image]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}setthumb	
💭 Desc : To change bot thumb image	
✏️ Eg :${prefix}setthumb [image]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}setexif	
💭 Desc : To change sticker making packname and author	
✏️ Eg :${prefix}setexif darknero|darknero	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}creategroup 	
💭 Desc : To create a group 	
✏️ Eg :${prefix}creategroup [group name]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}block	
💭 Desc : To block a user	
✏️ Eg :${prefix}block [user]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}unblock 	
💭 Desc : To unblock a user	
✏️ Eg :${prefix}unblock [user]	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'groupmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ GROUP MENU	
📃 ${prefix}emoji	
💭 Desc :Turning an emoji into a sticker	
✏️ Eg :emoji 🙈	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}grouplink	
💭 Desc : get group link	
✏️ Eg : .grouplink	
✃┄┄┄┄┄┄┄┄┄┄┄	
📃 ${prefix}setgcpp	
💭 Desc : add group img	
✏️ Eg :.setgcpp	
✃┄┄┄┄┄┄┄┄┄┄	
📃 ${prefix}setname	
💭 Desc : group name 	
✏️ Eg : setname[text]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}group	
💭 Desc : group close	
✏️ Eg :grouo	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}resetgrouplink	
💭Desc : group link redet	
✏️ Eg :resetgrouplink	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}add	
💭 Desc : member add	
✏️ Eg :add[user nomber ]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}.kick	
💭 Desc : member kick	
✏️ Eg :kick [tag/riply]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}tagall	
💭 Desc : tag 	
✏️ Eg :tagall	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}emojimix	
💭 Desc :To mix an emoji	
✏️ Eg :emojimix 😎+😋	
━━━━━━━━━━━━━━━━━ `,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'makermenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ MAKER MENU	
    	
📃 ${prefix}candy	
💭 Desc : To make candy style logo	
✏️ Eg :${prefix}candy PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}8bit	
💭 Desc : To make 8bit style logo	
✏️ Eg :${prefix}8bit PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}horror	
💭 Desc : To make horror style logo	
✏️ Eg :${prefix}horror PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}retro	
💭 Desc : To make retro style logo	
✏️ Eg :${prefix}retro PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}blackpinkneon	
💭 Desc : To make black pink neon style logo	
✏️ Eg :${prefix}blackpinkneon PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}deepsea	
💭 Desc : To make deep sea style logo	
✏️ Eg :${prefix}deepsea PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}scifi	
💭 Desc : To make scifi style logo	
✏️ Eg :${prefix}scifi PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}berry 	
💭 Desc : To make berry style logo	
✏️ Eg :${prefix}berry PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}fruitjuice	
💭 Desc : To make fruit juice style logo	
✏️ Eg :${prefix}fruitjuice PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}biscuit	
💭 Desc : To make biscuit style logo	
✏️ Eg :${prefix}biscuit PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}wood	
💭 Desc : To make wood style logo	
✏️ Eg :${prefix}wood PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}chocolate 	
💭 Desc : To make chocolate style logo	
✏️ Eg :${prefix}chocolate PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}matrix	
💭 Desc : To make matrix style logo	
✏️ Eg :${prefix}matrix PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}blood	
💭 Desc : To make blood style logo	
✏️ Eg :${prefix}blood PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}halloween	
💭 Desc : To make halloween style logo	
✏️ Eg :${prefix}halloween PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}darkgold	
💭 Desc : To make dark gold style logo	
✏️ Eg :${prefix}darkgold PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}firework	
💭 Desc : To make fire work style logo	
✏️ Eg :${prefix}firework PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}sand	
💭 Desc : To make sand style logo	
✏️ Eg :${prefix}sand PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}glue	
💭 Desc : To make glue style logo	
✏️ Eg :${prefix}glue PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}leaves	
💭 Desc : To make leaves style logo	
✏️ Eg :${prefix}leaves PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}magma	
💭 Desc : To make magma style logo	
✏️ Eg :${prefix}magma PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}lava	
💭 Desc : To make lava style logo	
✏️ Eg :${prefix}lava PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}rockatr	
💭 Desc : To make rock art style logo	
✏️ Eg :${prefix}rockart PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}underwater 	
💭 Desc : To make under water style logo	
✏️ Eg :${prefix}underwater PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}honey	
💭 Desc : To make honey style logo	
✏️ Eg :${prefix}honey PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}ice	
💭 Desc : To make ice style logo	
✏️ Eg :${prefix}ice PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}watercolor	
💭 Desc : To make watercolor style logo	
✏️ Eg :${prefix}watercolor PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}multicolor	
💭 Desc : To make multi color style logo	
✏️ Eg :${prefix}multicolor PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}snow	
💭 Desc : To make snow style logo	
✏️ Eg :${prefix}snow PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}harrypotter 	
💭 Desc : To make harry potter style logo	
✏️ Eg :${prefix}harrypotter PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}brokenglass	
💭 Desc : To make broken glass style logo	
✏️ Eg :${prefix}brokenglass PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}spooky 	
💭 Desc : To make spooky style logo	
✏️ Eg :${prefix}spooky PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}circuit 	
💭 Desc : To make circuit style logo	
✏️ Eg :${prefix}circuit PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}christmas 	
💭 Desc : To make christmas style logo	
✏️ Eg :${prefix}christmas PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}christmas 	
💭 Desc : To make christmas style logo	
✏️ Eg :${prefix}christmas PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}waterdrop	
💭 Desc : To make waterdrop style logo	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}transformer	
💭 Desc : To make transformer style logo	
✏️ Eg :${prefix}transformer PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}thunder	
💭 Desc : To make thunder style logo	
✏️ Eg :${prefix}thunder PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}window 	
💭 Desc : To make window style logo	
✏️ Eg :${prefix}window PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}glitch	
💭 Desc : To make glitch style logo	
✏️ Eg :${prefix}glitch PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}blackpinkart	
💭 Desc : To make black pink art style logo	
✏️ Eg :${prefix}black pink art PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}lion	
💭 Desc : To make lion style logo	
✏️ Eg :${prefix}lion PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}bear	
💭 Desc : To make bear style logo	
✏️ Eg :${prefix}bear PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}wolf	
💭 Desc : To make wolf style logo	
✏️ Eg :${prefix}wolf PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}joker	
💭 Desc : To make joker style logo	
✏️ Eg :${prefix}joker PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}neonlight	
💭 Desc : To make neon light style logo	
✏️ Eg :${prefix}neonlight PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}carbon	
💭 Desc : To make carbon style logo	
✏️ Eg :${prefix}carbon PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}pencil	
💭 Desc : To make pencil style logo	
✏️ Eg :${prefix}pencil PEACE MD	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}batman	
💭 Desc : To make batman style logo	
✏️ Eg :${prefix}batman PEACE MD	
━━━━━━━━━━━━━━━━━ `,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'downloadmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ DOWNLOAD MENU	
📃 ${prefix}tiktok 	
💭 Desc : To download tiktok videos	
 ✏️ Eg :${prefix}tiktok [link]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}modapk	
💭 Desc : apk download 	
 ✏️ Eg :${prefix}modapk [name]	
━━━━━━━━━━━━━━━━━	
${prefix}wamod	
💭 Desc : mod wa download 	
 ✏️ Eg :${prefix}wamod 	
━━━━━━━━━━━━━━━━━	
 📃 ${prefix}fb	
💭 Desc : To download fb video	
✏️ Eg :${prefix}tiktok [link]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}tiktokaudio	
💭 Desc : To download tiktok audios	
✏️ Eg :${prefix}tiktok [link]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}ytmp3 	
💭 Desc : To download youtube songs	
✏️ Eg :${prefix}ytmp3 [link]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}ytmp4 	
💭 Desc : To download youtube videos	
✏️ Eg :${prefix}ytmp4 [link]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}gitclone	
💭 Desc : To download github repository 	
✏️ Eg :${prefix}gitclone [link]	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}ehi	
💭 Desc : To download ehi 	
✏️ Eg :${prefix}ehi	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}song	
💭 Desc : To download youtube songs	
✏️ Eg :${prefix}song llena	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}video 	
💭 Desc : To download youtube video	
✏️ Eg :${prefix}video [link/name]	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'searchmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ SEARCH MENU	
    	
📃 ${prefix}play	
💭 Desc : song & video	
✏️ Eg : play [url]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}news	
💭 Desc : latest hiru news	
✏️ Eg : news	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}song	
💭 Desc : dawnload mp3	
✏️ Eg : song [name/url]	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}yts	
💭 Desc : youteub sarch	
✏️ Eg : yts lelena	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}google	
💭 Desc : dtls	
✏️ Eg :gooogal yakuza	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}image	
💭 Desc : dawnload  image	
✏️ Eg : image darknero 	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}imdb	
💭 Desc : movie dtls	
✏️ Eg :move [name]	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}ytsearch	
💭 Desc : yt search	
✏️ Eg : ytsearch darknero	
    ━━━━━━━━━━━━━━━━━	
    	
📃 ${prefix}ringtone	
💭 Desc : dawnload rengtone	
✏️ Eg : ringtone	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}wallpaper	
💭 Desc : dawnload wallpaper	
✏️ Eg :wallpaper [name]	
━━━━━━━━━━━━━━━━━ `,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'convertmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ CONVERT MENU	
    	
📃 ${prefix}.volume	
💭 Desc : volume 	
✏️ Eg :volume	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}bass	
💭 Desc : add bass	
✏️ Eg : bass [riply aud]	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}.fast	
💭 Desc : fast	
✏️ Eg :fast	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'randomimagemenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ RANDOM IMAGE MENU	
    	
📃 ${prefix}coffee	
💭 Desc : img	
✏️ Eg :img	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}woof	
💭 Desc : img	
✏️ Eg :woof	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}meow	
💭 Desc : img	
✏️ Eg :meow	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}lizard	
💭 Desc : img	
✏️ Eg :lizard	
━━━━━━━━━━━━━━━━━ 	
📃 ${prefix}indo	
💭 Desc : img	
✏️ Eg :indo	
━━━━━━━━━━━━━━━━━	
📃 ${prefix}thai	
💭 Desc : img	
✏️ Eg : thai	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}hijab	
💭 Desc : img	
✏️ Eg :hijab	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}car	
💭 Desc : img	
✏️ Eg :car	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}bike	
💭 Desc : img	
✏️ Eg : bike	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}cat	
💭 Desc : img	
✏️ Eg :cat	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}pubg	
💭 Desc : img	
✏️ Eg : pubg	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}hacking	
💭 Desc : img	
✏️ Eg : hacking	
━━━━━━━━━━━━━━━━━ `,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'randomvideomenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ RANDOM VIDEO MENU	
    	
📃 ${prefix}tiktokgirl	
💭 Desc : video	
✏️ Eg :tiktokgirl	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}tiktoklanrika	
💭 Desc : video	
✏️ Eg :tiktoklanrika	
━━━━━━━━━━━━━━━━━	
    	
📃 ${prefix}tiktokbocil	
💭 Desc : video	
✏️ Eg :tiktokbocil	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}tiktokkayes	
💭 Desc : video	
✏️ Eg :tiltokkayes	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'imageeffectmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ IMAGE EFFECT MENU	
    	
📃 ${prefix}removebg	
💭 Desc : brackground remove	
✏️ Eg :removebg[riply/img]	
✃┄┄┄┄┄┄┄┄┄┄┄ `,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'soundmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ SOUND MENU	
    	
☀ sound1--sound161	
    	
sound 1 ඉදන් sound161 දක්වා ඇත	
 	
From sound 1 to sound161	
 	
 	
📃 ${prefix}sound1	
💭 Desc :To get Sound	
✏️ Eg :sound1	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'gamemenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ GAME MENU	
    	
📃 ${prefix}truth	
💭 Desc : img	
✏️ Eg :truth	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}dare	
💭 Desc : img	
✏️ Eg :dare	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}delttt	
💭 Desc : img	
✏️ Eg :delttt	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}math	
💭 Desc : img	
✏️ Eg :math	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}suitpvp	
💭 Desc : convet	
✏️ Eg :suitpvp[tag]	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'anonymousmenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ ANONYMOUS MENU	
    	
📃 ${prefix}anonymous	
💭 Desc : chat	
✏️ Eg :anonymous	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}start	
💭 Desc : start	
✏️ Eg :start	
━━━━━━━━━━━━━━━━━`,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'databasemenu': {
            const buttons = [{
                    buttonId: 'dev',
                    buttonText: {
                        displayText: '😈 DEVELOPER 😈'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: '🌟 OWNER 🌟'
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ DATABASE MENU	
    	
📃 ${prefix}setcmd	
💭 Desc : command add	
✏️ Eg :setcmd	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}listcmd	
💭 Desc : add list cmd	
✏️ Eg : listcmd	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}addmsg	
💭 Desc : add msg	
✏️ Eg :addmsg	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}listmsg	
💭 Desc : add ilst msg	
✏️ Eg :listmasg	
━━━━━━━━━━━━━━━━━ `,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        case 'othermenu': {
            const buttons = [{
                    buttonId: 'script',
                    buttonText: {
                        displayText: 'Script 🌱'
                    },
                    type: 1
                },
                {
                    buttonId: 'donate',
                    buttonText: {
                        displayText: 'Donate 🐋'
                    },
                    type: 1
                },
                {
                    buttonId: 'owner',
                    buttonText: {
                        displayText: 'Owner '
                    },
                    type: 1
                }
            ]
            const buttonMessage = {
                image: {
                    url: `${global.alivepic}`
                },
                caption: `🗒️ OTHER MENU	
    	
📃 ${prefix}alive	
💭 Desc : is peacemd online
✏️ Eg :alive	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}owner	
💭 Desc : bot owner	
✏️ Eg :owner	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}menu	
💭 Desc : command 	
✏️ Eg :menu	
━━━━━━━━━━━━━━━━━	
    	
 📃 ${prefix}report	
💭 Desc : bag	
✏️ Eg :report	
━━━━━━━━━━━━━━━━━ 	
    	
📃 ${prefix}ping	
💭 Desc : speed	
✏️ Eg :ping	
━━━━━━━━━━━━━━━━━ `,
                footer: `${botname}`,
                buttons: buttons,
                headerType: 4
            }
            const sendMsg = await PeaceMd.sendMessage(m.chat, buttonMessage)
        }
        break

        default:
            if (budy.startsWith('=>')) {
                if (!isCreator) return m.reply(mess.owner)

                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                    if (sat == undefined) {
                        bang = util.format(sul)
                    }
                    return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }


            //---------------------------------------------------------------------------------------------------------------------------------//	
            //  Chatbot by FantoX001 on behalf of Team ATLAS - All Rights Reserved	

            if (!m.isGroup && !isCmd) {
                const botReply = await axios.get(`http://api.brainshop.ai/get?bid=172352&key=vTmMboAxoXfsKEQQ&uid=[uid]&msg=[${budy}]`)
                var replyText = `${botReply.data.cnt}`;
                m.reply(replyText);
            }

            //---------------------------------------------------------------------------------------------------------------------------------//	
            if (budy.startsWith('>')) {
                if (!isCreator) return m.reply(mess.owner)
                try {
                    let evaled = await eval(budy.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await m.reply(evaled)
                } catch (err) {
                    await m.reply(String(err))
                }
            }

            if (budy.startsWith('$')) {
                if (!isCreator) return m.reply(mess.owner)
                exec(budy.slice(2), (err, stdout) => {
                    if (err) return m.reply(err)
                    if (stdout) return m.reply(stdout)
                })
            }

            if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                if (room) {
                    if (/^.*(next|leave|start)/.test(m.text)) return
                    if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                    let other = [room.a, room.b].find(user => user !== m.sender)
                    m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                        contextInfo: {
                            ...m.msg.contextInfo,
                            forwardingScore: 0,
                            isForwarded: true,
                            participant: other
                        }
                    } : {})
                }
                return !0
            }

            if (isCmd && budy.toLowerCase() != undefined) {
                if (m.chat.endsWith('broadcast')) return
                if (m.isBaileys) return
                let msgs = global.db.data.database
                if (!(budy.toLowerCase() in msgs)) return
                PeaceMd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
            }
        }

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
