import { Carousel } from "flowbite-react"

export default function CarouselComp({Source1, Source2, Source3, Source4, Source5}:any) {
    return (
        <Carousel pauseOnHover>
                <img src={Source1} alt="..." />
                <img src={Source2} alt="..." />
                <img src={Source3} alt="..." />
        </Carousel>
    )
}