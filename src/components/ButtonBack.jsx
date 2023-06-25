import { Link, useLocation } from "react-router-dom";
// import styles from "./BackBtn.module.css";

export const ButtonBack = () => {
  const location = useLocation();

  return (
   <Link  to={location.state.from}>&#10229; Go back</Link>
  );
};

export default ButtonBack;