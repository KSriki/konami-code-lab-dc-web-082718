const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  addKonamiListener();
}



function addKonamiListener(){
    document.body.addEventListener("keydown",konami);
}

let index = 0;
function konami(event){

    let key = event.key;

    if(key === codes[index]){
        index++;
        if(index === codes.length){
            window.alert("YOU GET 100 EXTRA LIVES");
            console.log("congrats");
            index = 0;
        }
    }
    else{
        index = 0;
    }

}
