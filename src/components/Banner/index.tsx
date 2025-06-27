import banner from "../../assets/images/banner-new.jpg";

const Banner = () => {
  return (
    <div className="w-full lg:px-[150px] px-5 md:py-10 py-8 h-[700px]">
      <div
        className="w-full h-full bg-center bg-cover flex items-center rounded-lg"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full bg-[#000000c2] lg:w-1/2 lg:px-0 px-10 h-full flex items-center justify-center rounded-tl-lg rounded-bl-lg">
          <div className="flex flex-col items-start">
            <span className="ml-14 text-white text-[15px] lg:w-fit lg:text-left w-full text-center">
              Sứ Mệnh Của Chúng Tôi
            </span>
            <div className="font-semibold text-[50px] text-center text-white">
              Cam Kết Chất Lượng Hàng Đầu
            </div>
            <p className="ml-14 mt-3 text-gray-200 max-w-[500px] lg:text-left text-center leading-7">
              Chúng tôi luôn đặt chất lượng lên hàng đầu trong từng chi tiết
              thiết kế, mang đến không gian sống hoàn hảo, hiện đại và đầy cảm
              hứng cho bạn và gia đình.
            </p>
            <div className="w-full flex justify-center mt-5">
              <a
                href="#explore"
                className="text-[#333] rounded-full bg-white font-medium px-5 py-3 w-fit z-50 hover:bg-gray-200 transition"
              >
                Khám Phá Thiết Kế
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
