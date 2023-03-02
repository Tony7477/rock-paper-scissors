function getComputerChoice(){
    let arr=["rock","paper","scissors"];
    let result=Math.floor(Math.random()*3);
    return arr[result];
}
//usage of callbacks
function playround(userinput,compchoice){
    userinput=userinput.toLowerCase();
    
    if(compchoice===userinput){
        
        return 0;
    }else if(userinput==="rock" && compchoice==="scissors"){
        
        return 1;
    }else if(userinput==="paper" && compchoice==="rock"){
        
        return 1;
    }else if(userinput==="scissors" && compchoice==="paper"){
       
        return 1;
    }
    else{
        
        return -1;
    }



}
let compcount=0;
let usercount=0;
let buttons=document.querySelectorAll('button');
let res=document.querySelector('.res');
const content = document.createElement('div');
content.classList.add('content');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.className);
        let comp=getComputerChoice();
        if(playround(button.className,comp)==1){
            usercount++;
           }else if(playround(button.className,comp)==-1){
            compcount++;
           }

          

           res.innerHTML=`You:${usercount}  Machine:${compcount}`;

           
           
    });
  });
console.log(buttons);




