const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
// body.backgroundImage = `url(${"img/${chosenImage}"})`;

const image = new Image();
image.src = `img/${chosenImage}`;
image.classList.add("bgImage");
document.body.appendChild(image);