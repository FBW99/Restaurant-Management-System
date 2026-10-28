import React from 'react'
import Pizza from '../../assets/Container/pizza2.png'
import Spicy from '../../assets/Container/Spicy.png'

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
  ];

const Card = () => {
  return (
    <div className="flex flex-col items-center gap-6 mx-auto w-full px-4 py-10 ">
          <div className='mx-auto flex justify-center container pb-10 '>
        
        <div className="relative inline-block px-2 py-1">
        <h2 className="text-4xl font-bold">
            Our Best <span className="text-orange-500">Delivered</span>
        </h2>
        <span className="absolute left-0 bottom-0 h-8 w-8 rounded-bl-md border-l-4 border-b-4 border-orange-500 -ml-2" />
        <span className="absolute right-0 top-0 h-8 w-8  rounded-tr-md border-r-4 border-t-4 border-orange-500 -mr-3" />
        </div>
    </div>
      {productsData.map((product) => (
        <div
          key={product.id}
          className="relative flex min-h-[300px] w-[450px] sm:w-[800px] md:w-[550px] xl:w-[800px] items-center overflow-hidden rounded-[35px] border border-white/30 bg-[#111]/80 p-6 text-white shadow-2xl"
        >
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
          <div className="flex w-[45%] items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      ))}

    </div>
  );
};


export default Card;
