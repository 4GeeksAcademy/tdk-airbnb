"use client";

interface PhotoGalleryProps {
  images: string[];
  index: number;
  onChange: (index: number) => void;
}

const PhotoGallery = ({ images, index, onChange }: PhotoGalleryProps) => {
  const previous = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  return (
    <section className="space-y-3">
      <div className="relative overflow-hidden rounded-3xl">
        <img src={images[index]} alt="Room photo" className="h-64 w-full object-cover" />
        <div className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1 text-xs text-white">
          {index + 1}/{images.length}
        </div>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={previous} className="rounded-full bg-white px-4 py-2 text-sm shadow">
          Previous
        </button>
        <button type="button" onClick={next} className="rounded-full bg-white px-4 py-2 text-sm shadow">
          Next
        </button>
      </div>
    </section>
  );
};

export default PhotoGallery;
