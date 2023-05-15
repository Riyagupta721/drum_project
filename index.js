
var noofbuttons=document.querySelectorAll(".drum").length
for(var i=0;i<noofbuttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
       
//    this.style.color="blue";
var buttonInnerHTML=this.innerHTML;
switch (buttonInnerHTML){
    case "r":
   var audio= new Audio("sounds/crash.mp3");
   audio.play();

    case "i":
    var audio= new Audio("sounds/kick-bass.mp3");
    break;

    audio.play();
    case "y":
    var audio= new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "a":
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "a":
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    default:
        console.log("buttonInnerHTML");
    }

});}document.addEventListener("keypress",function(event){

    console.log(event);
});
   




// function handleclick(){
//     alert("i am cliked!");
// }
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();







