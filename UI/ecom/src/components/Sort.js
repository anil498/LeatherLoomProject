    import React, { useState } from 'react';
    import './Sort.css'; // Optional: Add custom CSS

    export default function SortComponent() {
    // State to manage the selected sort option
    const [selectedSort, setSelectedSort] = useState('Recommended');

    // Function to handle the dropdown change
    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedSort(selectedOption);
    
    };

    return (
        <div className="sort-component">
        <label htmlFor="sortOptions" className="sort-label">Sort By:</label>
        <select
            id="sortOptions"
            className="sort-dropdown"
            value={selectedSort}
            onChange={handleSortChange}
        >
            <option value="Recommended">Recommended</option>
            <option value="Popular">Popular</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Discount">Discount</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
        </div>
    );
    }


