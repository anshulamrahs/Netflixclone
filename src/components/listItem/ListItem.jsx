import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
const Listitem = () => {
  return (
    <div className="listItem">
     <img src="https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_WW1_Epic_-_Hollywood_War_Film_Classic_English_Movie_Poster_94e5102a-f2f9-432f-9dfe-a108ff4b9f53.jpg?v=1582781208" alt="" />
     <div className="itemInfo">
        <div className="icons">
            <PlayArrowIcon/>
            <AddIcon/>
            <ThumbUpOutlinedIcon/>
            <ThumbDownOffAltOutlinedIcon/>

        </div>
     </div>
    </div>
  )
}

export default Listitem