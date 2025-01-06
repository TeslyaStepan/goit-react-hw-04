import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

export default function ImageModal({ image, closeModal }) {
  if (!image) return null;
  return (
    <ReactModal isOpen={!!image} onRequestClose={closeModal}>
      <div className={s.modal}>
        <img
          className={s.modalImage}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </ReactModal>
  );
}
