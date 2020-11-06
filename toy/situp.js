


function changeimage()
{
    element=document.getElementById('myimage')
    if (element.src.match("situp"))
    {
        element.src="sitdown.png";
    }
    else
    {
        element.src="situp.png";
};
};

