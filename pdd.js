auto.waitFor(); 
setScreenMetrics(1440, 3120)
device.vibrate(2000)
app.launchApp("拼多多")
for(i = 5; i > 1; i--){
  toastLog("PDD加载倒计时:"+ i +"秒")
  sleep(1000)
}
click(427, 3011)
while(true){
   sleep(4000)
   swipe(700, 2300, 760, 370, 800)
}
