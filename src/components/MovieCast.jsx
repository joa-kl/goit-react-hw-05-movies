// import { SearchMovie } from './Api';
// import { useEffect, useState } from 'react';

// import Image from './Image/Image.jpg';


import { useParams } from 'react-router-dom';
import { useMovieCredits } from '../utils/useMovieCredits';
import styles from './MovieCast.module.css';

export const MovieCast = () => {
  const { movieID } = useParams();
  const { movieCredits } = useMovieCredits(movieID);
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <ul className={styles.list}>
        {movieCredits.map(hero => (
          <li className={styles.item} key={hero.id} >
            <img className={styles.image}
              src={`${baseImgUrl}${hero.profile_path}`}
              // src={`https://image.tmdb.org/t/p/w500/${hero.profile_path}`}
              alt={hero.original_name}
            />
            <p>{hero.original_name}</p>
            <p>Character: {hero.character}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

//   const params = useParams();
//   const paramsId = Number(params.movieId);
//   const [movieCastDetails, setMovieCastDetails] = useState();
//   const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

//   useEffect(() => {
//     SearchMovie('credits', paramsId, setMovieCastDetails);
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//       <section>
//       {movieCastDetails &&
//         <ul className={styles.list}>
//         {movieCastDetails.cast.map(hero => (
//           <li className={styles.item} key={hero.id} >
//             {hero.profile_path ? <img className={styles.image}
//               src={`${baseImgUrl}${hero.profile_path}`}
//               // src={`https://image.tmdb.org/t/p/w500/${hero.profile_path}`}
//               alt={hero.original_name}
//             /> : <img className={styles.image} src={Image} alt="No foto" />}
//             {/* {hero.profile_path ? `https://image.tmdb.org/t/p/w500/${hero.profile_path}`: <img src={Image} alt="No foto" />} */}
//             <p>{hero.original_name}</p>
//             <p>Character: {hero.character}</p>
//           </li>
//         ))}
//       </ul>
//        }
//     </section>

//   );
// };

export default MovieCast;