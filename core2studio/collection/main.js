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
        // create the div set the text and class
        const div = document.createElement("div");
        div.innerText = list.fields.color;
        div.classList.add("colorblock");
        div.addEventListener("click", () => {
            showList(list, div);
        })
        // put the newly created book spine on the shelf
        block.appendChild(div);
    });
}
function showList(list, div) {
    console.log("showList()", list);

    const listDetail = document.getElementById("list-detail")

    // populate
    listDetail.getElementsByClassName("title")[0].innerText = list.fields.name;
    listDetail.getElementsByClassName("picture")[0].src =
        list.fields.images[0].url;

    const block = document.getElementById("block");
    const colorBlocks = block.getElementsByClassName("active");
    for (const colorBlock of colorBlocks) {
        colorBlock.classList.remove("active");
    }
    div.classList.add("active");
    listDetail.classList.remove("hidden");
}
// draganddrop
var dragged;
document.addEventListener("drag", function (event) {

}, false);
document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    // 重置透明度
    event.target.style.opacity = "";
}, false);

/* 放置目标元素时触发事件 */
document.addEventListener("dragover", function (event) {
    // 阻止默认动作以启用drop
    event.preventDefault();
}, false);
document.addEventListener("dragleave", function (event) {
    // 当拖动元素离开可放置目标节点，重置其背景
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

}, false);
document.addEventListener("drop", function (event) {
    // 阻止默认动作（如打开一些元素的链接）
    event.preventDefault();
    // 将拖动的元素到所选择的放置目标节点中
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }

}, false);

