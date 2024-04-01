export default function ButtonOrangeF({buttonLink , buttonText}:any) {
    return (
        <>
            <a href={buttonLink} className="">
                <button className=" bg-oranges text-white rounded-xl w-48 h-16 text-xl font-nunito hover:bg-lightorange hover:text-white transition-all duration-500 ">
                    {buttonText}
                </button>
            </a>
        </>
    ) 
}