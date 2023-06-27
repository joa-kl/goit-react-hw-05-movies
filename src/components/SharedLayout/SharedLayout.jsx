
import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css"
import styled from "styled-components";
import { Suspense } from "react";
// import SearchForm from "components/SearchForm/SearchForm";

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

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

    </div>
  );
};

export default SharedLayout;
