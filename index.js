window.localStorage;

function getIcon(name) {
  let nameUrl = name.replace(/ /g, "%20");
  let url = `https://avatars.dicebear.com/api/adventurer/${nameUrl}.svg`;

  return url;
}

let lagu = [
  {
    judul: 'Indonesia Raya',
    url: 'https://www.youtube.com/watch?v=UuPaS81n0xg'
  },
  {
    judul: 'Pelangi',
    url: 'https://www.youtube.com/watch?v=7svVeEhdbE8'
  },
  {
    judul: 'John Lennon - Imagine',
    url: 'https://www.youtube.com/watch?v=2Q4WQgPJn_w'
  },
  {
    judul: 'Katy Perry - Last Friday Night [T.G.I.F]',
    url: 'https://www.youtube.com/watch?v=lCMJA9jyEMg'
  },
  {
    judul: 'Michael Jackson - Beat It',
    url: 'https://www.youtube.com/watch?v=oRdxUFDoQe0'
  },
  {
    judul: 'Mbah Surip - Tak Gendong',
    url: 'https://www.youtube.com/watch?v=Ctklujx7AJ0'
  },
  {
    judul: 'Bruno Mars - The Lazy Song',
    url: 'https://www.youtube.com/watch?v=fLexgOxsZu0'
  },
]


function play() {
  // initial data
  data = {
    nama: 'Tondiki',
    lagu: [],
    round: 0,
    icon: '',
  }

  // create variable
  let name = data.nama;

  // call function getIcon
  let icon = getIcon(name);
  data.icon = icon;

  return data;
}

// console.log(play());

let usernameInput = '';
let laguInput = '';
let roundInput = '';
let buttonInput = document.querySelector('.buttonInput')

function myFunction() {
  let mylist = document.getElementById("exampleFormControlSelect1");
  return mylist.options[mylist.selectedIndex].text
}

function alertCoba() {
  usernameInput = document.getElementById('nama').value;
  laguInput = document.querySelector('.lagu').value;
  roundInput = document.getElementById('number').value;

  console.log(laguInput);

  if (usernameInput && roundInput) {
    localStorage.setItem("name", usernameInput)
    localStorage.setItem("round", roundInput)

    for (let i = 0; i < lagu.length; i++) {
      if (myFunction() == lagu[i].judul) {
        localStorage.setItem("lagu", lagu[i].url)
      }
    }

    localStorage.setItem('iconUrl', iconGenDoc.src)

    window.location.href = 'game.html'
  }
  else alert('Isi dong data diri Andah!');

}

let iconGenDoc = document.getElementById('iconGen');
let namaUser = document.getElementById('nama')

namaUser.addEventListener('keydown', (e) => {
  const text = e.currentTarget.value;
  // TODO: Make HTTP Request Here
  setTimeout(function () {
    let url = getIcon(namaUser.value)
    iconGenDoc.src = url;
  }, 1);
});
// let nameUrl = name.replace(/ /g, "%20");




