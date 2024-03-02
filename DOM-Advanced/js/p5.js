 let firstLi = document.querySelector("li");
/*  
console.log(firstLi);//<li> item-1</li>
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement.parentElement);
//------------------------------------------------------------------------------ 

let ul = document.querySelector("ul");

console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].innerText);
ul.children[2].innerText = "Apple"

------------------------------------------------------------------*/
//next Element Sibling
// console.log(firstLi.nextElementSibling.textContent);
// console.log(firstLi.nextElementSibling.nextElementSibling.textContent);
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent);//item-4

// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent);//item-5

// -------------------------------------------------------------------

//previous Element Sibbling 
let fourthLi = document.querySelector(".fourth");
console.log(fourthLi);
console.log(fourthLi.previousElementSibling.textContent);//item-3
console.log(fourthLi.previousElementSibling.previousElementSibling.textContent);//item-2