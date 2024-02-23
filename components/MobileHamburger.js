"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useCycle } from "framer-motion";
import { MenuList } from "@/constants/MenuList";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileHamburger = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [scrollControlOverflow, setScrollControlOverflow] = useState("auto");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setScrollControlOverflow("auto");
    } else {
      setScrollControlOverflow("hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white dark:bg-slate-900"
        variants={sidebar}
      />
      <motion.div
        variants={MenuItemVariants}
        className="absolute flex left-6 gap-2 z-20 py-[20px] top-0 w-full bg-white dark:bg-slate-900"
      >
        <button
          className=" px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 dark:text-gray-200 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block"
          type="button"
        >
          <span>Log In</span>
        </button>
        <button
          className=" select-none bg-slate-800 text-slate-900 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block"
          type="button"
        >
          <span>Sign Up</span>
        </button>
      </motion.div>

      <motion.div
        id="scrollControl"
        style={{ overflow: scrollControlOverflow }}
        className={`absolute h-[100vh] grid w-full gap-3 px-10 py-20 `}
      >
        <motion.div variants={sidebar} className="absolute right-[5%] z-20">
          <Image
            width={100}
            height={100}
            src="https://arthakendra.com/sharehub/assets/sharehub-yIE25QB_.svg"
          />
        </motion.div>
        <motion.ul variants={variants} className="flex flex-col">
          {MenuList.map((item, idx) => {
            const isLastItem = idx === MenuList.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                {item.subMenus ? (
                  <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                ) : (
                  <MenuItem>
                    <Link
                      href={item.path}
                      onClick={() => toggleOpen()}
                      className={`flex w-full text-2xl ${
                        item.path === pathname ? "font-bold" : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </MenuItem>
                )}

                {!isLastItem && (
                  <MenuItem className="my-3 h-px w-full bg-gray-300" />
                )}
              </div>
            );
          })}
        </motion.ul>
      </motion.div>

      <MenuToggle theme={theme} toggle={toggleOpen} />
    </motion.nav>
  );
};

export default MobileHamburger;

const MenuToggle = ({theme, toggle }) => (
  
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[20px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        color={theme === "dark"?'white':'black'}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        color={theme === "dark"?'white':'black'}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
      color={theme === "dark"?'white':'black'} 
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = ({ color, ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke={color || "hsl(0, 0%, 18%)"}
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({ className, children }) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemWithSubMenu = ({ item, toggleOpen }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-2xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center">
            <span
              className={`${pathname.includes(item.path) ? "font-bold" : ""}`}
            >
              {item.title}
            </span>
            <div className={`${subMenuOpen && "rotate-180"}`}>
              <IoIosArrowDown fontSize={16} />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="mt-2 ml-2 flex flex-col space-y-2">
        {subMenuOpen && (
          <>
            {item.subMenus?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={` ${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
