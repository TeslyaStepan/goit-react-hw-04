import ReactModal from "react-modal";

export default function ImageModal({ image, closeModal }) {
  if (!image) return null;
  return (
    <ReactModal isOpen={!!image} onRequestClose={closeModal}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </ReactModal>
  );
}
