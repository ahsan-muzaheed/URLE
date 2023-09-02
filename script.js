// JavaScript for index.html

// Sample data for products
const Data = [
    { 
        id: 1,
        imageSrc: 'images/img1.webp', 
        title: 'Box 1',
        subTitle: 'AD Gaming',
        link: 'product.html?id=1', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 2,
        imageSrc: 'images/img1.webp', 
        title: 'Box 2',
        subTitle: 'AD Gaming',
        link: 'product.html?id=2', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 3,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 4,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 5,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 6,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 7,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 8,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 9,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        id: 10,
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: 'product.html?id=3', // Modify the link to include the product ID
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
];

// Function to generate product list on the home page
function generateProductList() {
    const productList = document.querySelector(".boxes"); // Use querySelector to select by class

    Data.forEach(item => {
        const box = document.createElement("a");
        box.href = `product.html?id=${item.id}`;
        // box.textContent = item.title;
        box.classList.add("box");


        // start here 
        const image = document.createElement('img');
        image.src = item.imageSrc;
        image.alt = item.title;
    
        const title = document.createElement('h5');
        title.textContent = item.title;
    
        const subTitle = document.createElement('p');
        subTitle.textContent = item.subTitle;

        const offer = document.createElement('span')
        offer.classList.add('offer')
        offer.textContent = item.offer

        const price = document.createElement('span')
        price.classList.add('price')
        price.textContent = item.price

        const wrap = document.createElement('div')
        wrap.classList.add('price__wrap')

        wrap.appendChild(offer)
        wrap.appendChild(price)

        const boxContent = document.createElement('div')
        boxContent.classList.add('box__content')

        boxContent.appendChild(title)
        boxContent.appendChild(subTitle)
        boxContent.appendChild(wrap)

        const category = document.createElement('p')
        category.classList.add('category')
        category.textContent = item.category

        box.appendChild(image);
        box.appendChild(boxContent);
        box.appendChild(category)
        // end here


        productList.appendChild(box);
    });
}

// Check if we're on the home page and call the appropriate function
if (document.querySelector(".boxes")) {
    generateProductList();
}



// JavaScript for product.html

// Sample data for products
const products = [
    { id: 1, name: "Product 1", description: "Description 1" },
    { id: 2, name: "Product 2", description: "Description 2" },
    { id: 3, name: "Product 3", description: "Description 3" },
    { id: 4, name: "Product 4", description: "Description 4" },
    // Add more products here
];

// Function to display product details on the product page
function displayProductDetails() {
    const productDetails = document.getElementById("product-details");
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    const selectedProduct = Data.find(product => product.id === productId);

    if (selectedProduct) {
        const productTitle = document.createElement("h2");
        productTitle.textContent = selectedProduct.title;

        const productDescription = document.createElement("p");
        productDescription.textContent = selectedProduct.description;

        productDetails.appendChild(productTitle);
        productDetails.appendChild(productDescription);
    } else {
        productDetails.textContent = "Product not found.";
    }
}

// Call the function to display product details
displayProductDetails();

