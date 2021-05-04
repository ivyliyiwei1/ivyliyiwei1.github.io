//input output
let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");
let resultText = document.querySelector("#resulttext");
let imgbox = document.querySelector("#imgbox");
const testJson = {
    'apple': ['./title.png', '$2'],
    'egg': ['icon/egg.png', '$2'],
    'hamburger': ['icon/han.png', '$6'],
    'pizza': ['icon/pizza.png', '$10'],
    'beer': ['icon/beer.png', '$3'],
    'icecream': ['icon/icecream.png', '$2'],
    'grape': ['icon/grape.png', '$5'],
    'fried chicken': ['icon/chicken.png', '$8'],
    'cheese': ['icon/cheese.png', '$6'],
    'bread': ['icon/bread.png', '$7'],
    'doughnut': ['icon/doughnut.png', '$4'],
    'strawberry': ['icon/strawberry.png', '$11'],
    'cherry': ['icon/cherry.png', '$12'],
    'watermelon': ['icon/watermelon.png', '$7'],
    'wine': ['icon/wine.png', '$15'],
    'cupcake': ['icon/cupcake.png', '$5'],
    'noodles': ['icon/noodles.png', '$20'],
    'taco': ['icon/taco.png', '$18'],
    'pancake': ['icon/flour.png', '$5'],
    'starbucks': ['icon/starbucks.png', '$7'],
    'fish': ['icon/fish.png', '$5'],
    'chocolate': ['icon/chocolate.png', '$3'],
    'roast chicken': ['icon/wholechicken.png', '$15'],
    'biscuits': ['icon/wholechicken.png', '$15'],
    'bagel': ['icon/wholechicken.png', '$15'],
    'burrito': ['icon/wholechicken.png', '$15'],
    'french toast': ['icon/wholechicken.png', '$15'],
    'bacon': ['icon/wholechicken.png', '$15'],
    'smoothie': ['icon/wholechicken.png', '$15'],
    'crepes': ['icon/wholechicken.png', '$15'],
    'parfait': ['icon/wholechicken.png', '$15'],
    'sandwich': ['icon/wholechicken.png', '$15'],
    'sausage': ['icon/wholechicken.png', '$15'],
    'omelet': ['icon/wholechicken.png', '$15'],
    'croissants': ['icon/wholechicken.png', '$15'],
    'pasta': ['icon/wholechicken.png', '$15'],
    'beans': ['icon/wholechicken.png', '$15'],
    'nuts': ['icon/wholechicken.png', '$15'],
    'milk': ['icon/wholechicken.png', '$15'],
    'yogurt': ['icon/wholechicken.png', '$15'],
    'carrot': ['icon/wholechicken.png', '$15'],
    'kiwi': ['icon/wholechicken.png', '$15'],
    'potato': ['icon/wholechicken.png', '$15'],
    'rice': ['icon/wholechicken.png', '$15'],
    'avocado': ['icon/wholechicken.png', '$15'],
    'banana': ['icon/wholechicken.png', '$15'],
    'blueberry': ['icon/wholechicken.png', '$15'],
    'popcorn': ['icon/wholechicken.png', '$15'],
    'marshmallow': ['icon/wholechicken.png', '$15'],
    'coconut': ['icon/wholechicken.png', '$15'],
    'dumplings': ['icon/wholechicken.png', '$15'],
    'cola': ['icon/wholechicken.png', '$15'],


}

console.log(testJson['apple'])

// Detect when key is pressed in the text box
var existText = "";

// var img = result.createElement("img");
// img.src = "";
inputElement.addEventListener("keydown", function (event) {
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    //Check if enter key is pressed
    if (event.key == "Enter") {
        existText = existText + inputElement.value;
        // Let's show the text on the page!

        if (testJson[inputElement.value]) {
            resulttext.innerText = ("☟Your feeds:");
            result.style.marginRight = ("0px");
            var eachbox = document.createElement("div");
            var img = document.createElement("img");
            var newtext = document.createElement("div");
            // console.log("create an image", img);
            img.src = testJson[inputElement.value][0];
            console.log(testJson[inputElement.value][0]);
            img.classList.add("icon");
            eachbox.classList.add("eachbox");
            eachbox.appendChild(img);
            newtext.innerText = inputElement.value + '—' + testJson[inputElement.value][1];
            newtext.classList.add("price");
            eachbox.appendChild(newtext);
            // price.innerText = testJson[inputElement.value][1];
            // price.classList.add("price");
            // console.log(testJson[inputElement.value][1]);
            // eachbox.appendChild(price);
            imgbox.appendChild(eachbox);
        }
        // Reset the value inside the text box
        inputElement.value = "";
        console.log("li.length", li.length);
        for (i = 0; i < li.length; i++) {
            li[i].style.display = "none";
        }
    }
});


function myFunction() {
    var input, filter, ul, li, div, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    console.log("my function");
    for (i = 0; i < li.length; i++) {
        div = li[i].getElementsByTagName("div")[0];
        txtValue = div.textContent || div.innerText;
        if ((filter.length > 0) && (txtValue.toUpperCase().indexOf(filter) == 0)) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

function addTextTag(text) {
    var input = document.getElementById("input");
    input.value = "";
    input.value += text;

    var autoEnter = document.createEvent('Event');
    autoEnter.initEvent('keydown', true, false);
    autoEnter = Object.assign(autoEnter, {
        ctrlKey: false,
        metaKey: false,
        altKey: false,
        which: 13,
        keyCode: 13,
        key: 'Enter',
        code: 'Enter'
    })
    input.focus();
    input.dispatchEvent(autoEnter);
}

