document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
   
    const supplierName = urlParams.get('supplier');
    
    let data = sessionStorage.getItem("passedparam");
    function getProductsForSupplier(supplierName) {
       
        const products = {
            'NIKE': [
                { id: 1, name: 'shoes', cost: 5000 },
                { id: 2, name: 'upper', cost: 1550 },
                { id: 3, name: 'lower', cost: 3400 },
                { id: 4, name: 'trackuit', cost: 2550 },
               
            ],
            'PUMA': [
                { id: 1, name: 'Product 1', cost: 1200 },
                { id: 2, name: 'Product 2', cost: 1550 },
                { id: 3, name: 'Product 3', cost: 1009 },
                { id: 4, name: 'Product 4', cost: 1507 },
            ],
    
        };


        
    
        return products[supplierName] || [];
    }
    
const productDetails = getProductsForSupplier("");
//idhar barabar se pass kiya hai n??

   
    const productDetailsElement = document.getElementById('product-details');
    productDetails.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Product ID: ${product.id}</p>
            <p>Cost: ${product.cost}</p>
            <p>Status: ${product.status}</p>
        `;
        productDetailsElement.appendChild(productElement);
    });


});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

console.log(queryString);