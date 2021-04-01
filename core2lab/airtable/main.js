console.log("hello");
// load airtable 
var Airtable = require('airtable');
console.log(Airtable);
// connect to airtable 
var base = new Airtable({ apiKey: 'key7qM68E2RDNBeeY' }).base('appnPXVbnh78sjDln');

// music base 
base('Music').select({
    maxRecords: 3,
    view: "Grid view"
}).eachPage(gotPageOfRecords, getAllRecords);

const Music = [];

function gotPageOfRecords(records, fetchNextPage) {
    console.log("gotPageOfRecords()");
    Music.push(...records);
    fetchNextPage();
}
// To fetch the next page of records, call `fetchNextPage`.
// If there are more records, `page` will get called again.
// If there are no more records, `done` will get called.

function getAllRecords(err) {
    console.log("gotAllRecords()");
    if (err) {
        console.error(err);
        return;
    }
    // call the function to show my records 
    consoleLogRecords();
    showRecords();
}
function consoleLogRecords() {
    console.log("consoleLogRecords()");
    Music.forEach((record) => {
        console.log("Record", record);
    });
}
function showRecords() {
    console.log("showRecords()");
    Music.forEach((record) => {
        const h2 = document.createElement("h2");
        h2.innerText = record.fields.title;
        document.body.appendChild(h2);

        const artist = document.createElement("h3");
        artist.innerText = record.fields.artist;
        document.body.appendChild(artist);
    });

}