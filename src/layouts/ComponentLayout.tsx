import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
  ];

  return (
    <div className="flex min-h-screen min-w-0 overflow-x-hidden bg-(--bg-color) text-(--text-color)">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close components menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/25 md:hidden"
        />
      )}
      <aside
        className={`
          fixed left-0 top-16 z-40 flex h-[calc(100vh-4rem)] w-[min(18rem,85vw)] max-w-full flex-col
          overflow-y-auto border-r border-(--border-color) bg-(--bg-color) p-5
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:static md:h-screen md:w-64 md:shrink-0 md:translate-x-0
        `}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-base font-bold text-(--text-color)">
            Components
          </h2>
          <button
            type="button"
            aria-label="Close components menu"
            onClick={() => setSidebarOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-(--muted-text-color) transition-colors hover:text-(--text-color) md:hidden"
          >
            <X size={19} />
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          {components.map((item) => (
            <li
              onClick={() => {
                setSidebarOpen(false);
                navigate(item.toLowerCase());
              }}
              key={item}
              className={`cursor-pointer py-1 text-sm transition-all duration-150 ease-out hover:translate-x-1.5 ${
                location.pathname === `/components/${item.toLowerCase()}`
                  ? "font-semibold text-(--primary-color)"
                  : "text-(--muted-text-color) hover:text-(--primary-color)"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      <div className="min-w-0 flex-1 overflow-auto p-4 sm:p-6 md:h-screen md:p-8">
        <button
          type="button"
          aria-label="Open components menu"
          aria-expanded={sidebarOpen}
          className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg text-(--muted-text-color) transition-colors hover:bg-(--card-bg) hover:text-(--text-color) md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;
