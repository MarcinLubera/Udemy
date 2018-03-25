
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

test.addEventListener("mouseover", zmienKolor);
test.addEventListener("mouseout", zmienKolor2);
test.addEventListener("mouseover", powiekszCzcionke);
test.addEventListener("mouseout", zmiejszCzcione);

