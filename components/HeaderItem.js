import React from "react";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center group w-12 sm:w-20 hover:text-white transition-all">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </h1>
    </div>
  );
};

export default HeaderItem;
