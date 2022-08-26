import Modal from 'react-modal'


//Modal.setAppElement('#__next')

export function ModalComponent({ isVisible, setIsVisible, children }) {

  //const closeModal = () => setIsVisible(false);

  return (
    <>
      <Modal
        isOpen={isVisible}
        className="modal-container"
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