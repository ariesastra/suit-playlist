// Set interval image
function botSpiningImage() {
  let images = ['batu.png', 'kertas.png', 'gunting.png'];
  let url = "css/image/";

  let image = document.getElementById('botImage');
  // console.log(image)

  setInterval(() => {
    let random = Math.floor(Math.random() * 3);
    image.src = `css/image/${images[random]}`;
  }, 100);

}

// botSpiningImage();