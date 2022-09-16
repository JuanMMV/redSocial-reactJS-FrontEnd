import { useEffect } from 'react';
import Modal from 'react-modal'
import '../../../styles/componentsStyles/global/modal.css'


//Modal.setAppElement('#__next')

export function ModalComponent({ isVisible, setIsVisible, children }) {

  //const closeModal = () => setIsVisible(false);
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    }
  }, [isVisible])

  return (
    <>
      <Modal
        isOpen={isVisible}
        className="modal-container"
        appElement={document.getElementById('root') || undefined}
        style={{
          overlay: {
            backgroundColor: 'transparent',
            zIndex:999,
          }
        }}
      >
        <div className="modal">
          {children}
        </div>
      </Modal>
    </>
  );
}