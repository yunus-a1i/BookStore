import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book, index }) => {
  // console.log(book)
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="bg-gray-100 rounded-lg px-4 py-2 m-2 relative hover:shadow-md"
    >
      <h2 className="absolute top-2 right-2 px-4 py-1 bg-orange-300/80 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{index}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-4xl text-blue-800 hover:text-black cursor-pointer p-2 bg-gray-200 rounded-lg"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-green-300 text-4xl hover:text-black p-2 bg-gray-200 rounded-lg" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-500 text-4xl hover:text-black p-2 bg-gray-200 rounded-lg" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-300 text-4xl hover:text-black p-2 bg-gray-200 rounded-lg" />
        </Link>
      </div>
      {showModal && (
        <BookModal
          book={book}
          index={index}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BookSingleCard;
