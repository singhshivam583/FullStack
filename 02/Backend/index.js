import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
          id: '1',
          title: 'high-back bench',
          company: 'ikea',
          image: 'https://course-api.com/images/store/product-1.jpeg',
          price: 800,
        },
        {
          id: '2',
          title: 'albany table',
          company: 'marcos',
          image: 'https://course-api.com/images/store/product-2.jpeg',
          price: 3000,
        },
        {
          id: '3',
          title: 'accent chair',
          company: 'caressa',
          image: 'https://course-api.com/images/store/product-3.jpeg',
          price: 1500,
        },
        {
          id: '4',
          title: 'wooden table',
          company: 'caressa',
          image: 'https://course-api.com/images/store/product-4.jpeg',
      
          price: 2000,
        },
        {
          id: '5',
          title: 'dining table',
          company: 'caressa',
          image: 'https://course-api.com/images/store/product-5.jpeg',
      
          price: 1000,
        },
        // {
        //   id: 'recNWGyP7kjFhSqw3',
        //   title: 'sofa set',
        //   company: 'liddy',
        //   image: 'https://course-api.com/images/store/product-6.jpeg',
        //   price: 69.99,
        // },
        // {
        //   id: 'recZEougL5bbY4AEx',
        //   title: 'modern bookshelf',
        //   company: 'marcos',
        //   image: 'https://course-api.com/images/store/product-7.jpeg',
        //   price: 8.99,
        // },
        // {
        //   id: 'recjMK1jgTb2ld7sv',
        //   title: 'emperor bed',
        //   company: 'liddy',
        //   image: 'https://course-api.com/images/store/product-8.jpeg',
        //   price: 21.99,
        // },
        // {
        //   id: 'recmg2a1ctaEJNZhu',
        //   title: 'utopia sofa',
        //   company: 'marcos',
        //   image: 'https://course-api.com/images/store/product-9.jpeg',
        //   price: 39.95,
        // },
        // {
        //   id: 'recvKMNR3YFw0bEt3',
        //   title: 'entertainment center',
        //   company: 'liddy',
        //   image: 'https://course-api.com/images/store/product-10.jpeg',
        //   price: 29.98,
        // },
        // {
        //   id: 'recxaXFy5IW539sgM',
        //   title: 'albany sectional',
        //   company: 'ikea',
        //   image: 'https://course-api.com/images/store/product-11.jpeg',
        //   price: 10.99,
        // },
        // {
        //   id: 'recyqtRglGNGtO4Q5',
        //   title: 'leather sofa',
        //   company: 'liddy',
        //   image: 'https://course-api.com/images/store/product-12.jpeg',
        //   price: 9.99,
        // },
      ];

    if(req.query.search){
        const filterProducts= products.filter(product => 
        product.title.includes(req.query.search))
        res.send(filterProducts)
        return;
    }

    setTimeout(() => {
      res.send(products);
    },3000)
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

