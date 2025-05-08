import React, { useEffect, useRef } from 'react';
import './Lakeside.css'; // Reuse styles
import BackButton from './BackButton';

const Mystical = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;
    script.onload = () => {
      const iframe = iframeRef.current;
      const client = new window.Sketchfab(iframe);

      client.init('e6fb246697b346e1916d461330ec156e', {
        success: function(api) {
          api.start();
          api.addEventListener('viewerready', function() {
            console.log('Sketchfab Mystical viewer ready');
          });
        },
        error: function() {
          console.error('Sketchfab API error (Mystical)');
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="lakeside-container">
      <BackButton />
      <audio autoPlay loop>
      <source src={`${process.env.PUBLIC_URL}/audio/Mystical.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <iframe
        ref={iframeRef}
        title="Mystical Sketchfab Model"
        className="sketchfab-embed"
        allow="autoplay; fullscreen; vr"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default Mystical;
