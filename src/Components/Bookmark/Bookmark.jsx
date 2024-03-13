import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className="mt-4">
            <h3 className="bg-white mb-3 px-4 py-3 rounded-lg">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
  };
  
export default Bookmark;