require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log("Retardo en responder MS: ",ms)
})


bot.start((ctx) => {
  ctx.reply('Este es el BOT de BETTO\nSi quieres visitar mi repositorio en GitHub puedes ir a:\ngithub.com/coderoycc')
})


bot.launch()
