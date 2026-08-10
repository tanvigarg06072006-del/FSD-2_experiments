import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  editingPost: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },

    setEditingPost: (state, action) => {
      state.editingPost = action.payload;
    },

    updatePost: (state, action) => {
      const { id, text, platform } = action.payload;

      const post = state.posts.find((p) => p.id === id);

      if (post) {
        post.text = text;
        post.platform = platform;
      }

      state.editingPost = null;
    },
  },
});

export const {
  addPost,
  deletePost,
  updatePost,
  setEditingPost,
} = postsSlice.actions;

export default postsSlice.reducer;