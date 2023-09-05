import styles from './button.module.css'

interface IProps {
  children: React.ReactNode
  onClick: () => void
}

function Button({ children, onClick }: IProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
