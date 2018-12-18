const triggerEL=document.querySelector(".trigger")

const imagEl=document.querySelector(".show");

function roll(){
    triggerEL.addEventListener("click",function(){
        let random = Math.round(Math.random() * 6)
        console.log(Math.round(Math.random() * 6))
        
        if(random === 1){
            imagEl.classList.add("show1");
            imagEl.classList.remove("show");
            
        } 

   })
}

roll()

