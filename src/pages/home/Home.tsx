import Navbar from "../../components/Navbar"
import Parent from "../hooks/Parent"

const Home = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <h3>Home</h3>
        <div>
          <Parent />
        </div>
      </div>
    </>
  )
}

export default Home