import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button>Search</button>
    </div>
  );
}

export default App;
