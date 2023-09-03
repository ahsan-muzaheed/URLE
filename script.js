// Datas of Products
const Data = [
    {
        id: 1,
        imageSrc: 'images/img1.webp',
        title: 'Box 1',
        subTitle: 'AD Gaming',
        link: 'product.html?id=1',
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
        desc : 'Here you can find a lot of coral models, at all it is around 79 units.',

        issueDate: '1st September 2023',
        rate: '<i class="fa-solid fa-star"></i>' + '<i class="fa-solid fa-star"></i>' + 
            '<i class="fa-solid fa-star"></i>' + '<i class="fa-solid fa-star"></i>' + 
            '<i class="fa-solid fa-star"></i>',
        numberReview: '23 Reviews Written',
        questAnswered: '5 of 6 Question Answered',

        sliderImgs: [
            {
                slideImg: 'images/Coral1.jpg',
            },
            {
                slideImg: 'images/Coral2.jpg',
            },
            {
                slideImg: 'images/Coral3.avif',
            },
            {
                slideImg: 'images/Coral4.webp',
            },
            {
                slideImg: 'images/Coral5.jpg'
            },
        ]
    },
];

// Function to generate product list on the home page
function generateProductList() {
    const productList = document.querySelector(".boxes"); // Use querySelector to select by class

    Data.forEach(item => {
        const box = document.createElement("a");
        box.href = `product.html?id=${item.id}`;
        box.classList.add("box");


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


        productList.appendChild(box);
    });
}
if (document.querySelector(".boxes")) {
    generateProductList();
}


// data showing for Product page
function displayProductDetails() {
    const wrapper2 = document.querySelector(".wrapper2");
    const wrapper1 = document.querySelector(".wrapper1");
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));





    const selectedProduct = Data.find(product => product.id === productId);

    if (selectedProduct) {
        // const productTitle = document.createElement("h2");
        // productTitle.textContent = selectedProduct.title;

        // const productDescription = document.createElement("p");
        // productDescription.textContent = selectedProduct.offer;

        // productDetails.appendChild(productTitle);
        // productDetails.appendChild(productDescription);

        selectedProduct.sliderImgs.forEach(sImg => {
            // for wrapper2
            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');

            const slideImg = document.createElement('img');
            slideImg.src = sImg.slideImg;

            swiperSlide.appendChild(slideImg);
            wrapper2.appendChild(swiperSlide);


            // for wrapper2
            const swiperSlide1 = document.createElement('div');
            swiperSlide1.classList.add('swiper-slide');

            const slide1Img = document.createElement('img');
            slide1Img.src = sImg.slideImg;

            swiperSlide1.appendChild(slide1Img);
            wrapper1.appendChild(swiperSlide1);
        })

        // for product information in product description page
        const productInfos = document.querySelector('.product__infos')
        const productTitle = document.querySelector('.product__title')
        const issueDate = document.querySelector('.issue__date')
        const rate = document.querySelector('.rate')
        const rate__num = document.querySelector('.rate__num')
        const rate__read = document.querySelector('.rate__read')
        const prod__desc = document.querySelector('.prod__desc')


        productTitle.textContent = selectedProduct.title
        issueDate.textContent = selectedProduct.issueDate
        rate.innerHTML = selectedProduct.rate
        rate__num.textContent = selectedProduct.numberReview
        rate__read.textContent = selectedProduct.questAnswered
        prod__desc.textContent = selectedProduct.desc



    } else {
        productDetails.textContent = "Product not found.";
    }
}
displayProductDetails();



// swiper js code


