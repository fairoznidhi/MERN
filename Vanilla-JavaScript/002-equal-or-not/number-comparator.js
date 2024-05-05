let number1Input=document.getElementById('number1');
let number2Input=document.getElementById('number2');
let displayElement=document.getElementById('result');
let buttonClick=document.getElementById('compare');

function setResultText(text){
    displayElement.innerText=text;
}

buttonClick.addEventListener('click',comparatorFunction);
function comparatorFunction(){
    const number1=parseInt(number1Input.value);
    const number2=parseInt(number2Input.value);
    if(number1>number2){
        setResultText("Number-1 is greater than Number-2.");
    }
    else if(number2>number1){
        setResultText("Number-2 is greater than Number-1.");
    }
    else{
        setResultText("Both numbers are equal.");
    }
}
