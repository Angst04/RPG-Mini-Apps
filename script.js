let tg = window.Telegram.WebApp;

tg.expand();

tg.sendData(tg.version());
console.log(tg.version());
tg.sendData(1);
tg.MainButton.show();
tg.MainButton.enable();

tg.MainButton.text = "Сохранить"; 
tg.MainButton.textColor = "#F55353"; 
tg.MainButton.color = "#143F6B"; 

tg.ready();

tg.onEvent('mainButtonClicked', function(){
	tg.sendData(1); 
	tg.close();
});