import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  Link,
  LinkTag,
  ButtonPrimary,
  ButtonSecondary,
  RiMenu3Fill,
  CgClose,
} from "./Navigation.imports";

interface IFramerTransition {
  ease: string;
  duration: number;
  type: string;
}

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openMenu(): void {
    setIsOpen(true);
  }

  function closeMenu(): void {
    setIsOpen(false);
  }

  const transition: IFramerTransition = {
    ease: "backInOut",
    duration: 1,
    type: "spring",
  };

  const navigateUserToRegister = function (): void {
    window.location.href = "/account/register-choice";
  };

  const navigateUserToLogin = function (): void {
    window.location.href = "/account/login-choice";
  };

  return (
    <>
      <motion.nav
        className="nav-container flex items-center justify-between"
        initial={{ opacity: 0, y: -23 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <Link to="/" className="nav-container__header">
          <h1>Help Connect</h1>
        </Link>
        <div className="flex items-center gap-2 inner-menu">
          <ul className="nav-container__ul">
            <li>
              <LinkTag to="/" name="Home" />
            </li>
            {/* <li>
              <LinkTag to="#course" name="Course" />
            </li> */}
            {/* <li>
              <LinkTag to="#pricing" name="Pricing" />
            </li> */}
            <li>
              <LinkTag to="#about" name="About" />
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <ButtonPrimary
              name="Register"
              onclickFunc={navigateUserToRegister.bind(this)}
            />
            <ButtonSecondary
              name="Login"
              onClickFunc={navigateUserToLogin.bind(this)}
            />
          </div>
        </div>
        <div
          className="border px-2 py-1 text-xl menu"
          onClick={() => openMenu()}
        >
          <RiMenu3Fill />
        </div>
      </motion.nav>
      {isOpen && (
        <section className="menu-open z-[9999999999] absolute top-0 left-0 w-full bg-slate-100 h-screen p-[1.8rem]">
          <div className=" flex items-center justify-between ">
            <Link to="/" className="nav-container__header">
              <h1>Help Connect</h1>
            </Link>
            <div
              className="border px-2 py-1 text-xl menu"
              onClick={() => closeMenu()}
            >
              <CgClose />
            </div>
          </div>

          <section>
            <ul className="mt-10 flex flex-wrap gap-4 flex-col">
              <li className="p-2 bg-slate-200 rounded">
                <LinkTag to="/" name="Home" />
              </li>
              {/* <li  className="p-2 bg-slate-200 rounded">
                <LinkTag to="#course" name="Course" />
              </li> */}
              {/* <li className="p-2 bg-slate-200 rounded">
                <LinkTag to="#pricing" name="Pricing" />
              </li> */}
              <li className="p-2 bg-slate-200 rounded">
                <LinkTag to="#about" name="About" />
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-5">
            <ButtonPrimary
              name="Register"
              onclickFunc={navigateUserToRegister.bind(this)}
            />
            <ButtonSecondary
              name="Login"
              onClickFunc={navigateUserToLogin.bind(this)}
            />
          </div>
          </section>
        </section>
      )}
    </>
  );
};
