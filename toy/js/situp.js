window.addEventListener("load", function() {
    var element = document.getElementById('myimage');
    var homeImage = document.getElementById('homeimage');
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
            if (started == 1)
            countNumber();
            else 
            {
            	started = 1;
            	homeImage.style.display="none";
            	element.style.display="inline"
            }
            
            if (count < 5)
            element.src="images/situp.jpg";
            if (count >= 5 && count < 10)
            element.src="images/situp1.jpg";
            if (count >= 10)
            element.src="images/situp2.jpg";

        }
    }

    function onKeyUp(evt) {
        if(evt.keyCode === 32) {
            if (count < 5)
            element.src="images/sitdown.jpg";
            if (count >= 5 && count < 10)
            element.src="images/sitdown1.jpg";
            if (count >= 10)
            element.src="images/sitdown2.jpg";

        }
    }

    function countNumber() {
        count = count + 1;
        number.textContent = count;
    }



    

});

