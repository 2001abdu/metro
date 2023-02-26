let accordion=document.querySelector(".link__item");
let accordionItem=document.querySelector(".drop__list-title");

// 2 chisi
let accordion2=document.querySelector(".link__item2");
let accordionItem2=document.querySelector(".drop__list-title2");

// 3 chisi
let accordion3=document.querySelector(".link__item3");
let accordionItem3=document.querySelector(".drop__list-title3");

// 4 chisi

let accordion4=document.querySelector(".link__item4");
let accordionItem4=document.querySelector(".drop__list-title4");

// 5 chisi
let accordion5=document.querySelector(".link__item5");
let accordionItem5=document.querySelector(".drop__list-title5");

let addPlus=document.querySelector(".pluse");
let addPlus1=document.querySelector(".pluse1");
let addPlus2=document.querySelector(".pluse2");
let addPlus3=document.querySelector(".pluse3");
let addPlus4=document.querySelector(".pluse4");

accordion.addEventListener("click",()=>{
    accordionItem.classList.toggle("active");
    addPlus.classList.toggle("addMinuses");
});

accordion2.addEventListener("click",()=>{
    accordionItem2.classList.toggle("active");
    addPlus1.classList.toggle("addMinuses");
});

accordion3.addEventListener("click",()=>{
    accordionItem3.classList.toggle("active");
    addPlus2.classList.toggle("addMinuses");
});

accordion4.addEventListener("click",()=>{
    accordionItem4.classList.toggle("active");
    addPlus3.classList.toggle("addMinuses");
});

accordion5.addEventListener("click",()=>{
    accordionItem5.classList.toggle("active");
    addPlus4.classList.toggle("addMinuses");
});



// bars menu 
let bars=document.querySelector(".bars__menu");
let navLink=document.querySelector(".nav__link-copy");

bars.addEventListener("click", () =>{
    navLink.classList.toggle("show");
});



// slider button 
let sliderBtnLeft=document.querySelector(".button__left");
let sliderBtnRight=document.querySelector(".button__right");

let cardSlider=document.querySelectorAll(".card__slider-item");
let sliderLenght=cardSlider.length;
console.log(sliderLenght);

let addSlider=document.querySelectorAll(".slider__span1");

count=0;
sliderBtnRight.addEventListener("click", () =>{
    cardSlider[count].classList.remove("slider__active");
    addSlider[count].classList.remove("span__activ");
    if(count<cardSlider.length-1){
        count++;
    }else{
        count=0;
    }
    cardSlider[count].classList.add("slider__active");
    addSlider[count].classList.add("span__activ");
});
sliderBtnLeft.addEventListener("click", () =>{
    cardSlider[count].classList.remove("slider__active");
    addSlider[count].classList.remove("span__activ");
    if(count>0){
        count--;
    }else{
        count=0;
    }
    cardSlider[count].classList.add("slider__active");
    addSlider[count].classList.add("span__activ");
});


let addHomes=document.querySelector(".homes");
let addDrop=document.querySelector(".drop__div");

addHomes.addEventListener("click", () =>{
    addDrop.classList.toggle("dropIteam");
});

let addShops=document.querySelector(".shops");
let dropShops=document.querySelector(".drop__shops");
addShops.addEventListener("click", () =>{
    dropShops.classList.toggle("addShops");
});

let addPages=document.querySelector(".pages");
let addPages1=document.querySelector(".add__pages");

addPages.addEventListener("click", () =>{
    addPages1.classList.toggle("addPages")
});

let addElement=document.querySelector(".element");
let addElement2=document.querySelector(".pages__elements");

addElement.addEventListener("click", () =>{
    addElement2.classList.toggle("addElement")
});

let addBlog=document.querySelector(".blogs");
let blogShows=document.querySelector(".add__blog");

addBlog.addEventListener("click", () =>{
    blogShows.classList.toggle("blogShov")
});

// category title 
let addCatergory = document.querySelector(".categoryList");
let categoryaList = document.querySelector(".add__category");

addCatergory.addEventListener("click", () =>{
    categoryaList.classList.toggle("categoryShow")
});

let addHeader = document.querySelector(".site__header")

window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        addHeader.classList.add("headerShop");
    }else{
        addHeader.classList.remove("headerShop")
    }
});

ScrollReveal({
    origin:'top',
    distanse: "30px",
    duretion: 3000,
    reset: true
});

ScrollReveal().reveal(
    ".card__img , .hanger__img, .headphone__img, .keyboard__img,.blueth__img, .gallery__img, .gallery__images"
)