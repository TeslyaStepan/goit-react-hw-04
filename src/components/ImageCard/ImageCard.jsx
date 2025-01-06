export default function ImageCard({ src, alt, onClick }) {
  return (
    <li>
      <div onClick={onClick}>
        <img src={src} alt={alt} />
      </div>
    </li>
  );
}
