function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayRandomImage() {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
  ];

  const randomIndex = getRandomNumber(0, images.length - 1);
  const randomImage = images[randomIndex];

  const imgElement = document.createElement('img');
  imgElement.src = `images/${randomImage}`;

  document.body.appendChild(imgElement);
}

displayRandomImage();
