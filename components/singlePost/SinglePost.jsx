import "./singlePost.css"
import img from './cool.jpg'
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className="singlePostImg"
            src={img} 
            alt="" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Nishkarsh Singh</b></span>
                <span className="singlePostDate">half an hour ago</span>
           </div>
           <p className="singlePostDisc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maxime laboriosam quaerat, in fuga illum quidem perspiciatis repudiandae aliquid explicabo architecto accusamus iusto? Natus nobis, similique harum voluptatibus dolorem ipsam?
           Laboriosam ullam recusandae temporibus libero commodi deleniti delectus. Ab velit doloremque quo sunt corporis cum, consequatur fuga quis delectus excepturi maxime, nobis magni omnis inventore sint eaque laudantium, beatae at.
           Similique molestias amet dicta aliquam rerum ab molestiae in officiis optio. Autem esse exercitationem soluta obcaecati itaque voluptates, assumenda porro aliquam nam doloribus numquam, reiciendis eum quaerat perferendis libero accusamus.
           Doloribus, ipsam porro? Quam delectus laborum tempore, dolores libero, eos ea necessitatibus porro dolore atque, fugiat repudiandae. Rerum veniam pariatur assumenda, officiis porro totam voluptatibus sapiente? Optio quod eos quos!
           Ipsum aut eos voluptates sint sequi eius consequatur eum, fugiat sit facere, perferendis modi possimus praesentium quis blanditiis. Ab velit temporibus quos quae aliquid at corporis tempore consequuntur placeat itaque.
           Voluptatem deleniti nobis laudantium. Tempore dolorem cumque iure iusto? Odio odit in voluptatibus quia suscipit accusamus vitae modi a voluptas animi, dolore, quibusdam ad, deleniti porro fugiat nulla aperiam tempora.
           Cumque fugiat sint illum sit autem beatae, nam cupiditate culpa voluptates totam ducimus sed magnam iste error magni labore inventore. Tempora facilis possimus, dolorum amet voluptatum modi quaerat impedit veniam.
           Quibusdam nam pariatur amet adipisci consectetur tenetur mollitia, necessitatibus nesciunt accusantium delectus magni dolore illo maiores quos similique ducimus obcaecati? In aut omnis totam numquam facilis consequatur cumque iusto eaque?
           Excepturi consectetur, vero sunt soluta expedita maxime, perspiciatis voluptatibus laborum ipsum reiciendis commodi reprehenderit vitae atque corrupti, eum aperiam alias doloremque est numquam tempora? Quaerat ullam explicabo suscipit quod labore!
           Facilis ipsam aut accusantium error corrupti placeat dolorum voluptatibus repudiandae dolor reiciendis esse dicta, repellat eligendi consectetur tenetur illum deserunt debitis quaerat recusandae ullam earum! Nostrum temporibus commodi quo quam?Est harum exercitationem velit vero, ea quia, temporibus repellendus cumque aliquid aliquam sapiente error adipisci unde atque culpa ex nesciunt a distinctio!</p>
        </div>
    </div>
  )
}
