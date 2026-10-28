import React from 'react'
import image2 from '../../assets/Container/image2.jpg'
import image1 from '../../assets/Container/image1.avif'
import image3 from '../../assets/Container/image3.jpg'
import imagegg from '../../assets/Container/egg.png'
const container = () => {
  return (
    <div className='mt-16 w-full max-w-7xl mx-auto px-8'>
        <div className='mx-auto flex'>
            <div className='w-1/2 pl-10 sm:pl-5'>
                <h1 className='font-bold text-4xl sm:text-5xl'>Experience the <a href='#' className='underline text-orange-400'><br/>Taste</a> <img src={image2} alt="spoon" className='size-7  sm:size-8  rounded-full inline'/>
                <img src={image3} alt="spoon" className='size-7  sm:size-8  rounded-full inline -ml-4'/>
                <img src={image1} alt="spoon" className='size-7  sm:size-8  rounded-full inline -ml-4'/>
                 of the <br/> World</h1>
                <p className='my-4 w-3/4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates perferendis deleniti, velit ipsum nulla itaque maxime molestiae doloremque a quo consequuntur quam ratione obcaecati asperiores alias qui voluptatum? Incidunt.</p>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-full'>Learn more</button>
            </div>
            <div className= 'mr-0 sm:-mr-18'>
              <img src={imagegg} alt="" className='w-[200px] h-[250px] sm:w-[450px] sm:h-[450px]  -mt-10 sm:-mt-20 '/>
            </div>
        </div>
    </div>
  ) 
}

export default container