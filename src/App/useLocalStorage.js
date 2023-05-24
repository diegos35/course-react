import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        console.log("useee");
        const localStorageItem = localStorage.getItem(itemName);

        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  /* state initial */

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

//export nombrado
export { useLocalStorage };
