const fetchAllProducts = async () => {
  return (await fetch('https://dummyjson.com/products')).json();
};

async function getAllProducts() {
  const response = await fetchAllProducts();
  const products = response.products;

  function getImageProductTemplate(thumbnail) {
    return `<div class="image-wrapper">
    <img src="${thumbnail}" alt="" class="image" />
  </div>`;
  }

  function getPriceProductTemplate(price, discountPercentage) {
    const percent = 100;
    return `
    <div class="price">
    ${price}, 
    price with discount ${
      (price * percent - (discountPercentage / percent) * (price * percent)) /
      percent
    }
    </div>`;
  }

  function getActionsProductTemplate() {
    return `<div class="actions">
    <button id="cart" class="button green-solid cart">Add to Cart</button>
    <button class="button more">More Details</button>
    </div>`;
  }

  function getProductTemplate(product) {
    return ` <section class="product-item">
    ${getImageProductTemplate(product.thumbnail)}
    <div class="content-wrapper">
        <div class="title">
            <h4>${product.title}</h4>
        </div>
        ${getPriceProductTemplate(product.price, product.discountPercentage)}
        <div class="description">${product.description}</div>
        ${getActionsProductTemplate()}
    </div>
    </section>`;
  }

  function getProductsTemplate(products) {
    return `
   <article class="products">
        ${products.map((product) => getProductTemplate(product)).join('')}
   </article>`;
  }

  document.getElementById('app').innerHTML = getProductsTemplate(products);
}
