
'use client'
import styles from "./styles.module.css"
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function ToggleTheme() {
    const [activeTheme, setActiveTheme] = useState("light")

    const handleThemeChange = () => {
        setActiveTheme(prev => prev === "light" ? "dark" : "light")
    }
    return (
        <div >
            <button onClick={handleThemeChange} className={styles.toggle}>
                <MdSunny className={`${activeTheme === 'light' ? styles.active : null} ${styles.icon}`} />
                <FaMoon className={`${activeTheme === 'dark' ? styles.active : null} ${styles.icon}`} />
            </button>
        </div>
    );
}