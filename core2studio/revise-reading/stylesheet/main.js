console.log("Ivy Li:)");
function pt1showp2() {
    var x = document.getElementById("pt1p2");
    if (x.style.display != "block") {
        x.style.display = "block";
        document.getElementById("pt1click1").style.color = "#788263";
        document.getElementById("pt1click1").style.textDecoration = "underline dotted";

    } else {
        x.style.display = "none";
    }
}
function pt1showp3() {
    var x = document.getElementById("pt1p3");
    if (x.style.display != "block") {
        x.style.display = "block";
        document.getElementById("pt1click2").style.color = "#788263";
        document.getElementById("pt1click2").style.textDecoration = "underline dotted";

    } else {
        x.style.display = "none";
    }
}

var toggle = "true";
function pt1changebgc() {
    toggle = !toggle;
    document.getElementById("pt1").style.background = toggle ? "#E5E5E5" : "#788263";
    document.getElementById("pt1p1").style.color = toggle ? "#797979" : "#788263";
    document.getElementById("pt1p2").style.color = toggle ? "#797979" : "#788263";
    document.getElementById("pt1p3").style.color = toggle ? "#797979" : "#788263";
    document.getElementById("pt1click1").style.color = toggle ? "#788263" : "#E5E5E5";
    document.getElementById("pt1click2").style.color = toggle ? "#788263" : "#E5E5E5";
    document.getElementById("pt1click3").style.color = toggle ? "#788263" : "#E5E5E5";
    // 前面的是true
}
function pt1showwords() {
    var x = document.getElementById("bigwords");
    if (x.style.display != "block") {
        x.style.display = "block";
        document.getElementById("pt1click4").style.color = "#E5E5E5";
        document.getElementById("pt1click4").style.opacity = "100";
        document.getElementById("pt1click4").style.textDecoration = "underline dotted";
    }
    else {
        x.style.display = "none";
    }
}
function pt1showlast() {
    var x = document.getElementById("box2apt1");
    if (x.style.display != "block") {
        x.style.display = "block";
        document.getElementById("surface").style.color = "#E5E5E5";
        document.getElementById("surface").style.textDecoration = "underline dotted";
    }
    else {
        x.style.display = "none";
    }
}
function pt2show() {
    toggle = !toggle;
    document.getElementById("pt2showbox").style.display = toggle ? "none" : "block";
    document.getElementById("pt2show").innerHTML = toggle ? "hide a parasol" : "spread a parasol";
}

function pt3showheavy() {
    toggle = !toggle;
    document.getElementById("black").style.opacity = toggle ? "0" : "1";
    document.getElementById("black1").style.opacity = toggle ? "0" : "1";
}
function pt3showlight() {
    toggle = !toggle;
    document.getElementById("white").style.opacity = toggle ? "1" : "0";
}
function pt4showscroll() {
    toggle = !toggle;
    document.getElementById("scroll").style.opacity = toggle ? "0" : "1";
    document.getElementById("showscroll").style.fontWeight = toggle ? "600" : "800";
    document.getElementById("showscroll").style.color = toggle ? "#AE4747" : "#8A1900";
}
function pt5showroom() {
    toggle = !toggle;
    document.getElementById("showroom").style.color = toggle ? "gray" : "white";
    document.getElementById("pt5a").style.color = toggle ? "gray" : "white";
}
function pt5showorient() {
    toggle = !toggle;
    document.getElementById("orient").style.color = toggle ? "gray" : "white";
    document.getElementById("pt5b").style.color = toggle ? "gray" : "white";
}
function pt5showlight() {
    toggle = !toggle;
    document.getElementById("cutlight").style.color = toggle ? "gray" : "white";
    document.getElementById("pt5c").style.color = toggle ? "gray" : "white";
}