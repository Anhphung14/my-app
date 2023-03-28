import React from "react";
import Logo from "../../assets/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import Avatar from "../../assets/avatar.png";
import SearchResult from "../Search/searchresult";
import { useState } from "react";
import styles from "./header.module.css";
const Header = () => {
  const Menus = [""];
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  // const [isLogin, setIsLogin] = useState(false);

  return (
    <header>
      <div className="fixed z-50 w-screen bg-white p-6  px-2">
        {/*desktop & tablet*/}
        <div className="hidden md:flex w-full h-full items-center justify-around">
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              className="w-[250px] h-[47px] object-cover"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li
                className={`${styles.parent} text-xl p-2 md:uppercase text-black  hover:text-teal-900 duration-100 transition-all ease-in-out cursor-pointer`}>
                Trang chủ
              </li>
              <li
                className={`${styles.parent} text-xl p-2 md:uppercase text-black  hover:text-teal-900 duration-100 transition-all ease-in-out cursor-pointer`}>
                Cửa hàng
              </li>
              <li
                className={`${styles.parent} text-xl p-2 md:uppercase text-black  hover:text-teal-900 duration-100 transition-all ease-in-out cursor-pointer`}>
                Liên hệ
              </li>
              <li
                className={`${styles.parent} text-xl p-2 md:uppercase text-black  hover:text-teal-900 duration-100 transition-all ease-in-out cursor-pointer`}>
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
              {/* <SearchResult /> */}
            </form>

            <div className="relative flex items-center justify-center">
              <MdShoppingBasket className="text-black text-2xl cursor-pointer" />
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">2</p>
              </div>
            </div>

            <div className="relative">
              <img
                src={Avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl"
                alt="userprofile"
                onClick={() => setOpen(!open)}
              />
              {open &&
                Menus.map((menu) => (
                  <div className="absolute w-48 bg-gray-50 shadow-xl rounded-lg flex flex-col top-10 right-0 px-4 py-2 ">
                    <div className="" onClick={() => setOpen(false)}>
                      <p className="px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-black text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Tài Khoản Của Tôi{" "}
                      </p>
                      <p className="px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-black text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                        Đơn Hàng{" "}
                      </p>
                      <p className="px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-black text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                        Đăng Xuất
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/*mobile*/}
        <div className="flex md:hidden w-full items-center  h-full justify-between ">
          <div className="items-center justify-center flex md:hidden pr-3">
            <svg
              onClick={() => setNav(!nav)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {nav ? (
              <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
                <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
                  <svg
                    onClick={() => setNav(!nav)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="absolute w-7 h-7 cursor-pointer top-4 right-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <img
                    src={Logo}
                    className="w-[220px] h-[44px] pr-4 pt-4 pl-4 flex justify-center items-center"
                    alt="logo"
                  />

                  <nav>
                    <ul className="flex flex-col p-4 text-black ">
                      <li className="text-xl py-4 pl-4 mr-4 flex uppercase">
                        Trang chủ
                      </li>
                      <li className="text-xl py-4 pl-4 mr-4 flex uppercase">
                        Cửa hàng
                      </li>
                      <li className="text-xl py-4 pl-4 mr-4 flex uppercase">
                        Liên hệ
                      </li>
                      <li className="text-xl py-4 pl-4 mr-4 flex uppercase">
                        Giới thiệu
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <img
            src={Logo}
            className="w-[242px] h-[47px] object-cover justify-between items-center"
            alt="logo"
          />

          <div className="relative justify-center items-center flex">
            <img
              src={Avatar}
              className="w-10 min-w-[40px]  h-10 min-h-[40px] drop-shadow-xl "
              alt="userprofile"
              onClick={() => setOpen(!open)}
            />
            {open &&
              Menus.map((menu) => (
                <div className="absolute w-48 bg-gray-50 shadow-xl rounded-lg flex flex-col top-14 right-1 px-4 py-2 ">
                  <div className="" onClick={() => setOpen(false)}>
                    <p className="px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-black text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Tài Khoản Của Tôi{" "}
                    </p>
                    <p className="px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-black text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      Đơn Hàng{" "}
                    </p>

                    <p className="px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-black text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      Giỏ hàng
                    </p>
                    <p className="px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-black text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                      Đăng Xuất
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
