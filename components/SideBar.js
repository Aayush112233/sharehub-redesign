"use client";
import { MenuList } from "@/constants/MenuList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Sidebar({ setIsExpanded }) {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [isHovered]);
  return (
    <>
      <style jsx>{`
        .sidebar {
          transition: width 0.1s ease;
        }
      `}</style>
      <div
        className={`sidebar fixed h-screen overflow-auto flex flex-col items-center h-full hidden md:flex  text-gray-700 dark:text-gray-400  bg-gray-100 dark:bg-gray-900`}
        style={{ width: isHovered ? "225px" : "100px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a className="flex items-center w-full px-3 mt-3" href="#">
          <img
            src="https://arthakendra.com/sharehub/assets/sharehub-yIE25QB_.svg"
            className="mx-auto h-20"
            alt="logo"
          />
        </a>
        {MenuList.map((item, idx) => {
          return <MenuItem key={idx} item={item} isHovered={isHovered} />;
        })}
      </div>
    </>
  );
}

const MenuItem = ({ item, isHovered }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  useEffect(() => {
    if (!isHovered) {
      setSubMenuOpen(false);
    }
  }, [isHovered]);

  return (
    <div className="w-full px-3 my-2">
      {item.subMenus ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`w-full flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
              isHovered ? "justify-between" : "justify-center"
            } ${pathname.includes(item.path) ? "bg-zinc-100" : ""}`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span
                className={`font-semibold text-md ${
                  isHovered ? "flex" : "hidden"
                }`}
              >
                {item.title}
              </span>
            </div>

            <div
              className={`${subMenuOpen ? "rotate-180" : ""} ${
                isHovered ? "flex" : "hidden"
              } `}
            >
              <MdOutlineKeyboardArrowDown />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenus?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={` w-100 flex flex-row space-x-4 items-center ${
            isHovered ? "" : "justify-center"
          } p-2 rounded-lg hover:bg-zinc-100  ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}
        >
          {item.icon}

          <span
            className={`font-semibold text-md ${isHovered ? "flex" : "hidden"}`}
          >
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};
