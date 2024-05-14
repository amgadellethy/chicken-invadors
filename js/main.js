// HTML Element
var spaceship = document.querySelector(".spaceship");
var bullet = document.querySelector(".bullet");
var chickenContainer = document.querySelector(".container");
// console.log(chickenContainer);



for (var i = 0; i <= 50; i++){
    chickenContainer.innerHTML += `<img src="./imgs/chicken.webp" class="chicken" alt="" />`
}


// App Variables
var horizontal;
var vertical; 




// functions

// Events
document.addEventListener("mousemove", function (e) {
    // console.log(e.clientX, e.clientY);
    spaceship.style.left = `${e.clientX}px`;
    spaceship.style.top = `${e.clientY}px`;
    horizontal = `${e.clientX}`;
    vertical = `${e.clientY}`;
});
document.addEventListener("click", function () {
    bullet.play();
    
})
document.addEventListener("keydown", function (e) {
    spaceship.style.transition = `.2s`;
    switch (e.code) {
        case "ArrowLeft":
            horizontal -= 70;
            spaceship.style.left = `${horizontal}px`;
            break;
        case "ArrowRight":
            horizontal += 70;
            spaceship.style.left = `${horizontal}px`;
            break;
        case "ArrowUp":
            vertical -= 70;
            spaceship.style.top = `${vertical}px`;
            break;
        case "ArrowDown":
            vertical += 70;
            spaceship.style.top = `${vertical}px`;
            break;
        case "Space":
            bullet.play();
            break
    }
})
