import { createContext, useContext, useState } from "react";

// There are multiple ways to manage state efficiently when a deeply nested child component needs to update the state of a parent component several levels above in a React application

export const NestContext = createContext();

const NestProvider = ({ children }) => {
  const [data, setData] = useState("nested data");

  return (
    <NestContext.Provider value={{ data, setData }}>
      {children}
    </NestContext.Provider>
  );
};

export default NestProvider;

export const NextParent = () => <NextChild />;

const NextChild = () => {
    const {data} = useContext(NestContext)
  return <div>
    {data}
  </div>;
};
