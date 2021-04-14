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
    // call function to show the lists
    consoleLogLists();
    showLists();
}



function consoleLogLists() {
    console.log("consoleLogLists()");
    geography.forEach((list) => {
        console.log("List", list);
    });
}

var currentbgc = "white";
function showLists() {
    console.log("showLists()");

    geography.forEach((list) => {
        console.log("List", list);
        // // create the div for my rgb boxes
        const rgbbox = document.createElement("div");
        rgbbox.classList.add("colorblock");
        rgbbox.style.backgroundColor = list.fields.cssrgb;

        //media queries and positioning
        function media(x) {
            if (x.matches) { // If media query matches
                rgbbox.style.position = "absolute";
                rgbbox.style.left = list.fields.x;
                rgbbox.style.top = list.fields.y;
            } else {
                rgbbox.style.position = "absolute";
                rgbbox.style.left = list.fields.x_desktop;
                rgbbox.style.top = list.fields.y_desktop;
            }
        }

        var x = window.matchMedia("(max-width: 375px)")
        media(x) // Call listener function at run time
        x.addListener(media)


        // put the newly created box
        document.querySelector(".wrapforblock").appendChild(rgbbox);
        // color rgb text
        var rgb = document.createElement("p");
        rgb.innerText = list.fields.color;
        console.log("list.fields.color", list.fields.color);
        rgb.classList.add("rgbnumber");
        // put the newly created book spine on the shelf
        rgbbox.appendChild(rgb);
        rgbbox.addEventListener("click", () => {
            showList(rgbbox, list);
        });
        //create the div for all details
        // var detail = document.createElement("div");
        // detail.classList.add("detailbox");
        // document.querySelector(".wrapforinfo").append(detail);

        // // detail page info
        // //height
        // var altitude = document.createElement("h3");
        // altitude.innerText = list.fields.altitude;
        // altitude.classList.add("altitude");
        // detail.append(altitude);
        // //image
        // var images = document.createElement("img");
        // images.src = list.fields.images[0].url;
        // images.classList.add("picture");
        // detail.append(images);
        // //title
        // var title = document.createElement("h2");
        // title.innerText = list.fields.name;
        // title.classList.add("placename");
        // detail.append(title);

        //hue
        var hue = list.fields.hue;
        hue.forEach(function (hue) {
            rgbbox.classList.add(hue);
        });
        rgb.addEventListener("click", function () {
            if (currentbgc != list.fields.cssrgb) {
                document.body.style.backgroundColor = list.fields.cssrgb;
                // rgbbox.classList.add("active");
                // console.log("hell0");
                // rgbbox.style.boxShadow = "4px 4px white";
                currentbgc = list.fields.cssrgb;
            }
            else {
                document.body.style.backgroundColor = "white";
                currentbgc = "white";
                // rgbbox.style.boxShadow = "none";
                rgbbox.getElementsByClassName("rgbnumber")[0].classList.remove("active");
                rgbbox.classList.remove("active");
            }
            if (rgbbox.classList.contains("_warm")) {
                document.getElementById("list-detail").style.boxShadow = "red 30px 30px";
            }
            else {
                document.getElementById("list-detail").style.boxShadow = "blue 30px 30px";
            }

        });
    });
}

//X for hide detail box
document.getElementById('hide').onclick = function () {
    document.getElementById('list-detail').classList.add("hidden");
};


function showList(rgbbox, list) {
    console.log("showList()", list);
    const listDetail = document.getElementById("list-detail");
    //populate
    listDetail.getElementsByClassName("placename")[0].innerText = list.fields.name;
    listDetail.getElementsByClassName("altitude")[0].innerText = list.fields.altitude;
    listDetail.getElementsByClassName("rgb")[0].innerText = list.fields.color;
    listDetail.getElementsByClassName("picture")[0].src = list.fields.images[0].url;

    listDetail.getElementsByClassName("placename")[0].style.color = list.fields.cssrgb;
    listDetail.getElementsByClassName("rgb")[0].style.color = list.fields.cssrgb;
    listDetail.getElementsByClassName("altitude")[0].style.color = list.fields.cssrgb;


    const wrapper = document.getElementsByClassName("wrapforblock");
    console.log("wrapper", wrapper);

    var boxes = wrapper[0].getElementsByClassName("colorblock active");
    for (const box of boxes) {
        box.classList.remove("active");
    }
    boxes = wrapper[0].getElementsByClassName("rgbnumber active");
    for (const box of boxes) {
        box.classList.remove("active");
    }

    // ...and set it on the one just clicked
    rgbbox.getElementsByClassName("rgbnumber")[0].classList.add("active");
    rgbbox.classList.add("active");

    // reveal the detail element, we only really need this the first time
    // but its not hurting to do it more than once
    listDetail.classList.remove("hidden");
}
//filter
var filterWarm = document.querySelector("#red");
var rgbbox = document.getElementsByClassName("colorblock");
var showWarm = false;
filterWarm.addEventListener("click", function () {
    console.log("warm", rgbbox);
    for (const box of rgbbox) {
        if (box.classList.contains("_warm")) {
            box.style.display = showWarm ? "block" : "none";
            filterWarm.style.color = showWarm ? "red" : "white";
            filterWarm.style.textDecoration = showWarm ? "none" : "line-through";
            filterWarm.innerText = showWarm ? "HIDE WARM" : "SHOW WARM";
        }

    }
    showWarm = !showWarm;
});

var filterCool = document.querySelector("#blue");
var rgbbox = document.getElementsByClassName("colorblock");
var showCool = false;
filterCool.addEventListener("click", function () {
    console.log("cool", rgbbox);
    for (const box of rgbbox) {
        if (box.classList.contains("_cool")) {
            box.style.display = showCool ? "block" : "none";
            filterCool.style.color = showCool ? "blue" : "white";
            filterCool.style.textDecoration = showCool ? "none" : "line-through";
            filterCool.innerText = showCool ? "HIDE COOL" : "SHOW COOL";
        }

    }
    showCool = !showCool;
});

