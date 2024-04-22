"use client"
import ContactForm from "@/app/components/contact-form";
import React, { useState } from "react";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Videos = () => {
  // Define the state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('Hair Transplant');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define the categories and the related images
  const categories = {
    "Hair Transplant": ["h1.jpg", "h2.jpg", "h3.jpg", "h4.jpg"],
    PRP: ["prp1.jpg", "prp2.jpg"],
    Liposuction: ["liposuction1.jpg", "liposuction2.jpg"],
    "Thigh Liposuction": ["thigh_liposuction1.jpg", "thigh_liposuction2.jpg"],
    "Tummy Tuck": ["tummy_tuck1.jpg", "tummy_tuck2.jpg"],
    Gynecomastia: ["gynecomastia1.jpg", "gynecomastia2.jpg"],
    "Breast Augmentation": [
      "breast_augmentation1.jpg",
      "breast_augmentation2.jpg",
    ],
    "Breast Reduction": ["breast_reduction1.jpg", "breast_reduction2.jpg"],
    "Arm Lift": ["arm_lift1.jpg", "arm_lift2.jpg"],
    Rhinoplasty: ["rhinoplasty1.jpg", "rhinoplasty2.jpg"],
  };

 // Handle the click event for category buttons
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

   // Handle the click event for gallery images
   const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
};

  return (
    <>
           <section>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <div className="row mx-lg-3 text-center d-flex align-items-center justify-content-center">
                
              {/* Map through the categories and render buttons */}
              {Object.keys(categories).map((category) => (
                <div
                  key={category}
                  className="col-md-12 gallery-btn col-5"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
              ))}
               </div> 
            </div>
            <div className="col-md-9">
              {/* Display images based on the selected category */}
              {selectedCategory && (
                <div className="image-gallery">
                  {categories[selectedCategory].map((image, index) => (
                    <img
                      key={index}
                      src={`/${image}`}
                      alt={selectedCategory}
                      className="gallery-image"
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
                </div>
              )}

               {/* Render the lightbox when lightboxOpen is true */}
               {lightboxOpen && (
                            <Lightbox
                                open={lightboxOpen}
                                close={() => setLightboxOpen(false)}
                                slides={categories[selectedCategory].map((image) => ({ src: image }))}
                                index={currentImageIndex}
                                on={{
                                    movePrev: () => setCurrentImageIndex((currentImageIndex - 1 + categories[selectedCategory].length) % categories[selectedCategory].length),
                                    moveNext: () => setCurrentImageIndex((currentImageIndex + 1) % categories[selectedCategory].length),
                                }}
                            />
                        )}

            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Videos;
