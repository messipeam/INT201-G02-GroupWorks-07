import {products} from "./products.js";

let carts = [];

const buttonTrash = document.getElementById('button-trash');
const numCart = document.getElementById('numCart');

export function emptyCart(){
    let cartEmpty = [];
    carts = cartEmpty;
    numCart.textContent = carts.length;
    alert('Your cart is empty!');
    console.log(carts);
};


buttonTrash.addEventListener("click", () => {
    emptyCart();
});


export function addProduct(event){
    let id = event.target.id;
    if(carts.some((item) => item.productId === id)){
        carts[carts.findIndex((product) => product.productId === id)].numberOfUnits++;
        numCart.textContent = countInCart();
        console.log(carts);
    }else{
    carts.push({productId : id , numberOfUnits : 1});
    alert(` " ${id} " added in your cart`);
    numCart.textContent = countInCart();
    console.log(carts);
    }
}

function countInCart(){
    let count = 0
    for (const i in carts){
        count += carts[i].numberOfUnits;
    }
    return count;
}