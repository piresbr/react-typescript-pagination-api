import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "query-string";

export default function usePagination() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(getCurrentPage() || 1);

  function getCurrentPage() {
    const queryParams = qs.parse(location.search);
    const page = queryParams.page;

    return page ? Number(page) : undefined;
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search);

    navigate({
      search: qs.stringify({
        ...queryParams,
        page: currentPage,
      }),
    });
  }, [currentPage]);

  return {
    setCurrentPage,
    currentPage,
  };
}
