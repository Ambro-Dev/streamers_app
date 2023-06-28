import Footer from "../Footer";
import Navbar from "../Navbar";
import "./page-layout.css";
import PropTypes from "prop-types";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
