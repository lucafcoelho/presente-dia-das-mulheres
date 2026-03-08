/* ===== FOTOS DO CASAL - EDITE AQUI ===== */
/* Substitua essas imagens pelas fotos do casal */
import foto1 from "@/assets/couple1.jpg";
import foto2 from "@/assets/couple2.jpg";
import foto3 from "@/assets/couple3.jpg";
import foto4 from "@/assets/couple4.jpg";
import foto5 from "@/assets/couple5.jpg";
import foto6 from "@/assets/couple6.jpg";

const PHOTOS = [
  { src: foto1, alt: "Nosso momento 1" },
  { src: foto2, alt: "Nosso momento 2" },
  { src: foto3, alt: "Nosso momento 3" },
  { src: foto4, alt: "Nosso momento 4" },
  { src: foto5, alt: "Nosso momento 5" },
  { src: foto6, alt: "Nosso momento 6" },
];
/* ======================================= */

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PHOTOS.map((photo, i) => (
        <div
          key={i}
          className="photo-card fade-slide-in overflow-hidden rounded-2xl border-2 border-primary-foreground/20 shadow-lg"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
