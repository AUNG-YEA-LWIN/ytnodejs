const fs = require('fs');

if(!fs.existsSync('./newFolder')) {
    
    fs.mkdir('./newFolder',err => {
        if(err)  throw err;
        console.log('Made Directory');
    });
}

if(fs.existsSync('./newFolder')) {
    fs.rmdir('./newFolder', err => {
        if(err) throw new err;
        console.log('Removed Directory');
    });
}