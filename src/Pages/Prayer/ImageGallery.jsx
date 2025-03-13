import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ title, images }) => {
    return (
        <div className="image-gallery">
            <h2>{title}</h2>
            <div className="prayers-grid">
                {images.map((image, index) => (
                    <div key={index} className="prayer-item">
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            loading="lazy"  // ✅ إضافة Lazy Loading 
                            width="300"     // ✅ تحديد عرض للصورة 
                            height="200"    // ✅ تحديد ارتفاع للصورة
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
