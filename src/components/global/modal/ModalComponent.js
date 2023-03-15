import { useEffect } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import "../../../styles/componentsStyles/global/modal.css";

//Modal.setAppElement('#__next')

export function ModalComponent({ children }) {
  const isVisible = useSelector((state) => state.modalState.isVisible);
  //const closeModal = () => setIsVisible(false);
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  return (
    <>
      <Modal
        isOpen={isVisible}
        className="modal-container"
        appElement={document.getElementById("root") || undefined}
        style={{
          overlay: {
            backgroundColor: "transparent",
            zIndex: 999,
          },
        }}
      >
        <div className="modal">{children}</div>
      </Modal>
    </>
  );
}
