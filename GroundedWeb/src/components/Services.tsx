import Engineer from "../../public/Engineer.png"
import CardComp from "./CardComp";
import Android from "../../public/AndroidDev.png"
import Website from "../../public/WebsiteDev.jpg"

const Services = () => {
    return (
        <div className="bg-dark">
            <div className="items-center justify-center">
                <div className="flex items-center justify-center">
                    <div></div>
                    <h1 className="font-raleway text-white text-3xl font-medium mb-8 pt-24" id="Services">Our Services</h1>  
                    <div></div>
                </div>
                <div className="md:flex md:justify-center md:items-center">
                    <div className="m-4 mb-64 object-cover ">
                        <CardComp image={Engineer}  judul="IoT Engineering" isi="Membuat/merancang barang-barang yang memiliki koneksi dan dapat dikontrol dengan internet."/>
                    </div>
                    <div className="m-4 mb-64  object-cover">
                        <CardComp image={Android}  judul="Android Development" isi="Membuat suatu aplikasi android yang responsive dan dapat digunakan untuk pengguna android (Bukan IOS)." />
                    </div>
                    <div className="m-4 mb-64  object-cover">
                        <CardComp image={Website}  judul="Website Development" isi="Membuat website responsive dan sangat bervariasi menggunakan HTML, React, NextJS tapi tidak untuk PHP dan frameworknya" />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Services;