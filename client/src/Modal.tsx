import type { ReactNode } from 'react'

interface ModalProps {
  show: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ show, onClose, children }: ModalProps) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={onClose}>close</button>
      </section>
    </div>
  )
}
