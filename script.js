// Sample Product Data
const products = [
    {
        id: 1,
        name: "Mie Ayam",
        description: "Best Seller",
        price: "Rp. 15.000",
        image: "Images/mie_ayam.jpg"
    },
    {
        id: 2,
        name: "Bakso",
        description: "Sing ra seneng mie ayam",
        price: "Rp. 15.000",
        image: "Images/bakso.jpg"
    },
    {
        id: 3,
        name: "Es Teh",
        description: "Men ra seret",
        price: "Rp. 3.000",
        image: "Images/es_teh.jpg"
    }
];

// Function to render products on the page
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onclick="alert('Product added to cart!')">Add to Cart</button>
        `;

        container.appendChild(productElement);
    });
}

// Call the function to render products when the page loads
window.onload = renderProducts;
