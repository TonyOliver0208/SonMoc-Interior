import classic from "../../assets/images/classic.jpg";
import luxury from "../../assets/images/luxury.jpg";
import surreal from "../../assets/images/surreal.jpg";
import bright from "../../assets/images/bright.jpg";

const Collections = () => {
  const collectionItems = [
    {
      title: "Văn Phòng",
      image: surreal, // replace with your office-themed image
      desc: "Không gian làm việc hiện đại, tối ưu hóa hiệu suất với thiết kế tiện nghi và chuyên nghiệp.",
    },
    {
      title: "Nhà Ở",
      image: classic, // replace with a cozy home image
      desc: "Tổ ấm lý tưởng với thiết kế ấm cúng, thân thiện và tối ưu hóa công năng sử dụng.",
    },
    {
      title: "Căn Hộ Cao Cấp",
      image: bright, // luxury apartment vibes
      desc: "Thiết kế sang trọng, tinh tế phù hợp với phong cách sống hiện đại và đẳng cấp.",
    },
    {
      title: "Không Gian Mở",
      image: luxury, // creative or cafe-like vibe
      desc: "Không gian mở đầy cảm hứng, lý tưởng cho sáng tạo và giao tiếp, phù hợp với quán cà phê hoặc studio.",
    },
  ];

  return (
    <div className="w-full lg:px-[150px] px-5 pb-8 flex lg:flex-row flex-col items-center justify-between gap-8">
      {collectionItems.map((item, index: number) => (
        <div
          key={index}
          className="w-full h-[600px] bg-center bg-cover relative p-6 cursor-pointer"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="w-full h-full absolute bg-black opacity-45 z-20 top-0 left-0"></div>
          <div className="flex flex-col">
            <div className="text-white font-semibold text-[20px] z-50">
              Bộ Sưu Tập
            </div>
            <div className="text-white font-semibold text-[20px] z-50">
              {item.title}
            </div>
          </div>
          <div className="absolute bottom-6 z-50 flex flex-col gap-6">
            <p className="text-gray-100 leading-6 text-[14px] lg:text-left text-center min-h-[96px]">
              {item.desc}
            </p>

            <a href="#" className="text-white font-light text-[17px]">
              Xem thêm
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
