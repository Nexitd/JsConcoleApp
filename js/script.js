// Пользователь вводит почту, имя и фамилию и приложение это сохраняет (X)
// Проверить есть ли пользователь с таким именем в списке с пользователями на сайте
// Если есть то вывести строчку с его данными и приветствие
// Если нет, вывести предупреждение

const email = prompt("Введите свой email");
const userSurname = prompt("Введите фамилию");
const userName = prompt("Введите имя");

const user = {
  userEmail: email,
  surname: userSurname,
  username: userName,
};

const usersArray = [
  {
    userEmail: "qwe@gmail.com",
    surname: "Lastochkin",
    username: "Vitya",
  },
  {
    userEmail: "test2@gmail.com",
    surname: "Ivanova",
    username: "Vasya",
  },
  {
    userEmail: "test@gmail.com",
    surname: "Ivanov",
    username: "Ivan",
  },
];

function checkUserData(userData, arr) {
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].userEmail === userData.userEmail &&
      arr[i].surname === userData.surname &&
      arr[i].username === userData.username
    ) {
      flag = true;
    }
  }

  if (flag === true) {
    alert(
      `Привет, ${userData.username} ${userData.surname}, вот твой email: ${userData.userEmail}`
    );
  } else {
    alert("Ты кто такой, я тебя не звал, пошел нахуй!");
  }
}

checkUserData(user, usersArray);
