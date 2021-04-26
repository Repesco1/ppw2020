var mld, usd, eur;
function init()
{
    mld = document.getElementById("MLD");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
}

function mld()
{
    mld.value = parseFloat(usd.value) * 17;
    mld.value = parseFloat(eur.value) * 21.20;
}

function eur()
{
    mld.value = parseFloat(eur.value) * 21.20;
    usd.value = parseFloat(eur.value) * 0.80;
    
}

function usd()
{
    mld.value = parseFloat(usd.value) * 17;
    eur.value = parseFloat(usd.value) * 1.24;
}