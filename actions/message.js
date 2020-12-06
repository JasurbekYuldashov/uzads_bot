const { bot } = require("../bot");
const { Categories } = require("../constants/categories");
const { Car } = require("../actions/e'lonlar/Car")
const { Comp } = require("../actions/e'lonlar/comp")
const { House } = require("../actions/e'lonlar/House")
const { Phone } = require("../actions/e'lonlar/Phone")
const { Wacht } = require("../actions/e'lonlar/wacht");
const { Other } = require("./e'lonlar/Other");
const { checkMember } = require("../components/CheckMember");
const {Markup} = require("telegraf")

let bool1 = []
let bool2 = []
let bool3 = []
let bool4 = []
let bool5 = []
let bool6 = []


function allFalse(index, ctx) {
    if (index === 1) {
        bool1[ctx.from.id] = true
        bool2[ctx.from.id] = false
        bool3[ctx.from.id] = false
        bool4[ctx.from.id] = false
        bool5[ctx.from.id] = false
        bool6[ctx.from.id] = false
    } else
        if (index === 2) {
            bool1[ctx.from.id] = false
            bool2[ctx.from.id] = true
            bool3[ctx.from.id] = false
            bool4[ctx.from.id] = false
            bool5[ctx.from.id] = false
            bool6[ctx.from.id] = false
        } else
            if (index === 3) {
                bool1[ctx.from.id] = false
                bool2[ctx.from.id] = false
                bool3[ctx.from.id] = true
                bool4[ctx.from.id] = false
                bool5[ctx.from.id] = false
                bool6[ctx.from.id] = false
            } else
                if (index === 4) {
                    bool1[ctx.from.id] = false
                    bool2[ctx.from.id] = false
                    bool3[ctx.from.id] = false
                    bool4[ctx.from.id] = true
                    bool5[ctx.from.id] = false
                    bool6[ctx.from.id] = false
                } else
                    if (index === 5) {
                        bool1[ctx.from.id] = false
                        bool2[ctx.from.id] = false
                        bool3[ctx.from.id] = false
                        bool4[ctx.from.id] = false
                        bool5[ctx.from.id] = true
                        bool6[ctx.from.id] = false
                    } else
                        if (index === 6) {
                            bool1[ctx.from.id] = false
                            bool2[ctx.from.id] = false
                            bool3[ctx.from.id] = false
                            bool4[ctx.from.id] = false
                            bool5[ctx.from.id] = false
                            bool6[ctx.from.id] = true
                        }
}

function isBoolChecked(ctx) {
    if (bool1[ctx.from.id] === true) {
        Car(ctx) ? bool1[ctx.from.id] = true : bool1[ctx.from.id] = false
        return 1;
    } else
        if (bool2[ctx.from.id] === true) {
            House(ctx) ? bool1[ctx.from.id] = true : bool1[ctx.from.id] = false
            return 1;
        } else
            if (bool3[ctx.from.id] === true) {
                Comp(ctx) ? bool1[ctx.from.id] = true : bool1[ctx.from.id] = false
                return 1;
            } else
                if (bool4[ctx.from.id] === true) {
                    Phone(ctx) ? bool1[ctx.from.id] = true : bool1[ctx.from.id] = false
                    return 1;
                } else
                    if (bool5[ctx.from.id] === true) {
                        Wacht(ctx) ? bool1[ctx.from.id] = true : bool1[ctx.from.id] = false
                        return 1;
                    } else
                        if (bool6[ctx.from.id] === true) {
                            Other(ctx) ? bool1[ctx.from.id] = true : bool1[ctx.from.id] = false
                            return 1;
                        }
}

function sendAction(action, ctx) {
    for (let i = 0; i < Categories.length; i++) {
        let c = Categories[i]
        if (c.type === action) {
            if (i + 1 === 1) {
                Car(ctx) ? bool1[ctx.from.id] = true : bool1[ctx.from.id] = false
                allFalse(i + 1, ctx)
                return;
            } else
                if (i + 1 === 2) {
                    House(ctx) ? bool2[ctx.from.id] = true : bool3[ctx.from.id] = false
                    allFalse(i + 1, ctx)
                    return;
                } else
                    if (i + 1 === 3) {
                        Comp(ctx) ? bool3[ctx.from.id] = true : bool3[ctx.from.id] = false
                        allFalse(i + 1, ctx)
                        return;
                    } else
                        if (i + 1 === 4) {
                            Phone(ctx) ? bool4[ctx.from.id] = true : bool4[ctx.from.id] = false
                            allFalse(i + 1, ctx)
                            return;
                        } else
                            if (i + 1 === 5) {
                                Wacht(ctx) ? bool5[ctx.from.id] = true : bool5[ctx.from.id] = false
                                allFalse(i + 1, ctx)
                                return;
                            } else
                                if (i + 1 === 6) {
                                    Other(ctx) ? bool5[ctx.from.id] = true : bool5[ctx.from.id] = false
                                    allFalse(i + 1, ctx)
                                    return;
                                }
        }
    }
    if (isBoolChecked(ctx) === 1) {
        return;
    }
}

bot.on("callback_query", ctx => {
    if (ctx.update.callback_query) {
        if (ctx.update.callback_query.data === "allaqachonazoboldim") {
            if (!checkMember(ctx, false)) {
                if (ctx.update.message) {
                    sendAction(ctx.update.message.text, ctx)
                } else {
                    isBoolChecked(ctx)
                }
            } else {
                return 0;
            }
        }
    }
    if (ctx.update.message) {
        sendAction(ctx.update.message.text, ctx)
    } else {
        isBoolChecked(ctx)
    }
})

bot.on("message", ctx => {
    if (ctx.update.message.text === "🔙 orqaga") {
        let keyboard = Categories.map(c => Markup.button(c.type))
        keyboard = Markup.keyboard([...keyboard], { columns: 2 }).resize()
        ctx.telegram.sendMessage(ctx.from.id,"Kearkli buruqni tanlang!!!",{reply_markup:keyboard})
        return 0;
    }
    if (ctx.update.message.text !== "/start") {
        if (!checkMember(ctx, true)) {
            return 0;
        }
    }
    if (ctx.update.message.text) {
        sendAction(ctx.update.message.text, ctx)
    } else {
        isBoolChecked(ctx)
    }
})
