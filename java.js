function getCompChoice(){
    let cChoice="";
    let a=Math.random();
    if(a<=0.33){
        cChoice="ROCK";
    }
    else if(a>0.33 && a<=0.66){
        cChoice="PAPER";

    }
    else{
        cChoice="SCISSORS"; 
    }
    return cChoice;
}
function getHumanChoice(){
    let hChoice= prompt("Choose Rock,Paper or Scissors.").toUpperCase();
    return hChoice;
}

let hScore=0;
let cScore=0;


function playGround(c,h){
    
    if(c=="ROCK"&& h=="SCISSORS"){
        console.log("Computer wins!");
        cScore=cScore+1;
    }
    else if(c=="PAPER"&& h=="ROCK"){
        console.log("Computer wins!")
        cScore=cScore+1;
    }
    else if(c=="SCISSORS"&& h=="PAPER"){
        console.log("Computer wins!");
        cScore=cScore+1;
    }
    else if(h=="ROCK" && c=="SCISSORS"){
        console.log("Human wins!");
        hScore=hScore+1;
    }
    else if(h=="PAPER" && c=="ROCK"){
        console.log("Human wins!");
        hScore=hScore+1;
    }
    else if(h=="SCISSORS" && c=="PAPER"){
        console.log("Human wins!");
        hScore=hScore+1;
    }
    else{
        console.log("Draw!");
    }
}
let rounds=prompt("How many rounds?:");
for(i=1;i<=rounds;i++){
const humanSelection = getHumanChoice();
const computerSelection = getCompChoice();

playGround(computerSelection,humanSelection);
console.log("Human :"+hScore+" wins");
console.log("Computer :"+cScore+" wins");}
