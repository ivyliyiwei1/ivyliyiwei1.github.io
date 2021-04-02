console.log("Hi")

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: 'key7qM68E2RDNBeeY' }).base(
    "apphAnYOKnPdfHHgk"
);

base("geography").select({}).eachPage(gotPageOfLists, gotAllLists);

const geography = [];

// callback function that receives our data
function gotPageOfLists(records, fetchNextPage) {
    console.log("gotPageOfLists()");
    // add the records from this page to our books array
    geography.push(...records);
    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllLists(err) {
    console.log("gotAllLists()");

    // report an error, you'd want to do something better than this in production
    if (err) {
        console.log("error loading Lists");
        console.error(err);
        return;
    }
    // call function to show the books
    consoleLogLists();
    showLists();
}
function consoleLogLists() {
    console.log("consoleLogLists()");
    geography.forEach((list) => {
        console.log("List", list);
    });
}
function showLists() {
    console.log("showLists()");

    const block = document.getElementById("block");

    geography.forEach((list) => {

        // create the div for my rgb boxes
        const rgb = document.createElement("div");
        rgb.innerText = list.fields.color;
        rgb.classList.add("colorblock");
        // put the newly created book spine on the shelf
        document.querySelector(".container").appendChild(rgb);

        //create the div for all details
        const detail = document.createElement("div");
        detail.classList.add("detailbox");
        document.querySelector(".container").append(detail);

        // detail page info
        //image
        const images = document.createElement("img");
        images.src = list.fields.images[0].url;
        images.classList.add("picture");
        detail.append(images);
        //title
        const title = document.createElement("h2");
        title.innerText = list.fields.name;
        title.classList.add("placename");
        detail.append(title);

        //add event listener
        rgb.addEventListener("click", function () {
            detail.classList.toggle("active");
        })
    });
}

// function showList(list, rgb) {
//     console.log("showList()", list);

//     const listDetail = document.getElementById("list-detail")

//     // populate
//     listDetail.getElementsByClassName("title")[0].innerText = list.fields.name;
//     listDetail.getElementsByClassName("picture")[0].src =
//         list.fields.images[0].url;

//     const block = document.getElementById("block");
//     const colorBlocks = block.getElementsByClassName("active");
//     for (const colorBlock of colorBlocks) {
//         colorBlock.classList.remove("active");
//     }
//     rgb.classList.add("active");
//     listDetail.classList.remove("hidden");
// }

