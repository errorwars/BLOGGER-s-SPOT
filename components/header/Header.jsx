import "./header.css"
import img2 from "./pexels-lil-artsy-3278767.jpg"
export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            
            <span className='headerTitleLarge'>Blogger's Spot</span>
        </div>
        <img className="headerImg" src={img2} alt="" />
    </div>
  )
}
