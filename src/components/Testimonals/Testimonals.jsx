import React from 'react'
import feed1 from '../../assets/Container/feed1.jpg'
import feed2 from '../../assets/Container/feed2.jpg'
import feed3 from '../../assets/Container/feed3.jpg'
import { FaStar } from 'react-icons/fa6'

const TestimonialData = [
        {
        id:1,
        image:feed1,
        name:"John Doe",
        feedback:"This is the best food I have ever tasted!",
        rating:5
        },
        {
        id:2,
        image:feed2,
        name:"Bob Smith",
        feedback:"This is the best food I have ever tasted!",
        rating:5
        },
        {
        id:3,
        image:feed3,
        name:"Maria Rose",
        feedback:"This is the best food I have ever tasted!",
        rating:5
        }   
    ]

const Testimonals = () => {
    return(
    <section>
        <div className=' flex justify-center container pb-10 '>
        <div className="relative inline-block px-2 py-1">
        <h2 className="text-4xl font-bold">
            What our <span className="text-orange-500">customers</span> say?
        </h2>
        <span className="absolute left-0 bottom-0 h-8 w-8 rounded-bl-md border-l-4 border-b-4 border-orange-500 -ml-2" />
        <span className="absolute right-0 top-0 h-8 w-8  rounded-tr-md border-r-4 border-t-4 border-orange-500 -mr-3" />
        </div>
    </div>   
    <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-x-2 gap-y-10">
      {TestimonialData.map((product) => (
        <div
          key={product.id}
          className="flex flex-col  min-h-[150px] w-[350px] items-center justify-center overflow-hidden rounded-[35px] border border-white/30 bg-[#111]/80 p-6 text-white shadow-2xl"
        >
          <div className="h-18 w-18 overflow-hidden rounded-full ring-4 ring-orange-500 shadow-md mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                      {[...Array(product.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
          <div className="relative z-10 w-[55%]">
            <h2 className="text-lg font-bold">
              {product.name}
            </h2>
            <p className="mt-2 text-xs leading-5 text-gray-300">
              {product.feedback}
            </p>
          </div>
        </div>
      ))}
    </div>
 </section>
    )
}
export default Testimonals