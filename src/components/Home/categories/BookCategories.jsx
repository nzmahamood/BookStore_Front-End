import React, { useEffect, useState } from "react";
import SearchHeader from "../../Search/SearchHeader";
import SearchBooksContainer from "../../Search/SearchBooksContainer";
import { BASE_URL_NET } from "../../../utils/domains";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const BookCategories = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(16);

  // const [booksData, setBooksData] = useState([]);
  const location = useLocation();
  // console.log(location, " useLocation Hook");

  // Fetching search results using Axios
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       `${BASE_URL_NET}/books/api/books/search/?q=${category}`
  //     );
  //     setBooksData(result.data);
  //   };
  //   fetchData();
  // }, [category]);

  // console.log("search", category);

  // Logic for displaying current books
  // const indexOfLastBook = currentPage * booksPerPage;
  // const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = location?.state?.books;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <main className="flex justify-center min-h-[62vh] w-full mb-11">
      <div className="relative top-3 flex p-3 flex-col w-full md:w-[75%]  min-h-[75vh]">
        <SearchHeader
          search={category}
          pagination={paginate}
          currentPage={currentPage}
          isHeadingOnly={true}
        />
        <SearchBooksContainer data={currentBooks} />
      </div>
    </main>
  );
};

export default BookCategories;
