const { Markup } = require("telegraf")
const { bot } = require("../bot")
const { checkMember } = require("../components/CheckMember")
const { Categories } = require("../constants/categories")

bot.start(ctx => {
	checkMember(ctx,true).then(r=>{
		console.log(r)
		if (r) {
			return 0;
		} else {
			let keyboard = Categories.map(c => Markup.button(c.type))
			keyboard = Markup.keyboard([...keyboard], { columns: 2 }).resize()
			ctx.telegram.sendMessage(ctx.from.id, `Botda siz @${process.env.CHANNEL_LINK} kanaliga o'z e'lonlaringizni bekorga joylashigiz mumkin`)
			ctx.telegram.sendMessage(ctx.from.id, `E'lon turini kiriting!!!`, { reply_markup: keyboard })
		}
	})

})