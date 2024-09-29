import { NavLink, MainContainer, ChildContainer } from "./Styles";

const Navbar = () => {
  return (
    <>
      <MainContainer>
        <nav>
          <ul>
            <ChildContainer>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/admin">Admin</NavLink>
            </ChildContainer>
          </ul>
        </nav>
      </MainContainer>
    </>
  );
};

export default Navbar;
