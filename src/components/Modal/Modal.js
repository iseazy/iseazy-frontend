import styles from './modal.module.css'

const Modal = ({ children, isOpen }) => {
  return (
    <div className={`${styles.wrapper} ${isOpen ? '' : styles.hide}`}>
      {children}
    </div>
  )
}

export default Modal
