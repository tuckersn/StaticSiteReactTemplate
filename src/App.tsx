import React from 'react';
import logo from './logo.svg';
import { createBrowserRouter, Link, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import styled from 'styled-components';



// Example of using a static variable in a styled component
const BORDER_COLOR = "#7e7e7e";

const ContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #121318;
`;


const ContentDiv = styled.div`
  width: 1000px;
  height: 90%;

  border: 4px solid ${BORDER_COLOR};
  background-color: #232429;

  @media screen and (max-width: 1000px) {
    width: 100%;
    border-left: 0;
    border-right: 0;
  }

  @media screen and (max-height: 1000px) {
    height: calc(100% - 32px);
  }
`;



const NavBarDiv = styled.div`
  background-color: #292938;
  border-bottom: 4px solid ${BORDER_COLOR};

  width: 100%;

  display: flex;
`;

const NavBarButton = styled.div`
  flex: 1;
  padding: 6px;
  padding-left: 8px;
  padding-right: 8px;

  border-left: 4px solid ${BORDER_COLOR};

  text-align: center;

  :first-of-type {
    border-left: 0;
  }
`;


function App() {


  return (
    <ContainerDiv>
      <ContentDiv>
        <NavBarDiv>
          <NavBarButton>
            <Link to="/">Home</Link>
          </NavBarButton>
          <NavBarButton>
            <Link to="/about">About</Link>
          </NavBarButton>
          <NavBarButton>
            <Link to="/interactive-demo">Interactive Demo</Link>
          </NavBarButton>
        </NavBarDiv>
        <Outlet/>
      </ContentDiv>
    </ContainerDiv>
  );
}

export default App;
