let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Pink Roses',
        image: 'Pink_Roses_24.jpg',
        price: 500
    },
    {
        id: 2,
        name: 'Mixed Flowers',
        image: 'mixe.jpg',
        price: 400
    },
    {
        id: 3,
        name: 'White Rose Buoquet',
        image: 'white-rose-bouquet.webp',
        price: 400
    },
    
    {
        id: 4,
        name: 'Radiance',
        image: 'radiance.jpg',
        price: 350
    },
    {
        id: 5,
        name: 'St Joseph Lilly Bunch',
        image: 'mixed-st-joseph-lily-bunch.webp',
        price: 300
    },
    {
        id: 6,
        name: 'Mixed Roses',
        image: 'mixed-roses.jpg',
        price: 400
    },
];

let lisCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart></button>
            `;
            list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(lisCards[key] == null){
        lisCards[key] = JSON.parse(JSON.stringify(products[key]));
        lisCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    lisCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
    
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText = 'R ' +totalPrice.toLocaleString()+'.00';
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete lisCards[key];
    }else{
        lisCards[key].quantity = quantity;
        lisCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}