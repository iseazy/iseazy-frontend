import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import style from './Modal.module.css'

type Props = {
  children: React.ReactNode
}

export function Modal({ children }: Props) {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!children) return
    setContainer(document.getElementById('modal'))
    document.body.classList.add(style.bodyOverflow)
    return () => {
      document.body.classList.remove(style.bodyOverflow)
    }
  }, [children, setContainer])

  if (!children || !container) return null

  return createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>{children}</div>
    </div>,
    container
  )
}
