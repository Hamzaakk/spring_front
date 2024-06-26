import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidenav, setSidenav] = useState(true);

  return (
    <div className="font-poppins antialiased ">
      <div id="view" className="h-full w-screen flex flex-row">
        <button
          onClick={() => setSidenav(true)}
          className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg
            className="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="sidebar"
          className={`bg-white h-screen shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out ${
            sidenav ? "block" : "hidden md:block"
          }`}
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="font-bold text-4xl text-center md:hidden">
              D<span className="text-teal-600">.</span>
            </h1>
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              Ensah <span className="text-teal-600">.</span>
            </h1>
            <div id="profile" className="space-y-3">
              <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                  Eduard Pantazi
                </h2>
                <p className="text-xs text-gray-500 text-center">
                  Administrator
                </p>
              </div>
            </div>
            <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <svg
                  className="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div id="menu" className="flex flex-col space-y-2">
              <MenuItem
                href=""
                iconPath="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                text="Dashboard"
              />
              <MenuItem
                href="/users"
                iconPath="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                text="Admins"
              />
              <MenuItem
                href="/profs"
                iconPath="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                text="Profs"
              />
              <MenuItem
                href="/departments"
                iconPath="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                text="Departments"
              />
              <MenuItem
                href="/modules"
                iconPath="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                text="Modules"
              />
              <MenuItem
                href="/groups"
                iconPath="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                text="Groups"
              />
              <MenuItem
                href="/allExams"
                iconPath="M12 2c5.523 0 10 4.477 10 10v2c0 .64-.099 1.272-.292 1.872l-8.004-4.572c-.095-.054-.202-.084-.304-.126-.5-.198-1.032-.298-1.56-.298s-1.06.1-1.56.298c-.102.042-.209.072-.304.126L2.292 15.872C2.099 15.272 2 14.64 2 14V12c0-5.523 4.477-10 10-10zm-2 17v-2h4v2h-4zm0-4v-1h4v1h-4zm6 3.226l5 2.857V20h-5v-1.917zM4.586 17h5.59l3.48 1.987A9.954 9.954 0 0 1 12 18c1.294 0 2.541.245 3.692.687L19 17.414V15H5v2.414l1.293 1.293a9.972 9.972 0 0 1 3.544-.504c-.26-.677-.557-1.324-.888-1.937l-3.363-1.918A9.992 9.992 0 0 1 4 12c0-3.155 1.488-5.966 3.785-7.775l.937 1.875C6.476 7.502 6 9.67 6 12s.476 4.498 1.722 6.9l-.937 1.875A9.95 9.95 0 0 1 4.586 17z"
                text="Exams"
              />

              <MenuItem
                href="/"
                iconPath="M5.05 3.636a2 2 0 011.32-.95A7.972 7.972 0 0110 2c1.092 0 2.133.218 3.06.612.54.227.849.808.722 1.38-.128.572-.702.928-1.25.745a6 6 0 00-5.064 0c-.55.184-1.122-.171-1.25-.745a1.102 1.102 0 01.822-1.356zM7.05 7.636A2 2 0 018.37 6.686a7.972 7.972 0 013.26 0c.54.227.849.808.722 1.38-.128.572-.702.928-1.25.745a6 6 0 00-2.504 0c-.55.184-1.122-.171-1.25-.745a1.102 1.102 0 01.822-1.356zM12 14a1 1 0 112 0v1a1 1 0 11-2 0v-1z"
                text="Lougout"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-lg border-dashed  border-gray-300 mt-20 md:mt-4">
          <div className="h-full text-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ href, iconPath, text }) => (
  <a
    href={href}
    className="text-sm text-gray-700 font-medium py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out"
  >
    <svg
      className="w-6 h-6 fill-current inline-block mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path fillRule="evenodd" d={iconPath} clipRule="evenodd"></path>
    </svg>
    <span>{text}</span>
  </a>
);

export default Layout;
