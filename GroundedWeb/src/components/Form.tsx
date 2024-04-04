import { useState } from "react";

const ScriptURL =
  "https://script.google.com/macros/s/AKfycby160jp5aVXOnhFP7WiJVf7CZ3we3jqBVl3eip7qmtTCF8bX__4BhJmBDo4cqkR6g5r/exec";

const Forms: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isMutating, setIsMutating] = useState(false);

    const hanldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);
    try {
        const response = await fetch(ScriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
        });
        console.log("Success", response);
        window.location.reload();
        alert("Terkirim!");
    } catch (error) {
        console.log("Erroor", (error as Error).message);
    }
    };
    return (
        <>
        <div className="mt-8">
        <form action="" className="flex flex-col" onSubmit={hanldeSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Enter your name!"
            onChange={(e) => setName(e.target.value)}
            className="text-white border-none bg-darkaccent p-4 mt-4 w-[706px] rounded-2xl hover:bg-gray-600 placeholder:text-gray-400 hover:placeholder:text-gray-300 pt-6 pb-6 font-raleway placeholder:font-raleway placeholder:font-medium duration-500 transition-colors placeholder:duration-500 placeholder:transition-colors"
          />
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email!"
            className="text-white border-none bg-darkaccent p-4 mt-4 w-[706px] rounded-2xl hover:bg-gray-600 placeholder:text-gray-400 hover:placeholder:text-gray-300 pt-6 pb-6 font-raleway placeholder:font-raleway placeholder:font-medium duration-500 transition-colors placeholder:duration-500 placeholder:transition-colors"
          />
          <textarea
            name="Message"
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message!"
            className="text-white border-none bg-darkaccent p-4 mt-4 w-[706px] rounded-2xl hover:bg-gray-600 placeholder:text-gray-400 hover:placeholder:text-gray-300 pt-6 pb-6 font-raleway placeholder:font-raleway placeholder:font-medium duration-500 transition-colors placeholder:duration-500 placeholder:transition-colors h-32"
          />
          <div className="mt-4">
            {!isMutating ? (
                <button className=" bg-oranges text-white rounded-xl w-[706px] h-16 text-xl font-raleway font-medium hover:bg-lightorange hover:text-white transition-all duration-500 ">
                Submit
                </button>
            ) : (
                <button className=" bg-oranges text-white rounded-xl w-[706px] h-16 text-xl font-raleway font-medium hover:bg-lightorange hover:text-white transition-all duration-500 ">
                Loading . . .
                </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
