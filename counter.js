// Binding elements
const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

// Handling plus click
plusBtn.addEventListener("click", (e) => {
    e.preventDefault;

    // resetting CSS animation
    plusBtn.classList.remove("animated");
    void plusBtn.offsetWidth; //triggers reflow
    plusBtn.classList.add("animated");

    // incrementing the counter
    counter.innerText = parseInt(counter.innerText, 10) + 1;
})

// Handling minus click
minusBtn.addEventListener("click", (e) => {
    e.preventDefault;

    // resetting CSS animation
    minusBtn.classList.remove("animated");
    void minusBtn.offsetWidth; //triggers reflow
    minusBtn.classList.add("animated");

    // decrementing the counter
    counter.innerText = parseInt(counter.innerText, 10) - 1;
})