
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-olaql-white via-olaql-sand to-olaql-lilac/30 opacity-50"></div>
      
      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-olaql-lilac/20 rounded-full blur-3xl animate-float opacity-70" 
           style={{ animationDelay: '0s' }}></div>
      
      <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-olaql-blue/20 rounded-full blur-3xl animate-float opacity-60"
           style={{ animationDelay: '1s' }}></div>
           
      <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-olaql-lilac/10 rounded-full blur-3xl animate-float opacity-50"
           style={{ animationDelay: '2s' }}></div>
           
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
};

export default BackgroundAnimation;
