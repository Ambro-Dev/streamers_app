import PageLayout from "../../components/PageLayout";
import PropTypes from "prop-types";

const StreamerPage = ({ children }) => {
  return (
    <div className="streamer-page">
      <PageLayout>{children}</PageLayout>
    </div>
  );
};

StreamerPage.propTypes = {
  children: PropTypes.node,
};

export default StreamerPage;
