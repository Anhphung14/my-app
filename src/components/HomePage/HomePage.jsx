import React from "react";
import HeaderFinal from "../Headerfinal.jsx/HeaderFinal";
import bgHome from "../../assets/bgHome.jpg";
import styles from "../HomePage/style.module.css";
const Home = () => {
  return (
    <div>
      <HeaderFinal />;
      <div className="max-w-full mx-auto ">
        <div className="relative w-full h-full max-h-full bg-white/80">
          <div className="absolute flex flex-col w-full h-full text-white  max-h-full max-w-full justify-center items-center uppercase ">
            <div>
              <h2
                className="w-auto h-auto tracking-widest m-4 px-4 text-inherit text-center font-bold box-border "
                style={styles.h2}>
                <span className="text-4xl">tìm mua</span>{" "}
                <b className="text-6xl">Thực phẩm sạch</b>{" "}
                <span className="text-4xl "> từ</span>
                <span className="flex-col flex "></span>
                <b className="text-6xl  ">Nhà cung cấp uy tín</b>
                <span className="text-4xl"> tại đây</span>
              </h2>
            </div>
            <button className="w-32 text-lg  bg-[#6abd45]  py-3 my-[9.2px]  rounded-lg font-serif uppercase">
              Mua ngay
            </button>
          </div>

          <div>
            <img src={bgHome} alt="" className=" w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
