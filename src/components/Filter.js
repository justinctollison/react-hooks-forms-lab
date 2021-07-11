import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search}) {
  // const [selectedName, setSelectedName] = useState("")

  // function onSearchChange(event){
  //   setSelectedName(event.target.value)
  // }

  return (
    <div className="Filter">
      <input type="text" name="search" onChange={onSearchChange} placeholder="Search..." value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
