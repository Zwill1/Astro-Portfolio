import { useState } from "preact/hooks";
import Hamburger from "./Hamburger.jsx";
import HamburgerClose from "./HamburgerClose.jsx";

function Navigation() {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

  return (
    <>
<section className="bg-black text-white">
        <div className="flex justify-between md:w-full h-14 w-10/12 mx-auto container items-center">
          <div>
            <h1 className="flex">
              <a
                href="/"
                className="font-bold mr-4 text-2xl sm:text-3xl md:text-4xl uppercase"
              >
                Logo
              </a>
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex pr-4">
                <>
                  <li className="p-4">
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li className="p-4">
                    <a href="login">
                      Portfolio
                    </a>
                  </li>
                  <li className="p-4">
                    <a href="login">
                      Education
                    </a>
                  </li>
                  <li className="p-4">
                    <a href="login">
                      Contact
                    </a>
                  </li>
                </>
            </ul>
          </div>
          <div className="lg:hidden" onClick={handleClick}>
            {!nav ? (
              <Hamburger />
            ) : (
              <HamburgerClose />
            )}
          </div>
        </div>
        <ul
          className={
            !nav ? "hidden" : "absolute bg-black w-full lg:hidden z-50"
          }
        >
        <>
            <li className="w-full mx-auto text-center bg-[#333]">
            <a href="/" class="block pt-4 pb-4" onClick={handleClose}>
                Home
            </a>
            </li>
            <li className="w-full mx-auto text-center">
            <a href="/portfolio" class="block pt-4 pb-4" onClick={handleClose}>
                Portfolio
            </a>
            </li>
            <li className="w-full mx-auto text-center bg-[#333]">
            <a href="/education" class="block pt-4 pb-4" onClick={handleClose}>
                Education
            </a>
            </li>
            <li className="w-full mx-auto text-center">
            <a href="/contact" class="block pt-4 pb-4" onClick={handleClose}>
                Contact
            </a>
            </li>
        </>
        </ul>
      </section>
    </>
  )
}

export default Navigation