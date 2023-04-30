import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import FiltersPaginations from "./FiltersPaginations";
import FiltersPaginationsMobile from "./FiltersPaginationsMobile";

const SearchHeader = ({
  search = "",
  data,
  pagination,
  currentPage,
  isHeadingOnly = false,
}) => {
  console.log({isHeadingOnly});
  const [searchParams] = useSearchParams();
  const isSection = searchParams.get("isSection");
  return (
    <section className="w-full h-[164px] md:h-[128px] relative">
      <div className="absolute top-0 w-full h-[62px] md:h-[64px] flex items-center md:border-b border-slate-700">
        {isSection || isHeadingOnly ? (
          <h4 className="font-inter font-semibold text-[22px] md:text-[25px]">
            {search?.toUpperCase()}
          </h4>
        ) : (
          <h4 className="font-inter font-semibold text-[22px] md:text-[25px]">
            Search Results for "{search}"{" "}
          </h4>
        )}
      </div>
      {!isSection && !isHeadingOnly && (
        <>
          <FiltersPaginationsMobile
            data={data}
            paginations={pagination}
            currentPage={currentPage}
          />
          <FiltersPaginations
            data={data}
            paginations={pagination}
            currentPage={currentPage}
          />
        </>
      )}
    </section>
  );
};

export default SearchHeader;
