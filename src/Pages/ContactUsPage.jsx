import { useEffect } from "react";

const ContactUsPage = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    setCurrentPage("contact");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);
  return <h1 className="text-3xl">Contact Us</h1>;
};

export default ContactUsPage;
