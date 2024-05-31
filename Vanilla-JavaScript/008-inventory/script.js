uniqueID=0;
function generateUniqueID(){
  return uniqueID++;
}
// Initial products array
const initialProducts = [
  {
    id: generateUniqueID(),
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    id: generateUniqueID(),
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    id: generateUniqueID(),
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
];
const productForm = document.getElementById('productForm');
const saveProductButton=productForm.querySelector('button[type="submit"]');
// Function to render products
function renderProducts(products) {
  const productItemList=document.getElementById("productTableBody");
  productItemList.innerText="";
  products.forEach(function(productItem,productIndex){
    const tableRow=document.createElement("tr");
    for(let i=0;i<6;i++){
      let cell=document.createElement('td');
      cell.className="py-2 px-4 border-b text-center";
      if(i==0){
        cell.innerText=productItem.name;
      }
      else if(i==1){
        cell.innerText=productItem.quantity;
      }
      else if(i==2){
        cell.innerText=productItem.price;
      }
      else if(i==3){
        cell.innerText=productItem.vendor;
      }
      else if(i==4){
        cell.innerText=productItem.category;
      }
      else{
        const editButton=document.createElement("button");
        editButton.className="mr-2 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";
        editButton.innerText="Edit";
        editButton.addEventListener('click', function() {
          document.getElementById("productName").value = productItem.name;
          document.getElementById("productQuantity").value = productItem.quantity;
          document.getElementById("productPrice").value = productItem.price;
          document.getElementById("productVendor").value = productItem.vendor;
          document.getElementById("productCategory").value = productItem.category;

          saveProductButton.style.display = "none";
          const updateButton = document.createElement("button");
          updateButton.innerText = "Update";
          updateButton.className = "bg-blue-500 text-white p-2 rounded";
          productForm.appendChild(updateButton);
          updateButton.addEventListener('click', function(event){
            event.preventDefault();

            initialProducts[productIndex].name = document.getElementById("productName").value;
            initialProducts[productIndex].quantity = document.getElementById("productQuantity").value;
            initialProducts[productIndex].price = document.getElementById("productPrice").value;
            initialProducts[productIndex].vendor = document.getElementById("productVendor").value;
            initialProducts[productIndex].category = document.getElementById("productCategory").value;

            renderProducts(initialProducts);
            productForm.reset();
            updateButton.remove();
            saveProductButton.style.display = "block";
          });

        });
        const deleteButton=document.createElement("button");
        deleteButton.className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";
        deleteButton.innerText="Delete";
        deleteButton.addEventListener('click', function() {
          initialProducts.splice(productIndex, 1);
          renderProducts(initialProducts);
        });
        cell.appendChild(editButton);
        cell.appendChild(deleteButton);
      }
      tableRow.appendChild(cell);
    }
    productItemList.appendChild(tableRow);
  });
}
renderProducts(initialProducts);

saveProductButton.addEventListener('click',function(){
  event.preventDefault();
  
  const productName=document.getElementById("productName").value;
  const productQuantity=document.getElementById("productQuantity").value;
  const productPrice=document.getElementById("productPrice").value;
  const productVendor=document.getElementById("productVendor").value;
  const productCategory=document.getElementById("productCategory").value;

  const newProduct={
    id: generateUniqueID(),
    name: productName,
    quantity: productQuantity,
    price: productPrice,
    vendor: productVendor,
    category: productCategory
  };

  initialProducts.push(newProduct);
  console.log("product added");
  renderProducts(initialProducts);
  productForm.reset();
});

