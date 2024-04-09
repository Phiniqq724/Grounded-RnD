import { Carousel } from "flowbite-react"
import Form from "./Form"
import UGM from "../../public/UGM.png"
import Telkom from "../../public/Telkom.png"


export default function ContactUs() {
    return (
        <>
            <div className="bg-dark" id="ContactUs">
                <div className="flex flex-col justify-center pb-24">
                    <div className="flex justify-center items-center">
                        <h1 className="text-white font-medium font-raleway text-3xl pt-24">Contact Us</h1>
                    </div>
                    <div className="items-center justify-center flex">
                            <Form />
                    </div>
                </div>
                <div className=" pb-24">
                    <div className="flex justify-center items-center mb-24">
                        <div></div>
                        <h1 className="text-white font-medium font-raleway text-3xl pt-24">Our Client</h1>
                        <div></div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="w-[256px] h-[256px] items-center justify-center flex">
                            <div></div>
                            <Carousel pauseOnHover>
                                <a href="https://www.smktelkom-mlg.sch.id/">
                                    <img src={Telkom} alt="" />
                                </a>
                                <a href="https://ugm.ac.id/id/">
                                    <img src={UGM} alt="" />
                                </a>
                            </Carousel>
                            <div className=""></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}