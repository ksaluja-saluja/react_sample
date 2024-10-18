import SearchTODOs from "./Search";
import ResultTODOs from "./Result";
import Navbar from "../../components/Navbar";
import { useGetTodos } from "../hooks/useGetTodos";

const AllTodos = () => {
  const { total, todos, loading } = useGetTodos({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  return (
    <>
      <Navbar></Navbar>
      <div>
        {loading && <p>Loading details ...</p>}
        {total && todos && (
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
