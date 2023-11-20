import styles from './styles/loadingIcon.module.css';

function LoadingIcon({size, color}: {size?: number, color?: string}) {

  const iconStyle = {
    width: size ? size.toString() + "px" : "50px",
    height: size ? size.toString() + "px" : "50px",
  }

  return (
    <div style={iconStyle}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default LoadingIcon;