console.log('🚀');

class Product {
  constructor(src, title){
    this.image_url = src;
    this.title = title;
    //Where to put product
    this.container = document.getElementById('products');
    //make a div with classname product
    this.element = document.createElement('div');
    this.element.className = 'product';
  }

  renderProduct(){

    //an image for the product, appended to the div we made
    let tempImg = document.createElement('img');
    tempImg.src = this.image_url;
    this.element.appendChild(tempImg);

    //an name for the product
    let tempName = document.createElement('h4');
    tempName.innerHTML = this.title;
    this.element.appendChild(tempName);

    //append the div to the container on the page
    this.container.appendChild(this.element);
  }
}

axios.get('https://fizal.me/products.json')
  .then(putProducts);

function putProducts(response){
  for (let index = 0; index < response.data.products.length; index++) {
    const productData = response.data.products[index];
    let productObject = new Product(productData.images[0].src, productData.title);
    productObject.renderProduct();

  }
}