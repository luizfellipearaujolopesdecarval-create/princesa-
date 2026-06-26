const pages = document.querySelectorAll(".page");

let currentPage = 0;

function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if(currentPage >= pages.length){
        currentPage = pages.length - 1;
    }

    pages[currentPage].classList.add("active");

}

// Corações caindo

const hearts = document.querySelector(".hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    heart.style.opacity = "0.8";
    heart.style.transition = "transform 6s linear, opacity 6s linear";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(110vh)";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 400);
