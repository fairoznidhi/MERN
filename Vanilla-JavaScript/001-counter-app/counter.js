let count=0;

const displayElement=document.getElementById('counter');

const incrementButton= document.getElementById('increment');
incrementButton.addEventListener('click',incrementCount);
function incrementCount(){
    if(count<10){
        count++;
    }
    else{
        alert('Count cannot be greater than 10!');
    }

    displayElement.innerText=count;
}

// const decrementButton= document.getElementById('decrement');
// decrementButton.addEventListener('click',decrementCount);
function decrementCount(){
    if(count>0  ){
        count--;
    }
    else{
        alert('Count cannot be negative!');
    }
    displayElement.innerText=count;
}