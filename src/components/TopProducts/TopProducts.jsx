import React from 'react'
import Pizza from '../../assets/Container/pizza2.png'
import Spicy from '../../assets/Container/Spicy.png'
import Burger from '../../assets/Container/burger.png'

const productsData=[
    {
      id: 1,
      image:Pizza,
      title: 'Classic Beef Burger',
      description:'Juicy beef patty, crisp lettuce, ripe tomatoes, secret sauce',
      price:14.88,
      
    },
    {
      id: 2,
      image:Spicy,
      title: 'Spicy Chicken Wings',
      description:'Hot and crispy wings with your choice of sauce',
      price:14.99,
      
    },
    {
      id: 3,
      image:Burger,
      title: 'Pepperoni Pizza',
      description:'Classic pepperoni pizza with premium mozzarella and zesty tomato sauce',
      price:22.22,
      
    },
    {
      id: 4,
      image:Pizza,
      title: 'Classic Beef Burger',
      description:'Juicy beef patty, crisp lettuce, ripe tomatoes, secret sauce',
      price:14.88,
      
    },
    {
      id: 5,
      image:Spicy,
      title: 'Spicy Chicken Wings',
      description:'Hot and crispy wings with your choice of sauce',
      price:14.99,
      
    },
    {
      id: 6,
      image:Burger,
      title: 'Pepperoni Pizza',
      description:'Classic pepperoni pizza with premium mozzarella and zesty tomato sauce',
      price:22.22,
      
    }
  ];

const TopProducts = () => {
  return (
    <section >
            <div className="container">
        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-bold uppercase tracking-wider text-yellow-300">
            Customer Favorites
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-extrabold dark:text-white mt-1">
            Top Rated Food
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
            Our top-rated dishes are loved by thousands of customers. Try them today and find your new favorite!
          </p>
        </div>
        </div>

    <div className="grid grid-cols-1 gap-6 px-4 py-10 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">

      {productsData.map((product) => (
        <div
          key={product.id}
          className="flex flex-col  min-h-[150px] items-center justify-center overflow-hidden rounded-[35px] border border-white/30 bg-[#111]/80 p-6 text-white shadow-2xl"
        >
          <div className="flex w-[45%] items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="relative z-10 w-[55%]">
            <h2 className="text-lg font-bold">
              {product.title}
            </h2>

            <p className="mt-2 text-xs leading-5 text-gray-300">
              {product.description}
            </p>

            <h3 className="mt-5 text-2xl font-extrabold">
              ${product.price}/-
            </h3>

            <div className="mt-3 flex items-center gap-2">
              <button className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-bold hover:bg-orange-600">
                Order Now
              </button>

              <button
                aria-label="Add to cart"
                className="h-8 w-8 rounded-lg bg-orange-500 hover:bg-orange-600"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
 </section>
  );   
};

export default TopProducts;
