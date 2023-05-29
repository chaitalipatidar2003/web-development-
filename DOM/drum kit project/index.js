// // var numberOfDrumButton=document.querySelectorAll("button").length;

// // for(var i=0;i<numberOfDrumButton;i++){
// //     document.querySelectorAll("button")[i].addEventListener("click",handleClick);
// //     // this.style.color  ="white";
    
// // }

// // function handleClick(){
// //     // alert("You clicked on button");
// //     // var audio = new Audio("sounds\tom-1.mp3");
// //     // audio.play();
// //     var buttonInnerHTML=this.innerHTML;

// //     switch(buttonInnerHTML){
// //         case "w":
// //             var crash=new Audio("crash.mp3");
// //             crash.play();
// //             break;

// //             case "a":
// //             var tom3=new Audio("tom-3.mp3");
// //             tom3.play();
// //             break;
// //             case "s":
// //             var tom4=new Audio("tom-4.mp3");
// //             tom4.play();
// //             break;

// //             case "d":
// //             var kick=new Audio("kick-bass.mp3");
// //             kick.play();
// //             break;

// //             case "j":
// //             var snare=new Audio("snare.mp3");
// //             snare.play();
// //             break;

// //             case "k":
// //             var tom1=new Audio("tom-1.mp3");
// //             tom1.play();
// //             break;

// //             case "l":
    
// //             var tom2=new Audio("tom-2.mp3");
// //             tom2.play();
// //             break;

// //             default:
// //                 console.log("nothing");



// //     }
// // }

// // document.addEventListener("keypress",function(event){
// //     console.log(event +" Key is pressed");
// //     // console.log(event);
// // })
// var numberOfDrumButton=document.querySelectorAll("button").length;

// for(var i=0;i<numberOfDrumButton;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",handleClick);
//     // this.style.color  ="white";
    
// }

// function handleClick(){
//     // alert("You clicked on button");
//     // var audio = new Audio("sounds\tom-1.mp3");
//     // audio.play();
//     var buttonInnerHTML=this.innerHTML;

//     switch(buttonInnerHTML){
//         case "w":
//             var crash=new Audio("crash.mp3");
//             crash.play();
//             break;

//             case "a":
//             var tom3=new Audio("tom-3.mp3");
//             tom3.play();
//             break;
//             case "s":
//             var tom4=new Audio("tom-4.mp3");
//             tom4.play();
//             break;

//             case "d":
//             var kick=new Audio("kick-bass.mp3");
//             kick.play();
//             break;

//             case "j":
//             var snare=new Audio("snare.mp3");
//             snare.play();
//             break;

//             case "k":
//             var tom1=new Audio("tom-1.mp3");
//             tom1.play();
//             break;

//             case "l":
    
//             var tom2=new Audio("tom-2.mp3");
//             tom2.play();
//             break;

//             default:
//                 console.log("nothing");



//     }
// }

// document.addEventListener("keypress",function(event){
//     console.log(event +" Key is pressed");
//     // console.log(event);
// })



var numberOfDrumButton=document.querySelectorAll("button").length;

/*---    selecting BUTTONPRESS   ---*/


for(var i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
    // this.style.color  ="white";
    
}

function handleClick(){
    // alert("You clicked on button");
    // var audio = new Audio("sounds\tom-1.mp3");
    // audio.play();
    var buttonInnerHTML=this.innerHTML;

    makesound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
}


/*---    selecting keyPRESS   ---*/

document.addEventListener("keypress",function(event){
    // console.log(event +" Key is pressed");
    // console.log(event);

    makesound(event.key);
    addAnimation(event.key);
})

function makesound(key){

    switch(key){
        case "w":
            var crash=new Audio("crash.mp3");
            crash.play();
            break;

            case "a":
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
            break;
            case "s":
            var tom4=new Audio("tom-4.mp3");
            tom4.play();
            break;

            case "d":
            var kick=new Audio("kick-bass.mp3");
            kick.play();
            break;

            case "j":
            var snare=new Audio("snare.mp3");
            snare.play();
            break;

            case "k":
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
            break;

            case "l":
    
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
            break;

            default:
                console.log("nothing");



    }
}

function addAnimation(currentKey){

    var activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");

    setTimeout( function()
    {activeKey.classList.remove("pressed");},100)
}