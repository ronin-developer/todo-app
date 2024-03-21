import { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import ToggleMode from './components/ToggleMode';



function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <h1 className=' bg-white dark:bg-slate-500 text-center text-2xl my3'>Todo App</h1>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )  
}

export default App