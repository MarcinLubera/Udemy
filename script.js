
function zmienKolor()
{
    this.style.color = "red";
}


function zmienKolor2()
{
    this.style.color = "white ";
}

function powiekszCzcionke()
{
    this.style.fontSize = "18px";
}

function zmiejszCzcione()
{
    this.style.fontSize = "15px";
}
var test = document.getElementById ("test");
/*
test.onmouseover = zmienKolor;
test.onmouseout = zmienKolor2;
*/

test.addEventListener("mouseover", zmienKolor);
test.addEventListener("mouseout", zmienKolor2);
test.addEventListener("mouseover", powiekszCzcionke);
test.addEventListener("mouseout", zmiejszCzcione);

function wykonaj (event)
{
    var test = document.getElementById("test");

    test.innerHTML = event.clientX;
}

window.onload = function()

var test = document.getElementById("test");

test.onmousemove = wykonaj;