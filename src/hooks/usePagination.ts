"use client";

import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
  };

  return {
    page,
    limit,
    handleLimitChange,
    handlePageChange,
  };
};
