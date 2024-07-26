import Button from './Button';
import'./Navbar.css'
import logo from './assets/leo_visions-1OaxAY2TlYo-unsplash.jpg';


function Navbar(){

    return(
        <>
    <div className="nav">
    <div className="left"></div>
    <img src={logo} alt="logo" className="logo"></img>
    <div className="right">
   
        </div>
        </div>
        </>
    );
}

export default Navbar;