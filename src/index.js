const song = `Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark!
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark!
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark!
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark!
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark!`;

// Split the song String into an array by new line

var splitSong = song.split("\n");
for(var i=0; i<splitSong.length; i++){
    var node = document.createElement("LI");  
    var textnode = document.createTextNode(splitSong[i])
    node.appendChild(textnode);
    document.getElementById("lyrics-list").appendChild(node);
}

