import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Pedro',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jose',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Adriano',
      email: 'adriano@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Camisa Social',
      slug: 'nike-slim-shirt',
      category: 'Camisa',
      image: '/images/p1.jpg', // 679px × 829px
      price: 100,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'Camisa Social de alta qualidade',
    },
    {
      // _id: '2',
      name: 'Camisa Fit',
      slug: 'nike-fit-shirt',
      category: 'Camisa',
      image: '/images/p2.jpg',
      price: 75,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 10,
      description: 'Camisa de academia de alta qualidade',
    },
    {
      // _id: '3',
      name: 'Calça Social',
      slug: 'social-pant',
      category: 'Calça',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'Calça Social de alta qualidade',
    },
    {
      // _id: '4',
      name: 'Calça de Balada',
      slug: 'summer-pant',
      category: 'Calça',
      image: '/images/p4.jpg',
      price: 150,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'Calça ótima para festas',
    },
  ],
};
export default data;
