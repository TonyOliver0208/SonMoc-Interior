const Intro = () => {
  return (
    <div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-start justify-center gap-16">
      <div className="flex flex-col">
        <span className="text-[15px] text-[#425e85]">Về Chúng Tôi</span>
        <span className="font-semibold text-[30px] max-w-[350px]">
          Giải Pháp Hàng Đầu Từ Các Nhà Thiết Kế Chuyên Nghiệp
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-600 leading-7 max-w-[500px]">
          Với đội ngũ giàu kinh nghiệm và sáng tạo, chúng tôi mang đến những
          thiết kế nội thất độc đáo, hiện đại và tối ưu hoá không gian sống cho
          bạn. Sự hài lòng của khách hàng chính là nguồn cảm hứng của chúng tôi.
        </p>
        <a
          href="#explore"
          className="text-white rounded-full bg-[#333] font-medium outline-none px-5 py-3 w-fit mt-5 z-50 transition-all hover:bg-[#555]"
        >
          Khám Phá Thiết Kế
        </a>
      </div>
    </div>
  );
};

export default Intro;
