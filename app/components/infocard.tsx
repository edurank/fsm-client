import styles from './infocard.module.css';

/* card severity:  warning, error, success */

function InfoCard({text, severity}: {text: string, severity: string}) {

  return(
    <div className={severity === 'warning' ? styles.warning : severity === "error" ? styles.error : styles.success}>
      <div className="ml-5 mr-5">
        { severity === 'warning' ? "!" : severity === 'error' ? "X" : "=)" }
      </div>
      <div>{text}</div>
    </div>
  )
}

export default InfoCard;