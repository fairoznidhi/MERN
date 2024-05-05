const numberInput=document.getElementById('input-number');
const generateButton=document.getElementById('generate');
const tableDisplay=document.getElementById('table-container');

generateButton.addEventListener('click',function(){
    tableDisplay.innerText='';
    const number=parseInt(numberInput.value);
    for(let i=1;i<=10;i++){
        const tableRow=document.createElement('h4');
        tableRow.innerText=`${number} x ${i} = ${number*i}`;
        tableDisplay.appendChild(tableRow);
    }
})