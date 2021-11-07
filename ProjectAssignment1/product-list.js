import { products } from './products.js'
import { emptyCart, addProduct} from './cart.js';


const productContainer = document.querySelector("#product-container");

productContainer.style.cssText = `margin : 50px;`;

productContainer.firstElementChild.style.cssText = `font-size : 42px;`;

const productElement = document.querySelector("#products");
productElement.setAttribute(
  "class",
  "d-flex flex-wrap justify-content-center "
);

for (const product of products) {
  const productList = document.createElement("div");
  productList.setAttribute("id", product.productId);
  productList.setAttribute("class", "card card-product");
  productList.setAttribute(
    "style",
    "margin : 5px; padding : 50px; width : 30rem;"
  );

  let productImg = document.createElement("img");
  productImg.setAttribute("src", product.imgProduct);
  productImg.setAttribute(
    "style",
    "width: 100%; height: 25rem; margin-bottom: 50px"
  );
  productList.appendChild(productImg);

  let productId = document.createElement("p");
  productId.textContent = product.productId;
  productList.appendChild(productId);

  let productName = document.createElement("p");
  productName.setAttribute("style","font-weight : bold;")
  productName.textContent = product.name;
  productList.appendChild(productName);

  let productPrice = document.createElement("p");
  productPrice.textContent = "฿" + product.price + " Baht";
  productList.appendChild(productPrice);

  let productStock = document.createElement("p");
  productStock.textContent = "Available : " + product.stock;
  productList.appendChild(productStock);

  let buyButton = document.createElement("button");
  buyButton.setAttribute("id", product.productId);
  buyButton.setAttribute("type", "button");
  buyButton.setAttribute("class", "btn btn-primary btn-lg");
  buyButton.addEventListener("click", addProduct);

  buyButton.textContent = "Add to cart";
 
  productList.appendChild(buyButton);

  productElement.appendChild(productList);
}


const buttonSearch = document.getElementById('button-search');
buttonSearch.addEventListener("click", () => {
  showHideSearch()
})

function showHideSearch(){
  const s = document.getElementById('search-bar');
  if(s.style.display === "none"){
    s.style.display = "flex";
  }else{
    s.style.display = "none";
  }
 
}

function searchProduct(){
  let searchProduct = document.getElementById("search").value.toLowerCase();
  let filterProductByName = products.filter((product) => product.name.toLowerCase().includes(searchProduct));

  let divProduct = productElement.children;

  if (filterProductByName.length == 0) {
    for (const i of divProduct) {
      i.style.display = "none";
    }
  } else {
    for(const i of divProduct){
      for (const j of filterProductByName) {
        if(i.id == j.productId){
          i.style.display = "block";
          break;
        }else{
          i.style.display = "none";
        }
      }
    }
  }
}  


let buttonSubmit = document.getElementById("button-submit");
buttonSubmit.addEventListener("click", () => {
  searchProduct();
});