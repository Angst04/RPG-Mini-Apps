let tg = window.Telegram.WebApp;

tg.MainButton.show()
tg.MainButton.text = "Отправить"; 

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.showAler("Привет!");
tg.showConfirm("Привееет!");

let item = "";