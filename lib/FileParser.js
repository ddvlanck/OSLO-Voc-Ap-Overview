const fs = require('fs');
const VocabularyOverview = require('./VocabularyOverview');
const ApplicationProfileOverview = require('./APOverview');

class FileParser {

    parse(file) {
        const rawdata = fs.readFileSync(file);
        const data = JSON.parse(rawdata);

        const APOverview = new ApplicationProfileOverview();
        const VocOverview = new VocabularyOverview();

        for(let object of data){
            if(object.hasOwnProperty('seealso')){

                if(object.type === 'voc'){
                    VocOverview.addVocabulary(object['seealso'])
                } else if(object.type === 'ap'){
                    APOverview.addApplicationProfile(object['seealso']);
                } else {
                    //TODO: implementatiemodel
                }

            }
        }

        APOverview.generatePage();
        VocOverview.generatePage();

    }
}

module.exports = new FileParser;
