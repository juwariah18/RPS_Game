let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#computer");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("YOU WIN!");
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="green";
    } else {
         compScore++;
         compScorePara.innerText=compScore;
         console.log("YOU LOSE!");
         msg.innerText="YOU LOSE!";
         msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{    //knows userChoice
    console.log("userChoice=",userChoice);
    
    const compChoice= genCompChoice();  //generate computer choice
    console.log("compChoice=",compChoice);
    
    if(userChoice===compChoice){
       drawGame();
       msg.innerText=" IT'S A DRAW";
       msg.style.backgroundColor="blue";
    }else{
        let userWin=true;

        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissors"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

const drawGame=()=>{
    console.log("game was draw")
}

const genCompChoice=()=>{
    const options=["rock","paper","scissor"]; //options for comp to select from
    const rdIdx=Math.floor(Math.random() * 3); //func gives random math value btw 0&1 but idx is 0-2 so * by 3
    return options[rdIdx];
}
choices.forEach((choice)=> { //select all 3 choice and print html
    console.log(choice);
    choice.addEventListener("click",()=>{ //add click event
        let userChoice=choice.getAttribute("id"); ///access which choice was clicked by accessing id attr
        // console.log(userChoice);
        playGame(userChoice); //prints userchoice here
    });
});