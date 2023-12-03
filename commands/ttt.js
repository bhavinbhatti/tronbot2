/*CMD
  command: ttt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances",
    },
    onSuccess: "/oninf"
  })
}else{
return
}
