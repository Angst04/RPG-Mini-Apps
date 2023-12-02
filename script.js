let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();

tg.MainButton.text = "Сохранить"; 
tg.MainButton.textColor = "#fffb"; 
tg.MainButton.color = "#123456"; 

tg.ready();

Telegram.WebApp.onEvent('mainButtonClicked', function() {
   tg.sendData(1); 
   tg.close();
});