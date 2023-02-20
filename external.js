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
for(let i=0;i<5;i++){
    let userchoice=prompt("hey what's your choice to beat the Machines choice?")
    let comp=getComputerChoice(); 
    if(playround(userchoice,comp)==0){
        continue;
    }

   if(playround(userchoice,comp)==1){
    usercount++;
   }else if(playround(userchoice,comp)==-1){
    compcount++;
   }

}
console.log(`You:${usercount}  Machine:${compcount}`);

