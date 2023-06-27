
import Image from '../Image/Image.jpg';
import { useParams } from 'react-router-dom';
import { useMovieCredits } from '../../utils/useMovieCredits';
import styles from './MovieCast.module.css';

export const MovieCast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);
  const baseImgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

  return (
    <div >
      <ul className={styles.list}>
        {movieCredits.map(hero => (
          <li className={styles.item} key={hero.id} >
            {hero.profile_path
              ? <img className={styles.image}
                src={`${baseImgUrl}${hero.profile_path}`}
                alt={hero.name} />
              : <img className={styles.image} src={Image} alt="No foto" />}
            <p>{hero.name}</p>
            <p>Character: {hero.character}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default MovieCast;