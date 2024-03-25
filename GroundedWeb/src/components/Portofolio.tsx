import CarouselComp from "./CarouselComp"
import Sertifikat1 from "../../public/Sertifikat1.png"
import Smartaca from "../../public/Smartaca.png"
import PyroEyes from "../../public/PyroEyes.jpg"

export default function Portofolio() {
    return(
        <div className="bg-dark flex justify-center">
            <div>
            </div>
            <div className="justify-center items-center mt-24">
                <div className="flex justify-center">
                    <div></div>
                    <h1 className="font-raleway text-white font-medium text-3xl">Certificate & Projects</h1>
                </div>
                <div className=" w-[875px] h-[545px] mt-6 mb-24 " id="Porto">
                    <CarouselComp Source1={Sertifikat1} Source2={Smartaca} Source3={PyroEyes} />
                </div>
            </div>
        </div>
    )
}