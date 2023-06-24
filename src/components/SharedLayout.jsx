// src/components/SharedLayout.jsx
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";

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
      <Outlet />
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
