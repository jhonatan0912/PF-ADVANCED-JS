$(document).ready(function () {
  console.clear();
  console.log("document ready");

  let cartCount = document.querySelector('.fa-shopping-bag');
  let countProduct = 0;

  let pasarela = document.querySelector('.pasarela-container');

  $(cartCount).click(function (e) {
    e.preventDefault();
    $(pasarela).toggle('hidden');
  });


  const getData = async () => {
    let data = await fetch('products.json')
    let json = await data.json();
    let productContainer = document.querySelector('#products__container');
    let productCard;

    const productCards = json.map(product =>
    (productCard = `<div class="col"> <div class="img__price__container"><i class="far fa-heart"></i><img loading="lazy" class="img-fluid w-full" src="${product.img}" alt="zapatilla"><span class="price">S/.${product.price}</span> </div><div class="details mt-2"><p>${product.name}</p>
    <p class="text-gray-6 00">Hombre Originals</p><div class="flex"><p>6 colores</p><p>&nbsp;-&nbsp; envio gratis</p></div><button class="btn btn-primary mt-2 d-block m-auto  btn-shop${product.id}">Shop now!&nbsp; <i class="fas fa-shopping-cart"></i></button>
      </div></div>`)
    )

    productCards.forEach(element => {
      productContainer.innerHTML += element
    });

    json.forEach((product) => {
      let btn = document.querySelector(`.btn-shop${product.id}`)
      $(btn).click(function (e) {
        e.preventDefault();
        countProduct += 1;
        cartCount.setAttribute("count", countProduct);
      });

      let img = document.querySelector(`img[src="assets/img/${product.id}.webp"]`)

      $(img).hover(function () {
        // when mouse is over image
        img.src = product.imgHover
      }, function () {
        // when mouse is out after hover the  image
        img.src = product.img
      }
      );

    })
  }


  getData()
});