const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
    .then(data => {
        let parseData = JSON.parse(data);
        
        parseData.data.children.map( (art) => {
            if (path.extname(art.data.url)) {

                let media = `${art.data.id}${path.extname(art.data.url)}`;
                let downloads = path.join( __dirname, `./downloads/${media}` );

                console.log(media);

                rp(art.data.url, { encoding: 'binary' })
                    .then(res => {
                        fs.writeFile(downloads, res, { encoding: 'binary' }, (err) => { 
                            if(err)console.log(err) 
                        });
                    })

            };
        });
    });
    .catch(err => console.log(err));