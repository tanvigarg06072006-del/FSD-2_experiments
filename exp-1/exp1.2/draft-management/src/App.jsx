import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [drafts, setDrafts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load drafts from localStorage
  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
    setDrafts(savedDrafts);
  }, []);

  // Save drafts to localStorage
  useEffect(() => {
    localStorage.setItem("drafts", JSON.stringify(drafts));
  }, [drafts]);

  // Save or Update Draft
  const saveDraft = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    if (editingId !== null) {
      const updatedDrafts = drafts.map((draft) =>
        draft.id === editingId
          ? { ...draft, title, content }
          : draft
      );

      setDrafts(updatedDrafts);
      setEditingId(null);
      alert("Draft Updated!");
    } else {
      const newDraft = {
        id: Date.now(),
        title,
        content,
      };

      setDrafts([...drafts, newDraft]);
      alert("Draft Saved!");
    }

    setTitle("");
    setContent("");
  };

  // Delete Draft
  const deleteDraft = (id) => {
    const updatedDrafts = drafts.filter((draft) => draft.id !== id);
    setDrafts(updatedDrafts);
  };

  // Edit Draft
  const editDraft = (draft) => {
    setTitle(draft.title);
    setContent(draft.content);
    setEditingId(draft.id);
  };

  return (
    <div className="container">
      <h1>Draft Management System</h1>

      <input
        type="text"
        placeholder="Enter Draft Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        rows="6"
        placeholder="Write your draft..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <br />
      <br />

      <button onClick={saveDraft}>
        {editingId !== null ? "Update Draft" : "Save Draft"}
      </button>

      <hr />

      <h2>Saved Drafts</h2>

      {drafts.length === 0 ? (
        <p>No Drafts Available</p>
      ) : (
        drafts.map((draft) => (
          <div className="draft-card" key={draft.id}>
            <h3>{draft.title}</h3>

            <p>{draft.content}</p>

            <button onClick={() => editDraft(draft)}>Edit</button>

            <button
              onClick={() => deleteDraft(draft.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;