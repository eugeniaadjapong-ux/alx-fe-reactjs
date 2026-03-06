import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await searchUsers(username, location, repos);
      setUsers(data.items);
    } catch (err) {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          className="w-full border p-2 rounded"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>

      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="mt-6">
        {users.map((user) => (
          <div key={user.id} className="border p-4 mb-2 rounded">
            <img src={user.avatar_url} width="50" />
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;