export default function ButtonBlack({ buttonLink, buttonText }: any) {
  return (
    <>
      <a href={buttonLink} className="">
        <button className=" bg-transparant text-black border-2 border-black rounded-xl w-48 h-16 text-xl font-nunito transition-colors duration-250">
          {buttonText}
        </button>
      </a>
    </>
  );
}
