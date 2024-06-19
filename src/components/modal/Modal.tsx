import { SetStateAction } from 'react'
import './modal.css'
import { AnimatePresence, m } from 'framer-motion'

export default function Modal({ isModalOpen, setIsModalOpen } : { isModalOpen: boolean, setIsModalOpen: React.Dispatch<SetStateAction<boolean>> }) {

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <m.div
          className='modal-background'
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='modal-content'>
            <button onClick={closeModal}>X</button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
