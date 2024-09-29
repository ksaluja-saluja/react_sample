import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { RootState } from "../../state/store";

const Admin = () => {
  const totalQueries = useSelector((state: RootState) => {
    return state.contactUs.queries.length;
  });
  return (
    <>
      <div>
        <Navbar></Navbar>
        <h3>Contact US Queries</h3>
      </div>
      <div>
        <h4>Total Enquries: {totalQueries}</h4>
      </div>
    </>
  );
};

export default Admin;
