// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введите отзыв";
document.body.appendChild(input);

const button = document.createElement("button");
button.textContent = "Отправить";
document.body.appendChild(button);

const container = document.createElement("div");
document.body.appendChild(container);

function inputLength() {
  try {
    if (input.value.length < 50 || input.value.length > 500) {
      throw new Error(
        "Длинна отзыва должна быть больше 50 и меньше 500 символов"
      );
    }
   
    const par = document.createElement("p");
    par.textContent = input.value;
    container.appendChild(par);
    let newrev = {
      id: (initialData[0].reviews.length + 1).toString(),
      text: input.value,
    };
    initialData[0].reviews.push(newrev);
    
  } catch (error) {
    console.log(error.message);
  }
}

button.addEventListener("click", inputLength);

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
