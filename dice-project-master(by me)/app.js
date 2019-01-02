// const triggerEL=document.querySelector(".trigger")

// const imagEl=document.querySelector(".show");

// function roll(){
//     triggerEL.addEventListener("click",function(){
//         let random = Math.round(Math.random() * 6);
//         console.log(random);

//         if(random === 1){
//             imagEl.classList.add("show1");
//             imagEl.classList.remove("show");

//         }

//    })
// }

// roll()


function zari(){
 switch( num = 1 + Math.round(Math.random()*6) ){ 
    case 1:
     document.getElementById('img').innerHTML= '<img src="images/dice1.png" />';
    break;
    case 2:
    document.getElementById('img').innerHTML= '<img src="images/dice2.png" />';
    break;
    case 3:
    document.getElementById('img').innerHTML= '<img src="images/dice3.png" />';
    break;
    case 4:
    document.getElementById('img').innerHTML= '<img src="images/dice4.png" />';
    break;
    case 5:
    document.getElementById('img').innerHTML= '<img src="images/dice5.png" />';
    break;
    case 6:
    document.getElementById('img').innerHTML= '<img src="images/dice6.png" />';
    break;
 }

}

zari()


document.getElementById('img').innerHTML= '<img src="images/dice1.png" />'