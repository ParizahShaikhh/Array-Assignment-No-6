// Part-1:
// Basic arrays: Product Inventory:
// Challenge:
// You are tasked with creating aProduct Inventory system. Implement functions and logic to manage object manipulation effectively.
// 1.Define a type alias named Product to represent a product with the following 
// properties:
// •name (string):The name of the product.
// •price (number):The price of the product.
// •inventory (object):An object containing inventory details including:
// •stock (number):The number of products available.
// •colorOptions (string[]):An array listing available colors.
// 2.Create an array named products containing at least three product objects. Each product object should include a name,price,and inventory details.
// 3.Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color(implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
// 4.Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.


// answer:

// Step 1: Define the type alias
type Product = {
    name: string;
    price: number;
    color: string;
    inventory: Inventory; 
};

type Inventory = {
    stock: number;
    colorOptions: string[];
};

// Step 2: Create the array of products
const products: Product[] = [
    {
        name: "Cool T-Shirt",
        price: 2000,
        color: "white",
        inventory: {
            stock: 100,
            colorOptions: ["white", "red", "blue", "green"]
        }
    },
    {
        name: "Fancy Hat",
        price: 1500,
        color: "black",
        inventory: {
          stock: 500,
          colorOptions: ["black", "red", "blue"]  
        }
    },
    {
        name: "Stylish Jeans",
        price: 4500,
        color: "blue",
        inventory: {
          stock: 550,
          colorOptions: ["black", "blue"]  
        }
    }
];

// Step 3: Implement the changeColor function

function changeColor(products: Product, newColor: string): void {
    if (!products.inventory.colorOptions.includes(newColor)) {
        console.log(`Color ${newColor} is not available for ${products.name}.`);
        return;
    }

    products.color = newColor;
    switch (newColor) {
        case "red":
            products.price *= 1.10; // Increase price by 10%
            break;
            case "blue":
            products.price *= 0.95; // Decrease price by 5%
            break;
    
        default:
             // No price change for other colors
            break;
    }
}

// Step 4: Display each product's details

function displayProductDetails(products: Product[]): void {
    products.forEach(products => {
        console.log(`Name: ${products.name}`);
        console.log(`Price: ${products.price.toFixed(2)}`);
        console.log(`Color: ${products.color}`);
        console.log(`Stock: ${products.inventory.stock}`);
        console.log(`Available Colors: ${products.inventory.colorOptions.join(", ")}`);
        console.log("---");
    });
}

// Example Usage
console.log("Initial Products:");
displayProductDetails(products);

changeColor(products[0], "red");
changeColor(products[1], "blue");

console.log("\nUpdated Products:");
displayProductDetails(products);