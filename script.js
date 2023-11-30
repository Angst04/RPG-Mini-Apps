let tg = window.Telegram.WebApp;

tg.MainButton.show();
tg.MainButton.text = "Сохранить"; 

tg.expand();
console.log(tg.version());

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab";

let item = "3";

tg.ready();

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
   tg.showConfirm("Вы нажали кнопку 1");
   item = "1";
   tg.sendData(item);
   tg.close();
});

button2.addEventListener('click', () => {
   tg.showAler("Вы нажали кнопку 2");
   item = "2";
   tg.sendData(item);
   tg.close();
});

tg.WebApp.onEvent("mainButtonClicked", function(){
   tg.sendData(item);
   tg.close();
});