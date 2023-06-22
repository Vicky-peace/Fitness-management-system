import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.css';

const Gallery = () => {
  const galleryLength = 18;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = [];
      for (let i = 1; i <= galleryLength; i++) {
        imagePromises.push(import(`../../images/gallery${i}.jpg`));
      }

      try {
        const resolvedImages = await Promise.all(imagePromises);
        const imageUrls = resolvedImages.map((image) => image.default);
        setImages(imageUrls);
      } catch (error) {
        console.error('Failed to load gallery images:', error);
      }
    };

    fetchImages();
  }, [galleryLength]);

  return (
    <>
     <Header title="Our Gallery" image={HeaderImage}>
  Discover the Beauty of Our Captivating Gallery Collection
</Header>

      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
