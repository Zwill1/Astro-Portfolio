import { useState } from "preact/hooks";

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
              // Making a hamburger menu with CSS ONLY
            <>
              <div style="width: 35px; height: 3px; background-color: white; margin: 6px 0;"></div>
              <div style="width: 35px; height: 3px; background-color: white; margin: 6px 0;"></div>
              <div style="width: 35px; height: 3px; background-color: white; margin: 6px 0;"></div>
            </>
            ) : (
              // Making a close menu with CSS ONLY
            <div style="font-size: 35px; color: white; margin: 6px 0;">X</div>
            )}
          </div>
        </div>
        <ul
          className={
            !nav ? "hidden" : "absolute bg-black w-full lg:hidden z-50"
          }
        >
        <>
            <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
            <a href="/" class="block" onClick={handleClose}>
                Home
            </a>
            </li>
            <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
            <a href="login" class="block" onClick={handleClose}>
                Portfolio
            </a>
            </li>
            <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
            <a href="login" class="block" onClick={handleClose}>
                Education
            </a>
            </li>
            <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
            <a href="login" class="block" onClick={handleClose}>
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