// general
console.log("Ivy Li:)");
// alertbox
alert("Hello!This is Ivy's assignment page! OVO");
// Show the list when I click the subject
function showList1() {
    // get the onclick element from HTML 
    var x = document.getElementById("wrapper1");
    // if the display of wrapper is not in block 
    if (x.style.display != "block") {
        // then change to block
        x.style.display = "block";
        // if it is block, change to none(hidden)
    } else {
        x.style.display = "none";
    }
}
function showList2() {
    var x = document.getElementById("wrapper2");
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showList3() {
    var x = document.getElementById("wrapper3");
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}