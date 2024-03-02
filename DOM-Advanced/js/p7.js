
let random = document.querySelector("#random");
let image = document.querySelector("img");

let imgArr = [
    "https://picsum.photos/id/125/1400/800",
    "https://picsum.photos/id/500/1400/800",
    "https://picsum.photos/id/160/1400/800",
    "https://picsum.photos/id/162/1400/800",
    "https://picsum.photos/id/168/1400/800",
    "https://picsum.photos/id/169/1400/800",
    "https://picsum.photos/id/162/1400/800",
    "https://picsum.photos/id/163/1400/800",
    "https://picsum.photos/id/170/1400/800",
    "https://picsum.photos/id/171/1400/800",
    "https://picsum.photos/id/178/1400/800",
    "https://picsum.photos/id/150/1400/800",
    "https://picsum.photos/id/159/1400/800"
];

/* random.addEventListener('click',function(){
    let res = imgArr[Math.floor(Math.random() * imgArr.length)]
    image.setAttribute("src",res)
}) */

setInterval(function(){
    let res = imgArr[Math.floor(Math.random() * imgArr.length)]
    image.setAttribute("src",res);
},2000);