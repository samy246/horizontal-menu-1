import React,{useState} from "react";

import CategoryFilter from "../src/components/category-filter"
import "../src/components/Stylesheet.css"

function App() {
  const [currentCategories, setCategoryQuery] = useState([])
  const [multiSelectExpanded, setMultiSelectExpanded] = useState(false);
  return (
    <div className="App">
     
     <CategoryFilter 
            multiSelectExpanded={multiSelectExpanded}
            setMultiSelectExpanded={setMultiSelectExpanded}
            currentCategories={currentCategories} 
            setCategoryQuery={setCategoryQuery}
          />
    </div>
  );
}

export default App;
