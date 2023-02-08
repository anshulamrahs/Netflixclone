import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Hello = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Hello