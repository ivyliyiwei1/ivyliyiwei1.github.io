window.addEventListener("load", function() {
    var element = document.getElementById('myimage');
    var count = 0;
    var number = document.getElementById('number');
    //count variable set to 0

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.body.onkeydown = function (event) {
        var e = window.event || event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            window.event.returnValue = false;
        }
    }

    function onKeyDown(evt) {
        if(evt.keyCode === 32) {
            element.src="situp.png";
        }
    }

    function onKeyUp(evt) {
        if(evt.keyCode === 32) {
            element.src="sitdown.png";
            countNumber();
        }
    }

    function countNumber() {
        //add 1 to the count
        count = count + 1;

        if(count >= 50) {
            //do something here
            atFifty();
        }

        if(count >= 100) {

        }
        number.textContent = count;
    }

    function atFifty() {

    }


    

});

