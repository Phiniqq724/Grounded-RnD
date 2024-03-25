import GroundedLogo from "../../public/GroundedLogo.png"
import ButtonWhite from "./ButtonWhite"
import Pattern from "../../public/Pattern.png"

export default function HomePage() {
    return(
        <div className="bg-dark pl-10 max-w-full">
            <img src={Pattern} alt="" className="absolute top-0 left-0" />
            <div className="h-screen flex justify-start ml-24 items-center z-10">
                <div className="block z-40">
                    <h1 className="font-raleway font-medium mx-auto text-white text-3xl relative">Introducting</h1>
                    <img src={GroundedLogo} alt=""  className="mb-10 mx-auto mt-5" />
                    <div className="mt-6 mx-auto">
                        <ButtonWhite buttonText="About Us" buttonLink="#Aboutus"  />
                    </div>
                </div>
            </div>
        </div>
    )
}