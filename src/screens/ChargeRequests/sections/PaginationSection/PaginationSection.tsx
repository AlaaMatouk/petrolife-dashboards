import React, { useState } from "react";
import { Pagination } from "../../../../components/shared/Pagination/Pagination";

export const PaginationSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 20;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      className="w-full justify-center"
    />
  );
};
