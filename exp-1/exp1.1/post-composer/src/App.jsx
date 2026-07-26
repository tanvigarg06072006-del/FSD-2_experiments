import { useState } from "react";

function App() {
  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limits = {
    Twitter: 280,
    Facebook: 63206,
    LinkedIn: 3000,
  };

  const count = post.length;
  const maxLimit = limits[platform];
  const isValid = count <= maxLimit;

  function handlePost()          {
    console.log("fghfgfgf")
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "left" }}>Dynamic Post Composer</h1>

      <label>
        <b>Select Platform:</b>
      </label>

      <br />
      <br />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      >
        <option value="Twitter">Twitter</option>
        <option value="Facebook">Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <br />
      <br />

      <label>
        <b>Write Your Post:</b>
      </label>

      <br />
      <br />

      <textarea
        rows="8"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Write your post here..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <br />
      <br />

      <h3>
        Characters: {count} / {maxLimit}
      </h3>

      {isValid ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✔ Your post is valid for {platform}.
        </p>
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ❌ Character limit exceeded for {platform}!
        </p>
      )}

      <button
        disabled={!isValid}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isValid ? "#007bff" : "#999",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: isValid ? "pointer" : "not-allowed",
        }}
        onClick={handlePost}
      >
        Publish Post
      </button>
    </div>
  );
}

export default App;