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
        name: 'Product name 1',
        image: 'image/pink-roses.jpg',
        price: 400
    },
    {
        id: 1,
        name: 'Product name 2',
        image: 'image/pink-roses.jpg',
        price: 400
    },
    {
        id: 2,
        name: 'Product name 3',
        image: 'image/pink-roses.jpg',
        price: 400
    },
    {
        id: 3,
        name: 'Product name 4',
        image: 'image/pink-roses.jpg',
        price: 400
    },
    {
        id: 4,
        name: 'Product name 5',
        image: 'image/pink-roses.jpg',
        price: 400
    },
    {
        id: 5,
        name: 'Product name 6',
        image: 'image/pink-roses.jpg',
        price: 400
    },
];