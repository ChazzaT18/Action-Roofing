import { useEffect } from "react";

const AboutUsPage = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    setCurrentPage("about");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);
  return <h1 className="text-3xl">About Us</h1>;
};

export default AboutUsPage;
