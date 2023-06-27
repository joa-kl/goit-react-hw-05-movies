import { Link, useLocation } from "react-router-dom";
import styles from "./ButtonBack.module.css";

export const ButtonBack = () => {
  const location = useLocation();

  return (
   <Link className={styles.button} to={location.state.from}>&#10229; Go back</Link>
  );
};

export default ButtonBack;