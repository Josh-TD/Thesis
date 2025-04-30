import React, { useEffect, useRef } from 'react';
import './Lakeside.css'; // Reuse same container and iframe styles
import BackButton from './BackButton';

const DeathValley = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;
    script.onload = () => {
      const iframe = iframeRef.current;
      const client = new window.Sketchfab(iframe);

      client.init('9f57bca156e14cff9e4e316a9ccc3e0d', {
        success: function(api) {
          api.start();
          api.addEventListener('viewerready', function() {
            console.log('Sketchfab Death Valley viewer ready');
          });
        },
        error: function() {
          console.error('Sketchfab API error (Death Valley)');
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="lakeside-container">
      <BackButton />
      <audio autoPlay loop>
        <source src="/audio/DeathValley.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <iframe
        ref={iframeRef}
        title="Death Valley Sketchfab Model"
        className="sketchfab-embed"
        allow="autoplay; fullscreen; vr"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default DeathValley;
