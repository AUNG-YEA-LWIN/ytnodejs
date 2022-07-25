const fspromises = require('fs').promises;
const path = require('path');

let asyncFun = async () => {
    try{    
        const data =await fspromises.readFile(path.join(__dirname,'files','lorem.txt'),'utf8');
        console.log(data);
        await fspromises.unlink(path.join(__dirname,'files','lorem.txt'));
        await fspromises.writeFile(path.join(__dirname,'files','textLorem.txt'),data);
        let newData = 'Lorem ipsum may be used as a placeholder before final copy is available';
        await fspromises.appendFile(path.join(__dirname,'files','textLorem.txt'),newData);
        await fspromises.rename(path.join(__dirname,'files','textLorem.txt'),path.join(__dirname,'files','newLorem.txt'));
        const dataNew = await fspromises.readFile(path.join(__dirname,'files','newLorem.txt'),'utf8');
        console.log(dataNew);
    }catch(err) {
        console.log(err);
    }
}

asyncFun();