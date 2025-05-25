import { useEffect, useState } from "react";

// components
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
