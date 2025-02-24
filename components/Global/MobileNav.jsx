import React, { useState } from "react";
import { Home, User, Compass, PlusCircle } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    {
      name: "home",
      icon: Home,
      label: "Home",
      slug: "/",
    },
    {
      name: "account",
      icon: User,
      label: "Account",
      slug: "/my-account",
    },
    {
      name: "explore",
      icon: Compass,
      label: "Explorer",
      slug: "/nfts/image",
    },
    {
      name: "create",
      icon: PlusCircle,
      label: "Create",
      slug: "/create-nft",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1a1a1a] shadow-lg border-t border-gray-200 dark:border-gray-700 sm:block">
      <div className="flex justify-around items-center py-3 relative">
        {menuItems.map((item) => (
          <Link href={item.slug} key={item.name}>
            <a
              onClick={() => setActiveTab(item.name)}
              className={`flex flex-col items-center space-y-1 ${
                activeTab === item.name
                  ? "text-[#053f14] dark:text-[#053f14]"
                  : "text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-white"
              }`}
            >
              <item.icon
                className={`h-6 w-6 ${
                  activeTab === item.name
                    ? "stroke-[#053f14] dark:stroke-[#053f14]"
                    : "stroke-current"
                }`}
              />
              <span className="text-xs dark:text-white">{item.label}</span>
            </a>
          </Link>
        ))}

        {/* Connect Button */}
        <Link href="/connect">
          <a
            className="connect-button flex flex-col items-center space-y-1 bg-[#053f14] text-white py-2 px-4 rounded-lg absolute bottom-0 mb-3"
          >
            Connect
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;