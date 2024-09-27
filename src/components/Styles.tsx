import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  padding-right: 10px;
  color: white;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-flow: row wrap;
  background-color: gray;
`;

export const ChildContainer = styled.div`
  color: green;
  padding: 10px 10px 10px 10px;
`;
