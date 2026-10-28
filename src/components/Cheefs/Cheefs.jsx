import React from 'react'
import chef from '../../assets/Container/chefs.png'

const CheefsData=[
    {
      id: 1,
      image:chef,
      description:'Our expert chefs brings with them 20 years of experience in the culinary industry. He has won numerous awards and accolades for his innovative and delicious cuisine. Chef John Doe is a master of all things food, and his passion for cooking is evident in every dish he creates.',
    },
  ];

const Cheefs = () => {
  return (
    <div className="flex flex-col items-center gap-6 mx-auto w-full px-4 py-10 ">
          <div className='mx-auto flex justify-center container pb-10 '>
        
        <div className="relative inline-block px-2 py-1">
        <h2 className="text-4xl font-bold">
            Meet Our <span className="text-orange-500">Chefs</span>
        </h2>
        <span className="absolute left-0 bottom-0 h-8 w-8 rounded-bl-md border-l-4 border-b-4 border-orange-500 -ml-2" />
        <span className="absolute right-0 top-0 h-8 w-8  rounded-tr-md border-r-4 border-t-4 border-orange-500 -mr-3" />
        </div>
    </div>
      {CheefsData.map((product) => (
        <div
          key={product.id}
          className="relative flex min-h-[300px] w-[450px] sm:w-[800px] md:w-[550px] xl:w-[800px] items-center overflow-hidden rounded-[35px] border border-white/30 bg-[#111]/80 p-6 text-white shadow-2xl"
        >
             <div className="flex w-[45%] items-center justify-center">
            <img
              src={product.image}
              alt={product.description}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="relative z-10 w-[55%]">

            <p className="mt-2 text-[15px] leading-5 text-gray-300">
              {product.description}
            </p>
            <div className="mt-4 flex items-center gap-2">
                <button className='border-2 border-orange-400 px-4 py-2 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300 '>
                    View All
                </button>
            </div>
          </div>
         
        </div>
      ))}

    </div>
  );
};


export default Cheefs;
