import React from "react";
import bg from "../public/clay-banks-z_DkoUqgx6M-unsplash.jpg";

const Hero = () => {
  return (
    <div
      className="hero rounded-md overflow-hidden lg:place-items-start lg:items-center h-[80vh] w-screen -ml-6   lg:my-0 lg:ml-[4px]  lg:px-0 lg:w-full lg:max-h-[90vh]  "
      style={{
        backgroundImage: `url(./clay-banks-z_DkoUqgx6M-unsplash.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content  ">
        <div className="max-w-md lg:px-12 lg:max-w-3xl w-full flex  flex-col mb-20 lg:mb-0 text-secondary dark:text-primary">
          <h1 className="mb-5 text-4xl lg:text-7xl font-semibold ">
            Mulai Belajarmu Sekarang dengan Materi Kami
          </h1>
          <p className="mb-5 font-normal text-base lg:text-base">
            kami memilih materi yang sesuai dengan kebutuhan anda dalam
            (bingung...)
          </p>
          <div className="flex gap-4 lg:w-full  flex-wrap">
            <div className="form-control">
              <label className="cursor-pointer flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-xs lg:checkbox-sm checkbox-secondary"
                />
                <span className="label-text text-base lg:text-lg  text-base-100 dark:text-accent">
                  jalur belajarmu sudah buatkan
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-xs lg:checkbox-sm checkbox-secondary"
                />
                <span className="label-text text-base lg:text-lg  text-base-100 dark:text-accent">
                  jalur belajarmu sudah buatkan
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-xs lg:checkbox-sm checkbox-secondary"
                />
                <span className="label-text text-base lg:text-lg  text-base-100 dark:text-accent">
                  jalur belajarmu sudah buatkan
                </span>
              </label>
            </div>
          </div>
          <button className="btn btn-secondary  lg:w-80 text-xl lg:text-lg  mt-4 shadow rounded-full capitalize dark:btn-primary ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
