const Footer = () => {
  return (
    <div className="w-full bg-[#F7F7F7] pt-[60px] lg:px-[150px] px-8 pb-[56px] mt-[90px]">
      <div className="w-full flex lg:flex-row flex-col lg:items-start justify-between gap-10">
        {/* Google Map & Contact Info */}
        <div className="flex flex-col gap-6 max-w-[350px]">
          <div className="text-[15px] text-[#333] font-medium leading-7">
            <p>📍 436 Thạnh Phú, An Thạnh, Thuận An</p>
            <p>📞 091 725 61 36</p>
            <p>📧 sonmocinterior@gmail.com</p>
            <p>🌐 www.interior.vn</p>
          </div>
          <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.3876634218313!2d106.67110699999999!3d10.941191799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d6e06307f4ed%3A0xc4da88c0fa94e9db!2zQ3R5IE7hu5lpIFRo4bqldCBTxqBOIE3hu5hD!5e1!3m2!1sen!2s!4v1750967179017!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Dịch vụ */}
        <div className="flex flex-col">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Dịch Vụ
          </span>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Thiết kế nội thất
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Thiết kế nhà ở
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px]">
            Không gian ngoài trời
          </a>
        </div>

        {/* Bộ Sưu Tập */}
        <div className="flex flex-col">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Bộ Sưu Tập
          </span>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Văn phòng
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Nhà ở
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Căn hộ cao cấp
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Không gian mở
          </a>
        </div>

        {/* Mạng Xã Hội */}
        <div className="flex flex-col">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Kết nối với chúng tôi
          </span>
          <a
            href="https://www.facebook.com/SonMocdesign/"
            className="text-[#333] font-medium text-[15px] mb-4"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/sonmocinterior?fbclid=IwY2xjawLKgXZleHRuA2FlbQIxMABicmlkETFjWk01V3dEQ1g4YU9lZ0VlAR5QcJPuro37S89b8LvKccVk6wzty63gO8k1NEaf52HpX0X-9mVctc68JedEKw_aem_-_Ue-j292YL5H8t_m01ftQ"
            className="text-[#333] font-medium text-[15px] mb-4"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@sonmoc"
            className="text-[#333] font-medium text-[15px] mb-4"
          >
            Youtube
          </a>
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40sonmocinterior%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExVmFWOU43eWR1Um9MaEZQaQEeggBJMYPSloL1XlhD5tPMmKv2CNPK3Dbl_7Exj4zgTkrRviIzW-gaD_EmuvQ_aem_qCMg2P2eaUOn7wepvYKsEA&h=AT1cLB9mP-Lm4hfausyycEQA1qaIwjpKfsMY19FIXUI7DU6y30XnCkhhpQLx8JwyWaYKsnvWb4Ssy5byt6GhF_VQLTv-5TguRPNq2NDPsYtaAdNJBJuCWgSykc-8qtNgxsZmDoJY-A"
            className="text-[#333] font-medium text-[15px] mb-4"
          >
            Tiktok
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
