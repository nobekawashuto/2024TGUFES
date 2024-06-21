// components/InstagramEmbed.js

import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    }

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{
        background: '#FFF',
        borderRadius: '10px',
        border: '2px solid #e1e4e8',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '540px',
        padding: '20px',
        width: '100%'
      }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '500px',
            minWidth: '326px',
            padding: '0',
            width: 'calc(100% - 2px)'
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3897f0', fontWeight: 'bold' }}>
            Instagramの投稿を表示
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default InstagramEmbed;
