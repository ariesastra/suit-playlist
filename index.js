function getIcon(name) {
  let nameUrl = name.replace(/ /g, "%20");
  let url = `https://avatars.dicebear.com/api/adventurer/${nameUrl}.svg`;

  return url;
}

function getLagu() {
  let lagu = [
    {
      judul: '',
      url: 'https://www.youtube.com/watch?v=UuPaS81n0xg'
    },
    {
      judul: '',
      url: 'https://www.youtube.com/watch?v=7svVeEhdbE8'
    },
    {
      judul: '',
      url: 'https://www.youtube.com/watch?v=2Q4WQgPJn_w'
    },
    {
      judul: '',
      url: 'https://www.youtube.com/watch?v=CevxZvSJLk8'
    },
    {
      judul: '',
      url: 'https://www.youtube.com/watch?v=oRdxUFDoQe0'
    },
    {
      judul: '',
      url: 'https://www.youtube.com/watch?v=Ctklujx7AJ0'
    },
    {
      judul: '',
      url: 'https://www.youtube.com/watch?v=1PcfRlZcvmM'
    },
  ]

}

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

console.log(play());