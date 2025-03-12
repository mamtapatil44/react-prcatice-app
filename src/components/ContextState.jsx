import { createContext, useContext, useState } from "react";

const MultipleInstContext = createContext();

const MultipleProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 3, text: "Item 3", completed: false },
    { id: 4, text: "Item 4", completed: false },
  ]);

  const handleToggle = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <MultipleInstContext.Provider value={{ items, handleToggle }}>
      {children}
    </MultipleInstContext.Provider>
  );
};

export default MultipleProvider;

export const MultChild = () => {
  const { items } = useContext(MultipleInstContext);

  return (
    <>
      {items.map((item) => (
        <MultChildTwo key={item.id} item={item} />
      ))}
    </>
  );
};

const MultChildTwo = ({ item }) => {
  const { handleToggle } = useContext(MultipleInstContext);
  return (
    <div>
      <p>
        {item.text} - {item.completed ? "Completed" : "Pending"}
      </p>
      <button className="bg-red-400 p-2" onClick={() => handleToggle(item.id)}>
        Toggle
      </button>
    </div>
  );
};
