import React from 'react'
import { CiSun } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'

function ToggleMode({ darkMode, setDarkMode}){

  function handleMode(){
    setDarkMode(!darkMode);
  }

  return (
    <div onClick={handleMode} className='flex items-center justify-center my-3 cursor-pointer'>
      {darkMode ? <MdDarkMode size={42} /> : <CiSun size={42}/>}
    </div>
  );
}

export default ToggleMode