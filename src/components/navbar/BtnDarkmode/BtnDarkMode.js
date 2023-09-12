import { useState, useEffect, useRef } from "react";
import sun from "./../../../img/icons/sun.svg";
import moon from "./../../../img/icons/moon.svg";
import "./style.css";

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useState('light');
    const BtnRef = useRef(null)

useEffect(() => {
    if (darkMode === 'dark') {
         document.body.classList.add('dark')
         BtnRef.current.classList.add('dark-mode-btn--active')
    }else {
        document.body.classList.remove('dark');
        BtnRef.current.classList.remove('dark-mode-btn--active')
    }
}, [darkMode]);

    const toggleDarkMode= () => {
        console.log('toggleDarkMode Fired!')
        setDarkMode((currenValue) => {
            return currenValue ===  'light' ? 'dark' : 'light';
        }
        )
    }

    return (
    <button ref={BtnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
    );
}
 
export default BtnDarkMode;