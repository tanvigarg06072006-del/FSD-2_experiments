import PostForm from "./components/PostForm";
import PlatformList from "./components/PlatformList";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Redux Toolkit - Post Manager</h1>

      <PostForm />

      <PlatformList />

      <PostList />
    </div>
  );
}

export default App;
