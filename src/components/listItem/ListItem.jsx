import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from "react";

const Listitem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    return (
    <div 
    className="listItem" 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}
    >
        
        <img 
            src="https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_WW1_Epic_-_Hollywood_War_Film_Classic_English_Movie_Poster_94e5102a-f2f9-432f-9dfe-a108ff4b9f53.jpg?v=1582781208" 
            alt="" 
        />
        {isHovered && (
            <>
        
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
        <div className="icons">
            <PlayArrowIcon className="icon"/>
            <AddIcon className="icon"/>
            <ThumbUpOutlinedIcon className="icon"/>
            <ThumbDownOffAltOutlinedIcon className="icon"/>
        </div>
        <div className="itemInfoTop">
            <span> 1 hour 15 mins</span>
            <span className="limit"> +16 </span>
            <span> 2021 </span>
        </div>
        <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit, 
            blanditiis dolore maiores quod neque dolorum.
        </div>
        <div className="genre">Action</div>
        </div>
        </>
        )}
    </div> 
    );
}

export default Listitem