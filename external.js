function getComputerChoice(){
    let arr=["rock","paper","scissors"];
    let result=Math.floor(Math.random()*3);
    return arr[result];
}
//usage of callbacks
function playround(userinput,compchoice){
    userinput=userinput.toLowerCase();
    
    if(compchoice===userinput){
        return "play again as it's a tie";
    }else if(userinput==="rock" && compchoice==="scissors"){
        return "You won but i won't take a chance next time";
    }else if(userinput==="paper" && compchoice==="rock"){
        return "You won but i won't take a chance next time";
    }else if(userinput==="scissors" && compchoice==="paper"){
        return "You won but i won't take a chance next time";
    }
    else{
        return"You lose,Try to play again you may win the game";
    }



}
let compcount=0;
let usercount=0;
for(let i=0;i<5;i++){
    let userchoice=prompt("hey what's your choice to beat the Machines choice?")
    let comp=getComputerChoice();  
    console.log(playround(userchoice,comp));

}
console.log(`You:${usercount}  Machine:${compcount}`);

