import {
  LogoInstagram,
  LogoFacebook,
  LogoYoutube,
  ChevronDown,
} from "react-ionicons";
import bg from "../../assets/images/sonmoc-background.jpg";
import logo from "../../assets/images/sonmoc-logo-newest.png";

const Header = () => {
  const navItems = [
    { path: "/", title: "Trang chủ" },
    { path: "/", title: "Thiết kế" },
    { path: "/", title: "Khách hàng" },
    { path: "/", title: "Về chúng tôi" },
    { path: "/", title: "Liên hệ" },
  ];

  return (
    <div
      className="w-full h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Logo + Navbar */}
      <div className="flex items-center justify-between absolute top-5 z-50 w-full md:px-[150px] px-5">
        <div className="flex items-center h-[40px] md:h-[50px]">
          <img
            src={logo}
            alt="SonMoc Interior Logo"
            className="h-full w-auto max-w-[160px] object-contain"
          />
        </div>

        {/* Nav Items */}
        <div className="items-center lg:flex hidden gap-5">
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.title}
              className="text-white no-underline font-light"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/SonMocdesign/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoFacebook color="white" cssClasses="cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/@sonmoc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoYoutube color="white" cssClasses="cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/sonmocinterior"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoInstagram color="white" cssClasses="cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-20"></div>

      {/* Hero Content */}
      <div className="flex flex-col gap-2 items-center">
        <div className="text-white lg:text-[60px] text-[40px] font-semibold z-50 text-center">
          Kiến Tạo Không Gian Sống Mơ Ước
        </div>
        <p className="text-gray-300 text-[15px] z-50 text-center lg:max-w-[700px] max-w-[450px]">
          Chúng tôi biến ý tưởng của bạn thành hiện thực với những thiết kế nội
          thất tinh tế, hiện đại và phù hợp với từng phong cách sống.
        </p>

        <button className="text-[#333] rounded-full bg-white font-medium px-5 py-3 w-fit mt-5 z-50">
          Khám Phá Thiết Kế Của Chúng Tôi
        </button>
      </div>

      {/* Chevron Down */}
      <div className="absolute bottom-5 w-full px-[150px] z-50 flex items-center justify-center">
        <ChevronDown
          color={"white"}
          width="30px"
          height="30px"
          cssClasses={"animate-bounce"}
        />
      </div>
    </div>
  );
};

export default Header;
