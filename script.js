var WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

var MainButton = WebApp.MainButton;
var BackButton = WebApp.BackButton;

MainButton.show();
BackButton.show();

MainButton.onClick(function() {
   WebApp.showAlert("Хорошо, ты нажал на главную кнопку.");
});
WebApp.onEvent('mainButtonClicked', function() {
  /* also */
});

BackButton.onClick(function() {
   WebApp.showAlert("Нет пути назад!");
   
   BackButton.hide();
});
WebApp.onEvent('backButtonClicked', function() {
  /* also */
});