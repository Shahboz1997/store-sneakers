
// Данные
let productData = [
    {
        id: 0,
        img: 'img/5.webp',
        name: 'Nike',
        price: '500 ₽',
        stock:'9222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#ff0000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Новые поступления',
        rating:4,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
        review: '51 отзыв',
    },
    {
        id: 1,
        img:'img/11.webp',
        name: 'Nike',
        price: '600 ₽ ',
        stock:'8222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#008000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Из-за рубежа',
        rating:4.5,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
        review: '51 отзыв',
    },
       {
        id: 2,
        img: 'img/15.webp',
        name: 'Nike',
        price: '700 ₽',
        stock:'9092 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#2c2929ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Кроссовки для детей',
        rating:4.6,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
        review: '51 отзыв',
    },
    {
        id: 3,
        img:'img/19.webp',
        name: 'Nike',
        price: '800 ₽',
        stock:'7222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#c2b5b5ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Кроссовки для взрослых',
        rating:3.4,
        review: '51 отзыв',
    },
       {
        id: 4,
        img: 'img/100.JPG',
        name: 'Nike',
        price: '900 ₽',
        stock:'6222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#a9a9a9',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Повседневные',
        rating:4.9,
        review: '51 отзыв',
        
    },
    {
        id: 5,
        img: 'img/23.webp',
        name: 'Nike',
        price: '1000 ₽',
        stock:'11222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#ffff00',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Фитнес',
        rating:5,
        review: '51 отзыв',
    },
     {
        id: 6,
        img: 'img/27.webp',
        name: 'Nike',
        price: '1100 ₽',
        stock:'6222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#0a0a63ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Аксессуары',
        rating:4.8,
        review: '51 отзыв',
    },
     {
        id: 7,
        img: 'img/114.jpg',
        name: 'Nike',
        price: '1200 ₽',
        stock:'1922 ₽',
        leftover: '90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#f3ebe3ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Организация',
        rating:3.4,
        review: '51 отзыв',
    },
     {
        id: 8,
        img: 'img/2.jpg',
        name: 'Nike',
        price: '1300 ₽',
        stock:'10222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#706f67ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Путешествие',
        rating:2.4,  
        review: '51 отзыв',  
    },
      {
        id: 9,
        img: 'img/114.webp',
        name: 'Nike',
        price: '1400 ₽',
        stock:'9322 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#d84e65ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Распродажа',
        rating:2.5,
        review:'51 отзыв',
    },
         {
        id: 10,
        img: 'img/31.webp',
        name: 'Nike',
        price: '1400 ₽',
        stock:'13222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Распродажа',
        rating:1.3,
        review:'51 отзыв',
    },
         {
        id: 11,
        img: 'img/113.webp',
        name: 'Nike',
        price: '1400 ₽',
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Распродажа',
        rating:2,
        review:'51 отзыв',
    },
       {
        id: 12,
        img: 'img/113.webp',
        name: 'Nike',
        price: '1400 ₽',
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Распродажа',
        rating:2,
        review:'51 отзыв',
    },
       {
        id: 13,
        img: 'img/113.webp',
        name: 'Nike',
        price: '1400 ₽',
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Распродажа',
        rating:2,
        review:'51 отзыв',
    },
       {
        id: 14,
        img: 'img/113.webp',
        name: 'Nike',
        price: '1400 ₽',
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'Распродажа',
        rating:2,
        review:'51 отзыв',
    },
]
const productsContainer = document.querySelector(".products-container");
const productsTemplate = document.querySelector(".product-card-template");
const fragment = document.createDocumentFragment();

function renderProducts() {
     productData.forEach(product => {                           
            const clone = productsTemplate.content.cloneNode(true);                 
            const card = clone.querySelector('.product-card');
          
            const imgContainer = card.querySelector(".product-img");
            const productImage = imgContainer.querySelector(".image");
            productImage.src = product.img;                 
            productImage.alt = product.name;    

            const productInfo = card.querySelector('.info');

            productInfo.querySelector('.name').textContent = product.name;                 
            productInfo.querySelector('.price').textContent = product.price;    
            productInfo.querySelector('.stock').textContent = product.stock;  
            productInfo.querySelector('.left-over').textContent = product.leftover;               
            productInfo.querySelector('.description').textContent = product.description; 
            productInfo.querySelector('.color').textContent = product.color;  
            productInfo.querySelector('.circle').style.backgroundColor = product.circle;
            productInfo.querySelector('.category').textContent = product.category;                
            productInfo.querySelector('.rating').textContent = product.rating;   
            productInfo.querySelector('.re-view').textContent = product. review;   

                
            fragment.appendChild(card);             
        });              
                  
        productsContainer.innerHTML = '';             
        productsContainer.appendChild(fragment);         
    }          

document.addEventListener('DOMContentLoaded', renderProducts);

// Поисковик
const copyProductData = productData.slice();

const search = document.querySelector(".input-cnt");

const productsList = document.getElementById("productData");
console.log(productsList);

const searchInput = search.querySelector("#search-input");
console.log(searchInput);
const searchIcon = search.querySelector(".material-icons");

let query = null;

// Обработчик ввода в поле поиска 
searchInput.addEventListener("input", function(){
    query = this.value.toLowerCase();
});

// Обработчик клика на кнопку поиска
searchIcon.addEventListener("click", function (){
    const resultArray = [];

    productData.forEach(item => {
       const dataItem = Object.values(item);
       let isFind = false;
       dataItem.forEach(str => {
        if (str.toString().toLowerCase().includes(query)) {
            isFind = true;
            return;
        };
       });
       if (isFind) {
        resultArray.push(item);
       }
    });
    console.log("resultArray", resultArray);
    productData = [...resultArray];
    renderProducts();
});


const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const priceListCollection = dropdownMenu.querySelectorAll(".pricelist");

let activeSortType = "notchoice";

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});



function sortProducts(sortType) {
  const copyProductData = productData.slice();
  switch (sortType) {
    case "notchoice":
      break;
    case "raiting":
      //Отсортировать массив по убыванию рейтинга
      break;
    case "pricemore":
      //По возрастанию
      break;
    case "priceless":
      //По убывмнию
      break;
    case "sale":
      //Фильтрация
      break;
    case "top":
      // Фильтрация
      break;
  }
  return copyProductData;
}


priceListCollection.forEach(item => {
  item.addEventListener("click", (evt) => {
    const element = evt.target;
    const elementSortMenu = element.closest(".pricelist");
    
    priceListCollection.forEach(item => {
      item.classList.remove("active");
    });
    elementSortMenu.classList.add("active");

    activeSortType = elementSortMenu.id;
    productData = [...sortProducts(activeSortType)];
    renderProducts();
    
  })
})



const demo = document.getElementById("demo");
console.log(demo);

const dropdemo = document.getElementById("demodown");
console.log(dropdemo);

const togglList = document.getElementById("arrowlist");
console.log(togglList);


const togglListD = function () {
  dropdemo.classList.toggle("shown");
   togglList.classList.toggle("arrowlist");
};

demo.addEventListener("click", function (element) {
  element.stopPropagation();
  togglListD();
});

document.documentElement.addEventListener("click", function (element) {
  if (dropdemo.classList.contains("shown")) {
     togglListD();
  }
});




