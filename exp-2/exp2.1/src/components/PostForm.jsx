import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  updatePost,
} from "../features/postsSlice";

function PostForm() {
  const dispatch = useDispatch();

  const platforms = useSelector((state) => state.platforms.platforms);

  const editingPost = useSelector(
    (state) => state.posts.editingPost
  );

  const [text, setText] = useState("");
  const [platform, setPlatform] = useState(platforms[0]);

  useEffect(() => {
    if (editingPost) {
      setText(editingPost.text);
      setPlatform(editingPost.platform);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    if (editingPost) {
      dispatch(
        updatePost({
          id: editingPost.id,
          text,
          platform,
        })
      );
    } else {
      dispatch(
        addPost({
          id: Date.now(),
          text,
          platform,
        })
      );
    }

    setText("");
    setPlatform(platforms[0]);
  };

  return (
    <div>
      <h2>Post Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Post"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br />
        <br />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          {platforms.map((p, index) => (
            <option key={index} value={p}>
              {p}
            </option>
          ))}
        </select>

        <br />
        <br />

        <button type="submit">
          {editingPost ? "Update Post" : "Add Post"}
        </button>
      </form>
    </div>
  );
}

export default PostForm;