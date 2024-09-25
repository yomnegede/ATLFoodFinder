import React from 'react';
import './SavedSpots.css'; 
import nandoImage from './nandos.jpg';
import realTacosImage from './rreal_tacos.jpg'; 

function SavedSpots() {
  return (
    <div className="saved-spots-container">
      <header className="saved-spots-header">
        <h1>Saved Spots <span className="saved-items-count">2 items</span></h1>
        <div className="filter-bar">
          <span>Filter by:</span>
          <button className="filter-btn active">Default (Distance)</button>
          <button className="filter-btn">Cuisine Type</button>
          <button className="filter-btn">Price ($ - $$$)</button>
          <button className="filter-btn">Rating (⭐)</button>
        </div>
      </header>

      <div className="spots-list">
        <div className="spot-item">
          <h2>Nando's Peri Peri Chicken</h2>
          <div className="spot-details">
            <img src={nandoImage} alt="Nando's Peri Peri Chicken" className="spot-image" />
            <div className="spot-info">
              <p>Dunwoody, GA (5.4 Miles From You)</p>
              <p>Cuisine: Afro-Portuguese</p>
            </div>
            <button className="details-btn">Continue to more details →</button>
          </div>
        </div>

        <div className="spot-item">
          <h2><a href="#RRealTacos">RReal Tacos</a></h2>
          <div className="spot-details">
            <img src={realTacosImage} alt="RReal Tacos" className="spot-image" />
            <div className="spot-info">
              <p>Atlanta, GA (0.7 Miles from you)</p>
              <p>Cuisine: Mexican</p>
            </div>
            <button className="details-btn">Continue to more details →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedSpots;
