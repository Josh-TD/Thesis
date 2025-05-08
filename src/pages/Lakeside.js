import React, { useEffect, useRef } from 'react';
import './Lakeside.css';
import BackButton from './BackButton'; // Adjust path if needed

const Lakeside = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;
    script.onload = () => {
      const iframe = iframeRef.current;
      const client = new window.Sketchfab(iframe);

      client.init('ccc22ba1a2af4e40b467ce1e21215caa', {
        success: function(api) {
          api.start();
          api.addEventListener('viewerready', function() {
            console.log('Sketchfab viewer ready');
          });
        },
        error: function() {
          console.error('Sketchfab API error');
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="lakeside-container">
      <BackButton />
      <audio autoPlay loop>
      <source src={`${process.env.PUBLIC_URL}/audio/Beach.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <iframe
        ref={iframeRef}
        title="Lakeside Sketchfab Model"
        className="sketchfab-embed"
        allow="autoplay; fullscreen;"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default Lakeside;
