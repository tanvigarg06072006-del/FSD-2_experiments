import { useSelector, useDispatch } from "react-redux";
import { deletePost, setEditingPost } from "../features/postsSlice";

function PostList() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      <h2>Post List</h2>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div className="post-card" key={post.id}>
            <p>
              <strong>Post:</strong> {post.text}
            </p>

            <p>
              <strong>Platform:</strong> {post.platform}
            </p>

            <button
className="edit-btn"
onClick={()=>dispatch(setEditingPost(post))}
>
              Edit
            </button>

            <button
className="delete-btn"
onClick={()=>dispatch(deletePost(post.id))}
>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;