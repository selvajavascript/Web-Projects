const display =document.querySelector(".display");
const buttons = documnet.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnValue) =>{
    display.focus();
    if(btnValue === "=" && output !== ""){
        //if output has %, replace with '/100' before evaluvating.
        output = eval(output.replace("%","/100"));
    }else if(btnValue === "AC"){
        output = "";
    }else if(btnValue === "DEL"){
        //If DEL button is clicked remove the last character from the output
        output = output.toString().slice(1,-1);
    }else{
        //If output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue))
        return;
        output += btnValue;
    }
  display.value = output;  
};

//Add event listener to buttons, call calculate() on click.

buttons.foreach((button)=>{
    //Button click listerner calls calculate() with dataset value as arguments.
    button.addEventListener("click", (e)=> calculate(e.target.dataset.value));
});
 
