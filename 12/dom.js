
window.onload = function(){
    let hedID = document.getElementById('head');
    console.log(hedID);
    let sect = document.getElementsByClassName('sect');
    console.log(sect);
    let DV = document.getElementsByTagName('div');
    console.log(DV);
    let liF = document.querySelector('ul li:first-child');
    console.log(liF);
    let liL = document.querySelector('ul li:last-child');
    console.log(liL);
    let liNTH = document.querySelector('ul li:nth-child(3)');
    console.log(liNTH);
    let [...liElem] = document.querySelectorAll('li');
    console.log(liElem);
    // let listItems = document.querySelectorAll('ul.nav > li');

    // let listItem = document.querySelectorAll('li:nth-child(2)');
}