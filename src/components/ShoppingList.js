import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ShoppingList">
      <Filter search={search} onSearchChange={setSearch} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} <span className="category">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

