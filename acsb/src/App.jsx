import { useState } from 'react'
import './App.css'
import Data from "../resources/countryData.json"
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar data={Data}/>
    </>
  )
}

export default App
