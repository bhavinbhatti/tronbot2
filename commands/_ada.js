/*CMD
  command: /ada
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let adm=Bot.getProperty("admin01","No admin")

if(data.chat.chatid==1021837737){
if(params){
Bot.setProperty("admin01",params,"string")
Bot.sendMessage("*✅ Admin Added Succeed*\n*Current Admin:* `"+params+"`")
}else{
Bot.sendMessage("invaid format please enter correct format.\n\nFor Example:\n"+"`/addadmin 9967554677`"+"\n*Current Admin:* `"+adm+"`")}}else{
Bot.runCommand("/start")}
