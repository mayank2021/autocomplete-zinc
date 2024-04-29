import { useState } from "react";
import AutoComplete from "./components/AutoComplete";
import { words } from "./data";

const App = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <AutoComplete data={words} query={query} onChange={handleInputChange} />
    </div>
  );
};

export default App;
