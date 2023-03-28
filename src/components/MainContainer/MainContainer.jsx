import React from "react";
import HomePage from "../HomePage/HomePage";
import Cate_1_hover from "../../assets/index_cate_1_hover.png";
import Cate_2_hover from "../../assets/index_cate_2_hover.png";
import Cate_3_hover from "../../assets/index_cate_3_hover.png";
import Cate_4_hover from "../../assets/index_cate_4_hover.png";
import Cate_5_hover from "../../assets/index_cate_5_hover.png";
import Cate_6_hover from "../../assets/index_cate_6_hover.png";
import Cate_1 from "../../assets/index_cate_1.png";
import Cate_2 from "../../assets/index_cate_2.png";
import Cate_3 from "../../assets/index_cate_3.png";
import Cate_4 from "../../assets/index_cate_4.png";
import Cate_5 from "../../assets/index_cate_5.png";
import Cate_6 from "../../assets/index_cate_6.png";

import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className="">
      <HomePage />

      <section className="w-full my-6">
        <div className="w-full items-center justify-between">
          <div>
            <b className="text-[#484747] text-center flex  justify-center text-3xl pt-[50px] pb-[40px]">
              Mua sản phẩm được lựa chọn từ vườn
            </b>
          </div>
          <div className="mx-[82px] flex flex-row justify-between items-center content-center">
            <div className="">
              <div className={styles.parent}>
                <img src={Cate_1} alt="" className="" />
                <div
                  className={`${styles.overlay1} absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10`}>
                  <img src={Cate_1_hover} alt="" />
                </div>
              </div>

              <div className="py-2"></div>
              <h3 className="text-center font-semibold text-2xl text-gray-700 hover:text-teal-600 duration-100 transition-all ease-in-out cursor-pointer">
                <a href="">Rau củ</a>
              </h3>
            </div>
            <div className="">
              <div className={styles.parent}>
                <img src={Cate_2} alt="" className="" />
                <div
                  className={`${styles.overlay1} absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10`}>
                  <img src={Cate_2_hover} alt="" />
                </div>
              </div>

              <div className="py-2"></div>
              <h3 className="text-center font-semibold text-2xl text-gray-700 hover:text-teal-600 duration-100 transition-all ease-in-out cursor-pointer">
                <a href="">Hải sản</a>
              </h3>
            </div>
            <div className="">
              <div className={styles.parent}>
                <img src={Cate_3} alt="" className="" />
                <div
                  className={`${styles.overlay1} absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10`}>
                  <img src={Cate_3_hover} alt="" />
                </div>
              </div>

              <div className="py-2"></div>
              <h3 className="text-center font-semibold text-2xl text-gray-700 hover:text-teal-600 duration-100 transition-all ease-in-out cursor-pointer">
                <a href="">Thịt trứng</a>
              </h3>
            </div>
            <div className="">
              <div className={styles.parent}>
                <img src={Cate_4} alt="" className="" />
                <div
                  className={`${styles.overlay1} absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10`}>
                  <img src={Cate_4_hover} alt="" />
                </div>
              </div>

              <div className="py-2"></div>
              <h3 className="text-center font-semibold text-2xl text-gray-700 hover:text-teal-600 duration-100 transition-all ease-in-out cursor-pointer">
                <a href="">Trái cây</a>
              </h3>
            </div>
            <div className="">
              <div className={styles.parent}>
                <img src={Cate_5} alt="" className="" />
                <div
                  className={`${styles.overlay1} absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10`}>
                  <img src={Cate_5_hover} alt="" />
                </div>
              </div>

              <div className="py-2"></div>
              <h3 className="text-center font-semibold text-2xl text-gray-700 hover:text-teal-600 duration-100 transition-all ease-in-out cursor-pointer">
                <a href="">Đồ khô</a>
              </h3>
            </div>
            <div className="">
              <div className={styles.parent}>
                <img src={Cate_6} alt="" className="" />
                <div
                  className={`${styles.overlay1} absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10`}>
                  <img src={Cate_6_hover} alt="" />
                </div>
              </div>

              <div className="py-2"></div>
              <h3 className="text-center font-semibold text-2xl text-gray-700 hover:text-teal-600 duration-100 transition-all ease-in-out cursor-pointer">
                <a href="">Đồ uống</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
