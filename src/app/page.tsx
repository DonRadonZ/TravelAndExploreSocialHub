import Post from "./post/page";
import Chat from "./chat/page";
import Profile from "./[username]/page";
import NewPost from "./_components/NewPost";
import PostCard from "./_components/PostCard";



export default function App() {
  return (
    <div className="mt-12">
      <NewPost/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
      
  )
}
