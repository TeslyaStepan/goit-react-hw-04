import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ gallery, onClick }) {
  return (
    <ul>
      {gallery.map((image) => (
        <ImageCard
          onClick={() => onClick(image)}
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
        />
      ))}
    </ul>
  );
}
