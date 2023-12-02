let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();

tg.MainButton.text = "Сохранить"; 
tg.MainButton.textColor = "#fffb"; 
tg.MainButton.color = "#123456"; 

tg.ready();

let age = 37;

Telegram.WebApp.onEvent('mainButtonClicked', function() {
   tg.sendData(age); 
   tg.close();
});