import Image from "next/legacy/image";
import React from "react";
import {
  CalendarDaysIcon,
  ChartBarSquareIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  // direccion para las imagenes
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  // console.log(result);
  return (
    <div ref={ref} className="3xl:max-w-md px-3 my-4 rounded-lg group ">
      <div className="shadow-lg group-hover:shadow-[#202244]">
        <div className="overflow-hidden rounded-t-lg">
          <Image
            className="transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
            alt={result.title}
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="responsive"
            height={1080}
            width={1920}
          />
        </div>
        <div className="px-4 py-4 bg-[#2022448a] rounded-b-lg">
          <h2 className="font-semibold text-xl mb-2 transition-all ease-in-out duration-100 group-hover:font-bold">
            {result.title || result.original_name}
          </h2>
          <p className="truncate">{result.overview}</p>
          <div className="pt-3 flex flex-wrap justify-around">
            {result.media_type ? (
              <span className="cursor-pointer flex border px-3 py-1 rounded-lg text-sm font-semibold opacity-0 transition group-hover:opacity-100">
                <ChartBarSquareIcon className="h-5 mr-1" />
                <span className="first-letter:uppercase">
                  {result.media_type && `${result.media_type}`}
                </span>
              </span>
            ) : null}

            <span className="cursor-pointer flex border px-3 py-1 rounded-lg text-sm font-semibold opacity-0 transition group-hover:opacity-100">
              <CalendarDaysIcon className="h-5 mr-1" />
              {result.release_date || result.first_air_date}
            </span>
            <span className="cursor-pointer flex border px-3 py-1 rounded-lg text-sm font-semibold opacity-0 transition group-hover:opacity-100">
              <HeartIcon className="h-5 mr-1" />
              {result.vote_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Thumbnail;
