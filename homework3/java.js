const prodButton = document.querySelector(".product-button");
const productname = document.querySelector(".product");
const producttext = document.querySelector(".product-text");



prodButton.addEventListener("click", () => {

  try {
    if (productname.value === "" || producttext.value === "") {
      throw new Error("Не все поля заполненны");
    }
    if (!localStorage.getItem(productname.value)) {
      localStorage.setItem(
        productname.value,
        producttext.value
      );
    } else {
   
      let test = localStorage.getItem(productname.value);
      console.log(typeof test);
      test += " + " + producttext.value;
      console.log(test);
      localStorage.setItem(productname.value, test);
    }


    console.log("Отзыв добавлен");
    console.log(localStorage.getItem(productname.value));

  } catch (error) {
    console.log(error.message);
  }
});
