import React from 'react'

export default function CategoryInput(props) {
  const { currentCategories, categoryQuery, category, index } = props

  function handleChange(event) {
    if (event.target.checked) {
      categoryQuery([...currentCategories, event.target.value])
    } else {
      categoryQuery((prevState) =>
        prevState.filter((prevItem) => prevItem !== event.target.value)
      )
    }
  }

  function checkedInput(value) {
    return currentCategories.includes(value)
  }

  return (
    <>
      <div key={index} className='multi-select'>
        <label>{category.label}</label>
        <input 
          key={index} 
          type="checkbox" 
          name="category" 
          checked={checkedInput(category.value)}
          value={category.value}
          className="multi-select-input"
          onChange={handleChange} />
      </div>
    </>
  )
}