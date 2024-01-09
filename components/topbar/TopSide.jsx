import "./topside.css"
import img1 from './images/image1.jpg'
import img from './images/Screenshot (4).png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function TopSide() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft" >
          <img 
          className="topLeftImg"
          src={img}
          alt="" />
          
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        
        <div className="topRight"  >
          {
            user ? (<img 
              className="topImg"
              src={img1}
              alt="" />) :(
                <ul className="topList">
                  <li className="topListItem">
                    <Link className="link" to="/login">
                      LOGIN 
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/register">
                      REGISTER
                    </Link>
                  </li>
                </ul>
              )
          }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          
           
        </div>
    </div>
  )
}
