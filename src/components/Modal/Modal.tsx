import styles from './modal.module.css'

interface IProps {
  children: React.ReactNode
  isOpen: boolean
}

const Modal = ({ children, isOpen }: IProps) => {
  return (
    <div className={`${styles.wrapper} ${isOpen ? '' : styles.hide}`}>
      {children}
    </div>
  )
}

export default Modal
