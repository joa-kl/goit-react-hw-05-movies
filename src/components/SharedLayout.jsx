// src/components/SharedLayout.jsx
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledLink = styled(NavLink)`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: purple;
  }
  `

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </div>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
      </header>
      {/* <Outlet /> */}
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
