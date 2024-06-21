const buttons = document.querySelectorAll(".cores li");
const image = document.querySelector("#image-product");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("color-selected");
    });

    const botao = e.target;

    const id = botao.getAttribute("id");

    botao.querySelector(".color").classList.add("color-selected");

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});