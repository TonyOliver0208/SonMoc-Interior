import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from "react-icons/io";

const ExploreCategory = ({
  title,
  collections,
}: {
  title: string;
  collections: {
    name: string;
    images: string[];
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCollectionIndex, setCurrentCollectionIndex] = useState<
    number | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (collectionIndex: number, imageIndex: number) => {
    setCurrentCollectionIndex(collectionIndex);
    setCurrentImageIndex(imageIndex);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentCollectionIndex(null);
    setCurrentImageIndex(0);
  };

  const prevImage = () => {
    if (currentCollectionIndex === null) return;
    const images = collections[currentCollectionIndex].images;
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (currentCollectionIndex === null) return;
    const images = collections[currentCollectionIndex].images;
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentCollectionIndex]);

  return (
    <section className="w-full mb-20">
      <div className="mb-6">
        <h3 className="text-[#425e85] text-sm font-medium uppercase tracking-wider mb-1">
          Bộ Sưu Tập
        </h3>
        <h2 className="text-[26px] font-semibold text-[#222]">{title}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((collection, collectionIdx) => (
          <div
            key={collection.name}
            className="cursor-pointer"
            onClick={() => openModal(collectionIdx, 0)}
          >
            <img
              src={collection.images[0]}
              alt={collection.name}
              className="w-full h-[230px] object-cover rounded-xl shadow-md hover:scale-105 transition"
            />
            <p className="text-center mt-2 font-medium">{collection.name}</p>
            <p className="text-center text-sm text-gray-500">
              {collection.images.length} hình ảnh
            </p>
          </div>
        ))}
      </div>

      {isOpen && currentCollectionIndex !== null && (
        <div
          id="modal-backdrop"
          className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "modal-backdrop") closeModal();
          }}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 text-sm rounded-md">
              {currentImageIndex + 1} /{" "}
              {collections[currentCollectionIndex].images.length}
            </div>
            <img
              src={
                collections[currentCollectionIndex].images[currentImageIndex]
              }
              alt="Preview"
              className="rounded-xl max-h-[80vh] object-contain"
            />

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <IoIosArrowBack />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black"
            >
              <IoIosArrowForward />
            </button>

            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300 transition"
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
