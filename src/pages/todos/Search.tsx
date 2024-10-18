const SearchTODOs = () => {
  const search = () => {
    console.log("Searching");
  };
  return (
    <>
      <p>Search TODOs</p>
      <button onClick={search}>Click here to search</button>
    </>
  );
};

export default SearchTODOs;
