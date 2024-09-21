import React from 'react'
import Slider from 'react-slick'
import { TestimonialsData } from '../../utils/testimonialsData';

const Testimonials = () => {
    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    
    <>
    <div className='py-14 mb-10'>
        <div className='container'>
            {/* Header section*/}
            <div className='text-center space-y-4'>
                <h1 className='text-orange-600 uppercase text-lg md:text-2xl'>Our Testimonials</h1>
                <p className='font-semibold capitalize text-2xl md:text-4xl'>what our students say about us</p>
            </div>

            {/*testimonals */}
            <div>
                <Slider {...setting}>
                    {
                        TestimonialsData.map((item)=>{
                            return(
                                <div key={item.id} className=''>
                                
                                    <div
                                     className='flex flex-col gap-6 p-8 shadow-lg rounded-xl bg-secondary/10 mx-4 my-10'>
                                        {/*upper */}
                                        <div>
                                            <img src={item.img} alt="img" 
                                            className='w-16 h-16 rounded-full'
                                            />
                                            <div>
                                                <p className='text-xl font-bold text-black/80'>{item.name}</p>
                                                <p className='text-lg text-black/80'>{item.name}</p>
                                            </div>
                                        </div>

                                        {/*bottom */}
                                        <div className='py-2 space-y-2'>
                                            <p className='text-slate-500 text-sm'>{item.text}</p>
                                            <p >⭐⭐⭐⭐⭐</p>

                                        </div>
                                    </div>

                                </div>
                            )
                        })

                    }
                  </Slider>
            </div>


        </div>

    </div>
    </>
  )
}

export default Testimonials