import React from "react";
import loginImg from "../assets/final.png";
import styles from "./styles.module.css";

function SignUp() {
  return (
    <div className={styles.layout}>
      <div
        className={`${styles.container} w-1/2 bg-gradient-to-r from-white to-green-200`}>
        <img
          className="w-1/2  object-cover inline-block rounded-lg bg-gradient-to-r from-green-200 to-white"
          src={loginImg}
          alt=""
        />
        <div className="w-1/2 bg-green- flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg  p-8 px-9 ">
            <h2 className="text-4xl dark:text-white font-bold text-center font-serif text-teal-700">
              ĐĂNG KÝ
            </h2>
            <div className="flex flex-col text-teal-800 py-2">
              <label>Họ và tên</label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                className="p-2 placeholder:italic placeholder:text-sm rounded-lg bg-white mt-2 focus:bg-white focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-teal-800 py-2">
              <label>Email</label>
              <input
                type="text"
                placeholder="Monafresh@gmail.com"
                className="p-2 placeholder:italic placeholder:text-sm rounded-lg bg-white mt-2 focus:bg-white focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-teal-800 py-2">
              <label>Số điện thoại</label>
              <input
                type="number"
                placeholder="0123456789"
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
            <div className="flex flex-col text-teal-800 py-2">
              <label>Nhập lại mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className="p-2 placeholder:italic placeholder:text-sm rounded-lg bg-white mt-2 focus:bg-white focus:outline-none"
              />
            </div>
            <button className="w-full my-5 py-2 bg-green-300 shadow-lg rounded-lg font-serif text-teal-800">
              ĐĂNG KÝ TÀI KHOẢN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
