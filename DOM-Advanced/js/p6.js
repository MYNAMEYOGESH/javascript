
let set = document.querySelector("#set");
let get = document.querySelector("#get");

let blk = document.querySelector("div");
let image = document.querySelector("img");

set.addEventListener("click", function(){
    blk.setAttribute("class", "circle");
    image.setAttribute("src", "https://picsum.photos/id/122/400/400");
});

get.addEventListener("click", function(){
    let res = image.getAttribute("src");
    console.log(`res =`,res);
});