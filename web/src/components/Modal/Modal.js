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
        className="fixed w-full h-full bg-gray-900 bg-opacity-70 z-10 flex justify-center items-center"
      >
        <div
          id="modal-inside"
          className="w-5/6 bg-white rounded-md relative max-w-screen-md"
        >
          {loading && <PageLoader />}
          <div
            onClick={() => {
              close()
            }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full flex justify-center items-center shadow-lg hover:bg-red-500"
          >
            <span className="text-white font-bold cursor-default">X</span>
          </div>
          <div className='p-4'>
          {child}
          </div>
        </div>
      </div>
    )
  } else {
    // modal context is NOT Open
    return null
  }
}

export default Modal
