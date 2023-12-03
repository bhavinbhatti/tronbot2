/*CMD
  command: /123
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(params){
Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances",
    },
    onSuccess: "/onp1 r"
  })
}else{
Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances",
    },
    onSuccess: "/onp1"
  })
}
