import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}
export function Pagination({
  currentPage,
  onPageChange
}: PaginationProps) {
  return <div className="flex items-center justify-start mt-4 border-t border-gray-300 pt-4">
      <button className="bg-teal-700 text-white p-2 rounded-l-md" onClick={() => onPageChange(Math.max(1, currentPage - 1))}>
        <ChevronLeftIcon size={20} />
      </button>
      <div className="border border-gray-300 px-4 py-1 flex items-center">
        <span>Pag. {currentPage}</span>
      </div>
      <button className="bg-teal-700 text-white p-2 rounded-r-md" onClick={() => onPageChange(currentPage + 1)}>
        <ChevronRightIcon size={20} />
      </button>
    </div>;
}