const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "TV", price: 1500, category: "Electronics" },
    { name: "Book", price: 15, category: "Literature" },
    { name: "Smartphone", price: 500, category: "Electronics" },
    { name: "Desk", price: 150, category: "Furniture" },
    { name: "Chair", price: 85, category: "Furniture" },
    { name: "Graphic Novel", price: 30, category: "Literature" },
    { name: "Monitor", price: 300, category: "Electronics" },
    { name: "Keyboard", price: 100, category: "Electronics" },
    { name: "Mouse", price: 50, category: "Electronics" },
    { name: "Lamp", price: 45, category: "Furniture" },
    { name: "Novel", price: 20, category: "Literature" },
    { name: "Notebook", price: 5, category: "Stationery" },
    { name: "Pen", price: 3.5, category: "Stationery" },
    { name: "Table", price: 200, category: "Furniture" },
];

const totalElectronicsPrice = () => {
    // TODO: Return the total price of all electronic products
}

const discountProducts = () => {
    // TODO: Apply a 10% discount to every product and return new objects
}

const categorizedProducts = () => {
    // TODO: Create an object where each key is a category and its value is an array of products in that category
}

module.exports = { totalElectronicsPrice, discountProducts, categorizedProducts };
