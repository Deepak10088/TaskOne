const root = document.getElementById('root');
root.classList.add('root');

// Created a div for the header
const header = document.createElement('div');
header.classList.add('header');
header.style.width = "100%";

// Created a heading for the website
const h1 = document.createElement('h1');
h1.textContent = "My Website";
h1.style.backgroundColor = '#1A1110';  // Licorice
h1.style.color = '#FFFF38';  // Lemon
h1.style.textAlign = 'left';
h1.style.width = "100%";
h1.style.padding = '20px'
header.appendChild(h1);

// Created a search space for search
const search = document.createElement('input');
search.classList.add('Search');
search.type = "text";
search.placeholder = 'Search..';
search.style.padding = '10px';
search.style.borderRadius = '5px';
search.style.border = '1px solid';
search.style.float = 'centre';
search.style.width = '30%';
search.style.marginLeft = '15%'

// Created a search button
const searchbutton = document.createElement('button');
searchbutton.style.backgroundColor = '#FFFF38';
searchbutton.textContent = 'Search';
searchbutton.style.borderRadius = '5px';
searchbutton.style.width = '10%';
searchbutton.style.float = 'centre';
searchbutton.style.padding = '10px';
searchbutton.style.border = '2px solid black';

// Search button event listener
searchbutton.addEventListener('click', () => {
    const value = search.value.toLowerCase();
    let filteredProducts = allproduct.filter((item) => {
        return item.name.toLowerCase().includes(value); 
    });
    productdisplay(filteredProducts); 
});



//Sort Button
// const label = document.createElement('label');
// label.textContent = 'Sort By';
// label.setAttribute(
//     "style",
//     `
//     color: black;
//     font-size: 18px;
//     `
// );

const dropdown = document.createElement('select');
dropdown.textContent = 'Select';
dropdown.style.borderRadius = '5px';
dropdown.style.width = '10%';
dropdown.style.float = 'right';
dropdown.style.padding = '10px';
dropdown.style.border = '2px solid black';
dropdown.style.marginRight = '30px';
dropdown.style.backgroundColor = '#ff7d00';


const optdefault = document.createElement('option');
optdefault.value = "";
optdefault.textContent = "Select";


const optlow = document.createElement('option');
optlow.value = 'low';
optlow.textContent = 'low to high';

const opthigh = document.createElement('option');
opthigh.value = 'high';
opthigh.textContent = 'high to low';

const optasc = document.createElement('option');
optasc.value = 'A-Z';
optasc.textContent = 'A - Z';

const descending = document.createElement('option');
descending.value = 'Z-A';
descending.textContent = 'Z-A';

//Adding Event in dropdown 
dropdown.addEventListener('change', () => {
    const sortvalue = dropdown.value;

    // let sortedProducts =[];

    if(sortvalue === "low"){
       let sortedProducts = allproduct.sort((a,b) => parseInt(a.price) - parseInt(b.price));
       productdisplay(sortedProducts);
    } else if(sortvalue === "high"){
        let high = allproduct.sort((a,b) => parseInt(b.price) - parseInt(a.price));
        productdisplay(high)
    } else if(sortvalue === "A-Z"){
        let accending = allproduct.sort((a,b) => a.name.localeCompare(b.name));
        productdisplay(accending)
    } else if(sortvalue === "Z-A"){
        let descending = allproduct.sort((a,b) => b.name.localeCompare(a.name));
        productdisplay(descending)
    }
    // productdisplay(sortedProducts);
});

dropdown.appendChild(optdefault);
dropdown.appendChild(optlow);
dropdown.appendChild(opthigh);
dropdown.appendChild(optasc);
dropdown.appendChild(descending);

h1.appendChild(search);
h1.appendChild(searchbutton);
// header.appendChild(label);
h1.appendChild(dropdown);
root.appendChild(header);

// Function to add styling
function Style() {
    const style = document.createElement('style');
    style.textContent = `
    body {
        font-family: 'Amazon Ember', Arial, sans-serif;
        background-color: #fffd78;
        margin: 0;
        padding: 0;
        color: #111;
    }
    .root {
        display: flex;
        flex-wrap : wrap;
        gap: 20px;
        padding: 20px;
    }

    .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        width: 18.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #ddd;
    }

    .card h2 {
        font-size: 20px;
        margin: 15px 0;
        color: #232f3e;
    }

    .card .price {
        font-size: 18px;
        font-weight: bold;
        color: #b12704;
        margin: 10px 0;
    }

    .card .quantity {
        font-size: 14px;
        margin: 10px 0;
    }

    .card .description {
        font-size: 14px;
        line-height: 1.5;
        color: #555;
        margin: 10px 0;
        float: left;
    }

    .card .button {
        background-color: #ff9900;
        color: white;
        border: none;
        padding: 10px;
        width: 50%;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .card .button:hover {
        background-color: #FFFF31;
    }

    .card .button1 {
        background-color: #353839;  // Onyx
        color: white;
        border: none;
        padding: 10px;
        width: 50%;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .card .button1:hover {
        background-color: rgb(0, 42, 230);
    }
    `;
    document.head.appendChild(style);
}

// Call style function to add the styles
Style();


fetch('data.json').then((response) => {
    return response.json();
}).then((data) => {
    allproduct = data.products;  // Assigning the fetched data to the allproduct array
    productdisplay(allproduct);   // Initially displaying the products
});

// Display products function
function productdisplay(products) {
    // Clear the root container before appending new products
    root.innerHTML = '';
    root.appendChild(header);  // Re-add the header to the root
    

    products.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.image;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const price = document.createElement('h3');
        price.textContent = `${item.price}`;

        const quantity = document.createElement('h4');
        quantity.classList.add('quantity');
        quantity.textContent = `Quantity: ${item.quantity}`;

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = item.description;
        description.style.margin = "0 15px 15px";
        description.style.display = "none";

        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'Description';

        button.addEventListener('click', () => {
            if (description.style.display === 'none') {
                description.style.display = 'block';
                button.textContent = 'Show Less';
            } else {
                description.style.display = 'none';
                button.textContent = 'Description';
            }
        });

        const addcart = document.createElement('button');
        description.classList.add('cart');
        description.style.margin = "0 15px 15px";
        description.style.display = "none";
        addcart.textContent = 'Add to Cart';

        addcart.addEventListener('click', () =>{
            alert('Your product is added to cart')
        })

        // Append the elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(quantity);
        card.appendChild(description);
        card.appendChild(button);
        card.appendChild(addcart);

        // Add the card to the root
        root.appendChild(card);
    });
}



// const optprice = document.createElement('option');
// optprice.value = 'price';
// optprice.textContent = 'Sort by price';

// const optname = document.createElement('option');
// optname.value = 'name';
// optname.textContent = 'Sort by name';

// const pricedropdown = document.createElement('select');
// pricedropdown.setAttribute(
//     'style',
//     `
//     padding: 4px;
//     border: none;
//     border-radius: 5px;
//     display: none;
//     `
// );



// bfs , dfs , spa 
// working of react ,
// types of component ,
// difference btw component ,
// lifecycle method ,=> functional component
//                     class component 

// js 
// localStorage
// sessionStorage
// cookies
