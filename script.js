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
        id: 0,
        name: 'Pink Roses',
        image: 'Pink_Roses_24.jpg',
        price: 500
    },
    {
        id: 1,
        name: 'Mixed Flowers',
        image: 'mixe.jpg',
        price: 450
    },
    {
        id: 2,
        name: 'White Rose Buoquet',
        image: 'white-rose-bouquet.webp',
        price: 400
    },
    
    {
        id: 3,
        name: 'Radiance',
        image: 'radiance.jpg',
        price: 350
    },
    {
        id: 4,
        name: 'St Joseph Lilly Bunch',
        image: 'mixed-st-joseph-lily-bunch.webp',
        price: 300
    },
    {
        id: 5,
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