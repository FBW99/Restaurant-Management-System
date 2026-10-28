
import React from "react";
import foodImage from "../../assets/Container/eggs.png";

const FoodBanner = () => {
  return (
    <section className="flex min-h-[250px] items-center justify-center p-5">
      <div className="relative flex w-full max-w-4xl items-center justify-between gap-3 rounded-2xl bg-white px-5 py-5 sm:px-8 ">
        <div className="absolute -top-3 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-black" />

        <div className="absolute -bottom-3 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-black" />
        <div className="z-10 min-w-0 flex-1">
          <h2 className="max-w-52 text-sm font-extrabold leading-tight text-black sm:text-base">
            Great food and lots
            <br />
            of discounted prices
          </h2>

          <div className="mt-2 flex items-center">
            <img
              src={foodImage}
              alt="Food lover"
              className="h-5 w-5 rounded-full border border-black object-cover"
            />
            <img
              src={foodImage}
              alt="Food lover"
              className="-ml-2 h-5 w-5 rounded-full border border-black object-cover"
            />
            <img
              src={foodImage}
              alt="Food lover"
              className="-ml-2 h-5 w-5 rounded-full border border-black object-cover"
            />
            <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-[9px] font-bold text-black">
              40%
            </span>
          </div>

          <p className="mt-1 text-[9px] text-gray-500">
            People grabbed the offer
          </p>
        </div>
        <div className="z-10 shrink-0 text-center">
          <h3 className="text-3xl font-black leading-none text-black sm:text-4xl">
            50%
          </h3>
          <p className="mt-1 text-[9px] font-bold text-black">
            Offer on Now
          </p>
        </div>
        <div className="z-80 shrink-0 ">
          <img
            src={foodImage}
            alt="Delicious pizza"
            className=" h-20 w-16 rounded-full border-2 border-black object-cover sm:h-20 sm:w-20"
          />
        </div>
      </div>
    </section>
  );
};

export default FoodBanner;
