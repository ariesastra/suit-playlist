let userInput = ''; // gunting, kertas, batu
let botRandom = 0;
let botInput = '';
let countUser = 0;
let countBot = 0;
let round = 3;
let countRound = 0;

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

function rulesSuwit() {
    if (userInput === 'gunting') {
        if (botInput === 'batu') {
            countBot++
            return countBot
        } else if (botInput === 'kertas') {
            countUser++
            return countUser
        } else {console.log('seri');}
    } else if (userInput === 'batu') {
        if (botInput === 'kertas') {
            countBot++
            return countBot
        } else if (botInput === 'gunting') {
            countUser++
            return countUser
        } else {console.log('seri');}
    } else if (userInput === 'kertas') {
        if (botInput === 'gunting') {
            countBot++
            return countBot
        } else if (botInput === 'batu') {
            countUser++
            return countUser
        } else {console.log('seri');}
    }
}

    let pilihBatu = document.querySelector("#batu");
    pilihBatu.addEventListener('click', function() {
        countRound++
        userInput = 'batu';
        botInput = pilihanBot();
        rulesSuwit();
        document.querySelector('.scoreUser').innerHTML = countUser;
        document.querySelector('.scoreBot').innerHTML = countBot;
        
        console.log(countUser, countBot, countRound);
        console.log(userInput, botInput);
        if (countRound == round) {
            if (countUser > countBot) {
                alert('Selamat kamu menang alias Hoki');
                if(!alert('Reloading Page!')){window.location.reload();};
            } else if (countBot > countUser) {
                alert('HAHAHHAHA cupu kamu kalah sama bot');
                if(!alert('Reloading Page!')){window.location.reload();};
            } else {
                alert('Yah seri garame :(');
                if(!alert('Reloading Page!')){window.location.reload();};
            }
        }
    })
    let pilihKertas = document.querySelector("#kertas");
    pilihKertas.addEventListener('click', function() {
        countRound++
        userInput = 'kertas';
        botInput = pilihanBot();
        rulesSuwit();
        document.querySelector('.scoreUser').innerHTML = countUser;
        document.querySelector('.scoreBot').innerHTML = countBot;
        
        console.log(countUser, countBot, countRound);
        console.log(userInput, botInput);
        if (countRound == round) {
            if (countUser > countBot) {
                alert('Selamat kamu menang alias Hoki');
                if(!alert('Reloading Page!')){window.location.reload();};
            } else if (countBot > countUser) {
                alert('HAHAHHAHA cupu kamu kalah sama bot')
                if(!alert('Reloading Page!')){window.location.reload();};
            } else {
                alert('Yah seri garame :(')
                if(!alert('Reloading Page!')){window.location.reload();};
            }
        }
    })
    let pilihGunting = document.querySelector("#gunting");
    pilihGunting.addEventListener('click', function() {
        countRound++
        userInput = 'gunting';
        botInput = pilihanBot();
        rulesSuwit();
        document.querySelector('.scoreUser').innerHTML = countUser;
        document.querySelector('.scoreBot').innerHTML = countBot;
        
        console.log(countUser, countBot, countRound);
        console.log(userInput, botInput);
        if (countRound == round) {
            if (countUser > countBot) {
                alert('Selamat kamu menang alias Hoki');
                if(!alert('Reloading Page!')){window.location.reload();};
            } else if (countBot > countUser) {
                alert('HAHAHHAHA cupu kamu kalah sama bot');
                if(!alert('Reloading Page!')){window.location.reload();};
            } else {
                alert('Yah seri garame :(');
                if(!alert('Reloading Page!')){window.location.reload();};
            }
        }
    })
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
