import { useState, useEffect } from 'react';
import styles from './styles/settings.module.css';
import { IoCloseSharp } from "react-icons/io5";
/* 
  ; Theme Switcher
  ; Linked Accounts - YT / Twitter(X) / GitHub links / Linked In
*/

/* FIX SETTINGS SHOW */

function Settings({onClose}: {onClose: () => void}) {

  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <div onClick={onClose} className={styles.headerContainer}>
          <div>
            <span>Settings</span>
          </div>
          <div className="cursor-pointer">
            <IoCloseSharp size={25} />
          </div>
        </div>
        <div className={styles.contentContainer}></div>
      </div>
    </div>
  )
}

export default Settings;