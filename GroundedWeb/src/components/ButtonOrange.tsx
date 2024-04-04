export default function ButtonOrange({ buttonLink, buttonText }: any) {
  return (
    <>
      <a href={buttonLink} className="">
        <button className=" bg-transparant border-2 border-oranges text-lightorange  rounded-xl w-48 h-16 text-xl font-nunito hover:border-white hover:text-white transition-all duration-500 ">
          {buttonText}
        </button>
      </a>
    </>
  );
}
