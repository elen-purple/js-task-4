// 1
function checkFields1() {
  const field1 = document.getElementById("field11").value;
  const field2 = document.getElementById("field12").value;
  const message = document.getElementById("message1");
  if (field1 && field2) {
    message.textContent = "Обидва поля заповнені";
  } else {
    message.textContent = "Не всі поля заповнені";
  }
}
// 2
function checkFields2() {
  const field1 = parseInt(document.getElementById("field21").value);
  const field2 = parseInt(document.getElementById("field22").value);
  const message = document.getElementById("message2");
  if (field1 + field2 > 10) {
    message.textContent = "Сума більша за 10";
  } else {
    message.textContent = "Сума менша або дорівнює 10";
  }
}
// 3
function checkFields3() {
  const field = document.getElementById("field3").value;
  const message = document.getElementById("message3");
  const isIncludingWord = field.includes("JavaScript");
  if (isIncludingWord === true) {
    message.textContent = "Текст містить слово JavaScript";
  } else {
    message.textContent = "Текст не містить слово JavaScript";
  }
}
// 4
function checkFields4() {
  const field = parseInt(document.getElementById("field4").value);
  const message = document.getElementById("message4");
  if (10 < field && field < 20) {
    message.textContent = "Число входить в діапазон від 10 до 20";
  } else {
    message.textContent = "Число не входить в діапазон від 10 до 20";
  }
}
// 5
function checkFields5() {
  const fieldName = document.getElementById("field-name").value;
  const messageName = document.getElementById("message-name");

  const fieldEmail = document.getElementById("field-email").value;
  const messageEmail = document.getElementById("message-email");

  const fieldPassword = document.getElementById("field-password").value;
  const messagePassword = document.getElementById("message-password");

  const message5 = document.getElementById("message5");

  const isEmail = fieldEmail.includes("@");

  if (fieldName.length < 3) {
    messageName.textContent = "Ім'я має містити не менше 3 символів";
  } else {
    messageName.textContent = "";
  }

  if (isEmail === false) {
    messageEmail.textContent = "Пошта має містити символ @";
  } else {
    messageEmail.textContent = "";
  }

  if (fieldPassword.length < 6) {
    messagePassword.textContent = "Пароль має містити не менше 6 символів";
  } else {
    messagePassword.textContent = "";
  }

  if (fieldName.length >= 3 && isEmail === true && fieldPassword.length >= 6) {
    window.location.href = `${window.location.href}/second-page.html`;
  }
}
