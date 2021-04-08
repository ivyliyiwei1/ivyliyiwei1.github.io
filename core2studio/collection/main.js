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
    geography.forEach((list) => {
        console.log("List", list);
        // // create the div for my rgb boxes
        var rgbbox = document.createElement("div");
        rgbbox.classList.add("colorblock");
        rgbbox.style.backgroundColor = list.fields.cssrgb;
        //positioning
        rgbbox.style.position = "absolute";
        rgbbox.style.left = list.fields.x;
        rgbbox.style.top = list.fields.y;
        // put the newly created box
        document.querySelector(".wrapforblock").appendChild(rgbbox);

        // color rgb text
        var rgb = document.createElement("p");
        rgb.innerText = list.fields.color;
        console.log("list.fields.color", list.fields.color);
        rgb.classList.add("rgbnumber");
        // put the newly created book spine on the shelf
        rgbbox.appendChild(rgb);

        //create the div for all details
        var detail = document.createElement("div");
        detail.classList.add("detailbox");
        rgbbox.append(detail);

        // detail page info
        //height
        var title = document.createElement("h3");
        title.innerText = list.fields.altitude;
        title.classList.add("altitude");
        detail.append(title);
        //image
        var images = document.createElement("img");
        images.src = list.fields.images[0].url;
        images.classList.add("picture");
        detail.append(images);
        //title
        var title = document.createElement("h2");
        title.innerText = list.fields.name;
        title.classList.add("placename");
        detail.append(title);
        //hue
        var hue = list.fields.hue;
        hue.forEach(function (hue) {
            rgbbox.classList.add(hue)

        });
        //event listener for filter
        var filterWarm = document.querySelector('#red');
        filterWarm.addEventListener("click", function () {
            if (rgbbox.classList.contains("_warm")) {
                rgbbox.style.opacity = "0";
                filterWarm.style.color = "white";
                filterWarm.style.textDecoration = "line-through";
            } else {
                rgbbox.style.opacity = "1";
            }
        });
        //add event listener
        var toggle = "true";
        rgb.addEventListener("click", function () {
            toggle = !toggle;
            document.body.style.backgroundColor = toggle ? "white" : list.fields.cssrgb;
            rgbbox.style.boxShadow = toggle ? "none" : "4px 4px white";

        })
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

