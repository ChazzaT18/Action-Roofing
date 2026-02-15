import { useEffect } from "react";

const GalleryPage = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    setCurrentPage("gallery");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);
  return <h1 className="text-3xl">Gallery</h1>;
};

export default GalleryPage;
