import React, { useState } from 'react'

// Components
import CategoryInput from "./category-input"

export default function CategoryInputContainer(props) {
  const { currentCategories, categoryQuery } = props

  const [categories, setCategories] = useState([
    { label: "Australia", value: "Australia" },
    {label: "New zealand", value: "New zealand"},
    {label: "United States", value: "United States"}
    
  ])

  return (
    <div className='category-container'>
      <div className='category-container-header'>
        Filter By Country
      </div>

      {categories.map((category, index) => (
        <CategoryInput 
          key={index}
          currentCategories={currentCategories}
          categoryQuery={categoryQuery}
          category={category}
          index={index}
        />
      ))}
    </div>
  )
}