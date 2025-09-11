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