import React from 'react';

const FilterMenu = ({ onFilter }) => {
  // Example filter criteria
  const handlePriceFilter = (event) => {
    const selectedPrice = event.target.value;
    onFilter({ price: selectedPrice });
  };

  return (
    <div className="filter-menu-container">
      <h3>Filter Products</h3>
      <label>
        Max Price:
        <input type="number" onChange={handlePriceFilter} />
      </label>
      {/* Add more filters as needed */}
    </div>
  );
};

export default FilterMenu;
