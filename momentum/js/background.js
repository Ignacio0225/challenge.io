const images = ["0.webp", "1.webp", "2.webp"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);

// const bgi = document.querySelector(".bg");
