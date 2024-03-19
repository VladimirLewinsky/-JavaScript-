//
// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

let albom = [
  { title: "Название альбома", artist: "Исполнитель", year: "Год выпуска" },
  { title: "Киллограм колбасы", artist: "Колхозники", year: "1984" },
];

let musicCollection = {
  allalboms: [...albom],

  [Symbol.iterator]: function () {
    let albomcount = 0;
    return {
      next: () => {
        return albomcount < this.allalboms.length
          ? { done: false, value: this.allalboms[albomcount++] }
          : { done: true };
      },
    };
  },
};

for (const albomOne of musicCollection) {
  console.log(albomOne.title, albomOne.artist, albomOne.year);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

let food = new Map();
food.set("Бутер", "Пал-Палыч");
food.set("Яичница", "Гургеныч");
food.set("Чай", "Гургеныч");
food.set("Сосисоны", "Юлька");

let clients = new Map();

let clientOne = {
  name: "Ivanov",
  food: [],
};
clientOne.food.push("Чай", "Бутер");

clients.set(clientOne, clientOne.food);

console.log(`Клиент ${clientOne.name} заказал ${clients.get(clientOne)}`);
console.log(`Бутер готовит ${food.get("Бутер")} `);
