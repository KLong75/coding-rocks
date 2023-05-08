// .filter demo

const greatAlbums = [
  {
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    year: 1973,
    genre: 'Progressive Rock'
  },
  {
    title: 'OK Computer',
    artist: 'Radiohead',
    year: 1997,
    genre: 'Alternative Rock'
  },
  {
    title: 'Ten',
    artist: 'Pearl Jam',
    year: 1991,
    genre: 'Grunge'
  },
  {
    title: 'Nevermind',
    artist: 'Nirvana',
    year: 1991,
    genre: 'Grunge'
  },
  {
    title: 'Appetite for Destruction',
    artist: 'Guns N\' Roses',
    year: 1987,
    genre: 'Hard Rock'
  },
  {
    title: 'No Code',
    artist: 'Pearl Jam',
    year: 1996,
    genre: 'Grunge'
  },
  {
    title: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    year: 1971,
    genre: 'Hard Rock'
  },
  {
    title: 'The Bends',
    artist: 'Radiohead',
    year: 1995,
    genre: 'Alternative Rock'
  },
  {
    title: 'Wish You Were Here',
    artist: 'Pink Floyd',
    year: 1975,
    genre: 'Progressive Rock'
  },
  {
    title: 'Yield',
    artist: 'Pearl Jam',
    year: 1998,
    genre: 'Grunge'
  },
  {
    title: 'Led Zeppelin II',
    artist: 'Led Zeppelin',
    year: 1969,
    genre: 'Hard Rock'
  },
  {
    title: 'Vs.',
    artist: 'Pearl Jam',
    year: 1993,
    genre: 'Grunge'
  },
  {
    title: 'No Depression',
    artist: 'Uncle Tupelo',
    year: 1990,
    genre: 'Alternative Country'
  },
  {
    title: 'Vitalogy',
    artist: 'Pearl Jam',
    year: 1994,
    genre: 'Grunge'
  },
  {
    title: 'Ride the Lightning',
    artist: 'Metallica',
    year: 1984,
    genre: 'Thrash Metal'
  },
  {
    title: 'Use Your Illusion I',
    artist: 'Guns N\' Roses',
    year: 1991,
    genre: 'Hard Rock'
  },
  {
    title: 'Superunknown',
    artist: 'Soundgarden',
    year: 1994,
    genre: 'Grunge'
  },
  {
    title: 'King Animal',
    artist: 'Soundgarden',
    year: 2012,
    genre: 'Grunge'
  },
  {
    title: 'Lightning Bolt',
    artist: 'Pearl Jam',
    year: 2013,
    genre: 'Grunge'
  },
  {
    title: 'The Devil Put Dinosaurs Here',
    artist: 'Alice in Chains',
    year: 2013,
  },
  {
    title: 'Use Your Illusion II',
    artist: 'Guns N\' Roses',
    year: 1991,
    genre: 'Hard Rock'
  },
  {
    title: 'Facelift',
    artist: 'Alice in Chains',
    year: 1990,
    genre: 'Grunge'
  },
  {
    title: 'Dirt',
    artist: 'Alice in Chains',
    year: 1992,
    genre: 'Grunge'
  },
  {
    title: 'Blind Melon',
    artist: 'Blind Melon',
    year: 1992,
    genre: 'Alternative Rock'
  },
  {
    title: 'American Beauty',
    artist: 'Grateful Dead',
    year: 1970,
    genre: 'Folk Rock'
  },
  {
    title: 'Meat Puppets II',
    artist: 'Meat Puppets',
    year: 1984,
    genre: 'Punk Rock'
  },
  {
    title: 'Up on the Sun',
    artist: 'Meat Puppets',
    year: 1985,
    genre: 'Punk Rock'
  },
  {
    title: 'End Hits',
    artist: 'Fugazi',
    year: 1998,
    genre: 'Post-Hardcore'
  },
  {
    title: 'Gigaton',
    artist: 'Pearl Jam',
    year: 2020,
    genre: 'Grunge'
  },
  {
    title: 'Your Likeness or Please Give Me a Dollar For Health Insurance',
    artist: 'Vain Mainstream',
    year: 2023,
    genre: 'Rock'
  },
  {
    title: 'Repeater',
    artist: 'Fugazi',
    year: 1990,
    genre: 'Post-Hardcore'
  },
  {
    title: 'In Utero',
    artist: 'Nirvana',
    year: 1993,
    genre: 'Grunge'
  },
  {
    title: 'Anodyne',
    artist: 'Uncle Tupelo',
    year: 1993,
    genre: 'Alternative Country'
  }
]

console.log ('Great Albums: ', greatAlbums)

// 1. Filter by artist
const pearlJamAlbums = greatAlbums.filter(album => album.artist === 'Pearl Jam')
console.log('Pearl Jam Albums: ', pearlJamAlbums)
// 2. Filter by genre

// 3. Filter by year

// 4. Filter by decade

// 5. Filter by artist & decade


