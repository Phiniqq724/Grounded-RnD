import Form from "./Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export default function ContactUs() {
    return (
        <>
            <div className="bg-dark">
                <div className="flex flex-col justify-center pb-24">
                    <div className="flex justify-center items-center">
                        <h1 className="text-white font-medium font-raleway text-3xl pt-24">Contact <span className="text-oranges">Us</span></h1>
                    </div>
                    <div className="items-center justify-center flex">
                            <Form />
                    </div>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                </div>
            </div>
        </>
    )
}