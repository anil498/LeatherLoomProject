import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./Filters.css"; // Import styles for the filter bar
import { FaFilter } from "react-icons/fa";

export default function Filters({className}){
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showSizeOptions, setShowSizeOptions] = useState(false);
  const [genderFilterLabel, setGenderFilterLabel] = useState("Gender  +");
  const [sizeFilterLabel, setSizeFilterLabel] = useState("Size  +");
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false); // For offcanvas toggle
  
  const handleToggleGenderOptions = () => {
    setShowGenderOptions(!showGenderOptions);
    setGenderFilterLabel(showGenderOptions ? "Gender  +" : "Gender  -");
  };

  const handleToggleSizeOptions = () => {
    setShowSizeOptions(!showSizeOptions);
    setSizeFilterLabel(showSizeOptions ? "Size  +" : "Size  -");
  };

  // Function to handle selection
  const handleGenderSelect = (gender) => {
    setSelectedGender(
      (prevSelected) =>
        prevSelected.includes(gender)
          ? prevSelected.filter((item) => item !== gender) // Deselect
          : [...prevSelected, gender] // Select
    );
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(
      (prevSelected) =>
        prevSelected.includes(size)
          ? prevSelected.filter((item) => item !== size) // Deselect
          : [...prevSelected, size] // Select
    );
  };


  // Function to toggle offcanvas filter on mobile
  const handleToggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      {/* Filter Bar */}
      { "filters-sidebar"=== className && ( 
      <div className={`filter-bar ${className}`}>

        <h3 className="filter-title">Filters</h3>

        <div className="filter-group">
          <div className="filter-label" onClick={handleToggleGenderOptions}>
            {genderFilterLabel}
          </div>
          {showGenderOptions && (
            <div className="filter-options">
              {["Male", "Female", "Boy", "Girl"].map((gender) => (
                <div
                  key={gender}
                  className={`filter-option ${
                    selectedGender.includes(gender) ? "selected" : ""
                  }`}
                  onClick={() => handleGenderSelect(gender)}
                >
                  {gender}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="filter-group">
          <div className="filter-label" onClick={handleToggleSizeOptions}>
            {sizeFilterLabel}
          </div>
          {showSizeOptions && (
            <div className="filter-options">
              {["Small", "Medium", "Large", "Extra Large"].map((size) => (
                <div
                  key={size}
                  className={`filter-option ${
                    selectedSize.includes(size) ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      )}

      

      {/* Filter Toggle Button */}

      {"filters-toggle" ===className && 
      ( 


      <div className={`filter-toggle ${className}`} onClick={handleToggleOffcanvas}>
        <div className="filter-icon">
          <FaFilter size={24} />
          <span>Filter</span>
        </div>
      </div>
      )}
      {/* Offcanvas for Mobile View */}
      {isOffcanvasOpen && (
        <div className="offcanvas-filter">          
          <div className="offcanvas-body">
            <Offcanvas show={isOffcanvasOpen} onHide={handleToggleOffcanvas} placement="start"  className="d-lg-none">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filters</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="filter-group">
                  <div
                    className="filter-label"
                    onClick={handleToggleGenderOptions}
                  >
                    {genderFilterLabel}
                  </div>
                  {showGenderOptions && (
                    <div className="filter-options">
                      {["Male", "Female", "Boy", "Girl"].map((gender) => (
                        <div
                          key={gender}
                          className={`filter-option ${
                            selectedGender.includes(gender) ? "selected" : ""
                          }`}
                          onClick={() => handleGenderSelect(gender)}
                        >
                          {gender}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="filter-group">
                  <div
                    className="filter-label"
                    onClick={handleToggleSizeOptions}
                  >
                    {sizeFilterLabel}
                  </div>
                  {showSizeOptions && (
                    <div className="filter-options">
                      {["Small", "Medium", "Large", "Extra Large"].map(
                        (size) => (
                          <div
                            key={size}
                            className={`filter-option ${
                              selectedSize.includes(size) ? "selected" : ""
                            }`}
                            onClick={() => handleSizeSelect(size)}
                          >
                            {size}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
                
                
              {/* Buttons placed at the bottom */}
              <div className="filter-buttons mt-auto d-flex justify-content-between">
                <button className="apply-filters-button" onClick={handleToggleOffcanvas}>
                  Apply Filters
                </button>
                <button className="clear-filters-button" onClick={() => { setSelectedGender([]); setSelectedSize([]); }}>
                  Clear Filters
                </button>
              </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      )}
    
    </>
  );
}


