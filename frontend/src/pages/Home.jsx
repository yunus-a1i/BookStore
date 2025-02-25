import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Spinners from "../components/Spinners";
import api from "../utils/axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    api
    .get(`/books`)
      .then((res) => {
        setBooks(res.data.data);
        // console.log(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-blue-300 hover:bg-blue-500 hover:text-white px-4 py-1 rounded-lg drop-shadow-lg transition duration-200"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-blue-300 hover:bg-blue-500 hover:text-white px-4 py-1 rounded-lg drop-shadow-lg transition duration-200"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-blue-400 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinners />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
