import React from "react";
import Logo from "../../assets/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import Avatar from "../../assets/avatar.png";
import styles from "../Header/header.module.css";
// import { SearchIcon } from "@heroicons/vue";
import { useState } from "react";
import Login from "../Login";

const HeaderLogin = () => {
  const Menus = [""];
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.layout}>
      <header>
        <div className="fixed z-50 w-screen bg-white p-6  px-14">
          {/*desktop & tablet*/}
          <div className="hidden md:flex w-full h-full items-center justify-between">
            <div className="flex items-center gap2">
              <img
                src={Logo}
                className="w-[250px] h-[47px] object-cover"
                alt="logo"
              />
            </div>
            <div className="flex items-center gap-8">
              <ul className="flex items-center gap-8">
                <li className="text-xl hover:text-teal-900 md:uppercase text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Trang chủ
                </li>
                <li className="text-xl hover:text-teal-900 md:uppercase text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Cửa hàng
                </li>
                <li className="text-xl hover:text-teal-900 md:uppercase text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Liên hệ
                </li>
                <li className="text-xl hover:text-teal-900 md:uppercase text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Giới thiệu
                </li>
              </ul>
              <form action="">
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 absolute ml-3 pointer-events-none">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="Tìm kiếm"
                    className="italic rounded-full border-2 border-slate-600 flex-col pr-3 pl-10 py-2 text-gray-700 focus:outline-none"
                  />
                </div>
              </form>

              <div className="relative flex items-center justify-center">
                <a href="/">
                  <MdShoppingBasket className="text-black text-2xl cursor-pointer" />
                </a>
              </div>
              <div className="">
                <a className=" text-black italic" href="/">
                  Đăng Nhập/Đăng Ký
                </a>
              </div>
            </div>
          </div>

          {/*mobile*/}
          <div className="flex md:hidden w-full h-full">
            <div className="items-center justify-center flex  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                {" "}
                {/*Menu*/}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <img
              src={Logo}
              className="w-[250px] h-[47px] object-cover"
              alt="logo"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderLogin;
