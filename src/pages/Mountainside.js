import React, { useEffect, useRef } from 'react';
import './Lakeside.css';
import BackButton from './BackButton';

const Mountainside = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;
    script.onload = () => {
      const iframe = iframeRef.current;
      const client = new window.Sketchfab(iframe);

      client.init('07dfe01fb78c441db081646ff4c1d9e0', {
        success: function(api) {
          api.start();
          api.addEventListener('viewerready', function() {
            console.log('Sketchfab Mountainside viewer ready');
          });
        },
        error: function() {
          console.error('Sketchfab API error (Mountainside)');
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="lakeside-container">
      <BackButton />
      <audio autoPlay loop>
      <source src={`${process.env.PUBLIC_URL}/audio/Mountainside.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <iframe
        ref={iframeRef}
        title="Mountainside Sketchfab Model"
        className="sketchfab-embed"
        allow="autoplay; fullscreen; vr"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default Mountainside;
