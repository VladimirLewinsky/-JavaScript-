// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  get allbooks() {
    return console.log(this.#books);
  }

  addBook(title) {
    try {
      for (let index = 0; index < this.#books.length; index++) {
        if (this.#books[index] === title) {
          throw new Error("this book is allready yet");
        }
      }
      this.#books.push(title);
    } catch (error) {
      console.log(error.message);
    }
  }

  removeBook(title) {
    try {
      let count = 0;
      for (let index = 0; index < this.#books.length; index++) {
        if (this.#books[index] === title) {
          this.#books.splice(index, 1);
          count++;
        }
      }
      if (count === 0) {
        throw new Error("Этой книги нет в списке");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  hasbook(title) {
    console.log(this.#books.includes(title));
  }

  constructor(array) {
    try {
      if (array.filter((e, i, a) => a.indexOf(e) !== i).length > 0) {
        throw new Error("В массиве есть повторяющиеся элементы");
      }
      this.#books = array;
    } catch (error) {
      console.log(error.message);
    }
  }
}

const first = new Library(["Dostoevskiy", "Bulgakov", "Chehov"]);
first.allbooks;
first.addBook("Pushkin");
first.allbooks;
first.addBook("Pushkin");
first.addBook("Sholohov");
first.allbooks;
first.removeBook("Chehov");
first.allbooks;
first.removeBook("Bulgakov");
first.allbooks;
first.removeBook("asfasfas");
first.allbooks;
first.hasbook("Bulgakov");
first.hasbook("Dostoevskiy");
