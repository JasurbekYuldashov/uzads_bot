const { Markup } = require("telegraf")

async function checkMember(ctx, bool) {
	await ctx.telegram.getChatMember(`@${process.env.CHANNEL_LINK}`, ctx.from.id).then(r => {
		console.log(r)
		if (r.status==="left") {
			if (bool) {
				let key = Markup.inlineKeyboard([Markup.urlButton("Kannalga o'tish", `https://t.me/${process.env.CHANNEL_LINK}`), Markup.callbackButton("Allaqachon a'zo bo'ldim", "allaqachonazoboldim")])
				ctx.telegram.sendMessage(ctx.from.id, "Iltimos kannalga a'zo bo'ling", { reply_markup: key })
				return true
			} else {
				return true
			}
		} else {
			return false;
		}
	})
}

exports.checkMember = checkMember