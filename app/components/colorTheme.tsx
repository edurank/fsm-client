import styles from './styles/colorTheme.module.css';
import { GiConfirmed } from "react-icons/gi";

function ColorTheme ({color, name, selected}: {color: string, name?: string, selected?: boolean}) {
  
  const isSelected = {
    boxShadow: 'inset 22px 22px 22px 2px limegreen'
  }
  
  return (<div>
    <div style={selected ? isSelected : {}} className={styles.container}>
      <div style={{backgroundColor: color}}className={styles.colorContainer}>

      </div>
    </div>
      {selected && <div>
        <GiConfirmed className={styles.confirmedIcon} color="limegreen" size={25} />
        </div>
        }
        </div>
  )
}

ColorTheme.defaultProps = {
  selected: false
}

export default ColorTheme;