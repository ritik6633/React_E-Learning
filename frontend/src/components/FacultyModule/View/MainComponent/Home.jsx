import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ username }) => {
  // Ensure 'username' is correctly extracted if passed as an object
  const user = username && username.username ? username.username : username;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user?username=${user}`
        );
        setUsers(response.data.results);
      } catch (err) {
        setError("Error fetching user details");
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    };

    if (user) {
      fetchUserDetails();
    }
  }, [user]); // Dependency array includes 'user' to re-fetch when it changes

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to the Faculty Information Portal</h1>
        <p>Faculty is the way to achieve success</p>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
         
          {/* <div className="feature-card">
            <h3>
              <Link className="nav-link" to="/facultyindex">
                Home
              </Link>
            </h3>
          </div> */}
          <div className="feature-card">
            <h3>
              <Link className="nav-link" to="/facultyindex/add">
                Add Course
              </Link>
            </h3>
          </div>
          <div className="feature-card">
            <h3>
              {" "}
              <Link className="nav-link" to="/facultyindex/update">
                Update Course
              </Link>
            </h3>
          </div>
          <div className="feature-card">
            <h3>
              {" "}
              <Link className="nav-link" to="/facultyindex/livechannel">
                Add Live Channel Time
              </Link>
            </h3>
          </div>
          <div className="feature-card">
            <h3>
              {" "}
              <Link className="nav-link" to="/facultyindex/addvfstrvideo">
                Add VFSTR Video
              </Link>
            </h3>
          </div>
        </div>
      </section>

      <main className="student-profiles">
        {loading ? (
          <p>Loading user details...</p>
        ) : error ? (
          <p>{error}</p>
        ) : users && users.length > 0 ? (
          users.map((user, index) => (
            <div className="student-card" key={index}>
              <h1>Faculty Profile: {user.username}</h1>
              <h3>{user.name}</h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ))
        ) : (
          <p>No user details available</p>
        )}
      </main>
    </div>
  );
};

export default Home;
