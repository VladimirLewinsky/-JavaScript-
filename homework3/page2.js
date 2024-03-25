console.log(localStorage);

const productul = document.querySelector(".allproducts");

for (const key in localStorage) {
  if (Object.hasOwnProperty.call(localStorage, key)) {
    const element = localStorage[key];

    // создаем список продуктов

    let newli = document.createElement("li");
    newli.className = "about-product";
    newli.textContent = key;
    productul.appendChild(newli);

    // разбиваем значение на массив
    let arr = element.split(" + ");
    let newarr = element.split(" + ");

    // добовляем для каждого элемента из массива P  и кнопку
    for (let index = 0; index < arr.length; index++) {
      //создаем отзыв
      let review = document.createElement("p");
      review.className = "review";
      review.textContent = arr[index];
      review.style = "display: none";
      newli.appendChild(review);

      // по нажатию на товар появляется отзыв
      newli.addEventListener("click", () => {
        if (review.style.display === "none") {
          review.style.display = "block";
        } else {
          review.style.display = "none";
        }
      });
      // создаем кнопку
      let removebutton = document.createElement("button");
      removebutton.className = "remove-button";
      removebutton.textContent = "Удалить";
      review.appendChild(removebutton);
      // по нажатию на кнопку удаляем
      removebutton.addEventListener("click", () => {
        
        localStorage.removeItem(key);
        localStorage.setItem(key, "Отзывов нет");
        review.remove();
        removebutton.remove();
      });
    }
  }
}
