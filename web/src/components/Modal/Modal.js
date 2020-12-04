import { useContext } from 'react'
import ModalContext from 'src/context/ModalContext'

const Modal = () => {
  const modal = useContext(ModalContext)

  const onClick = (e) => {
    if (e.target.id === 'modal-outside') {
      modal.close()
    }
  }

  if (modal.isOpen) {
    //modal context IS open
    return (
      <div
        id="modal-outside"
        onClick={onClick}
        className="fixed w-full h-full bg-gray-900 bg-opacity-50 z-10 flex justify-center items-center"
      >
        <div
          id="modal-inside"
          className="w-5/6 h-5/6 bg-white rounded-md p-4 relative"
        >
          <div
            onClick={onClick}
            className="absolute top-4 right-4 w-8 h-8 bg-purple-500 rounded-full flex justify-center items-center shadow-md hover:bg-purple-700"
          >
            <span className="text-white font-bold">X</span>
          </div>
          {modal.child}
        </div>
      </div>
    )
  } else {
    // modal context is NOT Open
    return null
  }
}

export default Modal
