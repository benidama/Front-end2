import { useEffect, useState } from "react";
import PostDetails from "../components/PostDetails";
import PostForm from "../components/PostForm";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [error] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1>All Posts from backend data</h1>
      <p>Lorem is the biggest in the continent especially in the Africa. Hello Joanes my friend</p>
      <div className="posts">
        {posts?.map((post) => (
          <PostDetails post={post} key={post._id} />
        ))}
      </div>
      {error && <div className="error">{error}</div>}
      <h2>Add a new post</h2>
      <PostForm />
    </div>
  );
};

export default Home;
