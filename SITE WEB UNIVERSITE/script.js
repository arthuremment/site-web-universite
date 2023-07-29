var links = document.querySelector('.nav-links');
const btn_menu = document.querySelector(".menu");
const btn_close = document.querySelector(".close");

btn_menu.addEventListener("click", ()=> {
    links.style.right= "0px"
});

btn_close.addEventListener("click", ()=> {
    links.style.right= "-200px"
});



window.addEventListener("load", animateText);

function animateText(){
    const text = document.querySelector(".bienvenue")
    let textContent = text.innerHTML;
    let index = 0;

    setInterval(() => {
        index = (index + 1) % (textContent.length + 1);
        text.innerHTML = textContent.substring(0, index);
    }, 100);
}

