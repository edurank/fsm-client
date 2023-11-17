import { useState } from 'react';
import styles from './settings.module.css';
import { IoCloseSharp } from "react-icons/io5";
/* 
  ; Theme Switcher
  ; Linked Accounts - YT / Twitter(X) / GitHub links / Linked In
*/


function Settings() {
  const  [show, setShow] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <IoCloseSharp />
      </div>
      <div className={styles.contentContainer}></div>
    </div>
  )
}

export default Settings;