
window.onload = function(){
    let FirstLV = document.querySelectorAll('#tree > li');
    console.log(`quantity of first level element: ${FirstLV.length}`);
    let SecondLV = document.querySelectorAll('#tree > li > ul > li');
    console.log(`quantity of second level element: ${SecondLV.length}`);
}