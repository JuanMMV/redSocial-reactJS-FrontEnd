import Modal from 'react-modal'
import '../../styles/componentsStyles/modal.css'


//Modal.setAppElement('#__next')

export function ModalComponent({ isVisible, setIsVisible, children }) {

  //const closeModal = () => setIsVisible(false);

  return (
    <>
      <Modal
        isOpen={isVisible}
        className="modal-container"
        appElement={document.getElementById('root') || undefined}
        style={{
          overlay: {
            backgroundColor: 'transparent'
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