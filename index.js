const root = document.getElementById('root');
root.classList.add('root');

//created a div whose name is header
const header = document.createElement('div')
header.classList.add = 'header';
header.style.width = "100%"

//created a heading of website
const h1 = document.createElement('h1');
h1.textContent = "My Website";
h1.style.backgroundColor = '#1A1110';  //Licorice
h1.style.color = '#FFFF38'    //Lemon
h1.style.textAlign = 'left'
h1.style.width = "100%"
header.appendChild(h1)

//created a search space for search
const search = document.createElement('input');
search.classList.add = 'Search';
search.type = "text";
search.placeholder = 'Search..';
search.style.padding = '10px';
search.style.borderRadius = '5px';
search.style.border = '1px solid ';
search.style.float = 'right'
search.style.width = '30%';

//created a search button 
const searchbutton = document.createElement('button')
searchbutton.classList.add = 'S-Button'
searchbutton.style.backgroundColor = '#FFFF38'
searchbutton.textContent = 'Search';
searchbutton.style.borderRadius = '5px';
searchbutton.style.width = '10%';
searchbutton.style.float = 'right'
searchbutton.style.padding = '10px';
searchbutton.style.border = '2px solid black'


h1.appendChild(searchbutton)
h1.appendChild(search)
root.appendChild(header);
//Ending of header part=================================================================================

//Starting of function for adding styling

function Style() {
    const style = document.createElement('style');
    style.textContent = `
    body {
        font-family: 'Amazon Ember', Arial, sans-serif;
        background-color: #f1f1f1;
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
        background-color: #353839;  //Onyx
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
        background-color:rgb(0, 42, 230);
    }
    `;
    document.head.appendChild(style);
}

//Ending of Style part

//Starting of Card Part

const data = fetch('data.json').then((response) => {
    return response.json();
}).then((data) => {
    data.products.forEach((item) => {

        function productdisplay(item){

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
        // console.log(item.description);
        description.style.margin ="0 15px 15px";
        description.style.display= "none";

        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'Description';


        button.addEventListener('click', () => {
            if (description.style.display === 'none') {
                description.style.display = 'block';
                button.textContent = 'Show Less';
            } else {
                description.style.display = 'none';
                // description.textContent = item.description;
                button.textContent = 'Description';
            }
        });


        // const AddToCart = document.createElement('p')
        // AddToCart.classList.add('Cart')

        const button1 = document.createElement('button')
        button1.classList.add('button1')
        button1.textContent = 'Add To Cart';



        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(quantity);
        card.appendChild(button);
        card.appendChild(description);
        card.appendChild(button1)
        

        root.appendChild(card);
    };
    productdisplay(item);

    function Searchproduct(){
        document.querySelector('card').innerHTML = ""
        const search_box = document.querySelector('Search').value
        const search_term = search_box.toLowerCase()
        const filtered = item.filter(items => items.name.toLowerCase().includes(search_term))
        productdisplay(filtered)
    }

    const search_button = document.querySelector('.S-Button')
    search_button.addEventListener('click',Searchproduct)

    // let datadisplay = data.filter((eventdata) =>{
    //     if (search.value === ""){return eventdata}
    //     else if(eventdata.name.toLowerCase().includes(search.value.toLowerCase())){
    //         return eventdata
    //     }
    //     console.log(datadisplay);
        
    // })

    // searchbutton.addEventListener('click',()=>{
    //     document.querySelector('.card').innerHTML = " "
    //     const value = document.querySelector('.search').value
    //     value.toLowerCase();
    //     const filterproduct = item.filter((item) =>{
    //         item.name.toLowerCase().includes(value)
    //     });
    //     productdisplay(filterproduct)
        
    // })
});

console.log(data);



});



Style();




















// const root = document.getElementById('root');
// root.classList.add('root');
// const h1 = document.createElement('h1');
// h1.textContent = "My Website";
// h1.style.backgroundColor = '#1A1110';  //Licorice
// h1.style.color = '#FFFF38'    //Lemon
// h1.style.textAlign = 'left'
// h1.style.width = "100%"
// root.appendChild(h1);

// const searchbutton = document.createElement('button')
// searchbutton.style.backgroundColor = 'red'
// searchbutton.textContent = 'Search';
// searchbutton.style.borderRadius = '5px';
// searchbutton.style.width = '10%';
// searchbutton.style.float = 'right'
// searchbutton.style.padding = '10px';
// searchbutton.style.border = '2px solid black'

// const search = document.createElement('input');
// search.classList.add = 'Search';
// search.type = "text";
// search.placeholder = 'Search..';
// search.style.padding = '10px';
// search.style.borderRadius = '5px';
// search.style.border = '1px solid ';
// search.style.float = 'right'
// search.style.width = '30%';
// h1.appendChild(search)
// h1.appendChild(searchbutton)

// function Style() {
//     const style = document.createElement('style');
//     style.textContent = `
//     body {
//         font-family: 'Amazon Ember', Arial, sans-serif;
//         background-color: #f1f1f1;
//         margin: 0;
//         padding: 0;
//         color: #111;
//     }
//     .root {
//         display: flex;
//         flex-wrap : wrap;
//         gap: 20px;
//         padding: 20px;
//     }

//     .card {
//         border: 1px solid #ddd;
//         border-radius: 8px;
//         background-color: white;
//         box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//         transition: transform 0.3s ease, box-shadow 0.3s ease;
//         width: 18.5%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }

//     .card:hover {
//         transform: scale(1.05);
//         box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
//     }

//     .card img {
//         width: 100%;
//         height: 200px;
//         object-fit: cover;
//         border-bottom: 1px solid #ddd;
//     }

//     .card h2 {
//         font-size: 20px;
//         margin: 15px 0;
//         color: #232f3e;
//     }

//     .card .price {
//         font-size: 18px;
//         font-weight: bold;
//         color: #b12704;
//         margin: 10px 0;
//     }

//     .card .quantity {
//         font-size: 14px;
//         margin: 10px 0;
//     }

//     .card .description {
//         font-size: 14px;
//         line-height: 1.5;
//         color: #555;
//         margin: 10px 0;
//     }

//     .card .button {
//         background-color: #ff9900;
//         color: white;
//         border: none;
//         padding: 10px;
//         width: 50%;
//         font-size: 16px;
//         border-radius: 5px;
//         cursor: pointer;
//         transition: background-color 0.3s ease;
//     }

//     .card .button:hover {
//         background-color: #FFFF31;
//     }

//     .card .button1 {
//         background-color: #353839;  //Onyx
//         color: white;
//         border: none;
//         padding: 10px;
//         width: 50%;
//         font-size: 16px;
//         border-radius: 5px;
//         cursor: pointer;
//         transition: background-color 0.3s ease;
//     }

//     .card .button1:hover {
//         background-color:rgb(0, 42, 230);
//     }
//     `;
//     document.head.appendChild(style);
// }





// const data = fetch('data.json').then((response) => {
//     return response.json();
// }).then((data) => {
//     data.products.forEach((item) => {

//         function productdisplay(item){

//         const card = document.createElement('div');
//         card.classList.add('card');

//         const img = document.createElement('img');
//         img.src = item.image;

//         const name = document.createElement('h2');
//         name.textContent = item.name;

//         const price = document.createElement('h3');
//         price.textContent = `${item.price}`;

//         const quantity = document.createElement('h4');
//         quantity.classList.add('quantity');
//         quantity.textContent = `Quantity: ${item.quantity}`;

//         const description = document.createElement('p');
//         description.classList.add('description');
//         description.textContent = item.description;
//         // console.log(item.description);
//         description.style.margin ="0 15px 15px";
//         description.style.display= "none";

//         const button = document.createElement('button');
//         button.classList.add('button');
//         button.textContent = 'Description';


//         button.addEventListener('click', () => {
//             if (description.style.display === 'none') {
//                 description.style.display = 'block';
//                 button.textContent = 'Show Less';
//             } else {
//                 description.style.display = 'none';
//                 // description.textContent = item.description;
//                 button.textContent = 'Description';
//             }
//         });


//         // const AddToCart = document.createElement('p')
//         // AddToCart.classList.add('Cart')

//         const button1 = document.createElement('button')
//         button1.classList.add('button1')
//         button1.textContent = 'Add To Cart';



//         card.appendChild(img);
//         card.appendChild(name);
//         card.appendChild(price);
//         card.appendChild(quantity);
//         card.appendChild(button);
//         card.appendChild(description);
//         card.appendChild(button1)
        

//         root.appendChild(card);
//     };
//     productdisplay(item);

//     // let datadisplay = data.filter((eventdata) =>{
//     //     if (search.value === ""){return eventdata}
//     //     else if(eventdata.name.toLowerCase().includes(search.value.toLowerCase())){
//     //         return eventdata
//     //     }
//     //     console.log(datadisplay);
        
//     // })

//     // searchbutton.addEventListener('click',()=>{
//     //     document.querySelector('.card').innerHTML = " "
//     //     const value = document.querySelector('.search').value
//     //     value.toLowerCase();
//     //     const filterproduct = item.filter((item) =>{
//     //         item.name.toLowerCase().includes(value)
//     //     });
//     //     productdisplay(filterproduct)
        
//     // })
// });

// console.log(data);



// });



// Style();
