/*CMD
  command: /rdemo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin_id=1021837737

let ph_to:Bot.inspect(request)
Api.sendPhoto({chat_id:admin_id,photo:ph_to})
