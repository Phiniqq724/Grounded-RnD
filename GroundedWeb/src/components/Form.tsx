const Form = () => {
    return(
        <>
            <div className="mt-8">
                <form action="" className="flex flex-col">
                    <input type="text" placeholder="Enter your name!" className="text-white border-none bg-darkaccent p-4 mt-4 w-[706px] rounded-2xl hover:bg-gray-600 placeholder:text-gray-400 hover:placeholder:text-gray-300 pt-6 pb-6 font-raleway placeholder:font-raleway placeholder:font-medium duration-500 transition-colors placeholder:duration-500 placeholder:transition-colors"/>
                    <input type="email" placeholder="Enter your email!" className="text-white border-none bg-darkaccent p-4 mt-4 w-[706px] rounded-2xl hover:bg-gray-600 placeholder:text-gray-400 hover:placeholder:text-gray-300 pt-6 pb-6 font-raleway placeholder:font-raleway placeholder:font-medium duration-500 transition-colors placeholder:duration-500 placeholder:transition-colors" />
                    <textarea name="Message" id="" placeholder="Enter your message!" className="text-white border-none bg-darkaccent p-4 mt-4 w-[706px] rounded-2xl hover:bg-gray-600 placeholder:text-gray-400 hover:placeholder:text-gray-300 pt-6 pb-6 font-raleway placeholder:font-raleway placeholder:font-medium duration-500 transition-colors placeholder:duration-500 placeholder:transition-colors h-32" />
                </form>
                <div className="mt-4">
                    <button className=" bg-oranges text-white rounded-xl w-[706px] h-16 text-xl font-raleway font-medium hover:bg-lightorange hover:text-white transition-all duration-500 ">
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default Form;