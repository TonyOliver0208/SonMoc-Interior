import ExploreCategory from "./ExploreCategory";

import officeOne from "../../assets/images/office/office-1.jpg";
import officeTwo from "../../assets/images/office/office-2.jpg";
import officeThree from "../../assets/images/office/office-3.jpg";
import officeFour from "../../assets/images/office/office-4.jpg";
import officeFive from "../../assets/images/office/office-5.jpg";
import officeSix from "../../assets/images/office/office-6.jpg";
import officeSeven from "../../assets/images/office/office-7.jpg";
import officeEight from "../../assets/images/office/office-8.jpg";
import officeNine from "../../assets/images/office/office-9.jpg";
import officeTen from "../../assets/images/office/office-10.jpg";

import mrOfficeOne from "../../assets/images/office-1/office-1.jpg";
import mrOfficeTwo from "../../assets/images/office-1/office-2.jpg";
import mrOfficeThree from "../../assets/images/office-1/office-3.jpg";
import mrOfficeFour from "../../assets/images/office-1/office-4.jpg";
import mrOfficeFive from "../../assets/images/office-1/office-5.jpg";

import homeOne from "../../assets/images/house/home-1.jpg";
import homeTwo from "../../assets/images/house/home-2.jpg";
import homeThree from "../../assets/images/house/home-3.jpg";
import homeFour from "../../assets/images/house/home-4.jpg";
import homeFive from "../../assets/images/house/home-5.jpg";
import homeSix from "../../assets/images/house/home-6.jpg";
import homeSeven from "../../assets/images/house/home-7.jpg";
import homeEight from "../../assets/images/house/home-8.jpg";
import homeNine from "../../assets/images/house/home-9.jpg";
import homeTen from "../../assets/images/house/home-10.jpg";

import japanOne from "../../assets/images/houseJ/japanOne.jpg";
import japanTwo from "../../assets/images/houseJ/japanTwo.jpg";
import japanThree from "../../assets/images/houseJ/japanThree.jpg";
import japanFour from "../../assets/images/houseJ/japanFour.jpg";
import japanFive from "../../assets/images/houseJ/japanFive.jpg";

import mansionOne from "../../assets/images/mansion/mansion_1.jpg";
import mansionTwo from "../../assets/images/mansion/mansion_2.jpg";
import mansionThree from "../../assets/images/mansion/mansion_3.jpg";
import mansionFour from "../../assets/images/mansion/mansion_4.jpg";
import mansionFive from "../../assets/images/mansion/mansion_5.jpg";

import apartmentOne from "../../assets/images/apartment/apartment-1.jpg";
import apartmentTwo from "../../assets/images/apartment/apartment-2.jpg";
import apartmentThree from "../../assets/images/apartment/apartment-3.jpg";
import apartmentFour from "../../assets/images/apartment/apartment-4.jpg";
import apartmentFive from "../../assets/images/apartment/apartment-5.jpg";
import apartmentSix from "../../assets/images/apartment/apartment-6.jpg";
import apartmentSeven from "../../assets/images/apartment/apartment-7.jpg";
import apartmentEight from "../../assets/images/apartment/apartment-8.jpg";
import apartmentNine from "../../assets/images/apartment/apartment-9.jpg";
import apartmentTen from "../../assets/images/apartment/apartment-10.jpg";

import delasolOne from "../../assets/images/apartment_HCM/delasol_1.jpg";
import delasolTwo from "../../assets/images/apartment_HCM/delasol_2.jpg";
import delasolThree from "../../assets/images/apartment_HCM/delasol_3.jpg";
import delasolFour from "../../assets/images/apartment_HCM/delasol_4.jpg";
import delasolFive from "../../assets/images/apartment_HCM/delasol_5.jpg";
import delasolSix from "../../assets/images/apartment_HCM/delasol_6.jpg";
import delasolSeven from "../../assets/images/apartment_HCM/delasol_7.jpg";

import tbdOne from "../../assets/images/apartment_TBD/tbd_1.jpg";
import tbdTwo from "../../assets/images/apartment_TBD/tbd_2.jpg";
import tbdThree from "../../assets/images/apartment_TBD/tbd_3.jpg";
import tbdFour from "../../assets/images/apartment_TBD/tbd_4.jpg";
import tbdFive from "../../assets/images/apartment_TBD/tbd_5.jpg";

import spaceOne from "../../assets/images/open-space/space-1.jpg";
import spaceTwo from "../../assets/images/open-space/space-2.jpg";
import spaceThree from "../../assets/images/open-space/space-3.jpg";
import spaceFour from "../../assets/images/open-space/space-4.jpg";
import spaceFive from "../../assets/images/open-space/space-5.jpg";
import spaceSix from "../../assets/images/open-space/space-6.jpg";
import spaceSeven from "../../assets/images/open-space/space-7.jpg";
import spaceEight from "../../assets/images/open-space/space-8.jpg";
import spaceNine from "../../assets/images/open-space/space-9.jpg";
import spaceTen from "../../assets/images/open-space/space-10.jpg";

import vsipOne from "../../assets/images/VSIP/vsip_1.jpg";
import vsipTwo from "../../assets/images/VSIP/vsip_2.jpg";
import vsipThree from "../../assets/images/VSIP/vsip_3.jpg";

const Explore = () => {
  return (
    <div
      id="explore"
      className="scroll-mt-[100px] w-full lg:px-[150px] px-5 lg:py-10 py-8"
    >
      <div className="flex flex-col items-center mb-12">
        <span className="text-[15px] text-[#425e85] uppercase tracking-wide">
          Khám Phá
        </span>
        <h2 className="font-semibold text-[30px] text-center">
          Những Thiết Kế Nội Thất Mới Nhất
        </h2>
        <p className="mt-3 text-gray-500 text-center max-w-[500px]">
          Cùng chiêm ngưỡng các xu hướng thiết kế hiện đại, tinh tế và đầy cảm
          hứng cho không gian sống của bạn.
        </p>
      </div>

      <ExploreCategory
        title="Văn phòng"
        collections={[
          {
            name: "Văn phòng MR Hà Nội",
            images: [
              officeOne,
              officeTwo,
              officeThree,
              officeFour,
              officeFive,
              officeSix,
              officeSeven,
              officeEight,
              officeNine,
              officeTen,
            ],
          },
          {
            name: "Văn phòng MR HCM",
            images: [
              mrOfficeOne,
              mrOfficeTwo,
              mrOfficeThree,
              mrOfficeFour,
              mrOfficeFive,
            ],
          },
          // {
          //   name: "Nhiều Cây Xanh",
          //   images: [],
          // },
        ]}
      />

      <ExploreCategory
        title="Nhà ở"
        collections={[
          {
            name: "Hiện Đại Ấm Cúng",
            images: [
              homeOne,
              homeTwo,
              homeThree,
              homeFour,
              homeFive,
              homeSix,
              homeSeven,
              homeEight,
              homeNine,
              homeTen,
            ],
          },
          {
            name: "Mini House Đà Lạt",
            images: [japanOne, japanTwo, japanThree, japanFour, japanFive],
          },
          {
            name: "Biệt thự",
            images: [
              mansionOne,
              mansionTwo,
              mansionThree,
              mansionFour,
              mansionFive,
            ],
          },
        ]}
      />

      <ExploreCategory
        title="Căn hộ cao cấp"
        collections={[
          {
            name: "Labonita",
            images: [
              apartmentOne,
              apartmentTwo,
              apartmentThree,
              apartmentFour,
              apartmentFive,
              apartmentSix,
              apartmentSeven,
              apartmentEight,
              apartmentNine,
              apartmentTen,
            ],
          },
          {
            name: "Delasol quận 4",
            images: [
              delasolOne,
              delasolTwo,
              delasolThree,
              delasolFour,
              delasolFive,
              delasolSix,
              delasolSeven,
            ],
          },
          {
            name: "Thái Bình Dương quận 2",
            images: [tbdOne, tbdTwo, tbdThree, tbdFour, tbdFive],
          },
        ]}
      />

      <ExploreCategory
        title="Không gian mở"
        collections={[
          {
            name: "Hung Thinh Land",
            images: [
              spaceOne,
              spaceTwo,
              spaceThree,
              spaceFour,
              spaceFive,
              spaceSix,
              spaceSeven,
              spaceEight,
              spaceNine,
              spaceTen,
            ],
          },
          {
            name: "Phòng xông hơi VSIP",
            images: [vsipOne, vsipTwo, vsipThree],
          },
        ]}
      />
    </div>
  );
};

export default Explore;
