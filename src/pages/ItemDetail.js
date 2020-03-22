import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState({});

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const res = await data.json();
    setItems(res.data);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map(item => {
        return (
          <h4 key={item.itemId}>
            <Link to={`shop/${item.itemId}`}>{item.item.name}</Link>
          </h4>
        );
      })}
    </div>
  );
}

export default Shop;
