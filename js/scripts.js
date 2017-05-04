//INCLUDES
// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

//'load()' method

// $('#data').load('/data/data.txt');

// $('#data').load('/data/data.html');

//$('#data').load('/data/data.json');

// Get from Airtable
// Handshake with Airtable
var Airtable = require('airtable');

var base = Airtable.base('appCOnEuMBhfBiPry');
$('#data').load('/data/airtable.js');
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyqJaj41LYH3j0kA'}).base('appCOnEuMBhfBiPry');

base('Ajax Test').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
});