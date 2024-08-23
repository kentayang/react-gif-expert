import {useState} from 'react' 
import {AddCategory, GifGrid} from './components'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Marvel"])

    const handleAddCategory = (newCategory)=>{
        if (categories.includes(newCategory))return
        setCategories([newCategory,...categories])
    }
    
    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            handleAddCategory={handleAddCategory}
        />

        { categories.map( category => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
            )
        ) }
    </>
  )
}

export default GifExpertApp