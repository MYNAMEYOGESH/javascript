var btn = document.getElementById('btn');
var tags = document.getElementsByTagName('h1');


btn.addEventListener("check",(event) => {
    event.preventDefault();

    console.log(tags);
    
    console.log(tags.length);
});