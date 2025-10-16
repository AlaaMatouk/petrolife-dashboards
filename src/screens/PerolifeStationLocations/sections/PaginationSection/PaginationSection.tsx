import React from "react";
import { Pagination } from "../../../../components/shared/Pagination/Pagination";

interface PaginationSectionProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationSection = ({ currentPage, totalPages, onPageChange }: PaginationSectionProps): JSX.Element => {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
    />
  );
};
