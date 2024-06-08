import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { GithubLogo , LinkedinLogo} from "@phosphor-icons/react/dist/ssr";
import { Moon , Sun} from "@phosphor-icons/react";

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const { theme, setTheme } = props;
    const [currTheme, setCurrTheme] = useState(theme.name)


  const changeTheme = ()=>{

    if(currTheme === "light"){
      setTheme("dark")
      localStorage.setItem("theme", "dark")
      setCurrTheme("dark")
    }
    else{
      setTheme("light")
      localStorage.setItem("theme", "light")
      setCurrTheme("light")
    }
  }


  const icon =
    props.theme.name === "dark" ? (
      <Moon
        weight="fill"
        size={35}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <Sun
        size={35}
        weight="fill"
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );



  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-2">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain rounded-lg"
            />
          </Link>
          <div className="">
            <p className="text-[18px] font-bold cursor-pointer flex text-red-200">
              Prashant
            </p>
            <span className="flex">
              <a href="https://github.com/Prashantkmr389">
                <GithubLogo size={32} weight="fill" color="#ed3d6f" />
              </a>
              <a href="https://www.linkedin.com/in/prashantkmr389/">
                <LinkedinLogo size={32} color="#ed3d6f" />
              </a>
            </span>
          </div>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <button
            className={`cursor-pointer m-[-7px] p-[5px] rounded-full border-none flex items-center justify-center focus:outline-none transition-all duration-200 ease-in-out ${
        theme.name === 'light'
          ? 'bg-[#7CD1F7] hover:shadow-[0_3px_8px_#F7D774]'
          : 'bg-[#292C3F] hover:shadow-[0_3px_8px_#646464]'
      }`}
            onClick={changeTheme}
          >
            {icon}
          </button>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* Add the Resume section link */}
          <li
            className={`${
              active === "Resume" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Resume")}
          >
            <a href="https://drive.google.com/file/d/1XEUUlJ7RlPy_ek_uSuexNKzq5k5_p2Wb/view?usp=drive_link">
              Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;