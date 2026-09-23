import { toggleTheme } from "@/features/ThemeSlice";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  console.log("this is theme->", mode);

  const handleComponentsNavigation = () => {
    setIsMenuOpen(false);
    navigate("components/button");
  };

  const searchBar = (
    <div className="flex w-full items-center rounded-lg border border-(--border-color) bg-(--card-bg) px-3 py-2 transition-colors focus-within:border-(--primary-color) focus-within:ring-2 focus-within:ring-(--primary-color)/15">
      <Search size={17} className="shrink-0 text-(--muted-text-color)" />
      <input
        type="text"
        placeholder="Search components"
        aria-label="Search components"
        className="ml-2 min-w-0 flex-1 bg-transparent text-sm text-(--text-color) outline-none placeholder:text-(--muted-text-color)"
      />
    </div>
  );

  const themeButton = (
    <button
      type="button"
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => dispatch(toggleTheme())}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg text-(--muted-text-color) transition-colors hover:bg-(--card-bg) hover:text-(--text-color)"
    >
      <Sun
        size={19}
        className={`transition-all duration-300 ${
          mode === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
      <Moon
        size={19}
        className={`transition-all duration-300 ${
          mode === "dark"
            ? "rotate-90 scale-0 opacity-0 absolute"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );

  return (
    <nav className="relative w-full border-b border-(--border-color) bg-(--bg-color) px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-bold tracking-tight text-(--text-color) sm:text-2xl"
        >
          EaseUi
        </h1>

        <div className="absolute left-1/2 hidden w-[min(36vw,24rem)] -translate-x-1/2 md:block">
          {searchBar}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm text-(--muted-text-color)">
            <li
              onClick={handleComponentsNavigation}
              className="cursor-pointer transition-colors hover:text-(--text-color)"
            >
              Components
            </li>
            <li className="cursor-pointer transition-colors hover:text-(--text-color)">About</li>
            <li className="cursor-pointer transition-colors hover:text-(--text-color)">Templates</li>
          </ul>
          {themeButton}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-(--muted-text-color) transition-colors hover:bg-(--card-bg) hover:text-(--text-color) md:hidden"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 md:hidden ${
          isMenuOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 space-y-4">
          {searchBar}
          <ul className="space-y-1 text-sm text-(--muted-text-color)">
            <li
              onClick={handleComponentsNavigation}
              className="cursor-pointer rounded-lg px-3 py-2.5 transition-colors hover:bg-(--card-bg) hover:text-(--text-color)"
            >
              Components
            </li>
            <li className="cursor-pointer rounded-lg px-3 py-2.5 transition-colors hover:bg-(--card-bg) hover:text-(--text-color)">About</li>
            <li className="cursor-pointer rounded-lg px-3 py-2.5 transition-colors hover:bg-(--card-bg) hover:text-(--text-color)">Templates</li>
          </ul>
          <div className="flex justify-end border-t border-(--border-color) pt-3">
            {themeButton}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
