console.log("hello world");
const collectionColor = document.querySelector(".collection");
const collectionButton = collectionColor.querySelector(".color");
const collectionSvg = collectionButton.querySelectorAll(".d-none");
console.log("Hello world");
collectionSvg.forEach((information) =>{
    information.addEventListener("click",(evt)=>{
        const lorem = information.querySelector(".collection-color");
        if (lorem.classList.contains("d-none")) {
            lorem.classList.remove("d-none");
        }
        else{
            lorem.classList.add("d-none");
        }
    
    });
});
console.log("hello world");
// Данные
const productData = [
    {
        id: 0,
        img: ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp', 'img/6.webp'],
        name: 'Nike',
        price: 500,
        description: 'Для бега и прогулок по городу',
        color:'красный',
        size:['36', '38', '40','42', '44', '46'],
        category:'Новые поступления',
        rating:4,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    },
    {
        id: 1,
        img: ['img/11.webp', 'img/12.webp', 'img/13.webp', 'img/14.webp'],
        name: 'Nike',
        price: 600,
        description: 'Для бега и прогулок по городу',
        color:'зеленый',
        size:['36', '38', '40','42', '44', '46'],
        category:'Из-за рубежа',
        rating:4.5,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    },
       {
        id: 2,
        img: ['img/15.webp', 'img/16.webp', 'img/17.webp', 'img/18.webp'],
        name: 'Nike',
        price: 700,
        description: 'Для бега и прогулок по городу',
        color:'черный',
        size:['36', '38', '40','42', '44', '46'],
        category:'Кроссовки для детей',
        rating:4.6,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    },
    {
        id: 3,
        img: ['img/19.webp', 'img/20.webp', 'img/21.webp', 'img/22.webp'],
        name: 'Nike',
        price: 800,
        description: 'Для бега и прогулок по городу',
        color:'белый',
        size:['36', '38', '40','42', '44', '46'],
        category:'Кроссовки для взрослых',
         rating:3.4,
    },
       {
        id: 4,
        img: ['img/10.jpg', 'img/9.jpg', 'img/3.webp', 'img/35.webp', 'img/36.webp'],
        name: 'Nike',
        price: 900,
        description: 'Для бега и прогулок по городу',
        color:'черно-белый',
        size:['36', '38', '40','42', '44', '46'],
        category:'Повседневные',
         rating:4.9,
        
    },
    {
        id: 5,
        img: ['img/23.webp', 'img/24.webp', 'img/25.webp', 'img/26.webp'],
        name: 'Nike',
        price: 1000,
        description: 'Для бега и прогулок по городу',
        color:'желтый',
        size:['36', '38', '40','42', '44', '46'],
        category:'Фитнес',
         rating:5,
    },
     {
        id: 5,
        img: ['img/27.webp', 'img/28.webp', 'img/29.webp', 'img/30.webp'],
        name: 'Nike',
        price: 1100,
        description: 'Для бега и прогулок по городу',
        color:'голубой',
        size:['36', '38', '40','42', '44', '46'],
        category:'Аксессуары',
         rating:4.8,
    },
     {
        id: 5,
        img: ['img/31.webp', 'img/32.webp', 'img/33.webp', 'img/34.webp'],
        name: 'Nike',
        price: 1200,
        description: 'Для бега и прогулок по городу',
        color:'серый',
        size:['36', '38', '40','42', '44', '46'],
        category:'Организация',
         rating:3.4,
    },
     {
        id: 5,
        img: ['img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg'],
        name: 'Nike',
        price: 1300,
        description: 'Для бега и прогулок по городу',
        color:'молочный',
        size:['36', '38', '40','42', '44', '46'],
        category:'Путешествие',
         rating:2.4,    },
      {
        id: 5,
        img: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
        name: 'Nike',
        price: 1400,
        description: 'Для бега и прогулок по городу',
        color:'синий',
        size:['36', '38', '40','42', '44', '46'],
        category:'Распродажа',
         rating:2.5
    },
]
// Функция, которая создаст карточку
function createCard() {
    
}



//Функция, которая добавит карточки в контейнер
function addCardToContainer() {

}


// При загрузке страницы 

console.log("Hello World");
const sortedOut = document.querySelector('.sorted-Out');
const demoVersion = sortedOut.querySelector('.demo');
const demoSort = sortedOut.querySelector('.sort');

sortedOut.forEach((information) =>{
    information.addEvenlistener('click', (evt) => {
        const lorem = information.querySelector('.sort')
        if (lorem.classList.contains('d-none')) {
            lorem.classList.remove('d-none');
        } else{
            lorem.classList.add('d-none');
        }
    });
});
