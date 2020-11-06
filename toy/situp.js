window.addEventListener("load", function() {
    var element = document.getElementById('myimage');
    var count = 0;
    //count variable set to 0

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    function onKeyDown(evt) {
        if(evt.keyCode === 32) {
            element.src="situp.png";
        }
    }

    function onKeyUp(evt) {
        if(evt.keyCode === 32) {
            element.src="sitdown.png";
            count();
        }
    }

    function count() {
        //add 1 to the count
        count = count + 1;

        if(count >= 50) {
            //do something here
            atFifty();
        }

        if(count >= 100) {

        }
    }

    function atFifty() {

    }


    

});




