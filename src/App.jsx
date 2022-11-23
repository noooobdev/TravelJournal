import React from "react";
import Navbar from "./Navbar";
import Places from "./Places";
import Data from "./Data";
import "./App.css";

function App() {
  const Card = Data.map((item) => {
    return <Places key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      {Card}
    </div>
  );
}

export default App;
