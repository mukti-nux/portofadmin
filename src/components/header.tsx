import React, { useState } from "react";
import Container from "./container";

const links = [
  { to: "/#home", label: "HomePage" },
  { to: "/MissionPage", label: "Missions" },
  { to: "/UpdatePage", label: "Update" },
  { to: "https://github.com/mukti-nux/Portofolio-Astro-Theme.git", label: "GitHub Repository" },
];

const Header: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleNavlinks = () => {
    setIsToggled(!isToggled);
  };

  // Menutup menu saat klik link
  const handleLinkClick = () => {
    setIsToggled(false);
  };

  return (
    <header>
      <nav
        id="nav"
        className="absolute group z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent"
        data-state={isToggled ? "active" : ""}
      >
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
              <a href="/#home" aria-label="logo" className="flex items-center space-x-2">
                <span className="flex item-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Astrolus X{" "}
                  <img src="./images/clients/logoporto.svg" alt="logoporto" className="h-12 w-12" />
                </span>
              </a>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="hamburger"
                  id="hamburger"
                  className="relative -mr-6 p-6 active:scale-95 duration-300"
                  onClick={toggleNavlinks}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className={`m-auto h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-top ${
                      isToggled ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className={`m-auto mt-2 h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-bottom ${
                      isToggled ? "-rotate-45 -translate-y-1" : ""
                    }`}
                  ></div>
                </button>
              </div>
            </div>

            <div
              id="navLayer"
              aria-hidden="true"
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-950/70 lg:hidden ${
                isToggled ? "origin-top scale-y-100" : ""
              }`}
            ></div>

            <div
              id="navlinks"
              className={`invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent ${
                isToggled ? "visible scale-100 opacity-100" : ""
              }`}
            >
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <div id="links-group" className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.to}
                      className="hover:text-primary block transition dark:hover:text-white md:px-4"
                      onClick={handleLinkClick}
                      target={link.to.startsWith("http") ? "_blank" : undefined}
                      rel={link.to.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}

                  <a
                    href="/ShazQIAI"
                    className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4"
                    onClick={handleLinkClick}
                  >
                    <span>Try ShazQI AI</span>
                    <span className="flex rounded-full border bg-primary/20 px-2 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300">
                      New
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="/SubscribePage"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  onClick={handleLinkClick}
                >
                  <span className="relative text-sm font-semibold text-white"> Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
