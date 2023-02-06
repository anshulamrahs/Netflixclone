import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./navbar.scss"


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" alt="logo" 
                />
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and popular</span>
                <span>My list</span>
            </div>
            <div className="right">
                <SearchIcon className='icon'/>
                <span>KIDS</span>
                <NotificationsIcon className='icon'/>
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200" alt='' />
                <div className="profile">
                <ArrowDropDownIcon className='icon'/>
                <div className="options">
                    <span>settings</span>
                    <span>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar