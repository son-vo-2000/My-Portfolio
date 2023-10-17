"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { useActivePageContext } from "@/context/ActivePageProvider";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { activePage, setActivePage, setTimeDeplay } = useActivePageContext();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileNav = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        showMenu &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  return (
    <header className="">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none z-[999]
        border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
        shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
        sm:rounded-full flex justify-start items-center dark:bg-gray-200"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="sm:hidden ml-[1rem] cursor-pointer "
          onClick={toggleMobileNav}
          ref={dropdownRef}
        >
          {showMenu ? (
            <GrClose className="dark:text-black" style={{ fontSize: "30px" }} />
          ) : (
            <RxHamburgerMenu className="dark:text-black" style={{ fontSize: "30px" }} />
          )}
        </div>
        {showMenu ? (
          <nav className="absolute  bg-white dark:bg-gray-200 px-7 py-2 sm:bg-transparent top-[3rem] left-0 sm:top-0  sm:left-1/2 sm:h-12 sm:-translate-x-1/2  sm:py-0 sm:px-0">
            <ul
              className="  flex flex-col items-center justify-between gap-y-1 text-[0.9rem] sm:text-[1rem] 
            font-medium text-gray-500 sm:w-[34rem] sm:flex-nowrap sm:flex-row sm:gap-5 "
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.location}
                  className="h-3/4 flex items-center justify-center relative"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    className={`text-${
                      link.name === activePage ? "gray" : ""
                    }-950 font-${
                      link.name === activePage ? "bold" : ""
                    } flex w-full items-center justify-center p-3 hover:text-gray-950 transition`}
                    href={link.location}
                    onClick={() => {
                      setActivePage(link.name);
                      setTimeDeplay(Date.now());
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        ) : (
          <></>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
