const path = require('path');
const fs = require('fs');


let dataPath = path.join(__dirname, 'data', 'data.json');

module.exports = class MailingList {
    constructor(name, mail){
        this.name = name;
        this.mail = mail;
    }

    save(){

        fs.readFile(dataPath, (err, data) => {
            let subscriber = [];
            if(!err){
               subscriber = JSON.parse(data);
            } 
            subscriber.push(this);
            fs.writeFile(dataPath, (JSON.stringify(subscriber), (err) => {
                console.log(err);
            }));
        });
    }
 

    static fetchdata(){
        fs.readFile(dataPath, (err, data) => {
            if(err){
                return [];
            }
            return JSON.parse(data);
        });
        return subscriber;
    }
};