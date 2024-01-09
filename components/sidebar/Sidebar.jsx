import "./sidebar.css"
import img3 from "./image3.jpg"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImage" src={img3} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis asperiores illum. Vel voluptatem tenetur minus officiis fuga incidunt reiciendis rem exercitationem nesciunt blanditiis, est sequi ex debitis ab eius.
            Ipsum facere praesentium blanditiis ipsa qui laboriosam voluptate, architecto commodi in, vitae tempora sequi doloremque minima minus quia impedit sed eum corrupti nulla sint. Nemo numquam autem ea labore maxime.
            , ullam at! Vitae fugit facere doloremque illum quasi quis blanditiis illo, ratione officia rem distinctio libero perspiciatis debitis laboriosam ad nulla. Reiciendis laudantium dolores ea libero quibusdam commodi enim.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">SPORTS</li>
                <li className="sidebarListItem">FOOD</li>
                <li className="sidebarListItem">TECH</li>
                <li className="sidebarListItem">STYLE</li>
                <li className="sidebarListItem">MUSIC</li>
                <li className="sidebarListItem">TRAVEL</li>
            </ul>
        </div>
        <div className="sidebarItem">
             <span className="sidebarTitle">FOLLOW US</span>
             <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
        
             </div>

        </div>
    </div>
  )
}
