//Question no 40 : Album 
function make_album(artist, title, tracks) {
    var album = {
        Artist: artist,
        Title: title
    };
    if (tracks !== undefined) {
        album['Tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "album1"));
console.log(make_album("Artist2", "album2"));
console.log(make_album("Artist3", "album3", 12));
