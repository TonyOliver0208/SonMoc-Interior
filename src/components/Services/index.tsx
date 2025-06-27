import {
  BrushOutline,
  LeafOutline,
  RainyOutline,
  RibbonOutline,
} from "react-ionicons";

const Services = () => {
  const services = [
    {
      title: "Thiết Kế Hiện Đại",
      icon: BrushOutline,
      desc: "Mang đến không gian sống hiện đại, tiện nghi với phong cách thiết kế tối ưu và tinh tế.",
    },
    {
      title: "Giải Pháp Ngoài Trời",
      icon: RainyOutline,
      desc: "Chống chịu thời tiết hiệu quả, phù hợp với khí hậu Việt Nam và nhu cầu sinh hoạt ngoài trời.",
    },
    {
      title: "Thân Thiện Môi Trường",
      icon: LeafOutline,
      desc: "Sử dụng vật liệu tái chế, tiết kiệm năng lượng và bảo vệ môi trường sống xanh.",
    },
    {
      title: "Chất Lượng Hàng Đầu",
      icon: RibbonOutline,
      desc: "Cam kết chất lượng vượt trội, độ bền cao và bảo hành dài hạn cho mọi công trình.",
    },
  ];
  return (
    <div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-center justify-between gap-8">
      {services.map((service) => (
        <div key={service.title} className="flex flex-col items-center gap-3">
          <service.icon color="#425e85" width={"50px"} height={"50px"} />
          <span className="font-semibold text-[20px]">{service.title}</span>
          <p className="text-gray-600 leading-7 text-center max-w-[350px]">
            {service.desc}
          </p>
          <a href="#" className="text-[#425e85]">
            Xem thêm
          </a>
        </div>
      ))}
    </div>
  );
};

export default Services;
