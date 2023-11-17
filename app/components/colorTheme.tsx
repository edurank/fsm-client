import styles from './styles/colorTheme.module.css';

function ColorTheme ({color, name, selected}: {color: string, name?: string, selected?: boolean}) {
  
  const isSelected = {
    boxShadow: '0px 0px 2px 4px limegreen'
  }
  
  return (
    <div style={selected ? isSelected : {}} className={styles.container}>
      <div style={{backgroundColor: color}}className={styles.colorContainer}>

      </div>
    </div>
  )
}

ColorTheme.defaultProps = {
  selected: false
}

export default ColorTheme;