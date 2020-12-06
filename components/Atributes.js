const { Markup } = require("telegraf")
const { Categories } = require("../constants/categories")
const { DocType } = require("../constants/docType")

let main = []
let type = []

let fail = "Qayta urinib ko'ring!!!";

function isEnteredAllQuestions(ctx, hashtag) {
    let img = []
    let keys = []
    for (let i = 0; i < main[ctx.from.id].length; i++) {
        if (main[ctx.from.id][i].field !== null) {
            if (keys[ctx.from.id] === undefined) {
                keys[ctx.from.id] = ""
            }
            if (!main[ctx.from.id][i].isLeft) {
                keys[ctx.from.id] += `\n${main[ctx.from.id][i].send} : ${main[ctx.from.id][i].answer}`
            }
        } else {
            img[ctx.from.id] = main[ctx.from.id][i].answer
        }
    }
    if (ctx.from.username) {
        keys[ctx.from.id] += `\nTelegram orqali : @${ctx.from.username}`
    }
    keys[ctx.from.id] += `\n\n\n${hashtag}\nKannalga a'zo bo'linga va bot orqali bepul e'lon bering! 👇\n @${process.env.CHANNEL_LINK}`
    ctx.telegram.sendPhoto(`@${process.env.CHANNEL_LINK}`, img[ctx.from.id], { caption: keys[ctx.from.id] })
    ctx.telegram.sendPhoto(ctx.from.id, img[ctx.from.id], { caption: keys[ctx.from.id] })
    ctx.telegram.sendMessage(ctx.from.id, "E'loningiz kannalga joylandi!!!")

}

async function checkTextType(ctx) {
    if (ctx.update.message) {
        if (ctx.update.message.text) {
            Categories.map(c => {
                if (c.type === ctx.update.message.text) {
                    if (type[ctx.from.id] === null || type[ctx.from.id] === undefined) {
                        type[ctx.from.id] = ctx.update.message.text
                    }

                    main[ctx.from.id].map(q => {
                        q.answer = null;
                        q.isAsk = false;
                        q.isTest = false;
                        q.isLeft = false;
                    })
                    return true
                }
            })

        }
    }
}

function isFail(ctx) {
	console.log("Failed")
}

async function Atributes(ctx, questions, hashtag) {
    if (main[ctx.from.id] === null || !main[ctx.from.id]) {
        main[ctx.from.id] = questions
    }
    if (checkTextType(ctx)) {
        main[ctx.from.id] = null
        main[ctx.from.id] = questions
    }
    for (let i = 0; i < main[ctx.from.id].length; i++) {
        let element = main[ctx.from.id][i]
        if (!main[ctx.from.id][i].isLeft || main[ctx.from.id][i].answer === null) {
            if (!element.isAsk) {

                // bu yerda ozidan oldingi elemnt tipi agar phone bo'lsa button ni asosiy so'rovlar bo'limiga qaytarish kerak

                if (main[ctx.from.id][i - 1]) {
                    if (main[ctx.from.id][i - 1].type === DocType.phone) {
                        let keyboard = Categories.map(c => Markup.button(c.type))
                        keyboard = Markup.keyboard([...keyboard], { columns: 2 }).resize()
                        if (element.left) {
                            let key = Markub.keyboard([keyboard, Markup.inlineKeyboard([Markup.callbackButton("Tashlab ketish", Categories[0].type + "_" + element.id)])])
                            ctx.telegram.sendMessage(ctx.from.id, element.ask, { reply_markup: key })
                        } else {
                            if (element.type === DocType.phone) {
                                let askPhone = Markup.keyboard([Markup.button("🔙 orqaga"), Markup.contactRequestButton("Telefon raqamingiz!")], { columns: 2 }).resize()
                                ctx.telegram.sendMessage(ctx.from.id, element.ask, { reply_markup: askPhone })
                            } else {
                                ctx.telegram.sendMessage(ctx.from.id, element.ask, { reply_markup: keyboard })
                            }
                        }
                        main[ctx.from.id][i].isAsk = true
                        return true
                    }
                }
                if (element.left) {
                    let key = Markup.inlineKeyboard([Markup.callbackButton("Tashlab ketish", Categories[0].type + "_" + element.id)])
                    ctx.telegram.sendMessage(ctx.from.id, element.ask, { reply_markup: key })
                } else {
                    if (element.type === DocType.phone) {
                        let askPhone = Markup.keyboard([Markup.button("🔙 orqaga"), Markup.contactRequestButton("Telefon raqamingiz!")], { columns: 2 }).resize(true)
                        ctx.telegram.sendMessage(ctx.from.id, element.ask, { reply_markup: askPhone})
                    } else {
                        ctx.telegram.sendMessage(ctx.from.id, element.ask)
                    }
                }
                main[ctx.from.id][i].isAsk = true
                return true

            } else {
                if (ctx.updateType == "callback_query") {
                    if (main[ctx.from.id][i].left && main[ctx.from.id][i].answer === null) {
                        main[ctx.from.id][i].isLeft = true
                    }
                    continue
                } else {
                    if (main[ctx.from.id][i].answer === null) {
                        if (main[ctx.from.id][i].type === DocType.text) {
                            if (ctx.update.message.text) {
                                main[ctx.from.id][i].answer = ctx.update.message.text
                                if (i + 1 === main[ctx.from.id].length) {
                                    isEnteredAllQuestions(ctx, hashtag)
                                }
                                continue
                            } else {
                                isFail(ctx)
                                return true
                            }
                        } else
                            if (main[ctx.from.id][i].type === DocType.num) {
                                if (ctx.update.message.text) {
                                    main[ctx.from.id][i].answer = ctx.update.message.text
                                    if (i + 1 === main[ctx.from.id].length) {
                                        isEnteredAllQuestions(ctx, hashtag)
                                    }
                                    continue
                                } else {
                                    isFail(ctx)
                                    return true
                                }
                            } else
                                if (main[ctx.from.id][i].type === DocType.img) {
                                    if (ctx.update.message.photo) {
                                        main[ctx.from.id][i].answer = ctx.update.message.photo[ctx.update.message.photo.length - 1].file_id
                                        if (i + 1 === main[ctx.from.id].length) {
                                            isEnteredAllQuestions(ctx, hashtag)
                                        }
                                        continue
                                    } else {
                                        isFail(ctx)
                                        return true
                                    }
                                } else
                                    if (main[ctx.from.id][i].type === DocType.phone) {
                                        console.log(ctx.update)
                                        if (ctx.update.message) {
                                            if (ctx.update.message.contact) {
                                                main[ctx.from.id][i].answer = ctx.update.message.contact.phone_number;
                                                if (i + 1 === main[ctx.from.id].length) {
                                                    isEnteredAllQuestions(ctx, hashtag)
                                                }
                                                continue
                                            }
                                        } else {
                                            isFail(ctx)
                                            return true
                                        }
                                    }
                    }
                }
            }
        } else {
            continue
        }
    }
}

exports.Atributes = Atributes