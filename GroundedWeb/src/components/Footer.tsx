import Instagram from "../../public/Instagram.png"
import GitHub from "../../public/Github.png"


export default function Footer() {
    return (
        <>
            <div className="w-full h-24 text-white bg-darkaccent flex justify-between items-center">
                    <div>
                        <h1 className="invisible mr-8">Pikek was here</h1>
                    </div>
                    <div className="">
                        <h1 className="font-raleway text-xl">
                            © grounded 2024
                        </h1>
                    </div>
                    <div className="w-24 h-16 items-center flex">
                        <a href="https://www.instagram.com/grounded.rnd" className="mr-4">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="https://github.com/Phiniqq724" className="mr-4">
                            <img src={GitHub} alt="" />
                        </a>
                    </div>
            </div>
        </>
    )
}