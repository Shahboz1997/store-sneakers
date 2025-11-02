//Словарь
const categories = {
  new: "Новые поступления",
  adults:"Кроссовки для взрослых ",
  children:"Кроссовки для детей",
  abroad:"Из-за рубежа",
  sale:"Распродажа",
  everyday:"Повседневные",
  fitness:"Фитнес",
  travel:"Путешествие",
  office:"Для офиса",
  accessories:"Аксессуары",
  };


// Данные
let productData = [
    {
        id: 0,
        img: 'img/5.webp',
        name: 'Nike',
        price: 500,
        stock:'9222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:"#ff0000",
        // size:['36', '38', '40','42', '44', '46'],
        category:'new',
        rating:4,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
        review: '51 отзыв',
        new: true,
    },
    {
        id: 1,
        img:'img/11.webp',
        name: 'Nike',
        price: 300,
        stock:'8222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#008000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'abroad',
        rating:4.5,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
        review: '51 отзыв',
        new: false,
    },
       {
        id: 2,
        img: 'img/15.webp',
        name: 'Nike',
        price: 4000,
        stock:'9092 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#2c2929ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'children',
        rating:4.6,
        overview:'Достоинства: Очень красивые. лучше, чем на фото.',
        review: '51 отзыв',
        new: true,
    },
    {
        id: 3,
        img:'img/19.webp',
        name: 'Nike',
        price: 800,
        stock:'7222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#c2b5b5ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'adults',
        rating:3.4,
        review: '51 отзыв',
        new: false,
    },
       {
        id: 4,
        img: 'img/100.JPG',
        name: 'Nike',
        price: 909,
        stock:'6222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#a9a9a9',
        // size:['36', '38', '40','42', '44', '46'],
        category:'everyday',
        rating:4.9,
        review: '51 отзыв',
        new: true,
        
    },
    {
        id: 5,
        img: 'img/23.webp',
        name: 'Nike',
        price: 1000,
        stock:'11222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#ffff00',
        // size:['36', '38', '40','42', '44', '46'],
        category:'fitness',
        rating:5,
        review: '51 отзыв',
        new: true,
    
    },
     {
        id: 6,
        img: 'img/27.webp',
        name: 'Nike',
        price: 1100,
        stock:'6222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#0a0a63ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'accessories',
        rating:4.8,
        review: '51 отзыв',
        new: true,
    },
     {
        id: 7,
        img: 'img/114.jpg',
        name: 'Nike',
        price: 1200,
        stock:'1922 ₽',
        leftover: '90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#f3ebe3ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'office',
        rating:3.4,
        review: '51 отзыв',
        new: true,
    },
     {
        id: 8,
        img: 'img/2.jpg',
        name: 'Nike',
        price: 1300,
        stock:'10222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#706f67ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'travel',
        rating:2.4,  
        review: '51 отзыв',  
        new: true,
    },
      {
        id: 9,
        img: 'img/114.webp',
        name: 'Nike',
        price: 1400,
        stock:'9322 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#d84e65ff',
        // size:['36', '38', '40','42', '44', '46'],
        category:'sale',
        rating:2.5,
        review:'51 отзыв',
        new: true,
    },
         {
        id: 10,
        img: 'img/31.webp',
        name: 'Nike',
        price: 1400,
        stock:'13222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'sale',
        rating:1.3,
        review:'51 отзыв',
        new: false,
    },
         {
        id: 11,
        img: 'img/113.webp',
        name: 'Nike',
        price: 1400,
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'sale',
        rating:2,
        review:'51 отзыв',
        new: true,
    },
       {
        id: 12,
        img: 'img/113.webp',
        name: 'Nike',
        price: 1400,
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'sale',
        rating:2,
        review:'51 отзыв',
        new: true,
    },
       {
        id: 13,
        img: 'img/113.webp',
        name: 'Nike',
        price: 1400,
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'sale',
        rating:2,
        review:'51 отзыв',
        new: true,
    },
       {
        id: 14,
        img: 'img/113.webp',
        name: 'Nike',
        price: 1400,
        stock:'14222 ₽',
        leftover:'90 штук осталось',
        description: 'Для бега и прогулок по городу',
        color:'Цвет ',
        circle:'#000000',
        // size:['36', '38', '40','42', '44', '46'],
        category:'sale',
        rating:2,
        review:'51 отзыв',
        new: true,
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
            productInfo.querySelector('.price').querySelector("span").textContent = product.price;
            productInfo.querySelector('.stock').textContent = product.stock;  
            productInfo.querySelector('.left-over').textContent = product.leftover;               
            productInfo.querySelector('.description').textContent = product.description; 
            productInfo.querySelector('.color').textContent = product.color;  
            productInfo.querySelector('.circle').style.backgroundColor = product.circle;
            productInfo.querySelector('.category').textContent = categories[product.category];                
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

const categoryArrow = document.getElementById("category");
// const categorySection =categoryArrow.getElementById("filter-section-category");
const categoryNew = document.getElementById("new");
console.log(categoryNew, "Новые поступления");


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
//Сортировка
function sortProducts(sortType) {
  let copyArray = copyProductData.slice();
  console.log(sortType);
  switch (sortType) {
    case "notchoice":
      break;
    case "raiting":
      copyArray = copyArray.sort((a, b) => b.rating - a.rating);
      break;
    case "pricemore":
      copyArray = copyArray.sort((a, b) => a.price - b.price);
      break;
    case "priceless":
      copyArray = copyArray.sort((a, b) => b.price - a.price);
      break;
    case "sale":
      copyArray = copyArray.filter(item => item.category == "sale");
      break;
    case "top":
      copyArray = copyArray.filter(item => item.new);
      break;
  }
  return copyArray;
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


//Левые фильтры
const leftFiltersContainer = document.querySelector("#left-filters-container");
console.log("leftFiltersContainer", leftFiltersContainer );

const leftFiltersButton = leftFiltersContainer.querySelector("#left-filters-button");
console.log("leftFilters",leftFiltersButton);

const dropLeftFilters = leftFiltersContainer.querySelector("#drop-left-filters");
console.log("dropLeftFilters", dropLeftFilters);

const arrow = leftFiltersContainer.querySelector("#arrow-list");


const leftFiltersShow = function () {
  dropLeftFilters.classList.toggle("show");
  arrow.classList.toggle("arrow");
};

leftFiltersButton.addEventListener("click", function (element) {
  element.stopPropagation();
  leftFiltersShow();
});

// document.documentElement.addEventListener("click", function (element) {
//   if (dropdemo.classList.contains("shown")) {
//      togglListD();
//   }
// });


const colorButton = document.querySelector("#color-button");
const colorCollection = document.querySelector("#color-collection");

colorButton.addEventListener("click", function (element) {
  if(colorCollection.style.display === "none"){
    colorCollection.style.display = "block";  // показываем список
  }
  else{
    colorCollection.style.display = "none"; // Скрываем список
  }
});
const categoryButton = document.querySelector("#category-button");
const filterSectionCategory= document.querySelector("#filter-section-category");

categoryButton.addEventListener("click", function(element){
  if(filterSectionCategory.style.display === "none"){
    filterSectionCategory.style.display = "block";
  }
  else{
    filterSectionCategory.style.display ="none";
  }
})

const sizeSneakers = document.querySelector("#size-sneakers");
const filterSectionSize= document.querySelector("#filter-section-size");

sizeSneakers.addEventListener("click", function(element){
  if(filterSectionSize.style.display === "none"){
    filterSectionSize.style.display = "block";
  }
  else{
    filterSectionSize.style.display ="none";
  }

})
const priceButton = document.querySelector("#price-button");
const priceCollection = document.querySelector("#price-collection");

priceButton.addEventListener("click", function(element){
  if(priceCollection.style.display === "none"){
    priceCollection.style.display = "block";
  }
  else{
    priceCollection.style.display ="none";
  }

})







