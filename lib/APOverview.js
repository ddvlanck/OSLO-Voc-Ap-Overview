const PageGenerator = require('./PageGenerator');
const fetch = require('node-fetch');
let applicationProfiles = [];

class APOverview {

    addApplicationProfile(ap){
        applicationProfiles.push(ap);
    }

    generatePage(){
        //const generator = new PageGenerator();
        //generator.generatePage('Applicatieprofielen', applicationProfiles);
    }

    _addMetadata(uri){

    }


}

module.exports = APOverview;
