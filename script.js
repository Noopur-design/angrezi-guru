document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector(".bar")
    const closebar = document.querySelector(".closebar")
    const navLinks = document.querySelector(".navlinks");

    bar.addEventListener("click", () => {
        navLinks.style.display = "flex"; 
        bar.style.display = "none"; 
        closebar.style.display = "block"; 
    });

    closebar.addEventListener("click", () => {
        navLinks.style.display = "none"; 
        bar.style.display = "block"; 
        closebar.style.display = "none"; 
    });
})


// function toggleMenu() {
//     const bar = document.querySelector(".bar");
//     const closebar = document.querySelector(".closebar");
//     const navLinks = document.querySelector(".navlinks");


//     navLinks.classList.toggle('show');

//     if (navLinks.classList.contains('show')) {
//         bar.style.display = "none";
//         closebar.style.display = "block"; 
//     } else {
//         bar.style.display = "block";     
//         closebar.style.display = "none"; 
//     }
// }

