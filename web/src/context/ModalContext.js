import { useState, useContext, createContext } from 'react'

const ModalContext = createContext(null)
ModalContext.displayName = 'ModalContext'

const ModalProvider = ({ children }) => {
  const [childComponent, setChildComponent] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        child: childComponent,
        setChild: (component) => {
          setChildComponent(component)
        },
        isOpen: isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        openModal: (component) => {
          setChildComponent(component)
          setIsOpen(true)
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal }
export default ModalContext
