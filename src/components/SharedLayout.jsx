// src/components/SharedLayout.jsx
// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./SharedLayout.module.css"

import styled from "styled-components";

const StyledLink = styled(NavLink)`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  

  &.active {
    color: crimson;
  }
  `

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={styles.header}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
      {/* </Suspense> */}
    </div>
    // <Container>
    //   <AppBar>
    //     <Navigation />
    //     <UserMenu />
    //   </AppBar>

    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Outlet />
    //   </Suspense>
    // </Container>
  );
};
