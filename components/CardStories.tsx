import { iconsEx } from "@/assets/image";
import Image from "next/image";
import React from "react";

const CardStories = () => {
  return (
    <section className="w-full ">
      <div>
        <div className="py-8 lg:py-16 mt-2 w-full flex flex-col ">
          <h1 className="text-3xl py-2 capitalize  lg:text-5xl font-semibold text-primary dark:text-white">
            stories from successful students
          </h1>
          <p className="text-sm lg:text-base font-normal text-primary dark:text-accent">
            from beginner to career
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="w-full max-w-sm lg:max-w-md bg-primary py-8 lg:py-10 border border-gray-200 rounded-lg shadow dark:bg-accent dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <Image
                src={iconsEx}
                width={200}
                height={200}
                className="w-28 h-28 lg:w-32 lg:h-32 mb-3 mt-10 rounded-full bg-white shadow-lg"
                alt="Picture of the author"
              />
              <h5 className=" text-xl lg:text-2xl font-semibold text-base-100 dark:text-base-100">
                {"Personal Courses"}
              </h5>
              <span className="text-sm font-normal lg:text-base text-accent dark:text-base-100">
                {"@personal"}
              </span>
              <div className="  mt-6  lg:mt-8 px-6">
                <h1 className="text-xl mb-1 capitalize font-medium lg:text-2xl text-base-100">
                  Title Stories
                </h1>
                <p className="text-sm font-normal lg:text-base text-base-100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque reprehenderit aut voluptate eum eos earum error
                  architecto quasi dolore cupiditate.
                </p>
              </div>
            </div>
          </li>
          <li className="w-full max-w-sm lg:max-w-md bg-primary py-8 lg:py-10 border border-gray-200 rounded-lg shadow dark:bg-accent dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <Image
                src={iconsEx}
                width={200}
                height={200}
                className="w-28 h-28 lg:w-32 lg:h-32 mb-3 mt-10 rounded-full bg-white shadow-lg"
                alt="Picture of the author"
              />
              <h5 className=" text-xl lg:text-2xl font-semibold text-base-100 dark:text-base-100">
                {"Personal Course"}
              </h5>
              <span className="text-sm font-normal lg:text-base text-accent dark:text-base-100">
                {"@personal"}
              </span>
              <div className="  mt-6  lg:mt-8 px-6">
                <h1 className="text-xl mb-1 capitalize font-medium lg:text-2xl text-base-100">
                  Title Stories
                </h1>
                <p className="text-sm font-normal lg:text-base text-base-100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque reprehenderit aut voluptate eum eos earum error
                  architecto quasi dolore cupiditate.
                </p>
                <p className="text-sm font-normal lg:text-base text-base-100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque reprehenderit aut voluptate eum eos earum error
                  architecto quasi dolore cupiditate.
                </p>
              </div>
            </div>
          </li>
          <li className="w-full max-w-sm lg:max-w-md bg-primary py-8 lg:py-10 border border-gray-200 rounded-lg shadow dark:bg-accent dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <Image
                src={iconsEx}
                width={200}
                height={200}
                className="w-28 h-28 lg:w-32 lg:h-32 mb-3 mt-10 rounded-full bg-white shadow-lg"
                alt="Picture of the author"
              />
              <h5 className=" text-xl lg:text-2xl font-semibold text-base-100 dark:text-base-100">
                {"Personal Course"}
              </h5>
              <span className="text-sm font-normal lg:text-base text-accent dark:text-base-100">
                {"@personal"}
              </span>
              <div className="  mt-6  lg:mt-8 px-6">
                <h1 className="text-xl mb-1 capitalize font-medium lg:text-2xl text-base-100">
                  Title Stories
                </h1>
                <p className="text-sm font-normal lg:text-base text-base-100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque reprehenderit aut voluptate eum eos earum error
                  architecto quasi dolore cupiditate.
                </p>
                <p className="text-sm font-normal lg:text-base text-base-100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque reprehenderit aut
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CardStories;
