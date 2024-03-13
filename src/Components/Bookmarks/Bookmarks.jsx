import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks ,readingTime}) => {
  return (
    <div className="lg:w-1/3 ">
        <div className=" bg-blue-100 px-4 py-5 rounded-lg mb-4 border-2 border-[#6047EC]">
            <h3 className="font-bold text-lg text-[#6047EC]">Spent time on read : {readingTime} min</h3>
        </div>
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
  readingTime: PropTypes.number.isRequired
};

export default Bookmarks;
