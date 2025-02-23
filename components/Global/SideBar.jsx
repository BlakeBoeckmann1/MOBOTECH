import React from "react";
import Image from "next/image";

const SideBar = ({ activeMenu, setActiveMenu, categoryMenu }) => {
  return (
    <aside className="sm:hidden flex flex-col dark:bg-[#1a1a1a]">
      <a className="inline-flex items-center justify-center h-20 w-full dark:bg-[#1a1a1a] hover:bg-[#053f14] focus:bg-[#053f14]">
        {/* Adjusted to reference the image directly from the public folder */}
        <Image src="/bluelogo.png" width={40} height={40} alt="MOBO Logo" />
        <span className="dark:text-white text-4xl ml-2">
          MOBO
        </span>
      </a>

      <div className="flex-grow flex flex-col justify-between text-gray-500 dark:bg-[#1a1a1a]">
        <nav className="flex flex-col mx-4 my-6 space-y-4">
          {categoryMenu.map((menu, i) => (
            <a
              onClick={() => setActiveMenu(menu.slug)}
              key={i + 1}
              className={`${
                activeMenu === menu.slug ? "dark:text-[#fff] text-[#053f14]" : ""
              } inline-flex items-center py-3 dark:bg-[#222222] rounded-lg px-2 cursor-pointer`}
            >
              {menu.icon}
              <span className="ml-2">
                {menu.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
