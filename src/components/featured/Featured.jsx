import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>

        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="Romance">Romance</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                </select>
            </div>
        )}
        <img src="https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Spartacus_movie_logo.png/640px-Spartacus_movie_logo.png" alt="" />
            <span className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Quis dolorum omnis nesciunt quos sunt atque reiciendis distinctio.
                Temporibus quae consequuntur sunt itaque maiores ipsa tenetur, 
                nostrum quidem sint molestias enim.
            </span>
            <div className="buttons">
                <button className="play">
                <PlayArrowIcon/>
                <span>play</span>
                </button>
                <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Featured