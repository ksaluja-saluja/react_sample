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
  padding: 10px 10px 10px 10px;
`;

export const InlineContainer = styled.div`
  display: inline-block;
  align-items: left;
  background-color: yellow;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;

  .child {
    flex: 1;
    /* border: 2px solid blueviolet; */
    margin: 10px;
  }
  .child:first-child {
    margin-right: 20px;
  }
`;

export const BlockContainer = styled.div`
  display: block;
  background-color: lightgray;
`;

export const ErrorContainer = styled.div`
  color: red;
`;
