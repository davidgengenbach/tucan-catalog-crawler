var helper = require('./steps/helper'),
    step1 = require('./steps/1-get-courses.js'),
    step2 = require('./steps/2-cleanup-tree.js'),
    step3 = require('./steps/3-get-module-details.js'),
    step4 = require('./steps/4-parse-module-details.js'),
    step5 = require('./steps/5-merge-module-details.js');

// Log into TuCan and go to "Anmeldung" - copy the URL and put it here!
var START_URL = helper.getStartUrl('./START_URL.txt');

if(!START_URL) {
    console.error('No START_URL given (see README)');
    process.exit(0);
}

step1(START_URL)
    .then(step2)
    .then(step3)
    .then(step4)
    .then(step5)
    .then(function() {
        console.log('FINISHED :)');
    });
