import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const BrandCarousel = () => {
    const brands = [
        { name: 'Brand 1', image: '/logo/1.png' },
        { name: 'Brand 2', image: '/logo/2.png' },
        { name: 'Brand 3', image: '/logo/3.png' },
        { name: 'Brand 4', image: '/logo/4.png'  },
        { name: 'Brand 6', image: '/logo/5.png'  },
           { name: 'Brand 1', image: '/logo/1.png' },
                  { name: 'Brand 2', image: '/logo/2.png' },

    ]

    return (
        <div className="w-full bg-black ">
            <div className=" mx-auto px-4">
                <Swiper effect="fade"
  modules={[Autoplay]}
  loop={true}

  speed={3000}
  autoplay={{
    delay: 1,
    disableOnInteraction: false,
  }}
  slidesPerView={5}
  spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-30 object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BrandCarousel
