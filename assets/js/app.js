$(document).ready(function () {
  console.clear();
  console.log("document ready");

  let cartCount = document.querySelector('.fa-shopping-bag');
  let countProduct = 0;

  for (let i = 1; i < 10; i++) {
    let imageTemplate = document.querySelector(`img[src="./assets/img/${i}.webp"]`);
    let imageOriginal = `./assets/img/${i}.webp`;
    let image = `./assets/img/${i}-hover.webp`;
    let btn = document.querySelector(`.btn-shop${i}`);

    imageTemplate.addEventListener('mouseover', () => { imageTemplate.src = image });

    imageTemplate.addEventListener('mouseleave', () => { imageTemplate.src = imageOriginal });

    btn.addEventListener('click', () => {
      countProduct += 1;
      cartCount.setAttribute("count", countProduct);
    })
  }

  let pasarela = document.querySelector('.pasarela-container');
  cartCount.addEventListener('click', () => { pasarela.classList.toggle('hidden') });
});