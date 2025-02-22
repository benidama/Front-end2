const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <h4>{post.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {post.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {post.reps}
      </p>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default PostDetails;
