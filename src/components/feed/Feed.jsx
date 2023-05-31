import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from '../../dummyData'
export default function feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
      <Share/>
      {Posts.map((p)=>(
        <Post post={p} key={p.id}/>
      ))}
      
      
    </div></div>
  )
}
