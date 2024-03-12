import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
  const {title,cover,reading_time,posted_date,author,author_img,hashtags} = blog;
  return (
    <div className="mb-10">
      <img
        className="shadow-lg rounded-lg"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex  items-center ">
            <img className="w-14 my-5 rounded-lg" src={author_img} alt="" />
            <div className="ml-4">
                <h3 className="text-lg font-bold">{author}</h3>
                <p>{posted_date}</p>

            </div>
        </div>
        <div>
            <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-2xl max-w-xl font-bold">{title}</h2>
      <p className="my-3">
        {
            hashtags.map((hash,idx) => 
            <span key={idx} className="mr-3 "><a href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
