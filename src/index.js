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

// Function will loop through the song array of strings generating <li> elements inside of <ul> until iteration variable reaches end of array
function displaySongLine(arrayOfLyrics, iterator) {
    setTimeout(function () {
        
        // Create <li> element with one line of text from song
        var node = document.createElement("LI");
        var textnode = document.createTextNode(arrayOfLyrics[iterator])
        node.appendChild(textnode);
        
        // Add <li> element to <ul>
        document.getElementById("lyrics-list").appendChild(node);

        //Iterate by 1
        iterator++;

        // If we're not done with the song, continue regression
        if (iterator < arrayOfLyrics.length) {
            displaySongLine(arrayOfLyrics, iterator);
        }
    // Delay each loop by 1.5 seconds
    }, 1500)
}

// Start the loop
displaySongLine(splitSong, 0);

/*
// Alternative function that uses recursion more heavily and relies less on an iteration variable
// Function will loop through the song array of strings generating <li> elements inside of <ul> until it runs out of array
function displaySongLineAlt(arrayOfLyrics) {
    setTimeout(function () {
        
        // Create <li> element with one line of text from song
        var node = document.createElement("LI");
        var textnode = document.createTextNode(arrayOfLyrics[0])
        node.appendChild(textnode);
        
        // Add <li> element to <ul>
        document.getElementById("lyrics-list").appendChild(node);

        arrayOfLyrics.shift();
        // If we're not done with the song, continue regression
        if (arrayOfLyrics.length) {
            displaySongLineAlt(arrayOfLyrics);
        }
    // Delay each loop by 1.5 seconds
    }, 1500)
}

// Start the loop
displaySongLineAlt(splitSong);
*/