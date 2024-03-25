export default function ButtonWhite({buttonLink , buttonText}:any) {
    return (
        <>
            <a href={buttonLink} className="">
                <button className=" bg-trasparant text-white border-2 border-white rounded-xl w-48 h-16 text-xl font-nunito hover:border-oranges hover:text-oranges transition-all duration-500 no-underline hover:underline">
                    {buttonText}
                </button>
            </a>
        </>
    ) 
}