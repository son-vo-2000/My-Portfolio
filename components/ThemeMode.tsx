"use client";
import React from "react";
import{ useState, useEffect } from "react"
import { BsSun, BsMoonFill } from "react-icons/bs";

type ThemeType = "light" | "dark";

const ThemeMode = () => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeType | null;

    if (!localTheme) {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] 
    bg-opacity-80 backdrop-blur-[0.5rem] border border-white 
    broder-opacity-40 shadow-2xl rounded-full flex items-center 
    justify-center hover:scale-[1.15] active:scale-105 transition dark:bg-gray-500 dark:border-none"
      onClick={switchTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoonFill />}
    </button>
  );
};

export default ThemeMode;
