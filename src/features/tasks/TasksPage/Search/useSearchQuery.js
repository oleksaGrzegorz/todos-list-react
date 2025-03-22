import { useLocation, useNavigate } from "react-router-dom";

const useSearchQuery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("szukaj");

  const setQuery = (value) => {
    const searchParams = new URLSearchParams(location.search);

    if (value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", value);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return { query, setQuery };
};

export default useSearchQuery;
