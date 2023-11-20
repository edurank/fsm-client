function LoadingIcon({size, color}: {size?: number, color?: string}) {

  const iconStyle = {
    width: size ? size.toString() + "px" : "50px",
    height: size ? size.toString() + "px" : "50px",
  }

  return (
    <div style={iconStyle}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="50" cy="50" r="40" stroke="#3498db" strokeWidth="4" fill="none" />
    </svg>
    </div>
  )
}

export default LoadingIcon;