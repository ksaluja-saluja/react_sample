import { useEffect, useState } from "react";
import SearchTODOs from "./Search";
import ResultTODOs from "./Result";
import Navbar from "../../components/Navbar";

const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};

const AllTodos = () => {
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!total) {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((data) => {
          delay().then(() => {
            setTotal(data?.length);
            setLoading(false);
          });
        });
    }
  }, [total]);

  return (
    <>
      <Navbar></Navbar>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Total TODOs are {total}</p>
            <div>
              <SearchTODOs></SearchTODOs>
            </div>
            <div>
              <ResultTODOs></ResultTODOs>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllTodos;
