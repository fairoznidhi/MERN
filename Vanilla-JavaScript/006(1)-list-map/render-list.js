const listContainer=document.getElementById('list');
const showListWithForEachButton=document.getElementById('show-list-btn');
const showListWithMapButton=document.getElementById('show-list-btn1');

const productList=['pen','paper','rice','soap','oil'];

function clearListContainer(){
    listContainer.innerText='';
}

showListWithForEachButton.addEventListener('click',function(){
    clearListContainer();
    productList.forEach(function (product){
        const listItem=document.createElement('li');
    
        listItem.appendChild(getProductItem(product));
    
        listContainer.appendChild(listItem);
    });
});

showListWithMapButton.addEventListener('click', function(){
    clearListContainer();

    const listItems=productList.map(function(product,index){
        let backgroundColor='white';
        if(index%2===1){
            backgroundColor='neutral-200';
        }
        return getProductItem(product, backgroundColor,'green');
    });
    listContainer.append(...listItems);
});

function getProductItem(product,backgroundColor='white', borderColor='sky'){
    const productElement=document.createElement('div');
    productElement.className=`flex border border-${borderColor}-500 my-2 justify-center bg-${backgroundColor}`;
    productElement.innerText=product.toUpperCase();

    return productElement;
}
