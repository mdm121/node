const path = require('path');
const fs = require('fs'); //import fs from 'fs';

let chirpPath = path.join(__dirname, "../chirps/chirps.json");

let user = '@Milkiles';
let chirps = [
    {   
        author: user,
        chirp: 'Chirp numero uno!!'
    },
    {
        author: user,
        chirp: 'Ya mama!!'
    },
    {
        author: user,
        chirp: 'I wanna be a developer when I grow up *sighs*'
    },
    {
        author: user,
        chirp: 'Your mom picks boogers in church!'
    },
    {
        author: user,
        chirp: 'How many times can you spell your name correctly before messing up?'
    }
];

// fs.writeFile(chirpPath, JSON.stringify(chirps, null, 2), (err) => {
//     if (err) console.log(`Something went wrong: ${err}`);

//     console.log('It has been written!');
// });

fs.readFile(chirpPath, (err, data) => {
    if (err) console.log(`Error my boy!!: ${err}`);

    let parseData = JSON.parse(data);

    chirps.forEach(chirp => {
        console.log(`${chirp.author} chirp: ${chirp.chirp}`);
    });
});