import { useEffect } from "react";

const ServicesPage = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return <h1 className="text-3xl">Services</h1>;
};

export default ServicesPage;
