import React from "react";
import Header from "../Headerfinal.jsx/HeaderFinal";
import styles from "./about.module.css";
import unMonaMedia from "../../assets/about.png";
import AboutMona from "../../assets/Cover (1).png";
import ship from "../../assets/Green Simple Delivery Service Facebook Post (1).png";
const about = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className={styles.bgAbout}>
        <div className="mx-40 w-[1210px] h-[140] px-4 py-5 min-h-[180px] flex flex-col ">
          <div className="uppercase font-semibold flex-col text-white  text-center mt-5 text-3xl">
            <h1>Giới thiệu</h1>
          </div>
          <div className="uppercase font-medium flex-col text-white  text-center mt-5 text-xl">
            <h3>Trang chủ/Giới thiệu</h3>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1520px] h-[1014px] relative">
        <div className="py-5 bg-white"></div>
        <div className="flex flex-col mx-40 w-[1240px] h-36">
          <div className="text-center uppercase text-4xl font-medium">
            Mona Media
          </div>
          <img src={unMonaMedia} alt="" className="w-[200px] mx-auto" />
          <h3 className="text-center font-medium text-[#666666d9]">
            Chào mừng đến với trang web bán thực phẩm organic của chúng tôi!
          </h3>
        </div>
        <div className=" mx-40  h-[720px]  flex justify-between">
          <div className="w-[60%]">
            <img src={AboutMona} alt="" className="h-[427px]" />
          </div>
          <p className="w-[40%] text-justify ml-3 text-base text-[#353535]">
            Chúng tôi tự hào giới thiệu đến quý khách hàng những sản phẩm thực
            phẩm organic chất lượng cao, được sản xuất và chăm sóc bằng phương
            pháp tự nhiên và bền vững.
            <br />
            Với sứ mệnh mang lại những sản phẩm an toàn và tốt cho sức khỏe của
            con người và môi trường, chúng tôi luôn nỗ lực tìm kiếm và cung cấp
            những sản phẩm thực phẩm organic tốt nhất từ các nông trại, trang
            trại và đơn vị sản xuất uy tín trong và ngoài nước.
            <br />
            Trên trang web của chúng tôi, quý khách hàng có thể tìm thấy các sản
            phẩm thực phẩm organic đa dạng, bao gồm rau củ quả, thực phẩm từ
            động vật, đồ uống và các sản phẩm tinh dầu thơm cùng nhiều sản phẩm
            khác. Tất cả sản phẩm của chúng tôi đều được kiểm tra và chứng nhận
            đảm bảo chất lượng và an toàn cho sức khỏe của người tiêu dùng.
            <br />
            Chúng tôi cam kết đem đến sự hài lòng và tin tưởng của quý khách
            hàng về sản phẩm và dịch vụ của chúng tôi.
            <br />
            Cảm ơn quý khách đã ghé thăm trang web của chúng tôi. Hãy đặt hàng
            ngay để tận hưởng sự tươi ngon và an toàn của các sản phẩm thực phẩm
            organic của chúng tôi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
