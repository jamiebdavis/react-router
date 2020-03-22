import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [items, setItems] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const res = await data.json();
    console.log(res);
  };

  return (
    <div>
      <h1>ITEM</h1>
    </div>
  );
}

export default ItemDetail;
