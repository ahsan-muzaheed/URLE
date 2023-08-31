const data = [
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 1',
        subTitle: 'AD Gaming',
        link: '#!',
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 2',
        subTitle: 'AD Gaming',
        link: '#!',
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 3',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 4',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 5',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 6',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 7',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 8',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 9',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
    { 
        imageSrc: 'images/img1.webp', 
        title: 'Box 10',
        subTitle: 'AD Gaming',
        link: '#!' ,
        offer: '50% OFF',
        price: '$12.44',
        category: 'Character',
    },
  ];
  
  const boxesContainer = document.querySelector('.boxes');
  
  data.forEach((item, index) => {

    const box = document.createElement('a'); // Change from 'div' to 'a'
    box.className = 'box';
    box.href = item.link;
  
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
  
    box.addEventListener('click', () => {
      const allBoxes = document.querySelectorAll('.box');
      allBoxes.forEach(otherBox => {
        otherBox.classList.remove('selected');
      });
  
      box.classList.add('selected');
    });
  
    boxesContainer.appendChild(box);
  });