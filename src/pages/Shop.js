import React, { useState, useEffect } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const res = await data.json();
    console.log(res);
  };

  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
