import vector from '../../assets/images/Vector.png'
import PropTypes from "prop-types";
const Blog = ({ blog ,handleAddToBookmarks,handleMarkAsRead }) => {
  // console.log(blog);
  const {title,cover,reading_time,posted_date,author,author_img,hashtags} = blog;
  return (
    <div className="mb-14 border-b-2 pb-6">
      <img
        className="shadow-lg rounded-lg w-full object-cover"
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
            <span className='flex items-center '>{reading_time} min read 
            <button onClick={()=>handleAddToBookmarks(blog)}><img className='ml-2' src={vector} alt="" /></button>
            </span>
        </div>
      </div>
      <h2 className="text-3xl tracking-wider leading-normal max-w-3xl font-bold">{title}</h2>
      <p className="my-3">
        {
            hashtags.map((hash,idx) => 
            <span key={idx} className="mr-3 "><a href="">#{hash}</a></span>)
        }
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)} className='font-bold text-[#6047EC] underline leading-normal'>
        <span >Mark as read</span>
      </button>
      
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks:PropTypes.func.isRequired,
  handleMarkAsRead:PropTypes.func.isRequired
};
