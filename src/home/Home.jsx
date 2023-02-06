import "./home.scss";
import Navbar from "../components/navbar/Navbar";

const Hello = () => {
  return (
    <div className='home'>
        <Navbar/>
        <img width= "100%" src="https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
    </div>
  )
}

export default Hello