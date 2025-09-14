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
        img: 'img/1.webp',
        name: 'nike',
        price: 500,
        description: 'It is the best of the best',
    },
    {
        id: 1,
        img: 'img/2.webp',
        name: 'Nike',
        price: 600,
        description: 'It is the best of the best',
    },
       {
        id: 2,
        img: 'img/1.webp',
        name: 'nike',
        price: 500,
        description: 'It is the best of the best',
    },
    {
        id: 3,
        img: 'img/2.webp',
        name: 'Nike',
        price: 600,
        description: 'It is the best of the best',
    },
       {
        id: 4,
        img: 'img/1.webp',
        name: 'nike',
        price: 500,
        description: 'It is the best of the best',
    },
    {
        id: 5,
        img: 'img/2.webp',
        name: 'Nike',
        price: 600,
        description: 'It is the best of the best',
    },
]
// Функция, которая создаст карточку
function createCard() {
    
}



//Функция, которая добавит карточки в контейнер
function addCardToContainer() {

}


// При загрузке страницы 
