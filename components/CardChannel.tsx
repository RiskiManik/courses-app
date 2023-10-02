import { iconsEx } from "@/assets/image";
import { CardProps } from "@/interface/channel";
import Image from "next/image";
import React from "react";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/channel");
  return response.json();
};

const CardChannel = async () => {
  const data = await getData();
  const result = data.data;
  return (
    <section className="w-full ">
      <div>
        <div className="py-8 lg:py-16  w-full flex flex-col ">
          <h1 className="text-3xl py-2  lg:text-5xl font-semibold text-primary dark:text-white">
            Courses Paling Recomended
          </h1>
          <p className="text-sm lg:text-base font-normal text-primary dark:text-accent">
            Channel yang Kami Rekomendasikan untuk Kamu belajar programming
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result.length > 0 &&
            result.map((item: CardProps) => {
              return (
                <div
                  key={item.customUrl}
                  className="w-full max-w-sm lg:max-w-md bg-primary py-8 lg:py-10 border border-gray-200 rounded-lg shadow dark:bg-accent dark:border-gray-700"
                >
                  <div className="flex flex-col items-center pb-10">
                    <Image
                      src={item.thumbnails.medium.url || iconsEx}
                      width={100}
                      height={100}
                      className="w-28 h-28 lg:w-32 lg:h-32 mb-3 mt-10 rounded-full shadow-lg"
                      alt="Picture of the author"
                    />
                    <h5 className=" text-xl lg:text-2xl font-semibold text-base-100 dark:text-base-100">
                      {item.title || "Personal Course"}
                    </h5>
                    <span className="text-sm font-normal lg:text-base text-accent dark:text-base-100">
                      {item.customUrl || "@personal"}
                    </span>
                    <div className="flex  mt-6 space-x-3 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm lg:text-base font-medium text-center text-white border border-base-100 rounded-full hover:bg-accent focus:outline-none  dark:text-base-100"
                      >
                        Lihat Courses
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm lg:text-base font-medium text-center text-primary shadow  bg-base-100 rounded-full hover:bg-accent hover:shadow-none  focus:outline-none  dark:text-accent"
                      >
                        Try For Free
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
        {data.length === 0 && <p className="text-base mb-28">no data</p>}
      </div>
    </section>
  );
};

export default CardChannel;
