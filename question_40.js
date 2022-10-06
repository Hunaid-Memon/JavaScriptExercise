const make_album = (album) => {
   return album.artist + ' is artist of ' + album.title + ' album'
}

album1 = {
    artist: 'John',
    title: 'Herraw'
}

album2 = {
    artist: 'Hunaid',
    title: 'Hello'
}
console.log(make_album(album1));
console.log(make_album(album2));