const fs = require('fs')

const content = 'write me up in a file'

fs.appendFile('./testfile.md', content, err =>{
    if (err){
        console.log(err);
    }
});
