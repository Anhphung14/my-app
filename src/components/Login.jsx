import React from "react";
import loginImg from "../assets/login.png";
import styles from "./styles.module.css";
import SignUp from "./signUp";
import { LINK } from "react-router-dom";

function Login() {
  return (
    // desktop
    <div className={styles.layout}>
      <div
        className={`${styles.container} w-1/2 bg-gradient-to-r from-white to-green-200`}>
        <img
          className="w-1/2 object-cover inline-block rounded-lg bg-gradient-to-r from-green-200 to-white"
          src={loginImg}
          alt=""
        />
        <div className="w-1/2 bg-green- flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg  p-8 px-9 ">
            <h2 className="text-4xl dark:text-white font-bold text-center font-serif text-teal-700">
              ĐĂNG NHẬP
            </h2>
            <div className="flex flex-col text-teal-800 py-2">
              <label>Email</label>
              <input
                type="text"
                placeholder="Monafresh@gmail.com"
                className="p-2 placeholder:italic placeholder:text-sm rounded-lg bg-white mt-2 focus:bg-white focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-teal-800 py-2">
              <label>Mật khẩu</label>
              <input
                type="password"
                placeholder="Mật khẩu"
                className="p-2 placeholder:italic placeholder:text-sm rounded-lg bg-white mt-2 focus:bg-white focus:outline-none"
              />
            </div>
            <div className="justify-between flex">
              <div>
                <p className="text-sm italic flex items-center text-teal-800">
                  <input type="checkbox" className="mr-2 " />
                  Ghi nhớ đăng nhập
                </p>
              </div>
              <a
                href="#"
                className="text-sm underline italic text-teal-800 flex-start mr-0  ml-12 ">
                Quên mật khẩu?
              </a>
            </div>
            <button className="w-full my-5 py-2 bg-green-300 shadow-lg rounded-lg font-serif text-teal-800">
              ĐĂNG NHẬP
            </button>
            <div className="justify-between flex">
              <p className="text-sm italic flex items-center text-teal-800">
                Bạn chưa có tài khoản?{" "}
              </p>
              <button className="w-32 text-sm  py-1 bg-green-300 shadow-lg rounded-lg font-serif text-teal-800">
                <a href="/signUp">ĐĂNG KÝ</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
