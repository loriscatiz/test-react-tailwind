import { useRef } from "react";
import { useTheme } from "../ThemeContext";
interface Props {
  className?: string;
}

export default function ThemeToggleButton({ className }: Props) {
  const { theme, toggleTheme } = useTheme();

  const themeToggleRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button  ref={themeToggleRef}
        onClick={toggleTheme}
        className={`"themeToggleButton grid dark:border-inherit" aspect-square place-items-center rounded-full border-2 border-solid bg-transparent p-1 transition-all md:hover:-translate-y-1 md:hover:scale-110 md:focus:-translate-y-1 md:focus:scale-110 ${theme === "dark" ? "border-sky-100" : "border-sky-950"} ${className}`}
        aria-value={
          theme === "dark" ? "change to light theme" : "change to dark theme"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={`${theme === "dark" ? "rgb(224 242 254)" : "rgb(8 47 73)"}`}
          className={`size-6`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              theme === "dark"
                ? "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                : "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            }
          />
        </svg>
      </button>
    </>
  );
}
