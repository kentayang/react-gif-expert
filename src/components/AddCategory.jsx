import { useState } from "react"

const AddCategory = ({handleAddCategory}) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e)=>{
    setInputValue(e.target.value)
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(inputValue.trim().length <= 1) return;
    //setCategories(categories => [inputValue, ...categories])
    handleAddCategory(inputValue.trim())
    setInputValue("")
  }
  
    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

export default AddCategory