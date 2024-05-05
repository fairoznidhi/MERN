const marksInput=document.getElementById('score');
const gradeDisplay=document.getElementById('result');
const calculateButton=document.getElementById('calculate');

function setResultText(text){
    gradeDisplay.innerText=text;
}

calculateButton.addEventListener('click', function (){
        if(marksInput.value===''){
            marksInput.style.border="1px solid red";
            gradeDisplay.innerText="Enter marks";
            return;
        }
        const marks=parseFloat(marksInput.value);
        let displayText='';
        if(marks>100 || marks<0){
            displayText="Invalid Marks";
        }
        else if(marks>=80 && marks<=100){
            displayText="A+";
        }
        else if(marks>=70 && marks<80){
            displayText="A";
        }
        else if(marks>=60 && marks<70){
            displayText="A-";
        }
        else if(marks>=50 && marks<60){
            displayText="B+";
        }
        else if(marks>=40 && marks<50){
            displayText="B";
        }
        else{
            displayText="F";
        }
        setResultText(displayText);
    }
);