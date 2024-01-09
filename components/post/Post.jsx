import './post.css'
import img4 from "./pexels-karolina-grabowska-4491492.jpg"
export default function Post() {
  return (
    <div className='post'>
        <img className='postImg'
        src={img4} 
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCate">Life</span>
                <span className="postCate">Music</span>
            </div>
            <span className='postTitle'>
                Lorem ipsum dolor sit amet.
            </span>
            <hr/>
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia minima sint expedita dolorum id dicta quae repellendus, nisi cum aspernatur officiis ullam amet accusamus enim ducimus necessitatibus ab soluta non!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, id porro illo repellat eum sint dolorem ab blanditiis assumenda asperiores dolor, quasi magni! Nesciunt deleniti modi vitae quaerat aspernatur quibusdam!console Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos rerum modi tempore facilis, vel ipsum quo aspernatur quae tenetur repellendus, rem nesciunt officia quam recusandae, nihil iure illo laudantium!; ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  )
}
