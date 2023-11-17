import { useState, useEffect } from 'react';
import styles from './styles/settings.module.css';
import { IoCloseSharp } from "react-icons/io5";
/* 
  ; Theme Switcher
  ; Linked Accounts - YT / Twitter(X) / GitHub links / Linked In
*/

/* FIX SETTINGS SHOW */

function Settings({isEnabled}: {isEnabled: boolean;}) {
  const [showx, setShow] = useState<boolean>();

  useEffect(() => {
    setShow(isEnabled);
  }, []);

  return (
    <div style={{display: showx ? "block": "none"}} className={styles.container}>
      <div onClick={() => {setShow(false)}} className={styles.headerContainer}>
        <IoCloseSharp />
      </div>
      <div className={styles.contentContainer}></div>
    </div>
  )
}

export default Settings;