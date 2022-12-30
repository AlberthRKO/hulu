// importamos los iconos a utilizar de heroicons
import {
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between m-5">
      <div className=" flex flex-grow justify-evenly max-w-sm md:max-w-xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={BoltIcon} />
        <HeaderItem title="Verified" Icon={CheckBadgeIcon} />
        <HeaderItem title="Collection" Icon={CircleStackIcon} />
        <HeaderItem title="Search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        priority
        alt="Hulu"
        className="-mt-3 sm:-mt-5"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
