
import styles from "./Home.module.css";
import { useTrendingList } from '../../utils/useTrendingList';
import { TrendingList } from "../../components/TrendingList/TrendingList";

export const Home = () => {
  const { trendingMovies } = useTrendingList();
  return (
    <div className={styles.container}>
      <TrendingList movies={trendingMovies} />
    </div>
  );
};
export default Home;

