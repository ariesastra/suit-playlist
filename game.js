// Getting localStorage
window.localStorage;

let userInput = ''; // gunting, kertas, batu
let botRandom = 0;
let botInput = '';
let countUser = 0;
let countBot = 0;
let round = 1; //default round 
let countRound = 0;

window.localStorage;

let name2 = document.getElementById('name123');
name2.innerText = localStorage.getItem('name');
round = localStorage.getItem('round');
let icon2 = document.getElementById('icon123');
icon2.src = localStorage.getItem('iconUrl')

function pilihanBot() {
  botRandom = Math.random();
  if (botRandom < 0.33) {
    botInput = 'gunting';
  } else if (botRandom < 0.67) {
    botInput = 'kertas';
  } else {
    botInput = 'batu'
  }
  return botInput
}

// =========================BREAKOUT FUNCTION=========================

function rulesSuwit() {
  if (userInput === 'gunting') {
    if (botInput === 'batu') {
      countBot++
      return countBot
    } else if (botInput === 'kertas') {
      countUser++
      return countUser
    } else { console.log('seri'); }
  } else if (userInput === 'batu') {
    if (botInput === 'kertas') {
      countBot++
      return countBot
    } else if (botInput === 'gunting') {
      countUser++
      return countUser
    } else { console.log('seri'); }
  } else if (userInput === 'kertas') {
    if (botInput === 'gunting') {
      countBot++
      return countBot
    } else if (botInput === 'batu') {
      countUser++
      return countUser
    } else { console.log('seri'); }
  }
}

// =========================BREAKOUT FUNCTION=========================

// Set interval image
function botSpiningImage() {
  let images = ['batu.png', 'kertas.png', 'gunting.png'];
  let url = "css/image/";

  let image = document.getElementById('botImage');

  let waktuStart = 0;
  waktuStart = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuStart > 2000) {
      image.src = `css/image/${botInput}.png`;
      clearInterval;
      return;
    }
    let random = Math.floor(Math.random() * 3);
    image.src = `css/image/${images[random]}`;
  }, 50);
}

// botSpiningImage();

// =========================BREAKOUT FUNCTION=========================

// Function Cek Menang
function cekMenang(countRound, round, countUser, countBot) {
  setTimeout(function () {
    // Counting Round and Score
    document.querySelector('.scoreUser').innerHTML = countUser;
    document.querySelector('.scoreBot').innerHTML = countBot;
    document.querySelector('#roundTambah').innerHTML = countRound + 1;

    // Get Modal Element
    let titleModal = document.getElementById('title-modal');
    let modalParent = document.getElementById('text-head');
    let modalBody = document.getElementById('body-modal');

    // console.log(countUser, countBot, countRound);
    // console.log(userInput, botInput);

    if (countRound == round) {
      document.querySelector('#roundTambah').innerHTML = ' Over!';
      // User Menang
      if (countUser > countBot) {
        // let laguID = 'U5pPk811rVo';

        // Set Local storage status user
        localStorage.setItem('statusUser', 'menang');

        titleModal.innerText = 'Selamat, Anda menang lawan BOT !';
        modalParent.innerText = 'Silahkan nikmati lagu yang Anda pilih, Enjoy !';

        // get choosen lagi from local storage
        let lagu = localStorage.getItem('lagu');
        let ytId = lagu.split("=")[1];


        $("#youtube")[0].src = `https://www.youtube.com/embed/${ytId}`;
        $('#myModal').modal('show');
        play()
      }
      // User Kalah
      else if (countBot > countUser) {
        localStorage.setItem('statusUser', 'kalah')

        titleModal.innerText = 'PAYAH, Kalah coba geh sama BOT !';
        modalParent.innerText = 'BOT Menang, Hacktiv8 Digoyaaangg !';

        // $('#youtube')[0].src = 'https://www.youtube.com/embed/ltzYprV091c';
        $('#youtube')[0].src = 'https://www.youtube.com/embed/TPiq6UwJZYw';
        $('#myModal').modal('show');
        play();
      }
      // User Draw
      else {
        // localStorage.setItem("draw", true);
        localStorage.setItem('statusUser', 'seri');

        titleModal.innerText = 'Ish, DRAAAWWWWW !';
        modalParent.innerHTML = "Main Lagi doong !";

        $("#youtube").remove();
        $('#myModal').modal('show');
      }
    }
  }, 2000)
}

// Function per suwit
function suwitBatu() {
  let pilihBatu = document.querySelector("#batu");

  userInput = 'batu';
  countRound++
  botInput = pilihanBot();

  botSpiningImage();
  rulesSuwit();

  cekMenang(countRound, round, countUser, countBot);
  // console.log(rulesSuwit(), '< game.js');
}

function suwitKertas() {
  let pilihKertas = document.querySelector("#kertas");

  userInput = 'kertas';
  countRound++
  botInput = pilihanBot();

  botSpiningImage();
  rulesSuwit();

  cekMenang(countRound, round, countUser, countBot);
}

function suwitGunting() {
  let pilihGunting = document.querySelector("#gunting");

  userInput = 'gunting';
  countRound++
  botInput = pilihanBot();

  botSpiningImage();
  rulesSuwit();

  cekMenang(countRound, round, countUser, countBot);
}

// Stop Youtube
function stop() {
  $("#youtube")[0].src += "?autoplay=0";
}

// Play Youtube
function play() {
  $("#youtube")[0].src += "?autoplay=1";
}

// Send Choosed Song
function songId() {

}