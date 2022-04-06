

export default function OTPInput(props) {
  return (
    <input
      // placeholder="•"
      maxLength="1"
      value={otp.slice(0, 1)}
      className={styles["singleTextField"]}
      {...props}
    />
  )
}
