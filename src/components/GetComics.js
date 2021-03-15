import React, { useState, useEffect } from 'react';

export const GetComics = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState(null);

  useEffect( () => {
    async function fetchData() {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setItems(item);
      setIsLoaded(false);
    }
    fetchData();            
  }, [])

  return (
    <div>
    {isLoaded ? (
    <div>Cargando... </div>
    ) : (
    <div>
      <h1>{items.name.title}, {items.name.first} {items.name.last}</h1>
      <img src={items.picture.large} className="App-logo" alt="logo" />      
    </div>
    )}
    </div>
  );
}