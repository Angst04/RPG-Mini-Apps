let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();
tg.MainButton.enable();

tg.MainButton.text = "Сохранить"; 
tg.MainButton.textColor = "#F55353"; 
tg.MainButton.color = "#143F6B"; 

tg.ready();

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
});