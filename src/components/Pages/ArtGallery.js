import React from 'react';
import QuickGallery from '../Basic/QuickGallery';

const ArtGallery = () => {
  return (
    <div className="gallery-container">
      <h1>
        Art Gallery
      </h1>
      <div>
        <QuickGallery url={'cdn/stories/'} 
          params={{
            version: 'published',
            cv: Date.now(),
            per_page: 100,
            starts_with: 'artwork/',
            sort_by: 'content.order:asc,content.price:desc'
          }} />
      </div>
      
    </div>
  );
};
  
export default ArtGallery;