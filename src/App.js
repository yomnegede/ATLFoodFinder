import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import SignUp from './SignUp';
import SavedSpots from './SavedSpots';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="profile-links">
            <Link className="link" to="/sign-up">Sign up</Link>
            <Link className="link" to="/profile">My profile</Link>
            <Link className="saved-spots-btn" to="/saved-spots">Saved Spots(2)</Link>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Atlanta Food Finder</h1>
                <h2>Find your new favorite spot in the A!</h2>
                <button className="browse-map-btn">Browse Map</button>
                <div className="image-section">
                  <img src={logo} alt="Atlanta Food Finder Logo" />
                </div>

                <section className="beliefs-section centered">
                  <h3>What We Believe</h3>
                  <p>
                    At Atlanta Food Finder, we believe that food is more than just sustenance – it’s a way to connect with the community, experience different cultures, and share memorable moments with friends and family. Our mission is to help the people of Atlanta discover the diverse culinary landscape of our city, from hidden gems in local neighborhoods to renowned dining spots.
                  </p>
                  <ul>
                    <li><strong>Diversity:</strong> Atlanta is home to a rich tapestry of cuisines, and we are committed to showcasing restaurants that reflect the city's multicultural heritage.</li>
                    <li><strong>Community:</strong> We believe in fostering a stronger, more connected community by supporting local restaurants and encouraging people to explore different areas of Atlanta.</li>
                    <li><strong>Accessibility:</strong> Finding the perfect place to eat should be easy and enjoyable for everyone. Our app is designed to make restaurant discovery seamless, informative, and fun.</li>
                    <li><strong>Quality:</strong> From user reviews to accurate location services, we strive to provide reliable, high-quality information that helps our users make informed decisions about where to eat.</li>
                  </ul>
                  <p>
                    Join us in celebrating the vibrant food culture of Atlanta, and let’s explore the city’s best dining experiences together!
                  </p>
                </section>
              </>
            } />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/saved-spots" element={<SavedSpots />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;