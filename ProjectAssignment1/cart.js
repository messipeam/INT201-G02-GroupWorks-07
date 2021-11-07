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
    let qty = 1;
    if(carts.some((item) => item.productId === id)){
        carts[carts.findIndex((product) => product.productId === id)].quantity++;
        const carttt = carts.findIndex((product) => product.productId === id)
        console.log(carts);
    }else{
    carts.push({productId : id , quantity : qty});
    alert(` " ${id} " added in your cart`);
    numCart.textContent = count();
    console.log(carts);
    }
}

function count(){
    let count = 0;
    for(let i=0; i < carts.length ; i++){
        count += carts[i].quantity;
    }
    return count;
}