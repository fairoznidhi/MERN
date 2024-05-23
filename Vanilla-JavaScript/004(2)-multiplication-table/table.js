const generateButton=document.getElementById('generate');
const tableDisplay=document.getElementById('table-container');
generateButton.addEventListener('click',function(){
    const number = 5;
    tableDisplay.innerText="";//inner text age clear kore newa
    const table=document.createElement('table');
    table.className="w-full border-collapse test-center";
    for(let i=1;i<=10;i++){
        const tableRow=document.createElement('tr');
        tableRow.className="border-b";

        const leftCell=document.createElement('td');
        leftCell.innerText=`${number} x ${i} : `;

        const rightCell=document.createElement('td');
        rightCell.innerText=`${number*i}`;

        tableRow.appendChild(leftCell);
        tableRow.appendChild(rightCell);
        table.appendChild(tableRow);


    }
    tableDisplay.appendChild(table);
})