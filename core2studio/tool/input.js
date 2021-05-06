//input output
let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");
let resultText = document.querySelector("#resulttext");
let imgbox = document.querySelector("#imgbox");
const testJson = {
    'apple': ['icon/apple.png', '$2.5'],
    'egg': ['icon/egg.png', '$2'],
    'hamburger': ['icon/han.png', '$4'],
    'pizza': ['icon/pizza.png', '$6'],
    'beer': ['icon/beer.png', '$1.6'],
    'icecream': ['icon/icecream.png', '$3'],
    'grape': ['icon/grape.png', '$2'],
    'fried chicken': ['icon/chicken.png', '$4.5'],
    'cheese': ['icon/cheese.png', '$15'],
    'bread': ['icon/bread.png', '$2'],
    'doughnut': ['icon/doughnut.png', '$1'],
    'strawberry': ['icon/strawberry.png', '$4'],
    'cherry': ['icon/cherry.png', '$9'],
    'watermelon': ['icon/watermelon.png', '$14'],
    'wine': ['icon/wine.png', '$32'],
    'cupcake': ['icon/cupcake.png', '$12'],
    'noodles': ['icon/noodles.png', '$15'],
    'taco': ['icon/taco.png', '$4'],
    'pancake': ['icon/flour.png', '$6'],
    'starbucks': ['icon/starbucks.png', '$4'],
    'fish': ['icon/fish.png', '$10'],
    'chocolate': ['icon/chocolate.png', '$3'],
    'roast chicken': ['icon/wholechicken.png', '$8'],
    'biscuits': ['icon/biscuits.png', '$6'],
    'bagel': ['icon/bagel.png', '$5.5'],
    'burrito': ['icon/burrito.png', '$7'],
    'french toast': ['icon/frenchtoast.png', '$12'],
    'bacon': ['icon/bacon.png', '$6'],
    'smoothie': ['icon/smoothie.png', '$5'],
    'crepes': ['icon/crepes.png', '$9'],
    'parfait': ['icon/parfait.png', '$1.5'],
    'sandwich': ['icon/sandwich.png', '$5'],
    'sausage': ['icon/sausage.png', '$6'],
    'omelet': ['icon/omelet.png', '$8'],
    'croissants': ['icon/croissants.png', '$5'],
    'pasta': ['icon/pasta.png', '$15'],
    'beans': ['icon/beans.png', '$2'],
    'nuts': ['icon/nuts.png', '$6'],
    'milk': ['icon/milk.png', '$4'],
    'yogurt': ['icon/yogurt.svg', '$2.5'],
    'carrot': ['icon/carrot.png', '$1.8'],
    'kiwi': ['icon/kiwi.jpg', '$4.7'],
    'potato': ['icon/potato.png', '$1'],
    'rice': ['icon/rice.svg', '$1'],
    'avocado': ['icon/avocado.png', '$2'],
    'banana': ['icon/banana.png', '$1.5'],
    'blueberry': ['icon/blueberry.png', '$10'],
    'popcorn': ['icon/popcorn.png', '$1'],
    'marshmallow': ['icon/marshmallow.png', '$5'],
    'coconut': ['icon/coconut.png', '$2'],
    'dumplings': ['icon/dumplings.png', '$6'],
    'cola': ['icon/cola.png', '$2'],
    'water': ['icon/water.png', '$2'],
    'cereal': ['icon/cereal.png', '$4'],
    'waffles': ['icon/waffles.png', '$4'],
    'muffin': ['icon/muffin.png', '$7'],


}

console.log(testJson['apple'])

// Detect when key is pressed in the text box
var existText = "";
function media(x) {
    var enter = document.getElementById("enter");
    if (x.matches) { // If media query matches
        resultText.innerText = ("☟ Wondered your feed ?");
        enter.innerText = ("*type in a letter to see what's avliable and select what you eat!");
    }
}
var x = window.matchMedia("(max-width: 375px)")
media(x) // Call listener function at run time
x.addListener(media)

// var img = result.createElement("img");
// img.src = "";
inputElement.addEventListener("keydown", function (event) {
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    var enter = document.getElementById("enter");
    //Check if enter key is pressed
    if (event.key == "Enter") {
        existText = existText + inputElement.value;
        // Let's show the text on the page!
        if (testJson[inputElement.value]) {

            resulttext.innerText = ("☟Your feed today:");
            resultText.style.right = ("41px");
            resultText.style.marginTop = ("-107px");
            resultText.style.fontSize = ("60px");
            function media(x) {
                if (x.matches) { // If media query matches
                    resultText.style.right = ("37px");
                    resultText.style.fontSize = ("35px");
                    resultText.style.marginTop = ("-108px");
                }
            }

            var x = window.matchMedia("(max-width: 375px)")
            media(x) // Call listener function at run time
            x.addListener(media)

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
            imgbox.insertBefore(eachbox, imgbox.childNodes[0]);
        }
        else {
            alert("SORRY>0< the meal you typed in is not include in  this website! Please try another one!! You may type in the one letter first to see what is avliable!");
        }
        // Reset the value inside the text box
        inputElement.value = "";
        enter.style.display = "none";
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
