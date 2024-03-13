import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="lg:w-1/3 ">
      <div className="bg-gray-200 px-4 py-5 rounded-2xl">
        <h1 className="font-bold text-lg ">
          Bookmarked Blogs:{bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
