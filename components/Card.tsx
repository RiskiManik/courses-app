import { htmlIcon, iconsEx } from "@/assets/image";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  customUrl: string;
  thumbnail: string;
}
const Card = () => {
  return (
    <div className="card w-[47%] bg-base-100 lg:w-[24%]">
      <figure>
        <Image
          src={htmlIcon}
          width={300}
          height={300}
          alt="Shoes"
          className="w-24 h-24 lg:w-32 lg:h-32 mt-10 drop-shadow bg-transparent"
        />
      </figure>
      <div className="card-body">
        <div className="card-title flex-col lg:flex-row lg:gap-4 ">
          <h3>HTML 5 </h3>
          <div className="badge badge-primary dark:badge-secondary ">NEW</div>
        </div>
        <p className="text-sm lg:text-base">Materi HTML untuk Pemula</p>
      </div>
    </div>
  );
};

export default Card;
