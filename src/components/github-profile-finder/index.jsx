import { useDebugValue, useEffect, useState } from "react";
import "./styles.css";
import User from "./user";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("miladmo68");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }

    // console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <h2>Loading data! Please wait</h2>;

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
