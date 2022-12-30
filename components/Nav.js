import React from "react";
import request from "../utils/request";
import { useRouter } from "next/router";

const Nav = () => {
  // usamos las rutas para cada link
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex -mt-3 px-10 sm:px-20 text-lg md:text-xl whitespace-nowrap space-x-5 md:space-x-16 overflow-x-scroll scrollbar-hide pb-2">
        {/* mapeamos las entradas que hay en request para pintarlas en el nav */}
        {Object.entries(request).map(([key, { title, url }]) => {
          // console.log(url);
          return (
            <h2
              key={key}
              onClick={() => router.push(`?genre=${key}`)}
              className="last:mr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-blue-300 p-2 border-b-2 border-transparent  hover:border-b-2 hover:border-white rounded-md"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
