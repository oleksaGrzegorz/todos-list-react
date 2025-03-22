import Input from "../../Input";
import Wrapper from "./styled";
import useSearchQuery from "./useSearchQuery";

const Search = () => {
  const { query, setQuery } = useSearchQuery();

  return (
    <>
      <Wrapper>
        <Input
          placeholder="Filtruj zadania"
          value={query || ""}
          onChange={({ target }) => setQuery(target.value)}
        />
      </Wrapper>
    </>
  );
};

export default Search;
