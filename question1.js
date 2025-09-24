let news1 = {
    heading1 : "this is a updated heading1",
    img1 : "images/a1.jpg",
    discription1 : "this is a updated pera1"
};

let news2 = {
    heading2 : "this is updated heading2",
    img2 : "images/a2.jpg",
    discription2 : "this is updated pera2"
};

let news3 = {
    heading3 : "this is updated heading3",
    img3 : "images/a3.jpg",
    discription3 : "this is updated pera3"
};

let news4 = {
    heading4 : "this is updated heading4",
    img4 : "images/a4.jpg",
    discription4 : "this is updated pera4"
};

let div  = document.querySelector("div");
let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");
let button4 = document.querySelector("#four");


button1.addEventListener('click', () => {
    let h1 = document.querySelector("h1");
    let img = document.querySelector("#mm");
    let p = document.querySelector("p");
    h1.innerText = news1.heading1;
    img.src = news1.img1;
    p.innerText = news1.discription1;
  });

button2.addEventListener('click', () => {
    let h1 = document.querySelector("h1");
    let img = document.querySelector("#mm");
    let p = document.querySelector("p");
    h1.innerText = news2.heading2;
    img.src = news2.img2;
    p.innerText = news2.discription2;
  });
  
button3.addEventListener('click', () => {
    let h1 = document.querySelector("h1");
    let img = document.querySelector("#mm");
    let p = document.querySelector("p");
    h1.innerText = news3.heading3;
    img.src = news3.img3;
    p.innerText = news3.discription3;
  });
  
button4.addEventListener('click', () => {
    let h1 = document.querySelector("h1");
    let img = document.querySelector("#mm");
    let p = document.querySelector("p");
    h1.innerText = news4.heading4;
    img.src = news4.img4;
    p.innerText = news4.discription4;
  });  





