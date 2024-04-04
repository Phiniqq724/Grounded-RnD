import { Card } from "flowbite-react";
import ButtonWhite from "./ButtonWhite";

export default function CardComp({ image, judul, isi }: any) {
  return (
    <Card
      className="max-w-sm bg-darkaccent border-dark h-[550px] max-h-full hover:scale-110 duration-500 "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-white">{judul}</h5>
      <p className="font-normal text-white mb-4">{isi}</p>
      <ButtonWhite buttonText="More" buttonLink="#" />
    </Card>
  );
}
