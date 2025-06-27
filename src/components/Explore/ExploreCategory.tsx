import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from "react-icons/io";
import classNames from "classnames";

const ExploreCategory = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Close modal on backdrop click (but ignore if clicking on image box)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-backdrop") {
      closeModal();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section className="w-full mb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h3 className="text-[#425e85] text-sm font-medium uppercase tracking-wider mb-1">
            Bộ Sưu Tập
          </h3>
          <h2 className="text-[26px] font-semibold text-[#222]">{title}</h2>
        </div>
      </div>

      {/* Responsive Grid or Horizontal Slider */}
      <div
        className={classNames("gap-4", {
          "grid grid-cols-2 md:grid-cols-4": images.length <= 4,
          "flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory whitespace-nowrap items-stretch":
            images.length > 4,
        })}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} ${idx + 1}`}
            onClick={() => openModal(idx)}
            className={classNames(
              "object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer",
              {
                "w-full h-[230px] md:h-[260px]": images.length <= 4,
                "h-[230px] min-w-[200px] md:min-w-[250px] snap-center":
                  images.length > 4,
              }
            )}
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          id="modal-backdrop"
          className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <img
              src={images[currentIndex]}
              alt="Preview"
              className="rounded-xl max-h-[80vh] object-contain"
            />

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <IoIosArrowBack />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <IoIosArrowForward />
            </button>

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300 transition"
              aria-label="Close Modal"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreCategory;
