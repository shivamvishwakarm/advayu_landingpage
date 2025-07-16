
import Marquee from "react-fast-marquee";



const BrandCarousel = () => {
    const brands = [
        { name: 'Brand 1', image: '/logo/1.png' },
        { name: 'Brand 2', image: '/logo/2.png' },
        { name: 'Brand 3', image: '/logo/3.png' },
        { name: 'Brand 4', image: '/logo/4.png' },
        { name: 'Brand 6', image: '/logo/5.png' },
        { name: 'Brand 1', image: '/logo/1.png' },
        { name: 'Brand 2', image: '/logo/2.png' },

    ]

    return (
        <div className="w-full bg-black ">
            <div className=" mx-auto px-4">
                <Marquee gradient={true} gradientColor='black' gradientWidth={100}>
                    {brands.map((brand, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-[14rem] object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default BrandCarousel
