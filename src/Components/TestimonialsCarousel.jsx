import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const TestimonialsCarousel = ({slider}) => {
  return (
    <Carousel
    showStatus={false}
    showthumbs={false}
    showIndicators={false}
    infiniteLoop={true}
    autoPlay={true}
    >
    {
        slider.map((item,index)=>{
            const {image,message,name,occupation} = item
            return <div key={image}>
                <h1 className="text-white max-w-[800px] mx-auto">{message}</h1>
                <div className="h-[80px] w-[80px] lg:h-[120px]  lg:w-[120px] rounded-full mx-auto mt-16">
                <img src={image} alt="" />
                </div>
                <h1 className="text-2xl font-bold text-accent mt-6">{name}</h1>
                <h1 className="font-bold text-white mt-2">{occupation}</h1>
            </div>
        })
    }
    </Carousel>
  )
}

export default TestimonialsCarousel