import React, { useState } from 'react';
import './App.css';

function App() {
 
    const products = [
        {
          id: 'rec43w3ipXvP28vog',
          title: 'high-backbench',
          company: 'ikea',
          image: 'https://course-api.com/images/store/product-1.jpeg',
          price: 9.99,
        },
        {
          id: 'rec4f2RIftFCb7aHh',
          title: 'albanytable',
          company: 'marcos',
          image: 'https://course-api.com/images/store/product-2.jpeg',
          price: 79.99,
        },
        {
          id: 'rec8kkCmSiMkbkiko',
          title: 'accent chair',
          company: 'caressa',
          image: 'https://course-api.com/images/store/product-3.jpeg',
          price: 25.99,
        },
        {
          id: 'recBohCqQsot4Q4II',
          title: 'woodentable',
          company: 'caressa',
          image: 'https://course-api.com/images/store/product-4.jpeg',
      
          price: 45.99,
        },
        {
          id: 'recDG1JRZnbpRHpoy',
          title: 'diningtable',
          company: 'caressa',
          image: 'https://course-api.com/images/store/product-5.jpeg',
      
          price: 6.99,
        },
        {
          id: 'recNWGyP7kjFhSqw3',
          title: 'sofaset',
          company: 'liddy',
          image: 'https://course-api.com/images/store/product-6.jpeg',
          price: 69.99,
        },
        {
          id: 'recZEougL5bbY4AEx',
          title: 'modernbookshelf',
          company: 'marcos',
          image: 'https://course-api.com/images/store/product-7.jpeg',
          price: 8.99,
        },
        {
          id: 'recjMK1jgTb2ld7sv',
          title: 'emperorbed',
          company: 'liddy',
          image: 'https://course-api.com/images/store/product-8.jpeg',
          price: 21.99,
        },
        {
          id: 'recmg2a1ctaEJNZhu',
          title: 'utopiasofa',
          company: 'marcos',
          image: 'https://course-api.com/images/store/product-9.jpeg',
          price: 39.95,
        },
        {
          id: 'recvKMNR3YFw0bEt3',
          title: 'entertainmentcenter',
          company: 'liddy',
          image: 'https://course-api.com/images/store/product-10.jpeg',
          price: 29.98,
        },
        {
          id: 'recxaXFy5IW539sgM',
          title: 'albany sectional',
          company: 'ikea',
          image: 'https://course-api.com/images/store/product-11.jpeg',
          price: 10.99,
        },
        {
          id: 'recyqtRglGNGtO4Q5',
          title: 'leather sofa',
          company: 'liddy',
          image: 'https://course-api.com/images/store/product-12.jpeg',
          price: 9.99,
        },
      ];
      

    const [furniture, setFurniture] = useState('all');
  const [title, setTitle] = useState('');
  const [yes, setYes] = useState('true');
  const filterItems = (category) => {
    setFurniture(category);
    setYes("false");
    };
   
      const filtered = products.filter((product) => {
        const titles = product.title.toLowerCase();
        const search = title.toLowerCase();
        return titles.includes(search);
     
      })
    

  return (
    <>
      <h2 className="title">This is the React JS furniture rendering app</h2>
      <div className="main-page">
        <div className="labels">
                  <input type="search" placeholder="Enter your furniture name" value={ title} onChange={(e)=>setTitle(e.target.value)} />
          <br />
          <button onClick={() => filterItems('all')}>All</button>
          <br />
          <button onClick={() => filterItems('ikea')}>Ikea</button>
          <br />
          <button onClick={() => filterItems('marcos')}>Marcos</button>
          <br />
          <button onClick={() => filterItems('caressa')}>Caressa</button>
          <br />
          <button onClick={() => filterItems('liddy')}>Liddy</button>
        </div>
        <div className="render">
        {
          yes === 'true' ?
    filtered.map((product) => (
       <div key={product.id}>
         <img src={product.image} alt="alternate" />
         <h2>{product.title}</h2>
         <p>{product.company}</p>
         <p>{product.price}</p>
    </div>
  )) :
  products.map((item) => {
    if (furniture === 'all' || furniture === item.company) {
      return (
        <div key={item.id}>
          <img src={item.image} alt="alternate" />
          <h2>{item.title}</h2>
          <p>{item.company}</p>
          <p>{item.price}</p>
        </div>
      );
    }
    return null;
  })
}

        </div>
      </div>
    </>
  );
}

export default App;
