const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

const redditPath = path.join( __dirname, "./popular-articles.json" );

rp('https://reddit.com/r/popular.json')
    .then(data => {
        let parseData = JSON.parse(data);

        let articleArray = [];

        parseData.data.children.map( (art) => {
            let article = {
                title: art.data.title,
                url: art.data.url,
                author: art.data.author_fullname
            };
            articleArray.push(article);
        });

        fs.writeFile( redditPath, JSON.stringify(articleArray, null, 2), (err) => {
            if (err) console.log(`Error occured: ${err}`);

            console.log('Success');
            console.log(articleArray);
        })
    })
    .catch(err => console.log(`You suck!!: ${err}`));
