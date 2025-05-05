window.onload = function() {
    let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

    let matches = textStr.match(/[A-Z]/g);

    console.log(matches);

    let operation = "5 плюс 7 = 3";
    let operationMatches = operation.match(/\d{2,5}/g);
    console.log(operationMatches);

    let matches2 = textStr.match(/\w\w\w\w\w/g);
    console.log(matches2);
}