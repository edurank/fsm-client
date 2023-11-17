import { useState } from 'react';
import styles from './styles/infoPopup.module.css';

function InfoPopup({message}: {message: string}) {

  const [show, setShow] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div>
        <span>{message}</span>
      </div>
      <div onClick={() => {setShow(false)}}>
        Got it!
      </div>
    </div>
  )
}

export default InfoPopup;