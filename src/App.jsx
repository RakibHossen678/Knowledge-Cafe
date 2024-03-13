import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = blog => {
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)
  };
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto my-7">
      <Header></Header>
      <div className="lg:flex mt-7 gap-12">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
