let tg = window.Telegram.WebApp;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;


let theme = document.getElementById('theme');
if (prefersDarkMode) {
   theme.href = 'dark-mode.css'
   tg.MainButton.textColor = "#ffffff"; 
   tg.MainButton.color = "#4e4e4e"; 
} else {
   theme.href = 'light-mode.css'
   tg.MainButton.textColor = '#333333'; 
   tg.MainButton.color = '#cccccc'; 
};


tg.MainButton.show()
tg.MainButton.text = "Отправить"; 


function outputUpdate(vol) {
   var output = document.querySelector('#volume');
   output.value = vol;

   if (vol < 45) {
      output.style.left = vol - 35 + 'px';
   };
   if (vol > 45) {
      output.style.left = vol - 17 + 'px';
   }
};

const btn = document.getElementById('btn1');

btn.addEventListener('click', () => {
	tg.showAlert(tg.version);
	// alert("Отработало не то");
});

Telegram.WebApp.onEvent('mainButtonClicked', function() {
   let age = document.getElementById("fader").value;

   tg.sendData(age); 
   tg.close();
});