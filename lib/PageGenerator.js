const nunjucks = require('nunjucks');

class PageGenerator {

    generatePage(type, data){
        const json = {
            'name' : type,
            'data' : data
        }
    }
}

module.exports = PageGenerator;
