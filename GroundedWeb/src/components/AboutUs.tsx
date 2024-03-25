import Tasikmalaya from "../../public/Tasikmalaya.png"

export default function AboutUs(){
    return(
        <>
            <div className="bg-dark flex justify-between" id="Aboutus">
                <div className="text-white flex justify-start items-center">
                    <div className="block ml-24">
                        <h1 className="font-raleway text-3xl font-medium">
                            About <span className="text-oranges">Us</span>
                        </h1>
                        <p className="font-nunito max-w-xl text-2xl mt-4">
                            Kami bermimpi mengembangkan produk-produk <span className="text-lightorange">inovatif</span> yang bermanfaat bagi masyarakat dan <span className="text-lightorange">berkontribusi positif</span> bagi dunia.
                        </p>
                    </div>
                </div>
                <div className=" items-end">
                    <img src={Tasikmalaya} alt="" className="mr-24" />
                    <p className="text-white text-right mr-24 font-inconsolata text-xl">Tasikmalaya, 14 Okt 2023</p>
                </div>
            </div>
        </>
    )
}