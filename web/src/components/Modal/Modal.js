import { useModal } from 'src/context/ModalContext'

import { usePageLoadingContext } from '@redwoodjs/router'
import PageLoader from 'src/components/PageLoader/PageLoader'

const Modal = () => {
  const { child, isOpen, close } = useModal()
  const { loading } = usePageLoadingContext

  const onClick = (e) => {
    if (e.target.id === 'modal-outside') {
      close()
    }
  }

  if (isOpen) {
    //modal context IS open
    return (
      <div
        id="modal-outside"
        onClick={onClick}
        className="fixed w-full h-full bg-gray-900 bg-opacity-50 z-10 flex justify-center items-center"
      >
        <div
          id="modal-inside"
          className="w-5/6 bg-white rounded-md p-4 pt-6 relative max-w-screen-md"
        >
          {loading && <PageLoader />}
          <div
            onClick={() => {
              close()
            }}
            className="absolute top-4 right-4 w-8 h-8 bg-purple-500 rounded-full flex justify-center items-center shadow-md hover:bg-purple-700"
          >
            <span className="text-white font-bold cursor-default">X</span>
          </div>
          {child}
        </div>
      </div>
    )
  } else {
    // modal context is NOT Open
    return null
  }
}

export default Modal
