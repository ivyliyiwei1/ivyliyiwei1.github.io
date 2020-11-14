window.addEventListener("load", function() {
    var element = document.getElementById('myimage');
    var count = 0;
    var number = document.getElementById('number');
    var started = 0;
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
            if (started == 0){
            number.textContent = count;    
            }
            if (count < 5)
            element.src="img/situp.png";
            if (count >= 5 && count < 10)
            element.src="img/situp1.png";
            if (count >= 10)
            element.src="img/situp2.png";
        }
    }

    function onKeyUp(evt) {
        if(evt.keyCode === 32) {
            if (count < 5)
            element.src="img/sitdown.png";
            if (count >= 5 && count < 10)
            element.src="img/sitdown1.png";
            if (count >= 10)
            element.src="img/sitdown2.png";
            if (started == 1)
            countNumber();
            else {started = 1;
            }
        }
    }

    function countNumber() {
        count = count + 1;
        number.textContent = count;
    }



    

});

