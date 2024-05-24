import Post from "./post/page";
import Chat from "./chat/page";
import Profile from "./[username]/page";
import NewPost from "./_components/NewPost";
import PostCard from "./_components/PostCard";



export default function App() {
  return (
    <div className="">
      <div>
        <NewPost/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
    </div>
  )
}
