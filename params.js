// --------------------------
// Product Data
//-----------------------------

const products = [
    { id: 1, name: "Product 1", price: 3, image: "https://placehold.cs/300" },
    { id: 2, name: "Product 2", price: 5, image: "https://placehold.cs/300" },
    { id: 3, name: "Product 3", price: 7, image: "https://placehold.cs/300" },
];

// --------------------------------
// Retrieve a specific parameter
// --------------------------------

function getParamValue(key) {
    const raw = window.location.search;
    const parsed = new URLSearchParams(raw);
    return parsed.get(key);
}


// ------------------------------------
// Build HTML for a single product
// ------------------------------------
function createProductMarkup(item) {
    return `
    <section class="product">
        <img src="${item.image}" alt="{item.name}">
            <h2>{item.name}</h2>
            <p>Price: $${item.price}</p>
        </div>
    </section>
    `;
}
    // -------------------------------------
    // Main controller for product.html
// -------------------------------------
function loadProductPage() {
    const idFromURL = getParamValue("productID");
    

    if (match) {
        const container = document.querySelector("main");
        container.insertAdjacentHTML("beforeend", createProductMarkup(match));
    }
}

// Run it immediately on product.html
loadProductDetails();

