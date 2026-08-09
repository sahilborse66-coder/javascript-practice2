// let products = [
//     { id: 1, name: "Laptop", price: 55000, quantity: 1 },
//     { id: 2, name: "Mouse", price: 800, quantity: 2 },
//     { id: 3, name: "Keyboard", price: 1500, quantity: 1 }
// ];

// Create functions for:
//
// 1. Add product
// 2. Remove product
// 3. Increase quantity
// 4. Decrease quantity
// 5. Calculate total
// 6. Apply discount
// 7. Calculate GST
// 8. Print final bill

// {
//     id: 1,
//     name: "Sahil",
//     age: 22,
//     marks: {
//         java: 85,
//         javascript: 90,
//         sql: 78
//     }
// }

// let products = [
//     {
//         id: 1,
//         name: "iPhone 15",
//         category: "Mobile",
//         price: 65000,
//         rating: 4.5,
//         stock: 10
//     },
//     {
//         id: 2,
//         name: "HP Laptop",
//         category: "Laptop",
//         price: 55000,
//         rating: 4.2,
//         stock: 5
//     },
//     {
//         id: 3,
//         name: "Sony Headphones",
//         category: "Audio",
//         price: 5000,
//         rating: 4.4,
//         stock: 20
//     }
// ];

// let employees = [
//     {
//         id: 101,
//         name: "Sahil",
//         age: 22,
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Rahul",
//         age: 25,
//         department: "HR",
//         salary: 40000,
//         experience: 3
//     },
//     {
//         id: 103,
//         name: "Amit",
//         age: 28,
//         department: "IT",
//         salary: 65000,
//         experience: 5
//     },
//     {
//         id: 104,
//         name: "Priya",
//         age: 24,
//         department: "Finance",
//         salary: 50000,
//         experience: 2
//     }
// ];




// addEmployee({
//     id: 105,
//     name: "Neha",
//     age: 26,
//     department: "IT",
//     salary: 55000,
//     experience: 4
// });


// let accounts = [
//     {
//         accountNumber: 1001,
//         name: "Sahil",
//         pin: 1234,
//         balance: 50000,
//         transactions: []
//     },
//     {
//         accountNumber: 1002,
//         name: "Rahul",
//         pin: 5678,
//         balance: 30000,
//         transactions: []
//     }
// ];


// createAccount(
//     "Amit",
//     9999,
//     25000
// );

// let products = [
//     {
//         id: 1,
//         name: "iPhone 15",
//         category: "Mobile",
//         price: 65000,
//         stock: 10,
//         rating: 4.5
//     },
//     {
//         id: 2,
//         name: "HP Laptop",
//         category: "Laptop",
//         price: 55000,
//         stock: 7,
//         rating: 4.2
//     },
//     {
//         id: 3,
//         name: "Sony Headphones",
//         category: "Audio",
//         price: 5000,
//         stock: 15,
//         rating: 4.4
//     },
//     {
//         id: 4,
//         name: "Samsung Monitor",
//         category: "Monitor",
//         price: 18000,
//         stock: 5,
//         rating: 4.1
//     }
// ];

// let cart = [];

// let orders = [];



let products = [
    {
        id: 1,
        name: "Nike Running Shoes",
        category: "Shoes",
        price: 2999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Watch",
        price: 4999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        name: "iPhone",
        category: "Mobile",
        price: 69999,
        rating: 4.7,
        image: "./images/iphone.jpg"
    },

    {
        id: 4,
        name: "Laptop",
        category: "Laptop",
        price: 55999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },

    {
        id: 5,
        name: "Casual Shoes",
        category: "Shoes",
        price: 1999,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    },

    {
        id: 6,
        name: "Luxury Watch",
        category: "Watch",
        price: 8999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
    }
];

let productContainer = document.getElementById("productContainer");

function displayProducts() {

    productContainer.innerHTML = "";

    products.forEach(function(product) {

        productContainer.innerHTML += `
        
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h2>${product.name}</h2>

                <p>Category: ${product.category}</p>

                <h3>₹${product.price}</h3>

                <p>⭐ ${product.rating}</p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>

        `;
    });
}

function addToCart(productId) {

    let selectedProduct = products.find(function(product) {

        return product.id === productId;

    });

    console.log("Product Added:", selectedProduct.name);

    alert(selectedProduct.name + " Added To Cart!");
}

displayProducts();