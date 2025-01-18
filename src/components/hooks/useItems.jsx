import React, { useEffect, useState } from 'react';

const useItems = () => {
      const [items, setItems] = useState();
    
      useEffect(() => {
        fetch("http://localhost:5000/items")
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((error) => console.error(error));
      }, []);

    return items
};

export default useItems;