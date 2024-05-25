const listContainer=document.getElementById('list');
const showListButton=document.getElementById('show-list-btn');

const productList=['pen','paper','rice','soap','oil'];

showListButton.addEventListener('click',function(){

    listContainer.innerText='';
    productList.forEach(function (product){
        const listItem=document.createElement('li');
    
        listItem.appendChild(getProductItem(product));
    
        listContainer.appendChild(listItem);
    });
});

function getProductItem(product){
    const productElement=document.createElement('div');
    productElement.className='flex border border-sky-500 my-2 justify-center';
    productElement.innerText=product.toUpperCase();

    return productElement;
}