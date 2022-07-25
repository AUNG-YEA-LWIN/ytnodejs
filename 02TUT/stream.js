const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,'files','lorem.txt'),{encoding: 'utf8'});

const ws = fs.createWriteStream(path.join(__dirname,'files','streamLorem.txt'));

//   Method One

rs.on('data',(chunk) => {
    ws.write(chunk);
});

//   Method Two

rs.pipe(ws);